var cyc = 0;
var cycle = 0;
var numa = "";
var num = "";
var num2 = "";
var num3 = "";
var num4 = "";

var numb = "";
var num2b= "";
var num3b = "";
var num4b= "";


var numc = "";
var num2c= "";
var num3c = "";
var num4c= "";



var numd = "";
var num2d= "";
var num3d = "";
var num4d= "";


var nume = "";
var num2e= "";
var num3e = "";
var num4e= "";





var code = 0;
var xen = 0;

var aspex = 9;

/*
var numbers = "1,2,3,4,5,6,7,8,9"
numbers.split(",")
var array = [3,5,7,9,12,15,17,20,25];


for(var qqq = 0; qqq < array.length;qqq++){

for(var ppp= 0; ppp< array.length;ppp++){

if ( array[qqq] + array[ppp] == 37){
// qqq and ppp are the magic numbers, reveal
rand = numbers[qqq]


if (qqq > array.length/2){
app.ShowPopup("ACK" );
code++;
}


if (qqq > array.length/2){
app.ShowPopup("NULL" );
code = 0;
}

}

}
}

*/

var rand  =  Math.floor(Math.random() * (10)) + 0;
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "Horizontal" );	

	btnL= app.CreateButton( "0", 0.15, 0.1 ); 
	btnL.SetOnTouch( btnL_OnTouch ); 
	lay.AddChild( btnL ); 

	btnR= app.CreateButton( "1", 0.15, 0.1 ); 
	btnR.SetOnTouch( btnR_OnTouch ); 
	lay.AddChild( btnR ); 



	btncalc= app.CreateButton( "low", 0.17, 0.1 ); 
	btncalc.SetOnTouch( btncalc_OnTouch ); 
	lay.AddChild( btncalc ); 

	btncalc2= app.CreateButton( "high", 0.17, 0.1 ); 
	btncalc2.SetOnTouch( btncalc2_OnTouch ); 
	lay.AddChild( btncalc2 ); 





	btnL2= app.CreateButton( "0", 0.15, 0.1 ); 
	btnL2.SetOnTouch( btnL2_OnTouch ); 
	lay.AddChild( btnL2 ); 

	btnR2= app.CreateButton( "1", 0.15, 0.1 ); 
	btnR2.SetOnTouch( btnR2_OnTouch ); 
	lay.AddChild( btnR2 ); 

/*

	btn= app.CreateButton( "reveal", 0.23, 0.1 ); 
	btn.SetOnTouch( btn_OnTouch ); 
	lay.AddChild( btn ); 


	btnroll= app.CreateButton( "reroll", 0.23, 0.1 ); 
	btnroll.SetOnTouch( btnroll_OnTouch ); 
	lay.AddChild( btnroll ); 
*/

//xen =  Math.floor(Math.random() * (4)) + 2;



for(var a = 0; a < 100;a++){

var b =  Math.floor(Math.random() * (2)) + 0;
 numa += b + ",";
}




for(var a = 0; a < 4;a++){

var b =  Math.floor(Math.random() * (2)) + 0;
 num += b;
}


for(var a = 0; a < 4;a++){

var b =  Math.floor(Math.random() * (2)) + 0;
 num2 += b;
}


for(var a = 0; a < 4;a++){

var b =  Math.floor(Math.random() * (2)) + 0;
 num3 += b;
}


for(var a = 0; a < 4;a++){

var b =  Math.floor(Math.random() * (2)) + 0;
 num4 += b;
}






for(var a = 0; a < 4;a++){

var b =  Math.floor(Math.random() * (2)) + 0;
 numb += b;
}



for(var a = 0; a < 4;a++){

var b =  Math.floor(Math.random() * (2)) + 0;
 num2b += b;
}


for(var a = 0; a < 4;a++){

var b =  Math.floor(Math.random() * (2)) + 0;
 num3b += b;
}


for(var a = 0; a < 4;a++){

var b =  Math.floor(Math.random() * (2)) + 0;
 num4b += b;
}




for(var a = 0; a < 4;a++){

var b =  Math.floor(Math.random() * (2)) + 0;
 numc += b;
}



for(var a = 0; a < 4;a++){

var b =  Math.floor(Math.random() * (2)) + 0;
 num2c += b;
}


for(var a = 0; a < 4;a++){

var b =  Math.floor(Math.random() * (2)) + 0;
 num3c += b;
}


for(var a = 0; a < 4;a++){

var b =  Math.floor(Math.random() * (2)) + 0;
 num4c += b;
}








