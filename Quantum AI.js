/*
Copyright (C) 2019 George Wagenknecht
Qubox, Multiverse communications control protocol for electronic devices
This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA
*/
var swi = 0;
var swi2 = 0;
var sensitivity = 70;
var longcyc = 2;
var longcyc2 = 3; //+1 or 2
var minPeriod = 1;
var corr = 0; //batch count
var x = 0.1;
var y = 0.2;
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
var qu = 0;
var range = 100000000000000000000000000000000000;
range = 100000000;
var ghostprotocol = 0;
var prime = 0;
var output = "";
var outputq = "";
var ghostprotocollast = 0;
var GhostIterate = 0;
var testchecknum = 0//573210623968572906089346317034273080; //341881320659934023674980; //18537;
var qdata = 0;

//to perform series computation to narrow approximation after each computation decrease range and add into qdata

var stringrand = "";
var r = 0;
var txt = app.ReadFile("/sdcard/philosophy.txt");
sentence = txt.split(".");
for(var n = 0;n<2000;n++){
c = Math.floor(Math.random() * (sentence.length)) + 0;
stringrand += c + ",";
}
//for checking quantum results
//stringrand = 
//____________________
var txt = app.ReadFile("/sdcard/philosophy.txt");
        sentence = txt.split(".");
         range = sentence.length/100
         range = Math.round(range);
	app.WriteFile( "/sdcard/testfile.txt", stringrand );
var nn = 0;


//AI stuff

var output = "";
var update = "";
var sentence1 = "";
var sentence2 = "";
var sentence = "";
var filesave = ""
var stage = 0;
var depth = 3;
var pos = 0;
var output2 = "";
var c = 0;
var function1 = "";
var testout = "faulty";
var context = "proof";

function OnStart() {
var stringrand  = app.ReadFile("/sdcard/seed.txt");
    app.SetOrientation("Landscape");
    lay = app.CreateLayout("Linear", "horizontal,FillXY");
    lay = app.CreateLayout("Frame");
    cam = app.CreateCameraView(x, y);
    lay.AddChild(cam);
    btn = app.CreateButton("Send", 0.2, 0.1);
    btn.SetOnTouch(btn_OnTouch);
    btn.SetMargins(0.8, 0.02, 0, 0);
    lay.AddChild(btn);
    
    btns = app.CreateButton("Start", 0.2, 0.1);
    btns.SetOnTouch(btns_OnTouch);
    btns.SetMargins(0.6, 0.02, 0, 0);
    lay.AddChild(btns);
    var functionstring  = app.ReadFile("/sdcard/adj.txt");
    functionarr = functionstring.split("\n");
    functionstring ="";
    for(var fun = 0; fun < functionarr.length;fun++){
    functionstring += functionarr[fun] + ",";
    }
    spin = app.CreateSpinner( functionstring, 0.3 );
    spin.SetOnTouch( spin_OnChange );
    spin.SetMargins(0.3, 0, 0, 0);
    lay.AddChild( spin );
    edtin = app.CreateTextEdit("", 0.0, 0.0);
    edtin.SetTextSize(8);
    edtin.SetMargins(0.0, 0.5, 0, 0);
    lay.AddChild(edtin);
    edtq = app.CreateTextEdit("", 0.4, 1);
    edtq.SetTextSize(6);
  //  edtq.SetMargins(0.0, 0.2, 0, 0);
    lay.AddChild(edtq);
    edt = app.CreateTextEdit("", 0.3, 0.4);
    edt.SetTextSize(8);
    edt.SetMargins(0.5, 0.2, 0, 0);
    lay.AddChild(edt);
    edt2 = app.CreateTextEdit("", 0.3, 0.4);
    edt2.SetTextSize(8);
    edt2.SetMargins(0.5, 0.5, 0, 0);
    lay.AddChild(edt2);
    crypt = app.CreateCrypt();
    for (var a = 0; a < 100; a++) {
        var b = Math.floor(Math.random() * (2)) + 0;
        numa += b + ","; //initialise test variable set
    }
    app.AddLayout(lay);
}

function StartDetection() {
    var w = cam.GetImageWidth();
    var h = cam.GetImageHeight();
    img = app.CreateImage(null, x, y, "Fix", w, h);
    img.SetAlpha(0.5);
    lay.AddChild(img);
    cam.MotionMosaic(30, 30, (100 - sensitivity) / 5, minPeriod, img);
    cam.SetOnMotion(OnMotion);
  cam.StartPreview();
}


