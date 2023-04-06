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
    if (Math.abs(difference) > boundingBoxWidth) {
      //camera.transform.x -= difference -Math.abs(boundingBoxWidth)
      if (difference < 0) {
        //camera.transform.x -= Math.abs(-difference+boundingBoxWidth)
      }
      else {

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

class FixedCameraComponent extends Component {
  name = "FixedCameraComponent"
  update() {
    let playerGameObject = GameObject
      .getObjectByName("PlayerGameObject")
      .getComponent("PlayerComponent")
    //The uncommented code is identical to this.
    //I'm using this more complex math so we can compare it 
    //to the other tracking options
    //this.transform.x = playerGameObject.transform.x
    let difference = playerGameObject.transform.x - this.transform.x;
    this.transform.x += difference
  }
}

class BoundaryCameraComponent extends Component {
  update() {
    let playerGameObject = GameObject
      .getObjectByName("PlayerGameObject")

    let maxDifference = 10;
    let difference = playerGameObject.transform.x - this.transform.x;

    if (difference > maxDifference) {
      //The player is to the right
      this.transform.x += difference - maxDifference
    }
    else if (difference < -maxDifference) {
      //The player is to the left
      this.transform.x += difference + maxDifference
    }
  }
}

class MomentumCameraComponent extends Component {
  update() {
    let playerGameObject = GameObject
      .getObjectByName("PlayerGameObject")

    let difference = playerGameObject.transform.x - this.transform.x;
    this.transform.x += .1*difference
  }
}

class MomentumBoundaryCameraComponent extends Component {
  update() {
    let playerGameObject = GameObject
      .getObjectByName("PlayerGameObject")

      let maxDifference = 10;
      let difference = playerGameObject.transform.x - this.transform.x;
  
      if (difference > maxDifference) {
        //The player is to the right
        this.transform.x += .1*(difference - maxDifference)
      }
      else if (difference < -maxDifference) {
        //The player is to the left
        this.transform.x += .1*(difference + maxDifference)
      }
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
        .addComponent(new ControllerComponent())
    )
    this.addGameObject(
      new GameObject("FixedCameraGameObject")
        .addComponent(new FixedCameraComponent())
        .addComponent(new Rectangle("Green"))
    )
    this.addGameObject(
      new GameObject("BoundaryCameraGameObject")
        .addComponent(new BoundaryCameraComponent())
        .addComponent(new Rectangle("Red"))
    )
    this.addGameObject(
      new GameObject("MomentumCameraGameObject")
        .addComponent(new MomentumCameraComponent())
        .addComponent(new Rectangle("Black"))
    )
    this.addGameObject(
      new GameObject("MomentumBoundaryCameraGameObject")
        .addComponent(new MomentumBoundaryCameraComponent())
        .addComponent(new Rectangle("White"))
    )
  }
}

//export the main scene so the .html file can run the game.
export default new ExampleScene();