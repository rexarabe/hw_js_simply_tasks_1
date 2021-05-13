"use strict";

/*
Задание 1
объявите переменные со значениями “hello js”, 100, 5.5, true а также константу со значением красного цвета. Выведите все значения в консоль
*/
let firstVariable = "Hello js",
 secondVariable = 100,
thirdVariable= 5.5;
const color = "red";

console.log(`${firstVariable}, ${secondVariable}, ${thirdVariable}, ${color}`);


/*
Задание 1*
объявите необходимые переменные для вычисления площади треугольника по форомуле s = ½ * a * h. выполните вычисления
*/
function surfaceOfTriangle(height, edges){
    return 0.5*height*edges
}
const a = 5,
    h = 6;
let s = surfaceOfTriangle(a,h);
console.log(`The surface of the triangle with edge 5 and height as 6 equal ${s}`);
/*
Задание 2
напишите программу перевода метров в сантиметры и дюймы
*/

function convertFromMeterToCentimeter(mesureInMeter){
    return mesureInMeter*100
}
const lengthOfRulerInMeter = 0.2;
let lengthOfRulerInCentimeter = convertFromMeterToCentimeter(lengthOfRulerInMeter);
console.log(`The length of a Ruler which is 0.2 meter will be ${lengthOfRulerInCentimeter} in centimeters`);

/*Задание 3
вывести таблицу умножения на 9
*/

let number, result;
for(number =0; number < 10; number++){
    result=number*9;
    console.log(`${number} multiply by 9 equal ${result}`);
}


 /*
Задание 3*
вывести полную таблицу умножения для всех чисел от 1 до 9
*/
console.log(`We are going to show all the table of multiplication \n We have it as follow: `);
let number1, number2, result2;
for(number1 =0; number1 < 10; number1++){
    for(number2 = 0; number2<10; number2++){
        result2 = number1 * number2;
        console.log(`${number1} multiply by ${number2} equal ${result2}`);
    }
    console.log("\n");
    }
/*
Задание 4
вычислить стоимость заказа пиццы. известно что данный вид пиццы за 100 грамм стоит M грн. скидка 3% предоставляется если сумма заказа превышает 500 грн или вес заказ больше 1 кг
*/
function howMuchCostPizza(price, massOfPizza){
    if(price > 500 || massOfPizza > 1000) // price in Hrivna, while the mass of Pizza is in gramms
        price*=0.93;
    else price*=1;
    console.log(`The price of the Pizza is: ${price}`);
}
//We have pizza with price 600 and mass 400 gramm

howMuchCostPizza(600,400);
console.log(`\n`);

/*
Задание 5
вывести первых 10 значений степени 2
*/
let firstValue,secondValue;
for(firstValue = 0; firstValue<10; firstValue++) {
    secondValue = firstValue* firstValue;
    console.log(`The square value of ${firstValue} is : ${secondValue}`);
}
console.log(`\n`);

/*
Задание 6
вычислить сумму нечетных чисел от 1 до 30
*/
let unevenNumber =1, result3 =0;
for(unevenNumber = 1; unevenNumber<30; unevenNumber++){
    if(unevenNumber %2 === 0)
    result3=result3+0;
    else result3=result3+unevenNumber;

}
console.log(`The sums of uneven numbers from 1 to 30 is ${result3} \n`);


/*
Задание 6*
вывести таблицу значений для функции y = -3x2 + 5x - 2 для значения х от -2 до 2 с шагом 0.5
*/

function y(x){
    return -3*x^2+5*x -2;
}
let x1;
for(x1=-2; x1<=2; x1+=0.5){
    console.log(`The output of the functions f(x) is where x = ${x1} is ${y(x1)}\n`);
}

/*
Задание 7
спросить у пользователя общеизвестный факт на ваш вкус и высветить ему сообщение правильно или нет. например, “как называется наша планета?”
*/
let answer=prompt(`Как называется наша планета?`);
if(answer === 'Земля' || answer ==='земля' || answer === 'Earth' || answer==='earth')
    alert(`Правильно!`)
else
    alert(`Неправильно!`);

/*
Задание 7*
попросить пользователя решить пример “1+1=?” (или любой другой пример на ваш вкус). высвечивать (повторять) пример до тех пор пока пользователь не решит его
*/
let answerNumber = Number(prompt('1+1'));
while(answerNumber !== 2){
    alert('Неправильно!');
    answerNumber = Number(prompt('1+1'));
}
alert('Правильно');

/*
Задание 8 *
проверить является ли введенное число простым
*/

let numberVerify = Number(prompt(`Введитие число`));
if(numberVerify % 2 ===0)
    {
        console.log(`${numberVerify} простой \n`);
    }
else console.log(`Не простой \n`);

/*
Задание 9*
напишите программу “угадай число”. для случайного числа используйте Math.random()
https://schoolsw3.com/js/js_random.php

* */
