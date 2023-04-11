//The code for our Event game
class EventComponent extends Component {
  start() {
  }
  update() {
  }
  draw(ctx) {
    ctx.fillStyle = `rgb(0, 0,255)`
    ctx.fillRect(-5, -5, 10, 10)
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