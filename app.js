/*=====================================================
CHAP: 21-25 
STRING METHODS 
=====================================================*/

//Q1

// var a = prompt("Enter First name")
// var b = prompt("Enter Last name")
// var resA = a.split(' ').map(c => c[0].toUpperCase() + c.substr(1).toLowerCase()).join(' ')
// var resb = b.split(' ').map(c => c[0].toUpperCase() + c.substr(1).toLowerCase()).join(' ')
// alert("Welcome "+resA+" " +resb)

//Q2



// var a = prompt("Please Enter your fav mobile phone model","IPhone XS MAX");
// var n = a.length;
// alert("Your favorite phone is: "+a +" length of string is : "+ n);


//Q3

// var a = "Pakistani";
// var n = a.indexOf("n");
// alert ("String: "+ a +"\nIndex of 'n': "+n);


//Q4


// var a = "Hello World";
// var n = a.lastIndexOf("l");
// alert ("String: "+ a +"\nIndex of 'l': "+n);


//Q5


// var a = "Pakistani";
// var res = a.substring(3,4);
// alert("Sring: "+a+"\nCharacter at index 3 is: "+res);


//Q6


// var a = prompt("Enter Your First Name: ");
// var b = prompt("Enter Your Last Name: ");
// var res = a.concat(b);
// alert("Welcome "+res)




//Q7


// var a = "Hyderabad";
// var b = a.replace("Hyder", "Islam");
// alert("City: "+a+"\nAfter replacement: "+b)




//Q8


// var a = "Ali and Sami are best friends. They play cricket and football together.";
// var b = a.replace(/and/gi, "&");
// alert("Before Replacement: \n"+a+"\n\nAfter Replacement: \n"+b)


//Q9

// var aNum = "472";
// var a = parseInt(aNum);
// alert("Value:"+aNum+"\nType: String"+"\nValue:"+a+"\nType: number")


//Q10

// var a = prompt("Enter a word to convert it to UpperCase");
// var b = a.toUpperCase();
// alert("User Input: "+a+"\nUpper Case: "+b)


//Q11


// var a = prompt("Enter a word")
// var b = a.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ')
// alert("User Input: "+a+"\nTitle Case: "+b)


//Q12 

// var a = prompt("Enter a number i.e: ","35.36");
// a = a.split('.').join('')
// alert(a)

//Q13


// var input = prompt("Enter username");

// for (var i = 0; i < input.length; i++) 
// {
// 	var a = input.charCodeAt(i)
	
// }
// if (a==33 ||a==64 ||a==44 ||a==46){
// 	alert("Please Enter a valid username")
// }
// else
// {
// 	alert(input)
// }

//Q14


// var A = ["Cake", "Apple pie", "Cookie", "Chips", "Patties"];
// var b = prompt("Welcome to the ABC Bakery. What do you want to order?")
// if (A.indexOf(b) == 0 || A.indexOf(b) == 1 || A.indexOf(b) == 2 || A.indexOf(b) == 3 || A.indexOf(b) == 4 )
 
// alert(b + " is available at index "+A.indexOf(b)+" in our bakery");
// else 
// 	alert("We are Sorry. "+b+" is not available in our bakery")

//Q15

// var Getpass = prompt("Enter password");
// var a = Getpass.charAt(0);
// var n = Getpass.length;
// for (var i = 0; i < Getpass.length; i++) 
// {
// 	var res = Getpass.charCodeAt(i)	
// }
// if (res==33 ||res==64 ||res==44 ||res==46){
// 	alert("Enter number or alphabetes only")
// }
// else if (a==1 || a == 2|| a == 3|| a == 4|| a == 5|| a == 6|| a == 7|| a == 8|| a == 9) {
// 	alert("Password Cannot Begin with a number")
// }
// else if (n < 6)
// {
// 	alert("Enter more than 6 letters")
// }
// else
// {
// 	alert(Getpass)
// }

//Q16

// var university = "university of karachi";
// var a = university.split("");
// document.write(a)


//Q17

// var a=prompt("Enter a word or sentence")
// var b = a[a.length -1];
// alert("Last letter: "+ b)



