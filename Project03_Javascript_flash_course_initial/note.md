---
title: 정리된 JavaScript 노트
---

## 개요

이 파일은 자바스크립트 기초 문법과 DOM 조작, 데이터 구조, 함수 사용법을 간결하게 정리한 학습 노트입니다.

## DOM (Document Object Model)

### id로 요소 선택

```javascript
document.getElementById("greeting").innerHTML = "Hello World!";
```

### class로 요소 선택 (HTMLCollection)

```javascript
const items = document.getElementsByClassName("product-item");
items[0];
items.length;
items[0].innerHTML = "Product 1 - Updated";
```

### 태그로 선택

```javascript
document.getElementsByTagName("p");
```

### querySelector / querySelectorAll (CSS 선택자)

```javascript
document.querySelector(".product-item"); // 첫 번째
document.querySelectorAll(".product-item"); // 모든 요소 (NodeList)
```

### 요소 내용 및 스타일 변경

```javascript
const el = document.querySelector("p#weather");
el.innerHTML = "New value";
el.style.color = "#303030";
el.style.backgroundColor = "blue"; // camelCase
```

### 클래스 조작

```javascript
el.classList.add("redbg");
el.classList.remove("redbg");
el.classList.toggle("redbg");
```

### 이벤트로 네비게이션 토글 예시

```javascript
document.querySelector("#open-nav-menu").addEventListener("click", () => {
  document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", () => {
  document.querySelector("header nav .wrapper").classList.remove("nav-open");
});
```

## 변수 스코프 (Scope)

- `var`: 함수 스코프, 재선언 가능(권장하지 않음)
- `let`: 블록 스코프, 재할당 가능
- `const`: 블록 스코프, 재할당 불가

```javascript
var a = 1;
let b = 2;
const c = 3;
```

권장: 기본 `const`, 필요 시 `let` 사용.

## 데이터 타입

- 원시: `String`, `Number`, `Boolean`, `Null`, `Undefined`, `Symbol`
- 객체형: `Object`, `Array`, `Function`

```javascript
const name = "John";
const age = 30;
const isStudent = false;
const data = { name, age };
const arr = [1, 2, 3];
```

## 문자열 유틸

```javascript
let s = "PT*456545";
s.replace("*", "-");
s.slice(0, 2);
s.length;
```

## 배열 메서드

```javascript
let arr = [2, 4, 6, 8];
arr.push(10);
arr.unshift(0);
arr.concat([12, 14]);
```

## 객체(Object)

```javascript
const student = { name: "Alice", age: 25 };
student.id = "88b5";
delete student.age;
```

## Boolean 및 비교

```javascript
let x = 8,
  y = "8";
x == y; // true (값만)
x === y; // false (타입까지)
```

## null vs undefined

- `null`: 명시적 값 없음
- `undefined`: 값이 할당되지 않음

## 함수

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

또는 화살표 함수:

```javascript
const add = (a, b) => a + b;
```

---

필요하면 이 파일을 더 확장하거나, 예제 섹션을 추가로 정리해 드리겠습니다.

### id로 접근 (유일한 값 — 하나의 요소 반환)

`document.getElementById("greeting").innerHTML = "Hello World!";`

### class name으로 접근 (HTMLCollection — 인덱스와 length 사용 가능)

```javascript
document.getElementsByClassName("product-item");
document.getElementsByClassName("product-item")[0];
document.getElementsByClassName("product-item")[1];
document.getElementsByClassName("product-item")[2];

document.getElementsByClassName("product-item")[0].innerHTML =
  "Product 1 - Updated";
```

### tag name으로 접근 (HTMLCollection)

```javascript
document.getElementsByTagName("p");
```

### querySelector (CSS 선택자 — 첫 번째 요소만 반환)

```javascript
document.querySelector("#greeting");
document.querySelector(".product-item");
document.querySelector("p");
```

### querySelectorAll (NodeList — 모든 요소 반환)

```javascript
document.querySelectorAll(".product-item");
document.querySelectorAll("p")[0];
document.querySelectorAll("p")[1];
```

### 요소 내용 및 스타일 변경

```javascript
document.querySelector("p#weather").innerHTML = "New value";
document.querySelector("p#weather").style.color = "#303030";
document.querySelector("p#weather").style.margin = "100px";
```

CSS 속성 이름은 JavaScript에서 camelCase로 사용됩니다 (예: `background-color` → `backgroundColor`).

```javascript
document.querySelector("p#weather").style.backgroundColor = "blue";
```

