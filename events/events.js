//The code for our Event game
class EventComponent extends Component {
  start() {
  }
  update(ctx) {

    //First adjust the camera for debugging
    // Camera.main.transform.x = Math.sin(Time.time)*10;
    // Camera.main.transform.y = Math.sin(Time.time)*10;
    
    //From the draw function of the engine
    let browserAspectRatio = ctx.canvas.width / ctx.canvas.height;
    let offsetX = 0;
    let offsetY = 0;
    let browserWidth = ctx.canvas.width
    if (EngineGlobals.requestedAspectRatio > browserAspectRatio) {
        let desiredHeight = ctx.canvas.width / EngineGlobals.requestedAspectRatio;
        let amount = (ctx.canvas.height - ctx.desiredHeight) / 2;
        offsetY = amount;
    }
    else {
        let desiredWidth = canvas.height * EngineGlobals.requestedAspectRatio
        let amount = (ctx.canvas.width - ctx.desiredWidth) / 2;
        offsetX = amount
        browserWidth -= 2 * amount
    }

    ctx.save();
    let logicalScaling = browserWidth / EngineGlobals.logicalWidth
    ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2)
    ctx.scale(logicalScaling, logicalScaling)

    ctx.translate(-Camera.main.transform.x, -Camera.main.transform.y)

    let x = Input.mouseX;
    let y = Input.mouseY;
    x -= ctx.canvas.width/2;
    y -= ctx.canvas.height/2;
    x += Camera.main.transform.x;
    y += Camera.main.transform.y;
    x /= logicalScaling;
    y /= logicalScaling;
    

    this.transform.x = x;
    this.transform.y = y;
    console.log(Input.mouseX + ", " + Input.mouseY + "-> " + x + ", " + y)

    ctx.restore();
  }
} 

class EventScene extends Scene {
  start() {
    
    this.addGameObject(
      new GameObject("StaticRectangle")
      .addComponent(new Rectangle("brown"))
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