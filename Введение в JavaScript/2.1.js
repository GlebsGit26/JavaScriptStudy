//1.Запросить у пользователя его возраст и определить, кем он является: ребенком
//(0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

"use strict";
var yourAge = prompt("Введите возраст."); //запросили возраст
switch (true) {    //с помощью условного оператора вывели значение
    case (yourAge >= 0 && yourAge <= 2):
        alert("Является ребенком.");
        break;
    case (yourAge >= 12 && yourAge <= 18):
        alert("Является подростком.");
        break;
    case (yourAge >= 18 && yourAge <= 60):
        alert("Является взрослым.");
        break;
    case (yourAge > 60):
        alert("Является пенсионером.");
        break;
    default:
        alert("Нет таких значений.");
}
//Если отправить пустое значение, все равно возвращает "Является ребенком" не
//потратил 15 минут на решение, в итоге не стал терять время, решил спросить как
//исправить



//2.Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который
//расположен на этой клавише (1–!, 2–@, 3–# и т. д).

"use strict";
var yourNumber = prompt("Введите число от 0 до 9.");   //запросили число
switch (+yourNumber) { //с помощью условного оператора вывели значение
    case 1:
        alert("На этой клавише расположенсимвол: !");
        break;
    case 2:
        alert("На этой клавише расположенсимвол: @");
        break;
    case 3:
        alert("На этой клавише расположенсимвол: #");
        break;
    case 4:
        alert("На этой клавише расположенсимвол: $");
        break;
    case 5:
        alert("На этой клавише расположенсимвол: %");
        break;
    case 6:
        alert("На этой клавише расположенсимвол: ^");
        break;
    case 7:
        alert("На этой клавише расположенсимвол: &");
        break;
    case 7:
        alert("На этой клавише расположенсимвол: &");
        break;
    case 8:
        alert("На этой клавише расположенсимвол: *");
        break;
    case 9:
        alert("На этой клавише расположенсимвол: (");
        break;
    case 0:
        alert("На этой клавише расположенсимвол: )");
        break;
    default:
        alert("Нет таких значений.");

}




//3.Запросить у пользователя трехзначное и число и проверить, есть ли в нем
//одинаковые цифры.

"use strict";
var yourNumber = prompt("Введите трех значное число."); //запросили число
var yourNumber3 = yourNumber % 10; //расчитали 3 число
var yourNumber2 = Math.floor(yourNumber % 100 /10); //расчитали 2 число
var yourNumber1 = Math.floor(yourNumber / 100); //расчитали 1 число
if ((yourNumber3 == yourNumber2) || (yourNumber2 == yourNumber1) ||
(yourNumber3 == yourNumber1)) {
    alert("В вашем числе есть одинаковые цифры.");
} else {
    alert("В вашем числе нет одинаковых цифр.")
}   //с помощью оператора вывели значение



//4.Запросить у пользователя год и проверить, високосный он или нет. Високосный год
// либо кратен 400, либо кратен 4 и при этом не кратен 100.

var yourYear = prompt("Введите год."); //Запросили год
if (((yourYear % 400 == 0) || (yourYear % 4 == 0)) && (yourYear % 100 != 0)) {
alert("Этот год високосный.");
} else {
    alert("Этот год не високосный.");
}   //с помощью оператора рассчитали и вывели значение



//5.Запросить у пользователя пятиразрядное число и определить, является ли оно
//палиндромом.

"use strict";
var yourNumber = prompt("Введите пятиразрядное число."); //запросили число
var revNumber = String(yourNumber % 10) + String(Math.floor(yourNumber % 100 / 10));
//рассчитали является ли число палиндромом
if ((Math.floor(yourNumber / 1000)) == (revNumber)) {
    alert("Число является палиндромом.");
} else {
    alert("Число не является палиндромом");
}       //рассчитали и вывели значение оператором



//6.Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую
//валюту хочет перевести: EUR,UAN или AZN, и получает в ответ соответствующую сумму.

"use strict";
var yourMoney = prompt("Введите количество USD."); //запросили доллары
var currency = prompt("В какую валюту вы хотите перевети? (EUR, UAN, AZN):");
//запросили валюту
switch (currency) {
    case "EUR":
        alert("Сумма составит: " + 1.02 * yourMoney + " EUR");
        break;
    case "UAN":
        alert("Сумма составит: " + 7.19 * yourMoney + " UAN");
        break;
    case "AZN":
        alert("Сумма составит: " + 1.70 * yourMoney + " AZN");
        break;
    default: {
        alert("Недопустимое значение.");
    }
}       //рассчитали и вывели значения оператором



