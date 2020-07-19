                // Chapter 38-42 (FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS)

// Task No 01

var a = +prompt("Enter Any Number For Base");
var b = +prompt("Enter Any Number For Power");
function power(a,b){
    document.write("The value of a raised to b is" + " " + Math.pow(a,b));
}

power(a,b);

// Task No 02

var year = +prompt("Enter Any For Checking Leap Year");
function leapYear(){
  if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
      document.write(year + " " + "is leap year");
  }
  else{
      document.write(year + " " + "is not leap year");
  }
}
leapYear()

// Task No 03

function areaOftriangle(a,b,c,s){
    var area = Math.sqrt(s*(s - a)*(s - b)*(s - c));
    document.write("The Area of Triangle is" + " " + area);
    
}

function semiPerimeter(){
    var a = +prompt("Enter the First Side of Triangle");
    var b = +prompt("Enter the Second Side of Triangle");
    var c = +prompt("Enter the Third Side of Triangle");
    var s = (a + b + c)/2;
    areaOftriangle(a,b,c,s)
}
semiPerimeter()

// Task No 04

function mainFunction(){
    var inp1= prompt("Input first number")*1;
    var inp2= +prompt("Input second number");
    var inp3= +prompt("Input 3rd number");
    var avg=  calAverage(inp1,inp2,inp3);
    var per = calPercent(inp1,inp2,inp3);
    document.write("Average Marks is ${avg} <br> Percentage is ${per}");
}
const  calAverage= (inp1,inp2,inp3)=> (inp1+inp2+inp3)/3;
const  calPercent= (inp1,inp2,inp3)=> ((inp1+inp2+inp3)/300)*100;
mainFunction()

// Task No 05

function indexOf(chars,char){
    var c = chars.split("");
  
    const fun = c.map((x,i) => {
      if(x.toLowerCase()===char){
       return i
      } 
    })
       console.log(fun[0] !== undefined? fun[0]:"Value not Found");
    }
indexOf("Characters",'c')

// Task No 06

var string = prompt("Enter Any Word Of English For Removing Vowels From Word")
string = string.replace( /[aeiou]/g, '' );
document.write(string);

// Task No 07

function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;
  
    for (const letter of str.toLowerCase()) {
      switch (letter.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          {
            if (haveSeenVowel) {
              count++;
              haveSeenVowel = false;
            } else {
              haveSeenVowel = true;
            }
            break;
          }
        default:
          haveSeenVowel = false
      }
    }
  
    return count
  }
  
document.write(findOccurrences());

// Task No 08

const calculateMeters= num=> num*1000;
const calculateCentiMeters= num=> num * 1000 * 100;
const calculateFeet= num=>  num * 3280.84;
const calculateInches= num=> num * 39370.08;
function calculateMain(){
    var num = prompt("Enter distance in kilometers: ");
    document.write('Distance in KM ' + num + "<br>" + 'In meters' + calculateMeters(num) + "<br>"  + 'In Centimeter' + calculateCentiMeters(num) + "<br>"  + 'In Feet' + calculateFeet(num) + "<br>"  + 'In Inches' + calculateInches(num))
}
calculateMain();

// Task No 09

function main()
{

    var emps = +prompt("Enter Number of Employees");
    var count = 1, working_hours, over_time;
    var over_time_pay;

    while(count<=emps)
    {
        working_hours = +prompt("Enter the working hours of employee no: "+ count);
        if(working_hours>40)
        {
            over_time = working_hours - 40;
            over_time_pay = over_time * 12.00;
            console.log(`Employee No ${count} overtime pay is ${over_time_pay}`);
        }
        else
            console.log("You have to work for more than 40 hours to get over time pay\n");

        count++;
    }
}
main();

// Task No 10

function mainCurrency()
{
	var amount = +prompt("Please input amount for withdraw : ");
	//calculations
	console.log("\n\nRequired notes of Rs. 100  :  ", Math.floor(amount / 100));
	console.log("\n\nRequired notes of Rs. 50   :  ",  Math.floor((amount % 100) / 50));
	console.log("\n\nRequired notes of Rs. 10   :  ",  Math.floor((((amount % 100) % 50) / 10)));
	console.log("\n\nAmount still remaining Rs. :  ",  Math.floor((((amount % 100) % 50) % 10)));

}
mainCurrency();

                                // Chapter 43-48 (EVENTS)

// Task No 11

            // See HTML File

// Task No 12

            // See HTML File

// Task No 13

            // Also See HTML File

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}

// Task No 14

            // Also See HTML File