for(var a = 0; a < 4;a++){

var b =  Math.floor(Math.random() * (2)) + 0;
 numd += b;
}



for(var a = 0; a < 4;a++){

var b =  Math.floor(Math.random() * (2)) + 0;
 num2d += b;
}


for(var a = 0; a < 4;a++){

var b =  Math.floor(Math.random() * (2)) + 0;
 num3d += b;
}


for(var a = 0; a < 4;a++){

var b =  Math.floor(Math.random() * (2)) + 0;
 num4d += b;
}









for(var a = 0; a < 4;a++){

var b =  Math.floor(Math.random() * (2)) + 0;
 nume += b;
}



for(var a = 0; a < 4;a++){

var b =  Math.floor(Math.random() * (2)) + 0;
 num2e += b;
}


for(var a = 0; a < 4;a++){

var b =  Math.floor(Math.random() * (2)) + 0;
 num3e += b;
}


for(var a = 0; a < 4;a++){

var b =  Math.floor(Math.random() * (2)) + 0;
 num4e += b;
}







//app.ShowPopup(  num);
	//Add layout to app.	
	app.AddLayout( lay );
}







function btnL2_OnTouch() 
{ 




var zero = "0,0,0,0";
var one = "0,0,0,1";
var two = "0,0,1,0";
var three = "0,0,1,1";
var four= "0,1,0,0";
var five= "0,1,0,1";
var six = "0,1,1,0";
var seven= "0,1,1,1";
var eight= "1,0,0,0";
var nine = "1,0,0,1";


var check = numa.split(",");
if (rand == 0){
check = zero;
}

if (rand == 1){
check = one;

}

if (rand == 2){
check = two;

}

if (rand == 3){
check = three;

}


if (rand == 4){
check = four;

}

if (rand == 5){
check = five;

}


if (rand == 6){
check = six;

}

if (rand == 7){
check = seven;

}


if (rand == 8){
check = eight;

}

if (rand == 9){
check = nine;

}

check = check.split(",");
var binary = "";
for(var a = 0; a < 8;a++){

for(var aa = 0; aa < 1;aa++){

var b =  Math.floor(Math.random() * (2)) + 0;
 binary += b + ",";
}
binary += ";";
}






if (check[cyc] ==0){
app.ShowPopup("NULL");
code = 0;
}


if (check[cyc] == 1){
app.ShowPopup("ACK");

code++;
}


if (code == 5){
binary = binary.split(";");
for(var a = 0; a < binary.length;a++){
bit = binary.split(",");

for(var aaa = 0; aaa < bit.length;aaa++){
if (bit[aaa] == 1){
x++;
}
if (x == rand){//use quantum processor to get and set that number too.
app.ShowPopup("complete")
}
}
}
code = 0;
}
cyc++;




}
function btnR2_OnTouch() 
{ 


var zero = "0,0,0,0";
var one = "0,0,0,1";
var two = "0,0,1,0";
var three = "0,0,1,1";
var four= "0,1,0,0";
var five= "0,1,0,1";
var six = "0,1,1,0";
var seven= "0,1,1,1";
var eight= "1,0,0,0";
var nine = "1,0,0,1";


var check = numa.split(",");
if (rand == 0){
check = zero;
}

if (rand == 1){
check = one;

}

if (rand == 2){
check = two;

}

if (rand == 3){
check = three;

}


if (rand == 4){
check = four;

}

if (rand == 5){
check = five;

}


if (rand == 6){
check = six;

}

if (rand == 7){
check = seven;

}


if (rand == 8){
check = eight;

}

if (rand == 9){
check = nine;

}
var binary = "";
check = check.split(",");
for(var a = 0; a < 8;a++){

for(var aa = 0; aa < 1;aa++){

var b =  Math.floor(Math.random() * (2)) + 0;
 binary += b + ",";
}
binary += ";";
}






if (check[cyc] ==0){
app.ShowPopup("NULL");
code = 0;
}


if (check[cyc] == 1){
app.ShowPopup("ACK");

code++;
}


if (code == 5){
binary = binary.split(";");
for(var a = 0; a < binary.length;a++){
bit = binary.split(",");

for(var aaa = 0; aaa < bit.length;aaa++){
if (bit[aaa] == 1){
x++;
}
if (x == rand){ //use quantum processor to get and set that number too.
app.ShowPopup("complete")
}
}
}
code = 0;
}
cyc++;




}
function btnL_OnTouch() 
{ 



var zero = "0,0,0,0";
var one = "0,0,0,1";
var two = "0,0,1,0";
var three = "0,0,1,1";
var four= "0,1,0,0";
var five= "0,1,0,1";
var six = "0,1,1,0";
var seven= "0,1,1,1";
var eight= "1,0,0,0";
var nine = "1,0,0,1";


var check = numa.split(",");
if (rand == 0){
check = zero;
}

if (rand == 1){
check = one;

}

if (rand == 2){
check = two;

}

if (rand == 3){
check = three;

}


if (rand == 4){
check = four;

}

if (rand == 5){
check = five;

}


if (rand == 6){
check = six;

}

if (rand == 7){
check = seven;

}


if (rand == 8){
check = eight;

}

if (rand == 9){
check = nine;

}

check = check.split(",");
check = numa.split(",");
if (check[cyc] ==0){
app.ShowPopup("NULL");
code = 0;
}


if (check[cyc] == 1){
app.ShowPopup("ACK");

code++;
}


if (code == 8){
app.ShowPopup( "*" );
code = 0;
}

cyc++;
}



