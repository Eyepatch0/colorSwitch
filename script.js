const colorArea = document.querySelector(".card_color");
const colorBtn = document.querySelector(".card_button");
const colortxt = document.querySelector(".current_color");
const colorTxt = document.querySelector("span");
const main = document.querySelector(".main");
const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  colorArea.style.backgroundColor = `#${randomColor}`;
  colortxt.style.color = `#${randomColor}`;
  colorTxt.innerHTML = `#${randomColor}`;
  const oppColor = (Number(`0x1${randomColor}`) ^ 0xffffff)
    .toString(16)
    .substr(1)
    .toUpperCase();
  main.style.backgroundColor = `#${oppColor}`;
}; //why? Because we are using hexadecimals (16777215=ffffff) which is maximum possibility for colors
//could do rgb approach as well taking 255 255 255

colorBtn.addEventListener("click", setBg);
//Number(0x1${hex}) First it takes the given hex (string) value and converts it to HEX ^ 0xFFFFFF it then does a bit-wise execution on that value with 0xFFFFFF which I can only explain now like this, if you wanted to invert a number as quickly as possible eg. 3 > 7, 8 > 2, 1 > 9 etc. simply subtract with number with 10 and absolute it. That is what that part does except for HEX values. The rest is basically formatting and dropping the first value which is an overflow of the equation.
