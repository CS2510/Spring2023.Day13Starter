//The code for our Event game
class EventComponent extends Component {
  start() {
  }
  update() {
    console.log(Input.mouseX);
    console.log(Input.mouseY);
    this.transform.x = Input.mouseX;
    this.transform.y = Input.mouseY;

  }
  draw(ctx) {
    ctx.fillStyle = `rgb(0, 0,255)`
    ctx.fillRect(-5+this.transform.x, -5+this.transform.y, 10, 10)
  }
} 

class EventScene extends Scene {
  start() {
    this.addGameObject(
      new GameObject("EventGameObject")
        .addComponent(new EventComponent())
    )
  }
}

//export the main scene so the .html file can run the game.
export default new EventScene();