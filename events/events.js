//The code for our Event game
class EventComponent extends Component {
  start() {
  }
  update(ctx) {

    //First adjust the camera for debugging
    Camera.main.transform.x = Math.sin(Time.time)*10;
    Camera.main.transform.y = Math.sin(Time.time)*10;
    
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
    x -= ctx.canvas.width/2;
    y -= ctx.canvas.height/2;
    x /= logicalScaling;
    y /= logicalScaling;
    x += Camera.main.transform.x;
    y += Camera.main.transform.y;
    

    this.transform.x = x;
    this.transform.y = y;
    console.log(Input.mouseX + ", " + Input.mouseY + "-> " + x + ", " + y)
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