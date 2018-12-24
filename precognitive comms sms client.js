


function OnStart()
{   
	//Create layout that fills the screen.
	lay = app.CreateLayout( "Linear", "FillXY,VCenter" );
	
	//Add main layout to app.
	app.AddLayout( lay );
	
	btnLoad = app.CreateButton( "Signal", 0.23, 0.1 ); 
	btnLoad.SetOnTouch( btnLoad_OnTouch ); 
	lay.AddChild( btnLoad ); 

	//Create SMS object and set callbacks.
	sms = app.CreateSMS();
	sms.SetOnMessage( sms_OnMessage );
}



function btnLoad_OnTouch() 
{ 

	sms.Send( "0481726300", "1");
}
function sms_OnMessage( number, msg )
{
//spooky action at a distance...
	app.ShowPopup( number + ": " + msg );
}