function rotateButtons() {
    let buttons = document.getElementsByTagName('button');

   for (button of buttons) {
     if (button.innerHTML == 1) {
         button.innerHTML = 4;
     } else if (button.innerHTML == 2) {
         button.innerHTML = 1;
     } else if (button.innerHTML == 3) {
         button.innerHTML = 2;
     } else if (button.innerHTML == 4) {
         button.innerHTML = 7;
     } else if (button.innerHTML == 6) {
         button.innerHTML = 3;
     } else if (button.innerHTML == 7) {
         button.innerHTML = 8;
     } else if (button.innerHTML == 8) {
         button.innerHTML = 9;
     } else if (button.innerHTML == 9) {
         button.innerHTML = 6;
     }
   }
}

document.getElementById('btn5').addEventListener('click', rotateButtons);