function btnR_OnTouch() 
{ 




var zero = "0,0,0,0";
var one = "0,0,0,1";
var two = "0,0,1,0";
var three = "0,0,1,1";
var four= "0,1,0,0";
var five= "0,1,0,1";
var six = "0,1,1,0";
var seven= "0,1,1,1";
var eight= "1,0,0,0";
var nine = "1,0,0,1";



var check = numa.split(",");
if (rand == 0){
check = zero;

}

if (rand == 1){
check = one;

}

if (rand == 2){
check = two;

}

if (rand == 3){
check = three;

}


if (rand == 4){
check = four;

}

if (rand == 5){
check = five;

}


if (rand == 6){
check = six;

}

if (rand == 7){
check = seven;

}


if (rand == 8){
check = eight;

}

if (rand == 9){
check = nine;

}
check = check.split(",");
check = numa.split(",");
if (check[cyc] == 1){
app.ShowPopup("ACK" );
code++;
}


if (check[cyc] == 0){
app.ShowPopup("NULL" );
code = 0;
}

if (code == 8){
app.ShowPopup( "*" );
code = 0;
}

cyc++;
}


function btnroll_OnTouch() 
{ 
xen = Math.floor(Math.random() * (4)) + 2;
}
function btn_OnTouch() 
{ 
app.ShowPopup(xen  );

}