//7.Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от
// 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

"use strict";
var yourBuy = prompt("Введите цену вашей покупки.");  //запросили цену
switch (true) {
    case ((yourBuy >= 200) && (yourBuy <= 299)):
        alert("Вам предоставлена скидка 3%, ваш заказ будет стоить: " +
        (yourBuy - (yourBuy * 3 / 100))+ " руб.");
        break;
    case ((yourBuy >= 300) && (yourBuy <= 499)):
        alert("Вам предоставлена скидка 5%, ваш заказ будет стоить: " +
        (yourBuy - (yourBuy * 5 / 100))+ " руб.");
        break;
    case (yourBuy >= 500):
        alert("Вам предоставлена скидка 7%, ваш заказ будет стоить: " +
        (yourBuy - (yourBuy * 7 / 100))+ " руб.");
        break;
    default: {
        alert("Извините, скидка не предоставлена.")
    }
}       //рассчитали и вывели значения оператором



//8.Запросить у пользователя длину окружности и периметр квадрата. Определить,
//может ли такая окружность поместиться в указанный квадрат.

"use strict";
var longCircle = prompt("Введите длинну окружности(в см).");    //запросили длинну
var perSquare = prompt("Введите периметр квадрата(в см).");     //запросили периметр
(longCircle / Math.PI) <= (perSquare / 4) ? alert("Эта окружность поместиться в квадрат.")
: alert("Эта окружность не поместится в квадрат.");

//рассчитали и вывели значения тернарным оператором



//9.Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый
//правильный ответ начисляется 2 балла. После вопросов выведите пользователю
//количество набранных баллов.

"usw strict";
var answer = 0; //счетчик баллов
var question_оne = prompt("Сколько будет 2*2? Варианты ответа: '8','4','5'");
//Задали вопрос
if (question_оne == 4) {
    answer = (answer + 2);
}       //расчитали баллы
var question_two = prompt("Как называется наша планета? Варианты ответа: 'Земля','Вода','Солнце'");
//Задали вопрос
if (question_two == "Земля") {
    answer = (answer + 2);
} ////расчитали баллы
var question_three = prompt("Сколько на нашей планете океанов? Варианты ответа: '3','4','5'");
//Задали вопрос
if (question_three == 5) {
    answer = (answer + 2);
} ////расчитали баллы
alert("Вы набрали баллы в количестве: " + answer);      //вывели баллы



//10.Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите
//возможность перехода на следующий месяц, год, а также високосный год.

"use strict";
var yourDay = +prompt("Введите день.");  //запросили день месяц и год
var yourMonth = +prompt("Введите месяц.");
var yourYear = +prompt("Введите год.");
switch (true) {
    case ((yourMonth == 12) && (yourDay == 31)):
        yourYear++;
        yourDay = 0;
        yourMonth = 1;
        break;
    case (yourDay == 31):
        yourMonth++;
        yourDay = 0;
        break;
    case ((yourDay == 30) && ((yourMonth == 4) || (yourMonth == 6) ||
    (yourMonth == 9) || (yourMonth == 11))):
        yourMonth++;
        yourDay = 0;
        break;
    case (((yourYear % 400 == 0) || (yourYear % 4 == 0)) &&
    (yourYear % 100 != 0) && (yourMonth == 2) && (yourDay == 29)):
        yourMonth++;
        yourDay = 0;
        break;
    case ((yourMonth == 2) && (yourDay == 28) != ((yourYear % 400 == 0) ||
    (yourYear % 4 == 0)) && (yourYear % 100 != 0)):
        yourMonth++;
        yourDay = 0;
        break;
}
//СДЕЛАЛИ РАСЧЕТ ПЕРЕХОДА ДАТ С ПОМОЩЬЮ ОПЕРАТОРА
if (yourMonth < 10) {
        yourMonth = "0" + yourMonth;
    }
if (yourDay < 10) {
        yourDay = "0" + (yourDay +1);
    }
if (yourDay >= 10) {
        yourDay = yourDay +1;
    }
//ДОБАВИЛИ НОЛЬ ВПЕРЕДИ ЧИСЛА ЕСЛИ ЗНАЧЕНИЕ ДАТЫ МЕНЬШЕ 10
alert(((yourDay) + "." + yourMonth + "." + yourYear + "."));
