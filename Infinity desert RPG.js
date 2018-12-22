//Infinity Desert - copyright - George Wagenknecht 2018 ver 2
var swi = 0;
var swi2 = 0;
var sensitivity = 80;
var longcyc = 2;
var longcyc2 = 3;//+1 or 2
var minPeriod = 15;
var corr = 2;
var x = 0.2;
var y = 0.1;
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
var presence = 0;
var battlescene = 0;
var storyline = "You are in a desert and you have no water, all you see is the sun and the sand.; you approach a cactus and try to drink its juice, you hallucinate.; you are walking looking up at the sun with your hand above your head blocking out the sun.; you see an oasis but find out it is just a mirage; you are parched and decide to find water.; you start kicking the sand.;"
var story = storyline.split(";");


var battlescriptweak= "a phantom sways in front of you spookly.; a phantom flows through you leaving a chill down your spine!;There is chanting around you.;"
var battlescriptw = battlescriptweak.split(";");

var battlescriptdagger= "a phantom sways in front of you spookly.; a phantom flows through you leaving a chill down your spine!;You swipe your dagger at a phantom and it spews red sparkling liquid, the phantoms retreat, atleast for a while.; You see a a darker phantom with pulsing red sparkling veins, you try to swipe at it but it dodges your attack, you throw your dagger at it and and the phantom implodes!"
var battlescriptd = battlescriptdagger.split(";");


var arc = 0;
var battlearcweak = 0;
var battlearcdagger = 0;
var interaction = 0;
var weapon = 0;
var battle  =  Math.floor(Math.random() * (40)) + 15;
function OnStart()
{   
	app.SetOrientation( "Portrait" );
	lay = app.CreateLayout( "Linear", "horizontal,FillXY" );
	lay = app.CreateLayout( "Frame" );	
	cam = app.CreateCameraView( x, y);	
	lay.AddChild( cam );  

for(var a = 0; a < 100;a++){
var b =  Math.floor(Math.random() * (2)) + 0;
 numa += b + ",";
}
	app.AddLayout( lay );
	setTimeout( "StartDetection()", 1000 ); 
}
function StartDetection()
{	
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
Gdo = 1;

if(interaction == 0){
app.ShowPopup(story[arc]);
}



if(interaction == 1 && weapon == 1){
app.ShowPopup(battlescriptd[battlearcdagger]);
}


if(interaction == 1 && weapon == 0){
app.ShowPopup(battlescriptw[battlearcweak]);
}

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
Gdo = 1;

if(interaction == 0){
app.ShowPopup(story[arc]);
}


if(interaction == 1 && weapon == 1){
app.ShowPopup(battlescriptd[battlearcdagger]);
}


if(interaction == 1 && weapon == 0){
app.ShowPopup(battlescriptw[battlearcweak]);
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
Gdo = 1;

if(interaction == 0){
app.ShowPopup(story[arc]);
}


if(interaction == 1 && weapon == 1){
app.ShowPopup(battlescriptd[battlearcdagger]);
}


if(interaction == 1 && weapon == 0){
app.ShowPopup(battlescriptw[battlearcweak]);
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


for(var ti = 0;ti < 30000;ti++){

for(var ti2 = 0;ti2 < 30000;ti2++){

}
}

if (cyc > battle){
interaction = 1;
getack = ack;
battle = 0;
}
if(interaction == 0){
if (presence != 7){
app.ShowPopup("A Genie appears to assist you, he says you have traveled " + (cyc-nul) + " miles.");
presence++;
}
if (presence == 7){

app.ShowPopup("A Genie appears to assist you, he gives you an enchanted dagger, he warns of darkness...");

weapon = 1;
presence++;
}
    player.SeekTo( 0 );
	player.Play();
}


if(interaction == 1 && weapon == 1 && battlescene == 0){
app.ShowPopup("the sun is going down, strange black phantoms start approaching you, they have encompassed you, luckly you have your enchanted dagger, looks like its going to be a rough night" );
battlescene = 1;
}

if(interaction == 1 && weapon == 0 && battlescene == 0){
app.ShowPopup("the sun is going down, strange black phantoms start approaching you, they have encompassed you, looks like its going to be a tough night" );
battlescene = 1;
}

if(interaction == 1 && weapon == 0 && battlescene == 1){
app.ShowPopup("A Genie appears to assist you, he casts a spell on the phantoms causing them to shake vividly.");


if(interaction == 1 && weapon == 1 && battlescene == 1){
app.ShowPopup("A Genie appears to assist you, he casts a spell on the phantoms causing them to shake vividly.");


var ex = Math.floor(Math.random() * (15)) + 0;
if (ex == 7){
interaction = 0;
}
}

Gdo = 1;

arc =  Math.floor(Math.random() * (story.length)) + 0;

battlearcweak =  Math.floor(Math.random() * (battlescriptw.length)) + 0;

battlearcdagger =  Math.floor(Math.random() * (battlescriptd.length)) + 0;

for(var ti = 0;ti < 30000;ti++){

for(var ti2 = 0;ti2 < 30000;ti2++){

}
}

}
}
}

function Allow(){
if (Gdo == 1){
app.ShowPopup("The genie allows you to leave..." );
}
}