function spin_OnChange( item )
{
testout = item;
}



function btns_OnTouch() {
    setTimeout("StartDetection()", 1000); //initiate camera stream function
}




var data2;
function OnMotion(data) //stream camera data
{
    //various switching
    if (Do == 1) {
        Do2 = 1;
        if (qu == 1 && it == 0) {
            qu = 0;
            it++;
        }
        if (qu == 0 && it == 0) {
            qu = 1;
            it++;
        }
        it = 0;
    }
    if (test == 0) { //more switching, this time, "test" alternates of each run of the camera data stream
        var b = 0;
        var bb = 0;
        data2 = data; //make two sets
        test++;
    }
    if (test == 1) {
        test = 0;
        for (var a = 0; a < data.length; a++) {
            if (data[a] > 10) { //searching for motion intensity of data stream set
                b++; //counting initial spectra
            }
        }
        if (data2 !== undefined) {
            for (var aa = 0; aa < data2.length; aa++) { //searching set two
                if (data[aa] > 10) {
                    if (data2[aa] > data[a] || data2[aa] < data[a]) { //trying to determine or differentiate quantum fluxuations of intensity 
                        bb++; //counting them
                    }
                }
            }
        }
        if (qu == 0) {
            if (b > 4 && b < 11 || bb > 4 && bb < 11) { //comparing gathered information from each set, identifying causallity of entangled states, checking for the existence of wave function collapse
                or++;
            }
            if (b > 4 && b < 11 && bb > 4 && bb < 11) { //comparing gathered information from each set, identifying causallity of entangled states(laser moves solidly past the filter, no anomaly)
                and++;
                if (Do == 1) {
                    if (qu == 1 && it == 0) {
                        qu = 0;
                        it++;
                    }
                    if (qu == 0 && it == 0) {
                        qu = 1;
                        it++;
                    }
                    it = 0;
                }
                done = 1;
            }
        }
        //same thing except this time we try to alter the flow by making different yet symmetrical choices whilst maintaning a quantum protocol, the protocol occurs within all switches, even the next ones after the whole function repeats(at the beginning)
        if (qu == 1) {
            if (b > 4 && b < 11 || bb > 4 && bb < 11) {
                if (Do2 == 1) {
                    if (qu == 1 && it == 0) {
                        qu = 0;
                        it++;
                    }
                    if (qu == 0 && it == 0) {
                        qu = 1;
                        Do2 = 0;
                        it++;
                    }
                    it = 0;
                    and++;
                }
            }
        }
        if (b > 4 && b < 11 && bb > 4 && bb < 11) {
            or++;
            done = 1;
        }
    }
    if (and > corr) {
        var check = numa.split(",");
        check = numa.split(",");
        if (check[cyc] == qu) {
            if (swi == longcyc) { //long cycle quantum correction code, sooner or later you are going to want to alternate the protocol, to keep it fresh. the program probably won't work as well without it
                qu = Math.floor(Math.random() * (2)) + 0; //quantum correction code... without this the whole thing will probably not work, you could change it to a one or a zero
                //and it will fail or freeze up. you may think how could a statically defined variable based on computer systems ever give rise to the kind of power quantum computers do
                //random numbers are based on time and the exact time the function is called, this is a computer, it runs it's code in a ordered and physics based way, reliably
                //so when you change the time the function is activated you change the output, what about the rest of the program? it's all just mechanical switches...
                //why don't you try adding in a random delay for this random number generator and see if it affects the program.
            }
            swi++;
            Do = 1;
            ack++;
            and = 0;
            cyc++;
            prime = 0;
        }
        //most of the time it knows the number before it matches...
        if (check[cyc] == qu) {
            ack++;
            if (qu == 1 && it == 0) {
                qu = 0;
                it++;
            }
            if (qu == 0 && it == 0) {
                qu = 1;
                it++;
            }
            it = 0;
            if (swi2 == longcyc2) { //another long cycle quantum correction code, integrated with the quantum protocol
                qu = Math.floor(Math.random() * (2)) + 0;
                swi2 = 0;
            }
            swi2++;
            and = 0;
            or = 0;
            cyc++;
            prime = 0;
        }
    }
    if (or > corr) {
        var check = numa.split(",");
        //most of the time it knows the number before it matches...
        if (check[cyc] == qu) {
            ack++;
            if (qu == 1 && it == 0) {
                qu = 0;
                it++;
            }
            if (qu == 0 && it == 0) {
                qu = 1;
                it++;
            }
            it = 0;
            if (swi2 == longcyc2) {
                qu = Math.floor(Math.random() * (2)) + 0;
                it = 0;
                swi2 = 0;
            }
            swi2++;
            code = 0;
            or = 0;
            cyc++;
            prime = 0;
        }
        if (check[cyc] != qu) { //this section checks for disruptions in quantum flux, it is the time the code is most sure of inference/disruption(unless you turn the device off),why? because we cause the disruption at a future time by adding 9s to 'numa',you may wonder many things, you may aswell throw computer logic out the window because this is essentially completely made up code from here on
            if (swi == longcyc) {
                qu = Math.floor(Math.random() * (2)) + 0;
                swi = 0;
            }
            swi++;
            Do = 1;
            nul++;
            or = 0;
            and = 0;
            cyc++;
            app.ShowPopup("Ghost protocol++ ->" + ghostprotocol);
            prime++;
            if (prime > 1 && ghostprotocol > 3) {
                if (GhostIterate == 0) {
                    ghostprotocollast = ghostprotocol;
                    GhostIterate++;
                }
                if ((ghostprotocol * range)  +qdata != (ghostprotocollast + range)+qdata  ) {
                    ghostprotocollast = (ghostprotocol * range);
                    outputq += "~" + ((ghostprotocol * range)+qdata ) +  " == ~" + testchecknum + "\n";
                    edtq.SetText(outputq);
                    //app.ShowPopup( qdata );
                    	app.WriteFile( "/sdcard/testfileq.txt", outputq);
                    	
                }
                if ((ghostprotocol * range) +qdata == (ghostprotocollast + range)+qdata  ) {
                    ghostprotocollast = ghostprotocol;
                    GhostIterate = 0;
                    outputq += "******\n";
                    
         var checkstring = "";           
var check = stringrand.split(",");
for(var n = 0;n<check.length;n++){
if (n == (ghostprotocol*range)+qdata){

checkstring += check[n-8] + ",";
if (n == (ghostprotocol*range)+qdata+32){//currently testing automatic connectivity between the quantum algorithm hyperdeteministic search and loading seed/nonce results to load appropriate AI responses
stringrand = checkstring;
app.WriteFile( "/sdcard/seed.txt", checkstring);
break;
}

}
}
                    
                    app.WriteFile( "/sdcard/testfileq.txt", outputq);
                    var resstring = (ghostprotocol*range).toString()
                    
                    for (var numl = 0; numl < range.length-1;numl++)                 
                    {
                    restring += "0";
                    }
               qdata += parseInt(resstring);//no way i am sorting out qdata notation fixing, because it doesn't output the correct information all the time in reliable terms,its more like a probabilistic nightmare to calculate with reducing notations and i think those possibilities interferes with the overall results, who knows.
                 ghostprotocol = 0; //i have it setup to detect just one segmentation, it needs to detect many.
                     range = (range/10);
                    edtq.SetText(outputq);
                    
	app.WriteFile( "/sdcard/testfileq.txt", outputq);
                }
            }
            ghostprotocol++; //This iterates multiverses supposedly...
        }
    }
}

