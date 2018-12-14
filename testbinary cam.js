var sensitivity = 88;
var done = 0;
var nul = 0;
var bet = 1
var mul = 1;
var norm = 1
var total = 100000;
var win = 0;
var ack = 0;
var and = 0;
var sw = 0;
var or = 0;
var minPeriod = 10;
var mosaic = "20x20";
var snapFolder = "/sdcard/Snaps";
var b = 0;
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
var rand  =  Math.floor(Math.random() * (10)) + 0;
function OnStart()
{   
	app.SetOrientation( "Landscape" );
	lay = app.CreateLayout( "Linear", "horizontal,FillXY" );
	btnL= app.CreateButton( "0", 0.35, 0.2 ); 
	btnL.SetOnTouch( btnL_OnTouch ); 
	lay.AddChild( btnL ); 
	btnR= app.CreateButton( "1", 0.35, 0.2 ); 
	btnR.SetOnTouch( btnR_OnTouch ); 
	lay.AddChild( btnR ); 
	layLeft = app.CreateLayout( "Frame" );	
	layLeft.SetMargins( 0,0.1,0.02,0 );
	lay.AddChild( layLeft ); 
	cam = app.CreateCameraView( 0.2, 0.4);	
	layLeft.AddChild( cam );  
	layRight = app.CreateLayout( "Linear", "Vertical" );
	lay.AddChild( layRight );
	txt = app.CreateText( "", 0.5, 0.8, "Multiline,Left" );
	txt.SetMargins( 0,0.1,0,0 );
	txt.SetPadding( 0.01,0.01,0.01,0.01 );
	txt.SetTextColor( "#ffffffff" );
	txt.SetBackColor( "#ff222222" );
	//layRight.AddChild( txt );
for(var a = 0; a < 100;a++){
var b =  Math.floor(Math.random() * (2)) + 0;
 numa += b + ",";
}
	app.SetMenu( "Snap,Exit" );    
	app.AddLayout( lay );
	setTimeout( "StartDetection()", 1000 ); 
}
function StartDetection()
{	
	var w = cam.GetImageWidth();
	var h = cam.GetImageHeight();
	img = app.CreateImage( null, 0.2, 0.4, "Fix", w, h );  
	img.SetAlpha( 0.5 );  
	layLeft.AddChild( img );         
if (done == 0){
	cam.MotionMosaic( 20, 20, (100-sensitivity)/5, minPeriod, img );

	cam.SetOnMotion( OnMotion );
}
	app.MakeFolder( snapFolder );
	cam.SetPictureSize( 1024, 768 );
	maxPics = 10; count = 1; 
	log = new Array(); 
	Log( "Ready" );
	cam.StartPreview();
}
function OnMenu( name )
{           
    if( name=="Snap" ) 
		Snap();
    else if( name=="Exit" ) 
        app.Exit();   
}
var data2;
function OnMotion( data )
{


//	Log( data );
var test = 0;
if (test == 0){
var b = 0;
var bb= 0
data2 = data
test++;
}
if (test == 1){
	for(var a = 0; a < data.length;a++){
if (data[a] > 6){
b++
}
}
if (data2 !== undefined){
	for(var aa = 0; aa < data2.length;aa++){
if (data[aa] > 6){
bb++
}
}
}
if (sw == 0){
if (b > 3 && b < 7 || bb > 3 && bb < 7 ){
or++;
done = 1;
}

if (b > 3 && b < 11 && bb > 3 && bb < 11 ){

and++;
done = 1;
}
}
test = 0;
}

if (sw == 1){
if (b > 3 && b < 7 || bb > 3 && bb < 7 ){
and++;
done = 1;
}

if (b > 3 && b < 11 && bb > 3 && bb < 11 ){

or++;
done = 1;
}
}




if (and > 3){
//app.ShowPopup( "||");

done = 0

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
ack++;
//app.ShowPopup(ack + "/" + nul );
win = bet*mul
total+=win;
if (win==2){
mul = norm;

win = 0;
}
win++;
code++;
}


if (check[cyc] == 0){
app.ShowPopup("NULL" );
nul++;
//app.ShowPopup(ack + "/" + nul );
if (mul*win<total){
mul*=2
}
total-= win;
sw  =  Math.floor(Math.random() * (2)) + 0;
code = 0;
}

if (code == 16){
app.ShowPopup( "*" );
code = 0;
}

cyc++;
and = 0;
app.ShowPopup(ack + "/" + nul );
}


if (or > 3){
//app.ShowPopup( "switch");

done = 0;
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
nul++;
total-= win;
if (mul*win<total){
mul*=2
}
sw  =  Math.floor(Math.random() * (2)) + 0;
code = 0;
}


if (check[cyc] == 1){
app.ShowPopup("ACK");
ack++
win = bet*mul
total+=win;
if (win==2){
mul = norm;


win = 0;
}
win++;
code++;
}


if (code == 16){
app.ShowPopup( "*" );
code = 0;
}

cyc++;
or = 0;
app.ShowPopup(total);
}

}

function ChangeSettings()
{
	var x=3, y=2;
	if( mosaic=="20x20" ) { x = 20; y = 20; }
	else if( mosaic=="5x5" ) { x = 5; y = 5; }
	else if( mosaic=="10x10" ) { x = 10; y = 10; }	
	cam.MotionMosaic( x, y, (100-sensitivity)/5, minPeriod, img );
}
function Log( msg )
{
	var maxLines = txt.GetMaxLines()-1;
	if( log.length >= maxLines ) log.shift();
	log.push( msg + "\n" );
	txt.SetText( log.join("") );
}
function btnL_OnTouch() 
{ 
done = 0;
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
nul++;

bet*=3

sw  =  Math.floor(Math.random() * (2)) + 0;
code = 0;
}



if (check[cyc] == 1){
app.ShowPopup("ACK");
ack++
win *=bet
if (win==2){
bet = norm;
total=win;

win = 0;
}
win++;
code++;
}



if (code == 8){
app.ShowPopup( "*" );
code = 0;
}

cyc++;

app.ShowPopup(total);
}



function btnR_OnTouch() 
{ 


done = 0

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