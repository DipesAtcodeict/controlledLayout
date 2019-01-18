let x1 = document.getElementById("zoom1");
let x2 = document.getElementById("zoom2");
let x3 = document.getElementById("zoom3");
let x4 = document.getElementById("zoom4");

let Reset = () => {
  let reset = () => {
    setTimeout(() => {
      x1.setAttribute("style", "width:48%; height:48%");
      x2.setAttribute("style", "width:48%; height:48%");
      x3.setAttribute("style", "width:48%; height:48%");
      x4.setAttribute("style", "width:48%; height:48%");
    }, 2500);
  };

  reset();
};



let Zoom1 = () => {
  x1.setAttribute("style", "width:100%; height:100%");
  x2.style.display = "none";
  x3.style.display = "none";
  x4.style.display = "none";

  Reset();
};
x1.addEventListener("click", Zoom1);



let Zoom2 = () => {
  x2.setAttribute("style", "width:100%; height:100%");
  x1.style.display = "none";
  x3.style.display = "none";
  x4.style.display = "none";

  Reset();
};
x2.addEventListener("click", Zoom2);



let Zoom3 = () => {
  x3.setAttribute("style", "width:100%; height:100%");
  x1.style.display = "none";
  x2.style.display = "none";
  x4.style.display = "none";

  Reset();
};
x3.addEventListener("click", Zoom3);



let Zoom4 = () => {
  x4.setAttribute("style", "width:100%; height:100%");
  x1.style.display = "none";
  x2.style.display = "none";
  x3.style.display = "none";

  Reset();
};
x4.addEventListener("click", Zoom4);