### classList: 클래스 조작 메서드

```javascript
document.querySelector("p#weather").classList.add("redbg");
document.querySelector("p#weather").classList.remove("redbg");
document.querySelector("p#weather").classList.toggle("redbg"); // 있으면 제거, 없으면 추가
```

네비게이션 토글 예시:

```javascript
document.querySelector("#open-nav-menu").addEventListener("click", function () {
  document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document
  .querySelector("#close-nav-menu")
  .addEventListener("click", function () {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
  });
```

## 변수 스코프 (Variables Scope)

### 1. var는 왜 '동네방네' 다 알게 될까요? (전역 변수)

`var`는 오래된 방식의 변수 선언으로, 전역 또는 함수 스코프를 갖습니다. 블록({}) 범위가 아니라서 의도치 않게 값이 변경될 수 있습니다.

```javascript
var 내사과 = 5; // 어디서든 보이는 전역 변수

if (true) {
  var 내사과 = 10; // 밖에서 만든 '내사과'를 덮어씀
}

console.log(내사과); // 10
```

### 2. var vs let vs const 한눈에 비교하기

- `var`: 함수 스코프, 재선언 가능(권장하지 않음)
- `let`: 블록 스코프, 재선언 불가, 값 변경 가능
- `const`: 블록 스코프, 재선언/재할당 불가(상수)

기본적으로 `const`를 사용하고, 값이 변경되어야 할 경우 `let`을 사용하세요. `var`는 사용을 피하는 것이 좋습니다.

```javascript
const customer = "Sara";
let balance = 2000;

console.log("Hi, " + customer + "! Your balance is $" + balance + ".");

balance = balance + 200;

console.log("Hi, " + customer + "! Your new balance is $" + balance + ".");
```

#### 변수 이름 규칙

- 대소문자 구분
- 숫자로 시작 불가
- 특수문자 제한 (`_`, `$` 허용)
- 공백 불가
- 예약어 사용 금지
- 의미 있는 이름 권장

예:

```javascript
let accountNumber = "I456545"; // 의미 있는 이름
accountNumber.length; // 7
accountNumber[0]; // "I"
```

문자열 조작 예:

```javascript
let accountNumber = "PT*456545";
accountNumber.replace("*", "-"); // "PT-456545"
accountNumber = accountNumber.replace("_", "");
```

> `replace`는 기본적으로 첫 번째 일치 항목만 바꿉니다. 모두 바꾸려면 정규표현식을 사용하세요.

프로퍼티 vs 메서드 요약:

- 프로퍼티: `.length` (괄호 없음)
- 메서드: `.slice()`, `.replace()` (괄호 있음)

## 데이터 타입 (Data Types)

### 원시 자료형 (Primitive)

- String, Number, Boolean, Null, Undefined, Symbol

### 비원시 자료형 (Non-Primitive)

- Object (객체, 배열, 함수 등)

예시:

```javascript
const name = "John"; // String
const age = 30; // Number
const isStudent = false; // Boolean
const address = null; // Null
let phoneNumber; // Undefined
const uniqueId = Symbol("id"); // Symbol

const person = { name: "Alice", age: 25 };
const numbers = [1, 2, 3, 4, 5];

function greet() {
  console.log("Hello!");
}

let price = 13.789;
Math.round(price); // 14
Math.floor(price); // 13
Math.ceil(price); // 14
price.toFixed(2); // "13.79"
Math.random(); // 0.0 ~ 1.0 미만
```

## 배열 (Array) 메서드

```javascript
let array1 = [2, 4, 6, 8];
array1.length; // 4
array1[0]; // 2
array1[array1.length - 1]; // 8
array1.push(10); // 추가
array1.unshift(0); // 앞에 추가
let array2 = [12, 14, 16];
array1.concat(array2);
typeof array1; // "object"
```

배열은 다양한 타입을 담을 수 있으며 동적으로 길이가 변합니다. 자바스크립트에서 배열은 객체의 특별한 형태입니다。

## 객체 (Object)

```javascript
let student = { name: "John", age: 25 };
console.log(student.name); // John
console.log(student["age"]); // 25

let skyStudent = {
  name: "John",
  yearOfBirth: 1980,
  country: "Italy",
};

skyStudent.id = "88b5"; // 속성 추가
skyStudent.name = "John Doe"; // 값 변경
delete skyStudent.country; // 속성 삭제
console.log(skyStudent);

let student1 = { name: "Alice", age: 22 };
let student2 = { name: "Bob", age: 24 };
let students = [student1, student2];
students.push({ name: "Charlie", age: 23 });
```

