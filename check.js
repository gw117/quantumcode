
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );	

var txt = app.ReadFile("/sdcard/testfile.txt");
check = txt.split(",");
for(var n = 0;n<check.length;n++){
if (n == 1740){
app.SetClipboardText(check[n] );
app.ShowPopup( "Copied to clipboard" );
}
}
	
	//Add layout to app.	
	app.AddLayout( lay );
}