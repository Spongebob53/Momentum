const a = 5;
/*const means constant */
const veryLongVariableName = 0;
/*camelCase*/
/*in python like this very_long_variable_name
it is snake_case*/
const myName = "nico";
let b = 2;
/*variable= var(old version), let, const */

console.log(a + b);
console.log(a * b);
console.log(a / b);
/*integer 정수 float 소수  */

console.log("hello" + myName);

b = 4;
/*let can update, const can't */
console.log(a + b);

const amIFat = null;
/*boolean(true, false), null */
let something;
console.log(something, amIFat);
/* null is different from undefined*/

/*make array */
const nonsense = [1, 2, "hello", false, null, undefined, a];
console.log(nonsense);
console.log(nonsense[2]);
/*add to array */
nonsense.push("hi");
console.log(nonsense);
/*update array */
nonsense[1] = 5;
console.log(nonsense);
/*make object */
const player = {
  name: "nico",
  points: 10,
  fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);
/*update object */
player.fat = false;
player.points = player.points + 15;
console.log(player.fat);
console.log(player.points);
/*add object*/
player.lastName = "potato";
console.log(player);

/*function!! */

function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I am " + age);
}

sayHello("nico", 10);

function plus(a, b) {
  console.log(a + b);
}
plus(1, 4);

/*make function object */
const players = {
  sayHello: function (otherPersonName) {
    console.log("hello " + otherPersonName + " nice to meet you");
  },
};

players.sayHello("nico");

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
  powerof: function (a, b) {
    return a ** b;
  },
};
/*when write 'return' in function, function stop running */

const plusResult = calculator.add(1, 9);
const minusResult = calculator.minus(plusResult, 9);
const timesResult = calculator.times(minusResult, 2);
const divResult = calculator.div(timesResult, 1);
const powerOfResult = calculator.powerof(divResult, 2);

console.log(plusResult);
console.log(powerOfResult);

const age = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);

/*conditional*/
const Age = parseInt(prompt("How old are you?"));
/*stopping the execution, so dont use today*/
/*console.lod(typeof Age); can check the type
parseInt() change 'string type' to 'number type'
isNaN() return a Boolean value*/
if (isNaN(Age) || Age < 0) {
  console.log("Please write a real positive number.");
} else if (Age < 18) {
  console.log("You are too young.");
} else if (Age >= 18 && Age <= 50) {
  console.log("You can drink.");
} else if (Age > 50 && Age <= 80) {
  console.log("You shouldn't drink");
} else if (Age === 100) {
  console.log("wow you are wise");
} else if (Age > 80) {
  console.log("You can do whatever you want.");
}
/* && means and, ||means or, !== means not, === means same*/
/*bring html in js */
const title = document.getElementById("title");
const hellos = document.getElementsByClassName("hello");
const title = document.getElementsByTagName("h1");
/*array */
const title = document.querySelector(".hello h1");
/*returns the first element, it can use css selector , querySelectorAll */
title.innerText = "hello";
title.style.color = "blue";
/*change */
console.dir(title);
/*inside of element */
title.addEventListener("click", functionName);
/*addEventListener need "type of event" and function */
/*dir 에서 앞에 on 있는게 event 항목들, 사용할때는 on빼고 작성 */
title.onclick = handleTitleClick;
/*another way but, .removeEventListener can remove listener later*/
/*window listener (offline, online, copy, resize)
html listener (mouseleave, mouseenter)
 */

function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}

function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
} /*remove existing class name */

function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
} /*add class name, also need css about class name in css file*/

function handleTitleClick() {
  h1.classList.toggle("clicked");
}
/*다갖다버려 이거 좋다 */
function onLoginSubmit(event) {
  event.preventDefault();
  console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
/*js는 function을 불러올때 첫번째 argument에 대한 정보들도 같이 불러온다
preventDefault()는 기본 설정들을 실행시키지 않는다 ex 새로고침 같은 것들*/

greeting.innerText = `Hello ${username}`;
/*string 과 변수 합쳐줌 */

localStorage.setItem("key", "value");
localStorage.getItem("key", "value");
localStorage.removeItem("key", "value");
/*저장하기 */
/*f12에서 application, localStorage에 가면 확인 가능 */

setInterval(sayHello, 5000);
/*시간 반복적인 작업 함수, ms 단위 시간 필요*/

setTimeout(sayHello, 5000);
/*기다렸다가 작동 함수,ms 단위 시간 필요*/
"1".padStart(2, "0");
/*string에 적용가능한 함수, 문자열 길이, 미충족시 추가할 string */
string();
/*number를 string으로 */
Math.random();
/*0부터 1까지 float 랜덤 */
Math.round();
/*반올림 */
Math.ceil();
/*올림 */
Math.floor();
/*버림 */
document.body.appendChild(bgImage);
/*prepend는 맨앞으로 이건 맨뒤로 넣어줌*/
JSON.stringify(toDos);
/*JSON.stringify() object나 array나 code 전부 string으로 만들어줌 */
JSON.parse();
/* */
parsedToDos.forEach(sayHello);
/*array 에서 하나씩 함수 실행 */
function sayHello(item) {
  console.log("hello", item);
}

parsedToDos.forEach(sayHello);
parsedToDos.forEach((item) => console.log("hello", item));
/*'item'은 어떤 item인지 알려줌, 두가지는 완전 같은 방식 아래는 함수 필요없음 arrow function*/
Date.now();
/*ms 단위 숫자 주는 함수 */
array[].filter(function);
/*filter는 function에 array를 하나씩 대입하다가 false가 나오면 그 item은 빼줌 */