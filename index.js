document.addEventListener("DOMContentLoaded", () => {

  //declare currentClickable as global variable 
  let currentClickable

  //initializing and accesing dots style
  const dot = document.querySelector("#dot").style

  //iterate over all .clickable elements and add event listener
  document.querySelectorAll(".clickable").forEach((item) => {
    item.addEventListener("click", () => {

      //move dot to clickable tapped on by user
      dot.left = item.getBoundingClientRect().left + 26

      //declare currentClickable
      currentClickable = item
    })
  })
  
  //keeps dot at currentClickable when viewport is changed
  window.addEventListener("resize", () => {
    dot.left = currentClickable.getBoundingClientRect().left + 26
  })
})