function btncalc_OnTouch() 
{ 





var zero = "0000";
var one = "0001";
var two = "0010";
var three = "0011";
var four= "0100";
var five= "0101";
var six = "0110";
var seven= "0111";
var eight= "1000";
var nine = "1001";



var integer = 0;
var integer2 = 0;
var integer3 = 0;
var integer4 = 0;
if (num == zero){
integer = 0;
}
if (num == one){
integer = 1;
}
if (num == two){
integer = 2;
}
if (num == three){
integer = 3;
}
if (num == four){
integer = 4;
}
if (num == five){
integer = 5;
}
if (num == six){
integer = 6;
}
if (num == seven){
integer = 7;
}
if (num == eight){
integer = 8;
}
if (num == nine){
integer = 9;
}









if (num2 == zero){
integer2 = 0;
}
if (num2 == one){
integer2 = 1;
}
if (num2 == two){
integer2 = 2;
}
if (num2 == three){
integer2 = 3;
}
if (num2 == four){
integer2 = 4;
}
if (num2 == five){
integer2 = 5;
}
if (num2 == six){
integer2 = 6;
}
if (num2 == seven){
integer2 = 7;
}
if (num2 == eight){
integer2 = 8;
}
if (num2 == nine){
integer2 = 9;
}









if (num3 == zero){
integer3 = 0;
}
if (num3 == one){
integer3 = 1;
}
if (num3 == two){
integer3 = 2;
}
if (num3 == three){
integer3 = 3;
}
if (num3 == four){
integer3 = 4;
}
if (num3 == five){
integer3 = 5;
}
if (num3 == six){
integer3 = 6;
}
if (num3 == seven){
integer3 = 7;
}
if (num3 == eight){
integer3 = 8;
}
if (num3 == nine){
integer3 = 9;
}









if (num4 == zero){
integer4 = 0;
}
if (num4 == one){
integer4 = 1;
}
if (num4 == two){
integer4 = 2;
}
if (num4 == three){
integer4 = 3;
}
if (num4 == four){
integer4 = 4;
}
if (num4 == five){
integer4 = 5;
}
if (num4 == six){
integer4 = 6;
}
if (num4 == seven){
integer4 = 7;
}
if (num4 == eight){
integer4 = 8;
}
if (num4 == nine){
integer4 = 9;
}

for(var x = 0;x < 2;x++){

for(var y = 0;y < 200;y++){//chronos radiance time
y++;

for(var yy = 0;yy < 200;yy++){//chronos radiance time
y++;


for(var yyy= 0;yyy < 200;yyy++){//chronos radiance time
yyy++;
}
}
}

if (integer + integer2 + integer3 + integer4 > aspex){
app.ShowPopup( integer + " " +  integer2  + " " + integer3 + " " + integer4 +"> " + aspex );
}


if (integer + integer2 + integer3 + integer4 < aspex){
app.ShowPopup( integer + " " +  integer2  + " " + integer3 + " " + integer4 +"< " + aspex );
}


//app.ShowPopup(  integer + integer2 + integer3 + integer4);


if (cycle == 0){
num= numb;
num2= num2b;
num3= num3b;
num4= num4b;

}
if (cycle == 1){


num= numc;
num2= num2c;
num3= num3c;
num4= num4c;


}




if (cycle == 2){


num= numd;
num2= num2d;
num3= num3d;
num4= num4d;


}



if (cycle == 3){


num= nume;
num2= num2e;
num3= num3e;
num4= num4e;


}

cycle++;
var integer = 0;
var integer2 = 0;
var integer3 = 0;
var integer4 = 0;
if (num == zero){
integer = 0;
}
if (num == one){
integer = 1;
}
if (num == two){
integer = 2;
}
if (num == three){
integer = 3;
}
if (num == four){
integer = 4;
}
if (num == five){
integer = 5;
}
if (num == six){
integer = 6;
}
if (num == seven){
integer = 7;
}
if (num == eight){
integer = 8;
}
if (num == nine){
integer = 9;
}









if (num2 == zero){
integer2 = 0;
}
if (num2 == one){
integer2 = 1;
}
if (num2 == two){
integer2 = 2;
}
if (num2 == three){
integer2 = 3;
}
if (num2 == four){
integer2 = 4;
}
if (num2 == five){
integer2 = 5;
}
if (num2 == six){
integer2 = 6;
}
if (num2 == seven){
integer2 = 7;
}
if (num2 == eight){
integer2 = 8;
}
if (num2 == nine){
integer2 = 9;
}









if (num3 == zero){
integer3 = 0;
}
if (num3 == one){
integer3 = 1;
}
if (num3 == two){
integer3 = 2;
}
if (num3 == three){
integer3 = 3;
}
if (num3 == four){
integer3 = 4;
}
if (num3 == five){
integer3 = 5;
}
if (num3 == six){
integer3 = 6;
}
if (num3 == seven){
integer3 = 7;
}
if (num3 == eight){
integer3 = 8;
}
if (num3 == nine){
integer3 = 9;
}









if (num4 == zero){
integer4 = 0;
}
if (num4 == one){
integer4 = 1;
}
if (num4 == two){
integer4 = 2;
}
if (num4 == three){
integer4 = 3;
}
if (num4 == four){
integer4 = 4;
}
if (num4 == five){
integer4 = 5;
}
if (num4 == six){
integer4 = 6;
}
if (num4 == seven){
integer4 = 7;
}
if (num4 == eight){
integer4 = 8;
}
if (num4 == nine){
integer4 = 9;
}

break;
}

}