function changeImage(id,src){
    var image = document.getElementById(id);
    image.src = src
}

// Task No 15

            // Also See HTML File

var x = 0;

document.getElementById('output-area').innerHTML = x;

function button1() {
  document.getElementById('output-area').innerHTML = ++x;
}

function button2() {
  document.getElementById('output-area').innerHTML = --x;
// }

                                // Chapter 49-52 (EVENTS)

// Task No 16

            // Also See HTML File

function testVariable() {
    var strText = document.getElementById("textOne").value;          
    var strText1 = document.getElementById("textTwo").value;
    var result = strText + ' ' + strText1;
    document.getElementById('spanResult').textContent = result;
     
}

// Task No 17

            // Also See HTML File

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

// Task No 18

            // Also See HTML File

function edit_row(no){
    document.getElementById("edit_button"+no).style.display="none";
    document.getElementById("save_button"+no).style.display="block";
                
    var name=document.getElementById("name_row"+no);
    var country=document.getElementById("country_row"+no);
    var age=document.getElementById("age_row"+no);
                
    var name_data=name.innerHTML;
    var country_data=country.innerHTML;
    var age_data=age.innerHTML;
                
    name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
    country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
    age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
}
            
function save_row(no){
    var name_val=document.getElementById("name_text"+no).value;
    var country_val=document.getElementById("country_text"+no).value;
    var age_val=document.getElementById("age_text"+no).value;
            
    document.getElementById("name_row"+no).innerHTML=name_val;
    document.getElementById("country_row"+no).innerHTML=country_val;
    document.getElementById("age_row"+no).innerHTML=age_val;
            
    document.getElementById("edit_button"+no).style.display="block";
    document.getElementById("save_button"+no).style.display="none";
}
            
function delete_row(no){
    document.getElementById("row"+no+"").outerHTML="";
}
            
function add_row(){

    var new_name=document.getElementById("new_name").value;
    var new_country=document.getElementById("new_country").value;
    var new_age=document.getElementById("new_age").value;
                
    var table=document.getElementById("data_table");
    var table_len=(table.rows.length)-1;
    var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";
            
    document.getElementById("new_name").value="";
    document.getElementById("new_country").value="";
    document.getElementById("new_age").value="";
}

                                // Chapter 53-58 (EVENTS)

// Task No 19

            // Also See HTML File

function changeImage_1(){
    var image_1 = document.getElementById('img_1');
    image_1.style.width = '40%'
}

function changeImage_2(){
    var image_2 = document.getElementById('img_2');
    image_2.style.width = '40%'
}

function changeImage_3(){
    var image_3 = document.getElementById('img_3');
    image_3.style.width = '40%'
}

function changeImage_4(){
    var image_4 = document.getElementById('img_4');
    image_4.style.width = '40%'
}

// Task No 20

            // Also See HTML File

function zoomin() { 
    var MMAA = document.getElementById("zoom"); 
    var currWidth = MMAA.clientWidth; 
    MMAA.style.width = (currWidth + 100) + "px"; 
} 
  
function zoomout() { 
    var MMAA = document.getElementById("zoom"); 
    var currWidth = MMAA.clientWidth; 
    MMAA.style.width = (currWidth - 100) + "px"; 
}

                               // Chapter 58-67 (DOM)

// Task No 21

// (i)

var a = document.getElementById('main-content');
console.log(a)

// (ii)

var a = document.getElementById('main-content')
console.log(a.childNodes)

// (iii)

var a = document.getElementsByClassName('render')
console.log(a)

// (iv)

document.getElementById("first-name").value = "Muhammad Sami";

// (v)

document.getElementById("last-name").value = "Tariq"
document.getElementById("email").value = "s.m.sami125@gmail.com"

// Task No 22

// (i)

var a = document.getElementById('form-content')
console.log(a.nodeType)

// (ii)

var a = document.getElementById('last-name')
console.log(a.nodeType)
console.log(a.childNodes)

// (iii)

var textnode = document.createTextNode("middleName");
var item = document.getElementById("lastName").childNodes[0];
console.log(item.replaceChild(textnode, item.childNodes[0]));

// (iv)

var a = document.getElementById('main-content')
console.log(a.firstChild)
var a = document.getElementById('main-content')
console.log(a.lastChild)

// (v)

var a = document.getElementById('lastName')
console.log(a.nextSibling)
var a = document.getElementById('lastName')
console.log(a.previousSibling)

// (vi)

var a = document.getElementById('email')
console.log(a.parentNode)
console.log(a.nodeType)