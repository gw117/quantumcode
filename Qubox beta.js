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
var qu = 0;
var range = 10000000;
var ghostprotocol = 0;
var prime = 0;
var output = "";
var ghostprotocollast = 0;
var GhostIterate = 0;
var testchecknum = 244939252; //341881320659934023674980; //18537;
function OnStart() {
    app.SetOrientation("Landscape");
    lay = app.CreateLayout("Linear", "horizontal,FillXY");
    lay = app.CreateLayout("Frame");
    cam = app.CreateCameraView(x, y);
    lay.AddChild(cam);
    btn = app.CreateButton("Send", 0.4, 0.1);
    btn.SetOnTouch(btn_OnTouch);
    btn.SetMargins(0.5, 0.02, 0, 0);
    lay.AddChild(btn);
    edt = app.CreateTextEdit("", 0.96, 0.4);
    edt.SetBackColor("#333333");
    edt.SetTextSize(8);
    edt.SetMargins(0.0, 0.5, 0, 0);
    lay.AddChild(edt);

    crypt = app.CreateCrypt();
    for (var a = 0; a < 100; a++) {
        var b = Math.floor(Math.random() * (2)) + 0;
        numa += b + ","; //initialise test variable set
    }
    app.AddLayout(lay);
    setTimeout("StartDetection()", 1000); //initiate camera stream function
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
                if (ghostprotocol * range != ghostprotocollast + range) {
                    ghostprotocollast = ghostprotocol * range;
                    output += "~" + ghostprotocol * range + " ==" + testchecknum + "\n";
                    edt.SetText(output);
                }
                if (ghostprotocol * range == ghostprotocollast + range) {
                    ghostprotocollast = ghostprotocol;
                    GhostIterate = 0;
                    output += "******\n";
                    edt.SetText(output);
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
    //in this space time essentially does not exist and we can do big calculations 
    //in a fraction of the time, this function isn't classically called, yet the potential 
    //of it being called is enough for it to be able to send information forward and back along the time axis.




    var integer = 0; //341881320659934023674980;//18537;//same as testchecknum to test...
    var input = "test"; //this is the string which is supposed to be sent via quantum disruptions through time and the multiverse
    //supposed to implement crc32 to be able to verify the results once recieved...




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
    if (integer <= ghostprotocol * range) {
        for (var a = 0; a < 500; a++) {
            var b = 9;
            numa += b + ","; //quantum disruption
        }
        
check = numa.split(",");
    }
}
//convert ascii data into decimal then use the ghost protocol to check the number, then convert back to ascii.
//needs to be protected from poweroff to minimise noise