객체와 배열은 서로 중첩될 수 있어 복잡한 데이터 구조를 표현할 수 있습니다。

## Boolean

```javascript
let num1 = 8;
let num2 = 10;
num1 > num2; // false
num1 < num2; // true
num1 == num2; // false
num1 != num2; // true

num2 = "8";
num1 == num2; // true (값만 비교)
num1 === num2; // false (값과 타입 모두 비교)
```

## null vs undefined

```javascript
let customer;
console.log(customer); // undefined

customer = { name: "Emma" };
console.log(customer.age); // undefined

customer = null;
console.log(customer); // null

null == undefined; // true
null === undefined; // false
```

`null`은 명시적으로 "값이 없음"을 표시할 때 사용하고, `undefined`는 값이 할당되지 않았음을 나타냅니다。

## 함수 (Function)

```javascript
function greet(name) {
  return "Hello, " + name + "!";
}

greet("Alice"); // "Hello, Alice!"
```

함수는 특정 작업을 수행하는 코드 블록이며 `return`으로 값을 반환할 수 있습니다。

## DOM (Document Object Model) 조작

### id로 접근 (유일한 값 — 하나의 요소 반환)

`document.getElementById("greeting").innerHTML = "Hello World!";`

### class name으로 접근 (HTMLCollection — 인덱스와 length 사용 가능)

```javascript
document.getElementsByClassName("product-item");
document.getElementsByClassName("product-item")[0];
document.getElementsByClassName("product-item")[1];
document.getElementsByClassName("product-item")[2];

document.getElementsByClassName("product-item")[0].innerHTML =
  "Product 1 - Updated";
```

    // 5. 예약어 사용 불가 (let, const, var, if, for, document 등등 X)

함수는 특정 작업을 수행하는 코드 블록이며 `return`으로 값을 반환할 수 있습니다。

## DOM(Document Object Model) 조작

### id로 접근 (유일한 값, 하나의 요소만 반환)

`document.getElementById("greeting").innerHTML = "Hello World!";`

### class name으로 접근 (HTMLCollection — 인덱스와 length 사용 가능)

```javascript
document.getElementsByClassName("product-item");
document.getElementsByClassName("product-item")[0];
document.getElementsByClassName("product-item")[1];
document.getElementsByClassName("product-item")[2];

document.getElementsByClassName("product-item")[0].innerHTML =
  "Product 1 - Updated";
```

### tag name으로 접근 (HTMLCollection)

```javascript
document.getElementsByTagName("p");
```

### querySelector (CSS 선택자 — 첫 번째 요소만 반환)

```javascript
document.querySelector("#greeting");
document.querySelector(".product-item");
document.querySelector("p");
```

### querySelectorAll (NodeList — 모든 요소 반환)

```javascript
document.querySelectorAll(".product-item");
document.querySelectorAll("p")[0];
document.querySelectorAll("p")[1];
```

### 요소 내용 및 스타일 변경

```javascript
document.querySelector("p#weather").innerHTML = "New value";
document.querySelector("p#weather").style.color = "#303030";
document.querySelector("p#weather").style.margin = "100px";
```

CSS 속성 이름은 JavaScript에서 camelCase로 사용됩니다 (예: `background-color` → `backgroundColor`).

```javascript
document.querySelector("p#weather").style.backgroundColor = "blue";
```

### classList: 클래스 조작 메서드

```javascript
document.querySelector("p#weather").classList.add("redbg");
document.querySelector("p#weather").classList.remove("redbg");
document.querySelector("p#weather").classList.toggle("redbg"); // 있으면 제거, 없으면 추가
```

네비게이션 토글 예시:

```javascript
document.querySelector("#open-nav-menu").addEventListener("click", function () {
  document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document
  .querySelector("#close-nav-menu")
  .addEventListener("click", function () {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
  });
```

## 변수 스코프 (Variables Scope)

### 1. var는 왜 '동네방네' 다 알게 될까요? (전역 변수)

`var`는 오래된 방식의 변수 선언으로, 전역 또는 함수 스코프를 갖습니다. 블록({}) 범위가 아니라서 의도치 않게 값이 변경될 수 있습니다.

```javascript
var 내사과 = 5; // 어디서든 보이는 전역 변수

if (true) {
  var 내사과 = 10; // 밖에서 만든 '내사과'를 덮어씀
}

console.log(내사과); // 10
```

