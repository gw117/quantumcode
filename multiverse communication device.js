//Qbox code - copyright - George Wagenknecht 2018

var rich = 0;
var low = 0;
var high = 170000;
var  url ="https://www.999dice.com/api/web.aspx"
var PayIn = 100
var resTxt = "";
var swi = 0;
var swi2 = 0;
var sensitivity = 80;
var longcyc = 2;
var longcyc2 = 3;//+1 or 2
var minPeriod = 15;
var corr = 2;
var x = 0.2;
var y = 0.3;
var Do = 0;
var Do2 = 0;
var it = 0;
var test = 0;
var nul = 0;
var ack = 0;
var and = 0;
var or = 0;
var b = 0;
var cyc = 0;
var cycle = 0;
var numa = "";
var swif = "";
var qu = 0;
var quc = 0;
var quc2 = 0;
var sta = 0;
var binary = "";
var ite = 0;
var integer = 0;
var recieve = "";
function OnStart()
{   
	app.SetOrientation( "Landscape" );
	lay = app.CreateLayout( "Linear", "VCentre,FillXY" );
	cam = app.CreateCameraView( x, y);	
	lay.AddChild( cam );  

	btn = app.CreateButton( "Set", 0.2, 0.15 );
	btn.SetOnTouch( set);
//lay.AddChild( btn ); 

	btn3 = app.CreateButton( "Bet", 0.2, 0.15 );
	btn3.SetOnTouch( bet);
//lay.AddChild( btn3 ); 


	btn2 = app.CreateButton( "SendL", 0.2, 0.15 );
	btn2.SetOnTouch( sendL);
	//lay.AddChild( btn2 ); 
	app.AddLayout( lay );
for(var a = 0; a < 500;a++){
//var b =  Math.floor(Math.random() * (1)) + 0;
 numa += "1,0";
}
	setTimeout( "StartDetection()", 1000 ); 
}


function bet( )
{
var command = "a=PlaceBet&s=742f92c435ff466b8fbfad4c9ea67347&PayIn="+ PayIn + "&Low=" + low +"&High="+high +"&ClientSeed=-5309338182208444527&currency=doge&ProtocolVersion=2"
    httpRequest = new XMLHttpRequest();    
    httpRequest.open("POST", url, true); 
    httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    httpRequest.onreadystatechange = function() { HandleReply(httpRequest); };
     httpRequest.send(command);   
}

function set( )
{
var command = "a=PlaceBet&s=742f92c435ff466b8fbfad4c9ea67347&PayIn="+ PayIn + "&Low=" + low +"&High="+high +"&ClientSeed=-5309338182208444527&currency=doge&ProtocolVersion=2"
    httpRequest = new XMLHttpRequest();    
    httpRequest.open("POST", url, true); 
    httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    httpRequest.onreadystatechange = function() { HandleReply(httpRequest); };
     httpRequest.send(command);   
}

