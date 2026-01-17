document.getElementById("greeting").innerHTML = "Hello World!";

// class name으로 접근 array 형태로 반환 (length, index 접근 가능)
document.getElementsByClassName("product-item");
document.getElementsByClassName("product-item")[0];
document.getElementsByClassName("product-item")[1];
document.getElementsByClassName("product-item")[2];

document.getElementsByClassName("product-item")[0].innerHTML = "Product 1 - Updated";

// tag name으로 접근 array 형태로 반환 (length, index 접근 가능)
document.getElementsByTagName("p");
document.getElementsByTagName("p")[];

// querySelector: CSS 선택자 방식으로 접근 (가장 첫번째 요소만 반환)
document.querySelector("#greeting");
document.querySelector(".product-item");
document.querySelector("p");

// querySelectorAll: CSS 선택자 방식으로 접근 (모든 요소 반환, array 형태)
document.querySelectorAll(".product-item");
document.querySelectorAll("p")[0];
document.querySelectorAll("p")[1];

// 요소의 내용 변경 및 스타일 변경
document.querySelector("p#weather").innerHTML = "New value";
document.querySelector("p#weather").style.color = "red";
document.querySelector("p#weather").style.color = "#303030";
document.querySelector("p#weather").style.margin = "100px";

// CSS에서 사용하는 속성 이름이 JavaScript에서는 camelCase로 바뀜 (background-color -> backgroundColor)
document.querySelector("p#weather").style.backgroundColor = "blue";

// classList: 클래스 조작 관련 메서드들 
document.querySelector("p#weather").classList.add("redbg");
document.querySelector("p#weather").classList.remove("redbg");

// toggle: 있으면 제거, 없으면 추가
document.querySelector("p#weather").classList.toggle("redbg");
document.querySelector("p#weather").classList.toggle("redbg");

