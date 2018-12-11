var choice = 0;
var time = 100000;
var iter=0;
var num = 0
var check = 0;
    var now = new Date().getTime();

function OnStart()
{
	lay = app.CreateLayout( "linear", "Horizontal,FillXY" );	
	btnL= app.CreateButton( "0", 0.3, 0.3 ); 
	btnL.SetOnTouch( btnL_OnTouch ); 
	lay.AddChild( btnL ); 
	btnR= app.CreateButton( "1", 0.3, 0.3 ); 
	btnR.SetOnTouch( btnR_OnTouch ); 
	lay.AddChild( btnR ); 
	app.AddLayout( lay );

	btnCancel = app.CreateButton( "Cancel Repeat", 0.4, 0.1 );
	btnCancel.SetMargins( 0, 0.05, 0, 0 );
	btnCancel.SetOnTouch( btnCancel_OnTouch );
	lay.AddChild( btnCancel );
	player = app.CreateMediaPlayer();
	player.SetFile( "/Sys/Snd/Poing.ogg" );

     setInterval(On, time/30 );
}




function btnL_OnTouch()
{
check = 0;
    choice = 0;
}
function btnR_OnTouch()
{
check = 0;
    choice = 1;
}
function On( )
{

var num1 =  Math.floor(Math.random() * (100)) + 0;
var num2 =  Math.floor(Math.random() * (100)) + 0;
num = num1*num2;

if (iter==0){
if (choice == 0){
if (num < 5000){
app.ShowPopup("ACK" );

iter++
check = 1;
}

if (num > 5000){
app.ShowPopup("NULL" );
}
}


if (choice == 1){
if (num > 5000){
app.ShowPopup("ACK" );

iter++
check = 1;
}

if (num < 5000){
app.ShowPopup("NULL" );
}
}

}




if (iter==1 && check == 1){
if(num > 5000){
if (choice == 0){
if (num < 7500){
app.ShowPopup("ACK" );
check = 1;
iter++
}

if (num > 7500){
app.ShowPopup("NULL" );
}
}



if (choice == 1){
if (num > 7500){
app.ShowPopup("ACK" );
check = 1;
iter++
}

if (num < 7500){
app.ShowPopup("NULL" );
}
}

}

if(num < 5000){
if (choice == 0){
if (num < 2500){
app.ShowPopup("ACK" );
check = 1;
iter++
}

if (num > 2500){
app.ShowPopup("NULL" );
}
}


if (choice == 1){
if (num > 2500){
app.ShowPopup("ACK" );
check = 1;
iter++
}

if (num < 2500){
app.ShowPopup("NULL" );
}
}

}
}

if (iter==1 && check == 1){
if(num >  8750){
if (choice == 0){
if (num <  8750){
app.ShowPopup("5000-8750" );
}

if (num >  8750){
app.ShowPopup("8750-10000" );
}
}




if (choice == 1){
if (num >  8750){
app.ShowPopup("8750-10000" );
}

if (num < 8750){
app.ShowPopup("5000-8750" );
}
}

}


if(num >  2500){
if (choice == 0){
if (num <  1250){
app.ShowPopup("0-1250" );
}

if (num >  1250){
app.ShowPopup("1250-2500" );
}
}



if (choice == 1){
if (num >  1250){
app.ShowPopup("1250-2500" );
}

if (num < 1250){
app.ShowPopup("0-1250" );
}
}

}
}


if (iter== 3){
iter = 0;
}
    player.SeekTo( 0 );
	player.Play();
}


function btnCancel_OnTouch()
{
    //Cancel the alarm with id 4321.
    //(All alarms will be cancelled by a reboot)
    app.SetAlarm( "Cancel", 1 );
    app.SetAlarm( "Cancel", 2 );
}