//Q18



// var first = (("The quick brown fox jumps over the lazy dog ".match(/the/g,) || []).length);
// var before = (("The quick brown fox jumps over the lazy dog ".match(/The/g,) || []).length);
// var both = first+before;
// alert("Text: The quick brown fox jumps over the lazy dog\nThere are "+both+" occurrence(s) of the word 'the'")


/*=====================================================
CHAP: 26-30 
MATH METHODS 
=====================================================*/

//Q1


// var a = +prompt("Please Enter a positive integer","98.67");
// var rO = Math.round(a);
// var floor = Math.floor(a);
// var ceil = Math.ceil(a);

// alert("Number: "+a+"\nRound off value: "+rO+"\nFloor value: "+ floor+"\nCeil value: "+ceil)


//Q2

/*
var num = +prompt("Please Enter a negative integer");
var roundOff = Math.round(num);
var floor = Math.floor(num);
var ceil = Math.ceil(num);

alert("number: "+num+"\nround off value: "+roundOff+"\nfloor value: "+ floor+"\nceil value: "+ceil)
*/


//Q3


// var num = +prompt("Please Enter a number");
// a = Math.abs(num)
// alert("number is : "+num+"\nabsolute value is : "+a)

///Q4


// var rand = Math.floor((Math.random() * 10) + 1);
// document.write("Random Dice value is: "+rand)



//Q5


// var a = Math.random()
// var b = Math.round(a)
// if(b===1)
// {	
// 	document.write("Random dice is: "+b)
// 	document.write("<br>Tails")
// }
// else
// {	document.write("Random dice is: "+b)
// 	document.write("<br>Heads")
// }

//Q6

// var rand = Math.floor((Math.random() * 100) + 1);
// document.write("Random number between 1 - 100 is : "+rand)



//Q7

// var kg= prompt("Please enter your weight")
// var a= parseInt(kg)
// document.write("The weight of user is : "+a+" kilograms")


//Q8
// var a = 5;
// var guess = +prompt("Guess the number")
// if (guess == a ){
// 	alert("Bingo! Correct answer")
// }
// else if (guess == 6 || guess == 4)
// {
// 	alert("Close enough to the correct answer")
// }
// else
// {
// 	alert("Better luck Next Time! \nTry Again")
// }

/*=====================================================
CHAP: 31-34
DATE METHODS 
=====================================================*/

//Q1

// var DateTime = new Date();
// document.write(DateTime) 


//Q2

// var mOnth = new Date();
// var M = new Array();
// M[0] = "January";
// M[1] = "February";
// M[2] = "March";
// M[3] = "April";
// M[4] = "May";
// M[5] = "June";
// M[6] = "July";
// M[7] = "August";
// M[8] = "September";
// M[9] = "October";
// M[10] = "November";
// M[11] = "December";
// var ans = M[mOnth.getMonth()];
// document.write("Current Month: "+ans)



//Q3 


// var a = new Date();
// var dayName = new Array(7);
// dayName[0] = "Sun";
// dayName[1] = "Mon";
// dayName[2] = "Tue";
// dayName[3] = "Wedn";
// dayName[4] = "Thu";
// dayName[5] = "Fri";
// dayName[6] = "Sat";
// var n = dayName[a.getDay()];
// document.write("Today is : "+n)

//Q4

// var a = new Date();
// var dayName = new Array(7);
// dayName[0] = "Its Fun day";
// dayName[1] = "Mon";
// dayName[2] = "Tue";
// dayName[3] = "Wedn";
// dayName[4] = "Thu";
// dayName[5] = "Fri";
// dayName[6] = "Its Fun day";
// var n = dayName[a.getDay()];
// document.write("Today is : "+n)


//Q5

// var a = new Date();
// var n = a.getDate();
// if(n<=15)
// {
// document.write("First fifteen days of the Month")
// }
// else
// {
// 	document.write("Last days of the Month")
// }


//Q6



