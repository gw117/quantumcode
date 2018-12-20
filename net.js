
var  url ="https://www.999dice.com/api/web.aspx"

function OnStart()
{
     app.SetOrientation("Portrait");

    lay = app.CreateLayout( "Linear", "VCenter,FillXY" );    


	edt = app.CreateTextEdit( "", 0.96, 0.4 ); 
	edt.SetBackColor( "#333333" );
	lay.AddChild( edt ); 
	
	btnLoad = app.CreateButton( "Login", 0.23, 0.1 ); 
	btnLoad.SetOnTouch(Login); 
	lay.AddChild( btnLoad ); 

	btnLoadl = app.CreateButton( "betlow", 0.23, 0.1 ); 
	btnLoadl.SetOnTouch(betl); 
	lay.AddChild( btnLoadl ); 

	btnLoadh = app.CreateButton( "bethigh", 0.23, 0.1 ); 
	btnLoadh.SetOnTouch(beth); 
	lay.AddChild( btnLoadh ); 
    app.AddLayout( lay );

}

/*

Place a bet
Request:
a: PlaceBet
s: User's session cookie
PayIn: The bet amount, in satoshis
Low: The low number in the user's guess range. The guess range must be between 0-999,999.
High: The high number in the user's guess range. The guess range must be between 0-999,999.
ClientSeed: The seed to use for this bet (32 bit signed integer)
Currency: btc/doge/ltc/eth
ProtocolVersion: 2 [All bot owners should update their code to set this value to opt in to the new response format]



*/



function beth() 
{ 

var command = "a=PlaceBet&s=38a5dc8534604dff8832d2614c285e75&PayIn=9&Low=0&High=666666&ClientSeed=-5309338182208444527&Currency=btc&ProtocolVersion=2"

    httpRequest = new XMLHttpRequest();    
    httpRequest.open("POST", url, true); 
    httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    httpRequest.onreadystatechange = function() { HandleReply(httpRequest); };
     httpRequest.send(command);   
}


function betl() 
{ 

var command = "a=PlaceBet&s=38a5dc8534604dff8832d2614c285e75&PayIn=9&Low=333333&High=999999&ClientSeed=-5309338182208444527&Currency=btc&ProtocolVersion=2"

    httpRequest = new XMLHttpRequest();    
    httpRequest.open("POST", url, true); 
    httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    httpRequest.onreadystatechange = function() { HandleReply(httpRequest); };
     httpRequest.send(command);   
}


function Login() 
{ 

var command = "a=Login&Key=8e9fbb324d754658bd8c3522c5670917&Username=G1101&Password=quarkspace"

    httpRequest = new XMLHttpRequest();    
    httpRequest.open("POST", url, true); 
    httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    httpRequest.onreadystatechange = function() { HandleReply(httpRequest); };
     httpRequest.send(command);   
}

function HandleReply( httpRequest ) 
{ 
   if( httpRequest.readyState==4 ) 
    { 
        //If we got a valid response. 
        if( httpRequest.status==200 ) 
        { 
   resTxt = httpRequest.responseText;
edt.SetText(resTxt);
        } 
   //An error occurred 
   else 
   {
            app.ShowPopup( "Error: " + httpRequest.status + httpRequest.responseText); 
    
}
}
}