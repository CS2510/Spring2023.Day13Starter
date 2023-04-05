//The code for our example game
class PlayerComponent extends Component {
  name = "PlayerComponent"
  speed = 20
  start() {
  }
  update() {
    if (keysDown["ArrowRight"]) {
      this.transform.x += this.speed * Time.deltaTime
    }
    if (keysDown["ArrowLeft"]) {
      this.transform.x -= this.speed * Time.deltaTime
    }
  }

}

class ControllerComponent extends Component {
  start() {
    Camera.main.fillStyle = "gray"
  }
  update() {
    if (Math.random() > .99) {
      SceneManager.getActiveScene().addGameObject(
        new CloudGameObject(),
        new Vector2(-55, 0),
        new Vector2(5, 5)

      )
    }
    //Update the camera location
    let camera = Camera.main;
    let player = GameObject
      .getObjectByName("PlayerGameObject")
      .getComponent("PlayerComponent")

    let boundingBoxWidth = 10

    let difference = camera.transform.x - player.transform.x;
    if(Math.abs(difference) > boundingBoxWidth)
    {
      //camera.transform.x -= difference -Math.abs(boundingBoxWidth)
      if(difference < 0){
        //camera.transform.x -= Math.abs(-difference+boundingBoxWidth)
      }
      else{

      }
    }

  }
}

class CloudComponent extends Component {
  update() {
    this.transform.x += 5 * Time.deltaTime;
  }
}

class CloudGameObject extends GameObject {
  start() {
    this.layer = -1
    this.addComponent(new Circle())
    this.addComponent(new CloudComponent())
  }
}

class ExampleScene extends Scene {
  start() {
    this.addGameObject(
      new GameObject("BoxGameObject")
        .addComponent(new Rectangle("brown")),
      new Vector2(0, 0),
      new Vector2(20, 20)
    )
    this.addGameObject(
      new GameObject("PlayerGameObject")
        .addComponent(new PlayerComponent())
        .addComponent(new Rectangle("blue")),
      new Vector2(0, 0),
      new Vector2(10, 10)
    )
    this.addGameObject(
      new GameObject("ControllerGameobject")
        .addComponent(new ControllerComponent()))
  }
}

//export the main scene so the .html file can run the game.
export default new ExampleScene();