// var d = new Date();
// var n = d.getTime();
// var a = new Date();
// document.write("Current Date: "+a) 
// document.write("<br>Eclapsed mini seconds since January 1, 1970: "+n);
// document.write("<br>Eclapsed minutes since January 1, 1970: "+n/6000);

//Q7


// var DAte = new Date();
// var Time = DAte.getHours();
// if(Time<=12)
// {
// document.write("Its AM")
// }
// else
// {
// document.write("Its PM")
// }


//Q8


// var date = new Date("December 31, 2020")
// document.write("Later date: "+date)

//Q9


// var date = new Date("June 18,2015")
// var mili = date.getTime();
// var currentDay = new Date();
// var currentMilisecs = currentDay.getTime();
// var difference = currentMilisecs - mili;
// var AccurateDays = Math.floor(difference/(1000*60*60*24))
// document.write(AccurateDays+ " days have passed since 1st Ramadan, 2015 ")


//Q10


// var date = new Date("January 1,2020")
// var mili = date.getTime();
// var currentDay = new Date();
// var currentMiliSecs = currentDay.getTime();
// var dif = currentMiliSecs - mili;
// var AcurateSecs = Math.floor(dif/(24*30))
// var a = new Date();
// document.write("on reference date "+a+"<br>") 
// document.write("\n("+AcurateSecs+ ") seconds have passed since the beginning of : 2015")

//Q11


// var current = new Date("June 16, 2020 18:17:00")
// var oneHourAgo = new Date("June 16, 2020 17:17:00")
// document.write("Current date: "+ current)
// document.write("<br>1 hour ago, it was ("+oneHourAgo)

//Q12

// var CurrentTime = new Date("June 16, 2020 18:17:00")
// var OHHB = new Date("June 16, 1920 18:17:00")
// document.write("Current date: "+ CurrentTime)
// document.write("<br>100 years back, it was ("+OHHB) 

//Q13


// var currentYear = 2020;
// var DaTe = new Date(prompt("Enter Age","Jan 1, 1970"))
// var DaTemili = DaTe.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - DaTemili;
// var age = Math.round(diff/(1000*60*60*24*30*12))
// var year = Math.round(currentYear-age)
// document.write("Your Age is : "+age+" <br>Your birth year is: "+year)


//Q14


// var Name = prompt("Enter your name : ")
// var units = +prompt("Enter Number of units : ")
// var ChargesPerUnits = +prompt("Please Enter Number of Charges Per Unit : ")
// document.write("<h1>K-Electric Bill</h1>")	
// var a = new Date();
// var M = new Array();
// M[0] = "January";
// M[1] = "February";
// M[2] = "March";
// M[3] = "April";
// M[4] = "May";
// M[5] = "June";
// M[6] = "July";
// M[7] = "August";
// M[8] = "September";
// M[9] = "October";
// M[10] = "November";
// M[11] = "December";
// var c = M[a.getMonth()];
// document.write("Name: "+Name)
// document.write("<br>Current Month: "+c)
// document.write("<br>Number of units: "+units)
// document.write("<br>Charges per unit: "+ChargesPerUnits)
// document.write("<br>Net Amount Payable (within Due Date) : "+units*ChargesPerUnits)
// document.write("<br>Late Payment Surcharge: 350")
// document.write("<br>Gross Amount Payable (after Due Date): "+(units*ChargesPerUnits+350))


/*=====================================================
CHAP: 35-38 
FUNCTION
=====================================================*/

//Q1


// function currentTime() 
// {
// 	var a = new Date();
// 	document.write(a)  
// }
// currentTime();

//Q2


// function Welcome()
// {
// var a = prompt("Enter your First Name : ");
// var b = prompt("Enter your Last Name : ");
// alert("Welcome "+a+" "+b)
// }
// Welcome();


//Q3 

// function sum(a,b)
// {
// var a = +prompt("Enter First Number : ");
// 	var b = +prompt("Enter Second Number : ");
// 	return a+b
// }
// document.write("Sum is = " +sum())

//Q4


