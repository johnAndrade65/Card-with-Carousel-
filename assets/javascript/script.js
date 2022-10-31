/*==VARIBLES==*/
const sneakers1 = document.getElementById("sneakers-1");
const sneakers2 = document.getElementById("sneakers-2");

/*==VARIBLES==*/
const setLeft = document.getElementById("left");
const setRight = document.getElementById("right");

/*==EVENT TO MANIPULATE IMAGES POSITION TO LEFT==*/
setLeft.addEventListener("click", () => {
    sneakers1.style.left = "650px"
    sneakers2.style.left = "-50px"
});

/*==EVENT TO MANIPULATE IMAGES POSITION TO RIGHT==*/
setRight.addEventListener("click", () => {
    sneakers1.style.left = "-50px"
    sneakers2.style.left = "-650px"
});