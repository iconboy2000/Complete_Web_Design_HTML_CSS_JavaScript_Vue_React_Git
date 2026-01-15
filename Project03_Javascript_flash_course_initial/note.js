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