// function calc(num_1,opr,num2)
// {
// 	var num_1 = +prompt("Enter first number ")
// 	var opr = prompt("Enter operator number ")
// 	var num2 = +prompt("Enter second number ")
// 	if(opr==="+")
// 	{
// 		return num_1+num2
// 	}
// 	else if(opr==="-")
// 	{
// 		return num_1-num2
// 	}
// 	else if (opr==="*")
// 	{
// 		return num_1*num2
// 	}
// 	else if(opr==="/")
// 	{
// 		return num_1/num2
// 	}
// }
// var ans = calc();
// document.write(ans)

//Q5


// function square(a)
// {
// 	return a*a
// }
// ans = square(10);
// document.write(ans)


//Q6


// function factorial(number)
// {
// var answer = 1
// if (number == 0 || number == 1)
//   	{
//   return answer;
//   	}
// else
//  	{
//    for(var i = number; i >= 1; i--)
//    	{
//       answer = answer * i
//    	}
//     return answer;
// 	}  
// }
// var ans = factorial(7)
// document.write(ans);



//Q7

// function Counting(s,e)
// {
// 	var s = +prompt("Enter Starting Number")
// 	var e = +prompt("Enter nth number")
// 	for(var a=s; a<=e; a++)
// 	{
// 		document.write(a+"<br>")
// 	}
// }
// Counting();



//Q8


// function calculateHypotenuse() 
// 	{
//   var base = +prompt("Enter Base");
//   var perp = +prompt("Enter Perpendicular");
//   function calculateSquare() {
//     var hypotenuse = (base*base)+(perp*perp);
//     alert("Base: "+base+"\n"+"Perpendicular: "+perp+"\nHypotenuse = "+hypotenuse);

//   	}
//   return calculateSquare;
// }
// var myFunc = calculateHypotenuse();
// myFunc();


// Q9

// function AreaOfRec(width,height)
// 	{
// 	return width*height
// 	}
// ans = AreaOfRec(20,5);
// document.write(ans)


// function AreaOfRec(width =50,height = 40)
// 	{
// 	return width*height
// 	}
// ans = AreaOfRec();
// document.write(ans)


//Q10



// function PalindromeFunction(entry)
// 	{
//    var ab = entry;
// 	var ccount = 0;
	
// 	if ((ab.length) % 2 === 0) {
// 		ccount = (ab.length) / 2;
// 	}

// 	for (var x = 0; x < ccount; x++) {
 
// 		if (ab[x] != ab.slice(-1-x)[0]) {
// 			document.write("Not a palindrome.");
// 			return false;
// 		}
// 	}
// 	document.write("Palindrome.");
// 	return true;
// }
// var i = prompt("Enter name or Number")
// var a =PalindromeFunction(i);



//Q11


// function Title()
// 	{
// 	var a = "the quick brown fox"
// 	var ans = a.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ')
// 	alert("Before: "+a+"\nTitle Case: "+ans)
// 	}
// Title();


//Q12


// function lengthCheck(a)
// {
//   var array1 = a.match(/\w[a-z]{0,}/gi);
//   var ans = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(ans.length < array1[x].length)
//     {
//     ans = array1[x];
//     } 
//   }
//   return ans;
// }
// document.write(lengthCheck('Web Development Tutorial'));


//Q13


// function checkletter(a, letter) 
// {
//  var countLetter = 0;
//  for (var Pos = 0; Pos < a.length; Pos++) 
//  {
//     if (a.charAt(Pos) == letter) 
//       {
//       countLetter += 1;
//       }
//   }
//   return countLetter;
// }

// document.write(checkletter('w3resource.com', 'o'));

//Q14

function CircumferenceCheck(radius)
{	var radius= +prompt("Enter the Radius of circle for Circumference")
	return 2*3.1462*radius;
}
function AreaCheck(radius)
{	var radius= +prompt("Enter the Radius of circle for Area ")
	return 3.1462*radius*radius;
}
var input = prompt("Press 1 for Circumference \nPress 2 for Area")
if (input==="1") {
	ans = CircumferenceCheck();
document.write("Circumference of circle: "+ans)
}
else if(input==="2")
{
	ans = AreaCheck();
	document.write("Area of circle: "+ans)
}