### 2. var vs let vs const 한눈에 비교하기

- `var`: 함수 스코프, 재선언 가능(권장하지 않음)
- `let`: 블록 스코프, 재선언 불가, 값 변경 가능
- `const`: 블록 스코프, 재선언/재할당 불가(상수)

기본적으로 `const`를 사용하고, 값이 변경되어야 할 경우 `let`을 사용하세요. `var`는 사용을 피하는 것이 좋습니다.

```javascript
const customer = "Sara";
let balance = 2000;

console.log("Hi, " + customer + "! Your balance is $" + balance + ".");

balance = balance + 200;

console.log("Hi, " + customer + "! Your new balance is $" + balance + ".");
```

#### 변수 이름 규칙

- 대소문자 구분
- 숫자로 시작 불가
- 특수문자 제한 (`_`, `$` 허용)
- 공백 불가
- 예약어 사용 금지
- 의미 있는 이름 권장

예:

```javascript
let accountNumber = "I456545"; // 의미 있는 이름
accountNumber.length; // 7
accountNumber[0]; // "I"
```

문자열 조작 예:

```javascript
let accountNumber = "PT*456545";
accountNumber.replace("*", "-"); // "PT-456545"
accountNumber = accountNumber.replace("_", "");
```

> `replace`는 기본적으로 첫 번째 일치 항목만 바꿉니다. 모두 바꾸려면 정규표현식을 사용하세요.

프로퍼티 vs 메서드 요약:

- 프로퍼티: `.length` (괄호 없음)
- 메서드: `.slice()`, `.replace()` (괄호 있음)

## 데이터 타입 (Data Types)

### 원시 자료형 (Primitive)

- String, Number, Boolean, Null, Undefined, Symbol

### 비원시 자료형 (Non-Primitive)

- Object (객체, 배열, 함수 등)

예시:

```javascript
const name = "John"; // String
const age = 30; // Number
const isStudent = false; // Boolean
const address = null; // Null
let phoneNumber; // Undefined
const uniqueId = Symbol("id"); // Symbol

const person = { name: "Alice", age: 25 };
const numbers = [1, 2, 3, 4, 5];

function greet() {
  console.log("Hello!");
}

let price = 13.789;
Math.round(price); // 14
Math.floor(price); // 13
Math.ceil(price); // 14
price.toFixed(2); // "13.79"
Math.random(); // 0.0 ~ 1.0 미만
```

## 배열 (Array) 메서드

```javascript
let array1 = [2, 4, 6, 8];
array1.length; // 4
array1[0]; // 2
array1[array1.length - 1]; // 8
array1.push(10); // 추가
array1.unshift(0); // 앞에 추가
let array2 = [12, 14, 16];
array1.concat(array2);
typeof array1; // "object"
```

배열은 다양한 타입을 담을 수 있으며 동적으로 길이가 변합니다. 자바스크립트에서 배열은 객체의 특별한 형태입니다。

## 객체 (Object)

```javascript
let student = { name: "John", age: 25 };
console.log(student.name); // John
console.log(student["age"]); // 25

let skyStudent = {
  name: "John",
  yearOfBirth: 1980,
  country: "Italy",
};

skyStudent.id = "88b5"; // 속성 추가
skyStudent.name = "John Doe"; // 값 변경
delete skyStudent.country; // 속성 삭제
console.log(skyStudent);

let student1 = { name: "Alice", age: 22 };
let student2 = { name: "Bob", age: 24 };
let students = [student1, student2];
students.push({ name: "Charlie", age: 23 });
```

객체와 배열은 서로 중첩될 수 있어 복잡한 데이터 구조를 표현할 수 있습니다。

## Boolean

```javascript
let num1 = 8;
let num2 = 10;
num1 > num2; // false
num1 < num2; // true
num1 == num2; // false
num1 != num2; // true

num2 = "8";
num1 == num2; // true (값만 비교)
num1 === num2; // false (값과 타입 모두 비교)
```

## null vs undefined

```javascript
let customer;
console.log(customer); // undefined

customer = { name: "Emma" };
console.log(customer.age); // undefined

customer = null;
console.log(customer); // null

null == undefined; // true
null === undefined; // false
```

`null`은 명시적으로 "값이 없음"을 표시할 때 사용하고, `undefined`는 값이 할당되지 않았음을 나타냅니다。

## 함수 (Function)

