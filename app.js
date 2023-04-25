const cursor = document.querySelector('.divcursor');

document.addEventListener ('mousemove',(e) =>{ cursor.style.left = e.pageX -4 +"px";
 cursor.style.top = e.pageY -3 +"px";
});

 