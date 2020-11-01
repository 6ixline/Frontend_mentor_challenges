document.querySelector(".share").onclick = () =>{
    let shareIcon = document.querySelector(".share-icon").style;
    let shareImg = document.querySelector('.share img');
    let share= document.querySelector('.share').style;
   if(window.innerWidth>826){
       if (shareIcon.transform == "scale(1)") {
           shareIcon.transform = "scale(0)";
           shareImg.src = './images/icon-share.svg';
           shareImg.classList.remove("share-img-icon");
           document.querySelector('.share').classList.remove('background-icon');
       } else {
           shareIcon.transform = "scale(1)";
           shareImg.src = './images/icon-share-white.svg';
           document.querySelector('.share').classList.add('background-icon');
       }
   }else{
       if (shareIcon.transform == "scale(1)") {
           shareIcon.transform = "scale(0)";
           shareImg.src = './images/icon-share.svg';
           shareImg.classList.remove("share-img-icon");
           document.querySelector('.share').classList.remove('background-icon');
       } else {
           shareIcon.transform = "scale(1)";
           shareImg.src = './images/icon-share-white.svg';
           shareImg.classList.add("share-img-icon");
           document.querySelector('.share').classList.add('background-icon');
       }
   }
}