function btncalc2_OnTouch() 
{ 


var zero = "0000";
var one = "0001";
var two = "0010";
var three = "0011";
var four= "0100";
var five= "0101";
var six = "0110";
var seven= "0111";
var eight= "1000";
var nine = "1001";






var integer = 0;
var integer2 = 0;
var integer3 = 0;
var integer4 = 0;
if (num == zero){
integer = 0;
}
if (num == one){
integer = 1;
}
if (num == two){
integer = 2;
}
if (num == three){
integer = 3;
}
if (num == four){
integer = 4;
}
if (num == five){
integer = 5;
}
if (num == six){
integer = 6;
}
if (num == seven){
integer = 7;
}
if (num == eight){
integer = 8;
}
if (num == nine){
integer = 9;
}









if (num2 == zero){
integer2 = 0;
}
if (num2 == one){
integer2 = 1;
}
if (num2 == two){
integer2 = 2;
}
if (num2 == three){
integer2 = 3;
}
if (num2 == four){
integer2 = 4;
}
if (num2 == five){
integer2 = 5;
}
if (num2 == six){
integer2 = 6;
}
if (num2 == seven){
integer2 = 7;
}
if (num2 == eight){
integer2 = 8;
}
if (num2 == nine){
integer2 = 9;
}









if (num3 == zero){
integer3 = 0;
}
if (num3 == one){
integer3 = 1;
}
if (num3 == two){
integer3 = 2;
}
if (num3 == three){
integer3 = 3;
}
if (num3 == four){
integer3 = 4;
}
if (num3 == five){
integer3 = 5;
}
if (num3 == six){
integer3 = 6;
}
if (num3 == seven){
integer3 = 7;
}
if (num3 == eight){
integer3 = 8;
}
if (num3 == nine){
integer3 = 9;
}









if (num4 == zero){
integer4 = 0;
}
if (num4 == one){
integer4 = 1;
}
if (num4 == two){
integer4 = 2;
}
if (num4 == three){
integer4 = 3;
}
if (num4 == four){
integer4 = 4;
}
if (num4 == five){
integer4 = 5;
}
if (num4 == six){
integer4 = 6;
}
if (num4 == seven){
integer4 = 7;
}
if (num4 == eight){
integer4 = 8;
}
if (num4 == nine){
integer4 = 9;
}

for(var x = 0;x < 2;x++){

for(var y = 0;y < 200;y++){//chronos radiance time
y++;

for(var yy = 0;yy < 200;yy++){//chronos radiance time
y++;


for(var yyy= 0;yyy < 200;yyy++){//chronos radiance time
yyy++;
}
}
}

if (integer + integer2 + integer3 + integer4 > aspex){
app.ShowPopup( integer + " " +  integer2  + " " + integer3 + " " + integer4 +"> " + aspex );
}


if (integer + integer2 + integer3 + integer4 < aspex){
app.ShowPopup( integer + " " +  integer2  + " " + integer3 + " " + integer4 +"< " + aspex );
}
//app.ShowPopup(  integer + integer2 + integer3 + integer4);
if (cycle == 0){
num= numb;
num2= num2b;
num3= num3b;
num4= num4b;

}
if (cycle == 1){


num= numc;
num2= num2c;
num3= num3c;
num4= num4c;


}



if (cycle == 2){


num= numd;
num2= num2d;
num3= num3d;
num4= num4d;


}



if (cycle == 3){


num= nume;
num2= num2e;
num3= num3e;
num4= num4e;


}




cycle++;


var integer = 0;
var integer2 = 0;
var integer3 = 0;
var integer4 = 0;
if (num == zero){
integer = 0;
}
if (num == one){
integer = 1;
}
if (num == two){
integer = 2;
}
if (num == three){
integer = 3;
}
if (num == four){
integer = 4;
}
if (num == five){
integer = 5;
}
if (num == six){
integer = 6;
}
if (num == seven){
integer = 7;
}
if (num == eight){
integer = 8;
}
if (num == nine){
integer = 9;
}









if (num2 == zero){
integer2 = 0;
}
if (num2 == one){
integer2 = 1;
}
if (num2 == two){
integer2 = 2;
}
if (num2 == three){
integer2 = 3;
}
if (num2 == four){
integer2 = 4;
}
if (num2 == five){
integer2 = 5;
}
if (num2 == six){
integer2 = 6;
}
if (num2 == seven){
integer2 = 7;
}
if (num2 == eight){
integer2 = 8;
}
if (num2 == nine){
integer2 = 9;
}









if (num3 == zero){
integer3 = 0;
}
if (num3 == one){
integer3 = 1;
}
if (num3 == two){
integer3 = 2;
}
if (num3 == three){
integer3 = 3;
}
if (num3 == four){
integer3 = 4;
}
if (num3 == five){
integer3 = 5;
}
if (num3 == six){
integer3 = 6;
}
if (num3 == seven){
integer3 = 7;
}
if (num3 == eight){
integer3 = 8;
}
if (num3 == nine){
integer3 = 9;
}









if (num4 == zero){
integer4 = 0;
}
if (num4 == one){
integer4 = 1;
}
if (num4 == two){
integer4 = 2;
}
if (num4 == three){
integer4 = 3;
}
if (num4 == four){
integer4 = 4;
}
if (num4 == five){
integer4 = 5;
}
if (num4 == six){
integer4 = 6;
}
if (num4 == seven){
integer4 = 7;
}
if (num4 == eight){
integer4 = 8;
}
if (num4 == nine){
integer4 = 9;
}

break;
}

}