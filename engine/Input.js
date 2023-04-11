class Input{
  static mouseX;
  static mouseY;
  static start(){
    let canvas = document.querySelector("#canv")
    canvas.addEventListener("mousemove", e=>{
      Input.mouseX = e.clientX;
      Input.mouseY = e.clientY;

    })
  }
}

window.Input = Input;
export default Input;