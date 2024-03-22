const addEventOnElem = (event, elem, callback) => {
     if (elem.length > 1) {
          for (element of elem) {
               element.addEventListener(event, callback);
          }
          return;
     }
     elem.addEventListener(event, callback);
}

const toggleBtn = document.querySelector('.toggle-btn');
let themePos = 1;

const trans = () => {
     document.documentElement.classList.add('transition');
     setTimeout(() => {
          document.documentElement.classList.remove('transition');
     }, 500)
}

const toggleTheme = () => {
     ++themePos;
     trans();
     if (themePos > 3) {
          themePos = 1;
          document.documentElement.setAttribute('theme', 'theme');
     } else {
          document.documentElement.setAttribute('theme', `theme-${themePos}`);
     }
}

addEventOnElem('click', toggleBtn, toggleTheme);

const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');


const calc = (e) => {
     value = e.currentTarget.dataset.operator;
     switch (value) {
          case 'DEL':
               let expression = display.innerHTML;
               let length = expression.length;
               (length > 1) ? display.innerHTML = expression.slice(0, length - 1) : display.innerHTML = 0;
               break;
          case 'RESET':
               display.innerHTML = 0;
               break;
          case '=':
               display.innerHTML = eval(display.innerHTML)
               break;
          default:
               (display.innerHTML != 0) ? display.innerHTML += value : display.innerHTML = value;
               break;
     }
}

addEventOnElem('click', buttons, calc)