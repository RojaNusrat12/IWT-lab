// console.log("hello from js");
// document.write("Hello");
// alert("Alert!!!!");
// var floatnum = 3.96;
 //let age = "22";
 //var age1 = 10;
// document.write(floatnum + "<br>");
// document.write(age);
 //var name1 = "Roja";
// document.write(name1);
// console.log(name1);
// console.log(window);
//document.write("<p style ='color:purple;'> This is a para </p>");
// console.log(typeof(floatnum, age, name1));
// age = age.toString();
// console.log(typeof(age));
//document.write("<p style='color:green'; type = 'bold';> This is js</p>");
// age = age.toString();
// document.write(typeof(age));
//document.writeln(age, age1 + "<br>" );
//age = parseInt(age);
//console.log(typeof(age));
//console.log(floatnum.toPrecision(3));
// var firstnum = Number(prompt("Enter the first number"));
// var secnum = Number(prompt("Enter the second number"));
// document.write(firstnum+secnum);
//document.write(Number(prompt("First num"))+ Number(prompt("Second num")));
//var firstname = String(prompt("Enter first name"));
//var secname = String(prompt("Enter second name"));
// document.write(firstname+" "+secname);
//document.writeln("String concatenation:  "+ firstname.concat(" "+secname+"<br>"));
//document.write("Length of string:"+ secname.length);
//document.write(secname.toLowerCase());
//document.write(secname.slice(0,3));
//document.write(secname.charAt(3));
//let a = 20;
//let b = Number(prompt("Enter the second number"));
//document.write("The sum is:"+ (a+b));
//let b = ++a;
//document.write(b);
// function sq(num){
//     //var num = Number(prompt("Enter the num"));
//     document.write("The result is: "+ num*num+"<br>");
// }
// sq(16);
// sq(25);
// let username = prompt("Enter your idname:");
//     let password = prompt("Enter your pass:");
// function idpass(un,pass){
//     // let username = prompt("Enter your idname:");
//     // let password = prompt("Enter your pass:");
//     document.write("your id is"+ un);
//     document.write("your password is: "+pass);
// }
// idpass(username,password);
// let num1 = Number(prompt("Enter the first number:"));
// let num2 = Number(prompt("Enter the second number:"));
// function add(){
//     document.write("Addition is:"+ (num1+num2)+"<br>");
// }
// function sub()
// {
//     document.write("Sub is:"+ (num1-num2) + "<br>");
// }
// function mul()
// {
//     document.write("Mul is: "+ num1*num2+ "<br>");
// }
// add();
// sub();
// mul();

// (function show(num1,num2){
//     document.write("the addition is:"+ (num1+num2));
// })(9,10);
// //IIFEs(Immediately Invocable function Expessions)

// (function show_1(message){
//     document.write(message);
// })("<br/>IIFEs(Immediately Invocable function Expessions)");

//var firstNumber = 100;
//var secondNumber = 50;
// var thirdNumber = 40;

//console.log(firstNumber > secondNumber);
// console.log(firstNumber >= secondNumber);
// console.log(firstNumber < secondNumber);
// console.log(firstNumber <= secondNumber);
// console.log(firstNumber == secondNumber);
//console.log(firstNumber === secondNumber);
// console.log(firstNumber === "100");
// console.log(firstNumber != secondNumber);
// console.log(firstNumber !== secondNumber);
// console.log(firstNumber !== "100");
// var digit = Number(prompt("Enter any number:"));
// if(digit<=100)
//   document.write("<=100");
// else if(digit>200 && digit<=200)
//    document.write(">100 & <200");
(function sum(num1,num2){
    document.write(num1+num2);
})(12,28);