function btn_OnTouch() {
    var now = new Date().getTime();
    app.SetAlarm("Set", 1234, OnAlarm, now + 10);
}

function OnAlarm(id) {
    //do calculation, efficiency does not matter so we can do it again and again.



    var db2 = "";
    while (0 == 0) {
        output = "";
        var txt = app.ReadFile("/sdcard/philosophy.txt");
        sentence = txt.split(".");
       
        var input = edtin.GetText();
        x = txt.indexOf(input);
        for (var x = 0; x < sentence.length; x++) {
            terminator = output.split(" ");
            if (terminator.length > 8) {
                filesave += output + "\n";
                if (stage == depth) {
                    x = pos - pos / 5;
                    stage = 0;
                    output2 += "\n";
                }
                app.WriteFile("/sdcard/output.txt", filesave, "append");
                break;
            }
            var q = 0;
            var func = app.ReadFile("/sdcard/function.txt");
            var functionorder = func.split("\n");

            while (c < sentence.length) {
                //c =  Math.floor(Math.random() * (sentence.length)) + 0;
                var sent = sentence[c];
                var word = sent.split(" ");
                for (var a = 0; a < word.length; a++) {
                    for (var b = 0; b < functionorder.length; b++) {
                        if (sent.indexOf(functionorder[b]) > -1) {
                            var sent = sentence[c];
                            var word = sent.split(" ");
                            //a = b //functionorder
                            x = c / 5;
                            pos = c;
                            x = Math.round(x);

                            if (output.indexOf(wordstr) == -1) {
                                if (wordstr.indexOf(sent) == -1) {
                                    output += wordstr + " ";
                                    function1 = wordstr;
                                }
                                edt.SetText(output);


                            }
                            if (q == 0) {
                                output += "";
                            }
                            q = 1;
                        }
                    }
                    c++;
                    if (q == 1) {
                        break
                    }
                }
                if (q == 1) {
                    break
                }
            }
            var txt = app.ReadFile("/sdcard/philosophy.txt");
            var q = 0
            var sent = sentence[x];
            var word = sent.split(" ");
            for (var a = 0; a < word.length; a++) {
                var txt2 = app.ReadFile("/sdcard/abst.txt");
                var wordstr = word[a];
                var vocab = txt2.split("\n");
                for (var b = 0; b < vocab.length; b++) {
                    if (wordstr == vocab[b]) {
                        if (output.indexOf(wordstr) == -1) {
                            if (wordstr.indexOf(sent) == -1) {
                                output += wordstr + " ";
                            }
                            edt.SetText(output);

                        }

                        q = 1;
                        break;
                    }
                }

                if (q == 1) {
                    break
                }
            }



            var q = 0;
            var func = app.ReadFile("/sdcard/noun.txt");
            var functionorder = func.split("\n");
            for (var c = x; c < sentence.length; c++) {
                //c =  Math.floor(Math.random() * (sentence.length)) + 0;
                var sent = sentence[c];
                var word = sent.split(" ");
                for (var a = 0; a < word.length; a++) {
                    for (var b = 0; b < functionorder.length; b++) {
                        //b =  Math.floor(Math.random() * (func.length)) + 0;
                        if (sent.indexOf(functionorder[b]) > -1) {
                            var sent = sentence[c];
                            var word = sent.split(" ");
                            x = c / 5;
                            c = pos;
                            x = Math.round(x);
                            if (q == 0) {
                                output += "";
                                if (update.length > 1) {
                                    var updater = app.ReadFile("/sdcard/parameters.txt");
                                    updater += "\n" + update;
                                    app.WriteFile("/sdcard/parameters.txt", updater);
                                }
                            }
                            q = 1;
                            break;
                        }
                    }
                    if (q == 1) {
                        break
                    }
                }
                if (q == 1) {
                    break
                }
            }
            var q = 0;
            var sent = sentence[x];
            var word = sent.split(" ");
            for (var a = 0; a < word.length; a++) {
                var txt2 = app.ReadFile("/sdcard/av.txt");
                var wordstr = word[a];
                var vocab = txt2.split("\n");
                for (var b = 0; b < vocab.length; b++) {
                    if (wordstr == vocab[b]) {
                        if (output.indexOf(wordstr) == -1) {
                            if (wordstr.indexOf(sent) == -1) {
                                output += wordstr + " ";
                            }
                            edt.SetText(output);

                        }
                    }
                }
            }
            var q = 0;
            var func = app.ReadFile("/sdcard/parameters.txt");
            var functionorder = func.split("\n");
            for (var c = x; c < sentence.length; c++) {
                //c =  Math.floor(Math.random() * (sentence.length)) + 0;
                var sent = sentence[c];
                var word = sent.split(" ");
                for (var a = 0; a < word.length; a++) {
                    for (var b = 0; b < functionorder.length; b++) {
                        //b =  Math.floor(Math.random() * (func.length)) + 0;
                        if (sent.indexOf(functionorder[b]) > -1) {
                            var sent = sentence[c];
                            var word = sent.split(" ");
                            x = c / 5;
                            c = pos;
                            x = Math.round(x);
                            if (q == 0) {
                                output += "";
                                if (update.length > 1) {
                                    var updater = app.ReadFile("/sdcard/parameters.txt");
                                    updater += "\n" + update;
                                    app.WriteFile("/sdcard/parameters.txt", updater);
                                }
                            }
                            q = 1;
                            break;
                        }
                    }
                    if (q == 1) {
                        break
                    }
                }
                if (q == 1) {
                    break
                }
            }
            var q = 0;
            var func = app.ReadFile("/sdcard/noun.txt");
            var functionorder = func.split("\n");
            for (var c = x; c < sentence.length; c++) {
   
     
                 var stringrandarr = stringrand.split();
                 if (nn<stringrandarr.length){
                 c = parseInt(stringrandarr[nn],10);
                 nn++;
   }
                var sent = sentence[c];
                var word = sent.split(" ");
                for (var a = 0; a < word.length; a++) {
                    for (var b = 0; b < functionorder.length; b++) {
                        //b =  Math.floor(Math.random() * (func.length)) + 0;
                        if (sent.indexOf(functionorder[b]) > -1) {
                            if (sent.indexOf(function1) > -1) {
                                var sent = sentence[c];
                                var word = sent.split(" ");

                                var wordstr = word[a];
                                var vocab = func.split("\n");
                                for (var b = 0; b < func.length; b++) {
                                    if (wordstr == func[b]) {
                                        if (output.indexOf(wordstr) == -1) {
                                            if (wordstr.indexOf(sent) == -1) {
                                                edtin.SetText(wordstr);
                                            }
                                            update = wordstr;
                                            edt.SetText(output);

                                            q = 1;
                                        }
                                    }
                                }
                                //a = b //functionorder

                                x = c;
                                if (q == 0) {
                                    output += "";
                                }
                            }
                            q = 1;
                            break;
                        }
                    }
                    if (q == 1) {
                        break
                    }
                }
                if (q == 1) {
                    break
                }
            }
            var q = 0;
            for (var y = 0; y < sentence.length; y++) {
            
            
            y = Math.floor(Math.random() * (sentence.length)) + 0;
                var sent = sentence[y];
                var word = sent.split(" ");
                for (var a = 0; a < word.length; a++) {
                    var txt = app.ReadFile("/sdcard/adj.txt");
                    var wordstr = word[a];
                    var vocab = txt.split("\n");
                    for (var b = 0; b < vocab.length; b++) {
                        if (wordstr == vocab[b]) {
                            if (output.indexOf(wordstr) == -1) {
                                if (wordstr.indexOf(sent) == -1) {
                                    output += wordstr + " ";
                                }
                                update = wordstr;
                                edt.SetText(output);

                                q = 1;
                            }
                        }
                    }
                }
                if (q == 1) {
                    break
                }
            }
        }
        /*
        	var pitch = 1.0, speed = 1.0;
        	app.TextToSpeech( output, pitch, speed );
        */
        var download = output.split(" ");
        var refreshermind = "";
        for (var mind = 0; mind < download.length; mind++) {
            refreshermind += download[mind] + "\n";
            app.WriteFile("/sdcard/function.txt", refreshermind, "append");
        }
        if (output.indexOf("?") > -1) {
            output2 += ".";
        }
        output2 += output + "\n";
        edt2.SetText(output2);
        app.SetClipboardText(output2);
   
       var outarr = output.split(" ");

    var input = outarr[outarr.length];
    
    if (input == testout && output.indexOf(context) > -1){//iterate
    break;
    }
      }




    var integer = 0; //341881320659934023674980;//18537;//same as testchecknum to test...
 

    input += nn;
    var crc = crc32(input);
    app.ShowPopup(crc);
    //input += crc;
app.SetClipboardText(input );


    var binaryval = "";
    for (var i = 0; i < input.length; i++) {
        binaryval += input.charCodeAt(i).toString(2);
    }
    integer = parseInt(binaryval, 2);
    var str = integer.toString(10);
    var rangenew = "1";
    for (var s = 0; s < str.length - 2; s++) {
        rangenew += "0";
    }
    str += "," + rangenew;
    app.SetClipboardText(str);
    app.ShowPopup("Copied integer & range");
    //if decimal higher or lower send disruption
    integer = nn;
    if (integer <= (ghostprotocol * range) + qdata) {
        for (var a = 0; a < 500; a++) {
            var b = 9;
            numa += b + ","; //quantum disruption
        }
    }
}
//convert ascii data into decimal then use the ghost protocol to check the number, then convert back to ascii.
//needs to be protected from poweroff to minimise noise

function crc32(str) {
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    };
    str = Utf8Encode(str);
    var table = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";
    if (typeof(crc) == "undefined") {
        crc = 0;
    }
    var x = 0;
    var y = 0;
    crc = crc ^ (-1);
    for (var i = 0, iTop = str.length; i < iTop; i++) {
        y = (crc ^ str.charCodeAt(i)) & 0xFF;
        x = "0x" + table.substr(y * 9, 8);
        crc = (crc >>> 8) ^ x;
    }
    return crc ^ (-1);
};