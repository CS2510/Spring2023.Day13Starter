//The code for our Event game

class GUIMouseFollowerComponent extends Component {
  update(ctx) {
    //From the draw function of the engine
    let browserAspectRatio = ctx.canvas.width / ctx.canvas.height;
    let browserWidth = ctx.canvas.width
    if (EngineGlobals.requestedAspectRatio > browserAspectRatio) {


    }
    else {
      let desiredWidth = ctx.canvas.height * EngineGlobals.requestedAspectRatio
      let amount = (ctx.canvas.width - desiredWidth) / 2;
      browserWidth -= 2 * amount
    }

    let zeroX = 0;
    let zeroY = 0;
    if (EngineGlobals.requestedAspectRatio > browserAspectRatio) {
        let desiredHeight = ctx.canvas.width / EngineGlobals.requestedAspectRatio;
        let amount = (ctx.canvas.height - desiredHeight) / 2;
        zeroY = amount;
    }
    else {
        let desiredWidth = ctx.canvas.height * EngineGlobals.requestedAspectRatio
        let amount = (ctx.canvas.width - desiredWidth) / 2;
        zeroX = amount;
    }

    let logicalScaling = browserWidth / EngineGlobals.logicalWidth

    let x = Input.mouseX;
    let y = Input.mouseY;
    x -= zeroX;
    y -= zeroY;
    // x -= ctx.canvas.width / 2;
    // y -= ctx.canvas.height / 2;
    x /= logicalScaling;
    y /= logicalScaling;
    // x += Camera.main.transform.x;
    // y += Camera.main.transform.y;


    this.transform.x = x;
    this.transform.y = y;
    console.log(Input.mouseX + ", " + Input.mouseY + "-> " + x + ", " + y)
  }
}
class EventComponent extends Component {
  start() {
  }
  update(ctx) {

    //First adjust the camera for debugging
    Camera.main.transform.x = Math.sin(Time.time) * 10;
    Camera.main.transform.y = Math.sin(Time.time) * 10;

    //From the draw function of the engine
    let browserAspectRatio = ctx.canvas.width / ctx.canvas.height;
    let browserWidth = ctx.canvas.width
    if (EngineGlobals.requestedAspectRatio > browserAspectRatio) {


    }
    else {
      let desiredWidth = ctx.canvas.height * EngineGlobals.requestedAspectRatio
      let amount = (ctx.canvas.width - desiredWidth) / 2;
      browserWidth -= 2 * amount
    }

    let logicalScaling = browserWidth / EngineGlobals.logicalWidth

    let x = Input.mouseX;
    let y = Input.mouseY;
    x -= ctx.canvas.width / 2;
    y -= ctx.canvas.height / 2;
    x /= logicalScaling;
    y /= logicalScaling;
    x += Camera.main.transform.x;
    y += Camera.main.transform.y;


    this.transform.x = x;
    this.transform.y = y;
    // console.log(Input.mouseX + ", " + Input.mouseY + "-> " + x + ", " + y)
  }
}

class EventScene extends Scene {
  start() {
    this.addGameObject(
      new GameObject("GUIRectangle")
        .addComponent(new GUIRectangle("pink")),
      Vector2.zero,
      new Vector2(2, 2),
      0,
      1
    )
    this.addGameObject(
      new GameObject("GUIRectangle")
        .addComponent(new GUIRectangle("green")),
      Vector2.zero,
      new Vector2(4, 4),
      0,
      0
    )
    this.addGameObject(
      new GameObject("GUIRectangle")
        .addComponent(new GUIMouseFollowerComponent())
        .addComponent(new GUIRectangle("transparent", "blue", .5)),
      Vector2.zero,
      new Vector2(4, 4),
      0,
      0
    )

    this.addGameObject(
      new GameObject("StaticRectangle")
        .addComponent(new Rectangle("brown")),
      Vector2.zero,
      Vector2.one,
      0,
      1
    )

    this.addGameObject(
      new GameObject("StaticRectangle")
        .addComponent(new Rectangle("magenta")),
      Vector2.zero,
      new Vector2(2, 2),
      0,
      0
    )

    this.addGameObject(
      new GameObject("EventGameObject")
        .addComponent(new EventComponent())
        .addComponent(new Rectangle("blue"))
    )
  }
}

//export the main scene so the .html file can run the game.
export default new EventScene();