function sendL( )
{
var command = "a=PlaceBet&s=742f92c435ff466b8fbfad4c9ea67347&PayIn="+ PayIn + "&Low=0&High=666666&ClientSeed=-5309338182208444527&currency=doge&ProtocolVersion=2"
    httpRequest = new XMLHttpRequest();    
    httpRequest.open("POST", url, true); 
    httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    httpRequest.onreadystatechange = function() { HandleReply(httpRequest); };
     httpRequest.send(command);   
}
function StartDetection()
{	
for(var a = 0; a < 500;a++){
var b =  Math.floor(Math.random() * (2)) + 0;
 numa += b + ",";
}
	var w = cam.GetImageWidth();
	var h = cam.GetImageHeight();
	img = app.CreateImage( null, x, y, "Fix", w, h );  
	img.SetAlpha( 0.5 );  
	lay.AddChild( img );    
	cam.MotionMosaic( 30, 30, (100-sensitivity)/5, minPeriod, img );
	cam.SetOnMotion( OnMotion );
	cam.StartPreview();
	player = app.CreateMediaPlayer();
	player.SetFile( "/Sys/Snd/Poing.ogg" );
}
var data2;
function OnMotion( data )
{
sta = 0;
if (Do == 1){
Do2 = 1;
if (qu == 1 && it == 0){
qu = 0;
it++;
}
if (qu == 0 &&  it == 0){
qu = 1;
it++;
}
it = 0;
}
if (test == 0){
var b = 0;
var bb = 0;
data2 = data;
test++;
}
if (test == 1){
test = 0;
	for(var a = 0; a < data.length;a++){
if (data[a] > 10){
b++;
}
}
if (data2 !== undefined){
	for(var aa = 0; aa < data2.length;aa++){
if (data[aa] > 10){
if (data2[aa] > data[a] || data2[aa] < data[a] ){
bb++;
}
}
}
}
if (qu == 0){
if (b > 4 && b < 11 || bb > 4 && bb < 11 ){
or++;
}
if (b > 4 && b < 11 && bb > 4 && bb < 11 ){
and++;
if (Do == 1){
if (qu == 1 && it == 0){
qu = 0;
it++;
}
if (qu == 0 &&  it == 0){
qu = 1;
it++;
}
it = 0;
}
done = 1;
}
}
if (qu == 1){
if (b > 4 && b < 11 || bb > 4 && bb < 11 ){
if (Do2== 1){
if (qu == 1 && it == 0){
qu = 0;
it++;
}
if (qu == 0 &&  it == 0){
qu = 1;
Do2 = 0;
it++;
}
it = 0;
and++;
}
}
}
if (b > 4 && b < 11 && bb > 4 && bb < 11 ){
or++;
done = 1;
}
}
if (and > corr){
var check = numa.split(",");
check = numa.split(",");
if (check[cyc] == qu){
if (swi == longcyc){
qu =  Math.floor(Math.random() * (2)) + 0;
}
swi++;
Do = 1;
ack++;
and = 0;
cyc++;
//app.ShowPopup("Nominal");


if (sta == 0){
binary += "0";
ite++;
if (ite == 8){
binary += ",";
ite = 0;
}
low += 170000;
high += 170000;


if (high > 999999){
low = 0;
high = 170000;
}
sta = 1;
}
/*
if (qu == quc2){
var command = "a=PlaceBet&s=742f92c435ff466b8fbfad4c9ea67347&PayIn="+ PayIn + "&Low=333333&High=999999&ClientSeed=-5309338182208444527&currency=doge&ProtocolVersion=2"
    httpRequest = new XMLHttpRequest();    
    httpRequest.open("POST", url, true); 
    httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    httpRequest.onreadystatechange = function() { HandleReply(httpRequest); };
     httpRequest.send(command);   
}



if (qu == quc2){
var command = "a=PlaceBet&s=742f92c435ff466b8fbfad4c9ea67347&PayIn="+ PayIn + "&Low=0&High=666666&ClientSeed=-5309338182208444527&currency=doge&ProtocolVersion=2"
    httpRequest = new XMLHttpRequest();    
    httpRequest.open("POST", url, true); 
    httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    httpRequest.onreadystatechange = function() { HandleReply(httpRequest); };
     httpRequest.send(command);   
}
*/

}
//most of the time it knows the number before it matches...
if (check[cyc] == qu){
ack++;
if (qu == 1 && it == 0){
qu = 0;
it++;
}
if (qu == 0 &&  it == 0){
qu = 1;
it++;
}
it = 0;
if (swi2 == longcyc2){
qu =  Math.floor(Math.random() * (2)) + 0;
swi2 = 0;
}
swi2++;
and = 0;
or = 0;
cyc++;

if (sta == 0){
//app.ShowPopup("Nominal" );

//binary += "0";
//ite++;
if (ite == 8){
binary += ",";
ite = 0;
}
low += 170000;
high += 170000;


if (high > 999999){
low = 0;
high = 170000;
}
sta = 1;
}


}
}
if (or > corr){
var check = numa.split(",");
//most of the time it knows the number before it matches...
if (check[cyc] == qu){
ack++;
if (qu == 1 && it == 0){
qu = 0;
it++;
}
if (qu == 0 &&  it == 0){
qu = 1;
it++;
}
it = 0;
if (swi2 == longcyc2){
qu =  Math.floor(Math.random() * (2)) + 0;
it = 0;
swi2 = 0;
}
swi2++;
code = 0;
or = 0;
cyc++;
//app.ShowPopup("Nominal" );

//binary += "0";

//ite++;
if (ite == 8){
binary += ",";
ite = 0;
}
if (sta == 0){


low += 170000;
high += 170000;


if (high > 999999){
low = 0;
high = 170000;
}
sta = 1;
}
}
if (check[cyc] != qu){
if (swi == longcyc){
qu =  Math.floor(Math.random() * (2)) + 0;
swi = 0;
}
swi++;
Do = 1;
nul++;
or = 0;
and = 0;
cyc++;
app.ShowPopup("Response detected" );
binary +=  "1";
app.SetClipboardText(binary );

ite++;
if (ite == 8){
binary += ",";
ite = 0;
}
app.ShowPopup(binary);
//get count of 1's
}
}
}