```javascript
function greet(name) {
  return "Hello, " + name + "!";
}

greet("Alice"); // "Hello, Alice!"
```

함수는 특정 작업을 수행하는 코드 블록이며 `return`으로 값을 반환할 수 있습니다。

## 날짜와 시간 (Date Object)

```javascript
new Date().getHours();
new Date().getMinutes();
new Date().getSeconds();
```

new Date() 객체를 사용하여 현재 날짜와 시간을 가져올 수 있습니다.
`getHours()`, `getMinutes()`, `getSeconds()` 메서드를 사용하여 각각 시, 분, 초를 얻을 수 있습니다.

```javascript
let localTime = new Date();
document.querySelector("span[data-time=hours]").textContent =
  localTime.getHours();
document.querySelector("span[data-time=minutes]").textContent =
  localTime.getMinutes();
document.querySelector("span[data-time=seconds]").textContent =
  localTime.getSeconds();
```

`textContent` 속성을 사용하여 HTML 요소에 현재 시간 값을 표시할 수 있습니다.
`innerHTML` 대신 `textContent`를 사용하는 것이 보안 및 성능 측면에서 더 좋습니다.

## SetTimeout과 SetInterval

```javascript
setTimeout(() => {
  // 일정 시간 후에 실행할 코드
}, 1000); // 1초 후 실행(1000밀리초)
```

```javascript
setInterval(() => {
  // 일정 간격으로 반복 실행할 코드
}, 1000); // 1초 간격으로 실행
```

```javascript
setInterval(function () {
  let localTime = new Date();
  document.querySelector("span[data-time=hours]").textContent = localTime
    .getHours()
    .toString()
    .padStart(2, "0");
  document.querySelector("span[data-time=minutes]").textContent = localTime
    .getMinutes()
    .toString()
    .padStart(2, "0");
  document.querySelector("span[data-time=seconds]").textContent = localTime
    .getSeconds()
    .toString()
    .padStart(2, "0");
}, 1000);
```

The padStart Method는 문자열의 시작 부분에 지정된 문자를 추가하여 원하는 길이를 맞추는 메서드입니다.

```javascript
const str = "5";

console.log(str.padStart(2, "0"));
// Expected output: "05"
```

```javascript
const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");

console.log(maskedNumber);
// Expected output: "************5581"
```

## For 루프 (Loop)

```javascript
for (let a = 0; a < 10; a++) {
  console.log(a);
}
// 0부터 9까지 출력
// a ++ 는 a = a + 1 과 동일합니다.
```

For 루프는 특정 조건이 참인 동안 코드를 반복 실행하는 데 사용됩니다.
For 루프의 기본 구조는 다음과 같습니다:

```javascript
for (초기화; 조건; 증감) {
  // 반복 실행할 코드
}
```

- 초기화: 루프가 시작될 때 한 번 실행되는 부분입니다. 일반적으로 카운터 변수를 선언하고 초기화합니다.
- 조건: 각 반복 전에 평가되는 부분입니다. 이 조건이 참인 동안 루프이 계속 실행됩니다.
- 증감: 각 반복이 끝난 후 실행되는 부분입니다. 일반적으로 카운터 변수를 증가시키거나 감소시킵니다.

For 루프는 반복 횟수를 미리 알 때 유용하게 사용됩니다.

```javascript
let animals = ["dog", "cat", "rabbit"];
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
// 배열의 모든 동물 이름 출력
```

For 루프는 배열이나 문자열과 같은 반복 가능한 객체의 각 요소에 접근할 때 자주 사용됩니다.

```javascript
let animals = ["dog", "cat", "rabbit", "hamster"];
for (let i in animals) {
  console.log(animals[i]);
}
// 배열의 모든 동물 이름 출력
```

```javascript
let animals = { name: "dog", color: "White", age: 5 };
for (let a in animals) {
  console.log(a);
}
// 객체의 모든 속성(키)출력
```

```javascript
let animals = { name: "dog", color: "White", age: 5 };
for (let a in animals) {
  console.log(animals[a]);
}
// 객체의 모든 값 출력
```

For...in 루프는 객체의 열거 가능한 속성(키)을 반복하는 데 사용됩니다.

```javascript
let animals = { name: "dog", color: "White", age: 5 };
for (let a in animals) {
  console.log(a + ": " + animals[a]);
}
// 객체의 속성과 값 출력
```

For...in 루프는 배열의 인덱스와 해당 값을 함께 출력할 때도 사용할 수 있습니다.