document.querySelector("#open-nav-menu").addEventListener("click", function() {
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function() {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

// Variables Scope 
// 1. var는 왜 '동네방네' 다 알게 될까요? (전역 변수)
// var로 변수를 만드는 것은 "동네 확성기"로 이름을 부르는 것과 비슷해요.
// 설명 : var는 아주 옛날 방식의 이름표예요. 집 안(함수 안)에서 만들지 않고 밖에서 만들면, 프로그램 어디에서든 이 이름을 쓸 수 있게 돼요. 
// 이걸 '전역 변수'라고 해요.
// 문제점 : 너무 많은 사람이 같은 이름을 쓰면 헷갈리겠죠? 
// var는 실수로 같은 이름을 또 써도 "안 돼!"라고 말해주지 않아서 나중에 큰 사고가 날 수 있어요.

var 내사과 = 5; // 어디서든 보이는 전역 변수 

if (true) { 
    var 내사과 = 10; // 앗! 밖에서 만든 '내사과'를 덮어써 버렸어요. 
} 

console.log(내사과); // 5가 아니라 10이 나와요. (위험해요!)

// 2. var vs let vs const 한눈에 비교하기
// var (옛날 방식) : 다시 만들기 가능 (위험!), 내용 바꾸기 가능, 사용범위 넓음 (전역/함수) 
// let (요즘 방식) : 다시 만들기 불가능 (안전), 내용 바꾸기 가능, 사용범위 정해진 구역 내 (블럭)
// const (상수) : 다시 만들기 불가능 (안전), 내용 바꾸기 불가능 (잠긴 상자), 사용범위 정해진 구역 내 (블럭)

// 기본은 const를 쓰고, 나중에 값을 바꿔야 할 때만 let으로 바꾸면 아주 훌륭한 코딩 습관이 됩니다!
// 의도적으로 변수를 전역으로 만들고 싶지 않다면 var 을 사용하지 말것.

const customer = "Sara";
let balance = 2000;

console.log("Hi, " + customer + "! Your balance is $" + balance + ".");

balance = balance + 200;

console.log("Hi, " + customer + "! Your new balance is $" + balance + ".");

// 변수 이름 작성 규칙
// 1. 대소문자 구분 (balance, Balance, BALANCE는 모두 다른 이름)
// 2. 숫자로 시작 불가 (1stBalance X, firstBalance O)
// 3. 특수문자 사용 불가 ( _ , $ 만 허용)
// 4. 공백 사용 불가 (my balance X, my_balance O, myBalance O)
// 5. 예약어 사용 불가 (let, const, var, if, for, document 등등 X)
// 6. 의미 있는 이름 사용 권장 (a, b, c 보다는 balance, customer 등등 O)

let accountNumber = "I456545"; // 의미 있는 이름 사용
accountNumber.length; // 7
length 프로퍼티: 문자열의 길이 (글자 수) 반환
accountNumber[0]; // "I"
// 대괄호 표기법: 문자열의 특정 위치(인덱스)에 접근 (0부터 시작)

let accountNumber = "N456545";
accountNumber[0]; // "N"
accountNumber[1]; // "4"
// 인덱스: 문자열에서 각 글자의 위치를 나타내는 숫자 (0부터 시작)

let accountNumber = "PT456545";
accountNumber.slice(0, 2); // "PT"
// slice 매서드(시작인덱스, 끝인덱스) : 시작 인덱스부터 끝 인덱스 전까지 잘라내기
// 시작 인덱스의 글자는 포함하지만, 끝 인덱스의 글자는 포함하지 않아요.(주의!)
accountNumber.slice(2); // "456545"
// 시작 인덱스부터 끝까지 잘라내기 (끝 번호를 안 적으면 맨 뒤까지 다 가져와요.) 

let accountNumber = "PT_456545";
accountNumber.replace("_", "-"); // "PT-456545"
// replace 매서드(찾을문자, 바꿀문자) : 문자열에서 특정 문자를 찾아서 다른 문자로 바꾸기
accountNumber.replace("_", " "); // "PT 456545"
accountNumber.replace("_", ""); // "PT456545"
// replace 매서드는 첫 번째로 찾은 문자만 바꿔줘요. 모두 바꾸려면 정규표현식을 사용해야 해요. (고급 내용)

console.log(accountNumber); // "PT_456545"
// replace 매서드는 원본 문자열을 바꾸지 않아요. 새로운 문자열을 반환할 뿐이에요.
// 원본 문자열을 바꾸고 싶다면, 다시 변수에 할당해야 해요.

accountNumber = accountNumber.replace("_", ""); 
console.log(accountNumber); // "PT456545"
// 이제 원본 문자열이 바뀌었어요!

// 프로퍼티 (.length): 상태를 확인하는 이름표 (괄호 X)
// 메서드 (.slice(), .repeat()): 일을 시키는 기술 (괄호 O)
// 재료 (매개변수 Parameter 또는 인자 Argument): () 안에 넣는 숫자나 글자에 따라 결과가 바뀜
// 결과 (Return Value): 프로퍼티나 메서드를 사용한 후에 얻어지는 값

//  뒤에 ()가 있으면 "이 기능을 실행해!"라는 뜻의 메서드이고, 없으면 "네 정보를 알려줘!"라는 뜻의 프로퍼티라고 이해하세요.
// 예: .length는 프로퍼티, .slice()는 메서드

// 자주 사용하는 문자열 메서드와 프로퍼티
// .length 글자 수 문자열의 길이(글자 수) 반환 프로퍼티
// .slice(n, m) 숫자 2개 n번부터 m번 앞까지 자르기 메서드
// .repeat(n) 숫자 1개 n번만큼 반복하기 메서드
// .charAt(n) 숫자 1개 n번째 한 글자만 가져오기 메서드
// .replace(A, B) 글자 2개 A를 찾아서 B로 바꾸기 메서드
// .toUpperCase() 모두 대문자로 바꾸기 메서드
// .toLowerCase() 모두 소문자로 바꾸기 메서드
// .trim() 앞뒤 공백 제거하기 메서드

// Data Types
// 1. Primitive Data Types (원시 자료형)
// - String : 문자, 따옴표로 감싸야 함 ("Hello", 'Hello')
// - Number : 숫자 (정수, 소수 모두 포함) (100, 3.14)
// - Boolean : 참/거짓 (true, false)
// - Null : 값이 없음 (의도적으로 비어있음을 나타낼 때 사용) (null)
// - Undefined : 값이 정의되지 않음 (변수를 만들고 값을 할당하지 않았을 때 자동으로 부여되는 값) (undefined)
// - Symbol : 고유한 식별자 (주로 객체의 속성 키로 사용) (Symbol('id'))

// 2. Non-Primitive Data Types (비원시 자료형)
// - Object : 여러 값을 하나로 묶는 복합 자료형 (객체, 배열, 함수 등등) ({}, [], function() {})

// Example:
const name = "John"; // String
const age = 30; // Number
const isStudent = false; // Boolean
const address = null; // Null
let phoneNumber; // Undefined
const uniqueId = Symbol('id'); // Symbol

const person = { // Object
    name: "Alice",
    age: 25
};

const numbers = [1, 2, 3, 4, 5]; // Array (Object)

function greet() { // Function (Object)
    console.log("Hello!");
}

price = 13.789;
Math.round(price); // 14 (반올림)
Math.floor(price); // 13 (내림)
Math.ceil(price); // 14 (올림)

price.toFixed(); // "14" (소수점 이하 반올림 반환, 문자열 형태)
price.toFixed(1); // "13.8" (소수점 첫째자리 반올림 반환, 문자열 형태)
price.toFixed(2); // "13.79" (소수점 둘째자리 반올림 반환, 문자열 형태) 
price.toFixed(3); // "13.789" (소수점 셋째자리 반올림 반환, 문자열 형태)

Math.random(); // 0.0 ~ 1.0 미만의 랜덤 소수
Math.max(10, 5, 20, 15); // 20
Math.min(10, 5, 20, 15); // 5

num1 = "4";
num2 = 8;

parseFloat(num1); // 4 (문자열을 소수로 변환)
num2.toString(); // "8" (숫자를 문자열로 변환)

parseFloat(num1) + parseFloat(num2); // 12 (문자열을 소수로 변환 후 덧셈)

// Array Methods
let array1 = [2,4,6,8];
// undefined
array1;
// (4) [2, 4, 6, 8]
// 0: 2
// 1: 4
// 2: 6
// 3: 8
// length: 4
array1.length;
// 4
array1[0];
// 2
array1[array1.length - 1];
// 8
array1.push(10);
5
array1;
// (5) [2, 4, 6, 8, 10]
array1.unshift(0);
// 6
array1;
// (6) [0, 2, 4, 6, 8, 10]
array2 = [12, 14, 16];
// (3) [12, 14, 16]
array1.concat(array2);
// (9) [0, 2, 4, 6, 8, 10, 12, 14, 16]
typeof array1;
// "object"


// Array(배열)은 모든 유형의 요소(숫자, 문자열, 객체 등)를 저장할 수 있으며 다음과 같은 조작 메서드를 제공합니다. 
// push() 및 pop() 항목을 추가하거나 제거하는 메서드를 제공합니다. 
// 배열의 길이는 항목이 추가되거나 제거됨에 따라 동적으로 변경될 수 있습니다.

//자바스크립트에서 배열은 기술적으로 객체입니다. 
//이는 목록 연산에 최적화된 특수한 유형의 객체이기 때문입니다.

// Object Methods
let student = { name: "John", age: 25 };
console.log(student.name); // Outputs: John
console.log(student["age"]); // Outputs: 25

skyStudent = {
    "name" : "John",
    "yearOfBirth" : 1980,
    "country" : "Italy"
};

skyStudent.name; // "John"
skyStudent["yearOfBirth"]; // 1980

// 객체는 키-값 쌍의 집합으로, 각 키(속성)는 문자열(또는 심볼)이며 
// 그 값은 어떤 데이터 유형이든 될 수 있습니다.
// 객체의 속성에 접근하려면 점 표기법(student.name)이나 
// 대괄호 표기법(student["age"])을 사용할 수 있습니다.

// 객체는 이름과 나이를 가진 학생처럼 다양한 속성을 가진 개체를 표현하는 데 이상적입니다.
// 객체는 배열과 달리 항목의 순서를 유지하지 않으며, 속성에 내재된 순서가 존재하지 않습니다.
// 항목의 순서가 중요한 목록을 다룰 때는 배열을 사용하고, 
// 키-값 쌍으로 구성된 무순서 관련 데이터 집합을 저장해야 할 때는 객체를 사용하세요. 
// 이러한 차이점을 이해하면 애플리케이션 요구사항에 따라 적절한 데이터 구조를 선택할 수 있습니다. 

skyStudent.id = "88b5"; // 새로운 속성 추가
skyStudent.name = "John Doe"; // 기존 속성 값 변경
delete skyStudent.country; // 속성 삭제
// 객체는 동적으로 속성을 추가, 수정 및 삭제할 수 있습니다.
console.log(skyStudent);
// {name: "John Doe", yearOfBirth: 1980, id: "88b5"}

student1 = { name: "Alice", age: 22 };
student2 = { name: "Bob", age: 24 };

students = [student1, student2];
students.length; // 2

student3 = { name: "Charlie", age: 23 };
students.push(student3);
students
// (3) [{…}, {…}, {…}]
// 0: {name: "Alice", age: 22}
// 1: {name: "Bob", age: 24}
// 2: {name: "Charlie", age: 23}
// length: 3

// 객체는 배열 내에 포함될 수 있으며, 
// 배열은 객체 내에 포함될 수 있습니다. 
// 이러한 중첩 구조는 복잡한 데이터 모델을 표현하는 데 유용합니다. 
// 예를 들어, 학생 객체의 배열을 만들어 여러 학생의 정보를 관리할 수 있습니다. 
// 각 학생 객체는 이름과 나이와 같은 속성을 가질 수 있습니다. 
// 이처럼 객체와 배열을 조합하여 다양한 데이터 구조를 설계할 수 있습니다.

// Boolean Data Type
// Boolean : 참/거짓 (true, false)이라는 두가지 값으로 구성되며, 소문자로 표기됩니다.
num1 = 8;
num2 = 10;
num1 > num2; // false
num1 < num2; // true
num1 == num2; // false
num1 != num2; // true

num2 = "8";
num1 == num2; // true (값만 비교, 타입은 무시)
num1 === num2; // false (값과 타입 모두 비교)
num1 !== num2; // true (값 또는 타입이 다르면 true)

// Boolean 값은 조건문과 반복문에서 주로 사용되며,
// 프로그램의 흐름을 제어하는 데 중요한 역할을 합니다. 
// 예를 들어, 특정 조건이 참일 때만 코드를 실행하거나,
// 반복문에서 특정 조건이 만족될 때까지 반복을 계속할 수 있습니다. 
// Boolean 값은 논리 연산자(AND, OR, NOT)와 함께 사용되어 
// 복잡한 조건을 평가하는 데도 활용됩니다.

//null vs undefined Data Type
let customer;
console.log(customer); // undefined

customer = { name: "Emma" };
console.log(customer.age); // undefined

customer = null;
console.log(customer); // null

// null은 개발자가 의도적으로 "값이 없음"을 나타내기 위해 할당하는 값입니다.
// 반면에 undefined는 변수가 선언되었지만 아직 값이 할당되지 않았거나,
// 객체의 속성이 존재하지 않을 때 자동으로 부여되는 값입니다.
// null은 명시적으로 값을 비우는 데 사용되고, 
// undefined는 변수나 속성이 아직 초기화되지 않았음을 나타냅니다.

null == undefined; // true (값만 비교)
null === undefined; // false (값과 타입 모두 비교)
null != undefined; // false (값만 비교)
null !== undefined; // true (값 또는 타입이 다르면 true)

typeof null; // "object" (자바스크립트의 오래된 버그)
typeof undefined; // "undefined"

// null과 undefined는 모두 "값이 없음"을 나타내지만,
// null은 개발자가 명시적으로 할당하는 값이고,
// undefined는 자바스크립트 엔진이 자동으로 부여하는 값입니다. 
// 이 둘을 구분하여 사용하는 것이 중요합니다.