function send( )
{

binary += "@" + ite + " 1";
ite++;
//paradox computation
integer = 0;

for(var aa = 0;aa < 4;aa++){
	for(var aa = 0;aa < 4;aa++){
	for(var aaa = 0;aaa < 4;aaa++){
	for(var aaaa = 0;aaaa < 4;aaaa++){
	for(var aaaaa = 0;aaaaa < 4;aaaaa++){
	if (aa*aaa*aaaa*aaaaa == Math.floor(Math.random() * (1024)) + 0){
integer = aa*aaa*aaaa*aaaaa;
integer = 9;
	}
}
}
}
}
}
var resultint = integer.toString(2);
app.ShowPopup( resultint );
//paradox computation

	sms.Send( "0481726300", "@" + ite + " " + resultint[ite]); //represents 1 bit.
	ite++;
    player.SeekTo( 0 );
	player.Play();

}
function sms_OnMessage( number, msg )
{
	
	//change paradox size? 500.... to 1500?
if (msg.index_Of("@0") > -1){
	if (msg.index_Of("1") > -1){
for(var a = 0; a < 500;a++){
var b = 9;
 numa += b + ",";
}
recieve += msg + ",";
}
}

if (msg.index_Of("@1") > -1){
	if (msg.index_Of(" 1") > -1){
for(var a = 0; a < 500;a++){
var b = 9;
 numa += b + ",";
}
recieve += msg + ",";
}
}


if (msg.index_Of("@2") > -1){
	if (msg.index_Of(" 1") > -1){
for(var a = 0; a < 500;a++){
var b = 9;
 numa += b + ",";
}
recieve += msg + ",";
}
}



if (msg.index_Of("@3") > -1){
	if (msg.index_Of(" 1") > -1){
for(var a = 0; a < 500;a++){
var b = 9;
 numa += b + ",";
}
recieve += msg + ",";
}
}


if (msg.index_Of("@4") > -1){
	if (msg.index_Of(" 1") > -1){
for(var a = 0; a < 500;a++){
var b = 9;
 numa += b + ",";
}
recieve += msg + ",";
}
}


if (msg.index_Of("@5") > -1){
	if (msg.index_Of(" 1") > -1){
for(var a = 0; a < 500;a++){
var b = 9;
 numa += b + ",";
}
recieve += msg + ",";
}
}


if (msg.index_Of("@6") > -1){
	if (msg.index_Of(" 1") > -1){
for(var a = 0; a < 500;a++){
var b = 9;
 numa += b + ",";
}
recieve += msg + ",";
}
}


if (msg.index_Of("@7") > -1){
	if (msg.index_Of(" 1") > -1){
for(var a = 0; a < 500;a++){
var b = 9;
 numa += b + ",";
}
recieve += msg + ",";
}
}



}