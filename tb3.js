// JavaScript Document

var url = "img/";

function preloadImages() {
	
	var i1 = new Image();
	i1.src = url+"buttonblue_depressed.png";
	var i2 = new Image();
	i2.src = url+"button_on";
	var i3 = new Image();
	i3.src = url+"button-on-orange.png";
	var i4 = new Image();
	i4.src = url+"button-on-red.png";
	var i5 = new Image();
	i5.src = url+"button-on-yellow.png";
	var i6 = new Image();
	i6.src = url+"light-on.png";
	var i7 = new Image();
	i7.src = url+"run-deactivated.png";
	}

function buttonDepress (var1) {
	
	document.getElementById(var1).src = url+"buttonblue_depressed.png";
	}

var state4_1 = 0;
var state4_2 = 0;
var state4_3 = 0;
var state4_4 = 0;
var state4_5 = 0;
var state4_6 = 0;
var state4_7 = 0;
var state4_8 = 0;
var state4_9 = 0;
var state4_10 = 0;
var state4_11 = 0;
var state4_12 = 0;
var state4_13 = 0;
var state4_14 = 0;
var state4_15 = 0;
var state4_16 = 0;

var state3_1 = 0;
var state3_2 = 0;
var state3_3 = 0;
var state3_4 = 0;
var state3_5 = 0;
var state3_6 = 0;
var state3_7 = 0;
var state3_8 = 0;
var state3_9 = 0;
var state3_10 = 0;
var state3_11 = 0;
var state3_12 = 0;
var state3_13 = 0;
var state3_14 = 0;
var state3_15 = 0;
var state3_16 = 0;


var state2_1 = 0;
var state2_2 = 0;
var state2_3 = 0;
var state2_4 = 0;
var state2_5 = 0;
var state2_6 = 0;
var state2_7 = 0;
var state2_8 = 0;
var state2_9 = 0;
var state2_10 = 0;
var state2_11 = 0;
var state2_12 = 0;
var state2_13 = 0;
var state2_14 = 0;
var state2_15 = 0;
var state2_16 = 0;

var state1_1 = 0;
var state1_2 = 0;
var state1_3 = 0;
var state1_4 = 0;
var state1_5 = 0;
var state1_6 = 0;
var state1_7 = 0;
var state1_8 = 0;
var state1_9 = 0;
var state1_10 = 0;
var state1_11 = 0;
var state1_12 = 0;
var state1_13 = 0;
var state1_14 = 0;
var state1_15 = 0;
var state1_16 = 0;

var s1;
var b1;
var ch1;
var oh1;

var s2;
var b2;
var ch2;
var oh2;

var s3;
var b3;
var ch3;
var oh3;

var s4;
var b4;
var ch4;
var oh4;

var s5;
var b5;
var ch5;
var oh5;

var s6;
var b6;
var ch6;
var oh6;

var s7;
var b7;
var ch7;
var oh7;

var s8;
var b8;
var ch8;
var oh8;

var s9;
var b9;
var ch9;
var oh9;

var s10;
var b10;
var ch10;
var oh10;

var s11;
var b11;
var ch11;
var oh11;

var s12;
var b12;
var ch12;
var oh12;

var s13;
var b13;
var ch13;
var oh13;

var s14;
var b14;
var ch14;
var oh14;

var s15;
var b15;
var ch15;
var oh15;

var s16;
var b16;
var ch16;
var oh16;

var b1p;
var s1p;
var ch1p;
var oh1p;

var b2p;
var s2p;
var ch2p;
var oh2p;

var b3p;
var s3p;
var ch3p;
var oh3p;

var b4p;
var s4p;
var ch4p;
var oh4p;

var b5p;
var s5p;
var ch5p;
var oh5p;

var b6p;
var s6p;
var ch6p;
var oh6p;

var b7p;
var s7p;
var ch7p;
var oh7p;

var b8p;
var s8p;
var ch8p;
var oh8p;

var b9p;
var s9p;
var ch9p;
var oh9p;

var b10p;
var s10p;
var ch10p;
var oh10p;

var b11p;
var s11p;
var ch11p;
var oh11p;

var b12p;
var s12p;
var ch12p;
var oh12p;

var b13p;
var s13p;
var ch13p;
var oh13p;

var b14p;
var s14p;
var ch14p;
var oh14p;

var b15p;
var s15p;
var ch15p;
var oh15p;

var b16p;
var s16p;
var ch16p;
var oh16p;

var tempo = 125;

function numbersonly(e, decimal) {
	
	var key;
	var keychar;
	
	if (window.event) {
		key = window.event.keyCode;
		}
	
	else if (e) {
		key = e.which;
		}
	
	else {
		return true;
		}
	
	keychar = String.fromCharCode(key);
	
	if ((key===null) || (key===0) || (key==8) ||  (key==9) || (key==13) || (key==27) ) {
		return true;
		}
	
	else if ((("0123456789").indexOf(keychar) > -1)) {
		return true;
		}
	
	else if (decimal && (keychar == ".")) {
		return true;
		}
	
	else {
		return false;
		}
	}

function tempoChange() {
		
		var tempoValue = parseInt(document.getElementById('tempoValue').value);
		tempo = parseInt(60/tempoValue/4*1000);
		}

function soundsSelect (var2) {
	
	if (var2 == "img4-1") {
		if (state4_1 === 0) {
			document.getElementById(var2).src = url+"button_on";
			state4_1 = 1;
			oh1p = 'setTimeout( "oh1.play()", 0 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state4_1 = 0;
			oh1p = '';
			}
		}
	else if (var2 == "img4-2") {
		if (state4_2 === 0) {
			document.getElementById(var2).src = url+"button_on";
			state4_2 = 1;
			oh2p = 'setTimeout( "oh2.play()", tempo )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state4_2 = 0;
			oh2p = '';
			}
		}
	else if (var2 == "img4-3") {
		if (state4_3 === 0) {
			document.getElementById(var2).src = url+"button_on";
			state4_3= 1;
			oh3p = 'setTimeout( "oh3.play()", tempo*2 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state4_3 = 0;
			oh3p = '';
			}
		}
	else if (var2 == "img4-4") {
		if (state4_4 === 0) {
			document.getElementById(var2).src = url+"button_on";
			state4_4 = 1;
			oh4p = 'setTimeout( "oh4.play()", tempo*3 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state4_4 = 0;
			oh4p = '';
			}
		}
	else if (var2 == "img4-5") {
		if (state4_5 === 0) {
			document.getElementById(var2).src = url+"button_on";
			state4_5 = 1;
			oh5p = 'setTimeout( "oh5.play()", tempo*4 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state4_5 = 0;
			oh5p = '';
			}
		}
	else if (var2 == "img4-6") {
		if (state4_6 === 0) {
			document.getElementById(var2).src = url+"button_on";
			state4_6 = 1;
			oh6p = 'setTimeout( "oh6.play()", tempo*5 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state4_6 = 0;
			oh6p = '';
			}
		}
	else if (var2 == "img4-7") {
		if (state4_7 === 0) {
			document.getElementById(var2).src = url+"button_on";
			state4_7 = 1;
			oh7p = 'setTimeout( "oh7.play()", tempo*6 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state4_7 = 0;
			oh7p = '';
			}
		}
	else if (var2 == "img4-8") {
		if (state4_8 === 0) {
			document.getElementById(var2).src = url+"button_on";
			state4_8 = 1;
			oh8p = 'setTimeout( "oh8.play()", tempo*7 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state4_8 = 0;
			oh8p = '';
			}
		}
	else if (var2 == "img4-9") {
		if (state4_9 === 0) {
			document.getElementById(var2).src = url+"button_on";
			state4_9 = 1;
			oh9p = 'setTimeout( "oh9.play()", tempo*8 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state4_9 = 0;
			oh9p = '';
			}
		}
	else if (var2 == "img4-10") {
		if (state4_10 === 0) {
			document.getElementById(var2).src = url+"button_on";
			state4_10 = 1;
			oh10p = 'setTimeout( "oh10.play()", tempo*9 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state4_10 = 0;
			oh10p = '';
			}
		}
	else if (var2 == "img4-11") {
		if (state4_11 === 0) {
			document.getElementById(var2).src = url+"button_on";
			state4_11 = 1;
			oh11p = 'setTimeout( "oh11.play()", tempo*10 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state4_11 = 0;
			oh11p = '';
			}
		}
	else if (var2 == "img4-12") {
		if (state4_12 === 0) {
			document.getElementById(var2).src = url+"button_on";
			state4_12 = 1;
			oh12p = 'setTimeout( "oh12.play()", tempo*11 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state4_12 = 0;
			oh12p = '';
			}
		}
	else if (var2 == "img4-13") {
		if (state4_13 === 0) {
			document.getElementById(var2).src = url+"button_on";
			state4_13 = 1;
			oh13p = 'setTimeout( "oh13.play()", tempo*12 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state4_13 = 0;
			oh13p = '';
			}
		}
	else if (var2 == "img4-14") {
		if (state4_14 === 0) {
			document.getElementById(var2).src = url+"button_on";
			state4_14 = 1;
			oh14p = 'setTimeout( "oh14.play()", tempo*13 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state4_14 = 0;
			oh14p = '';
			}
		}
	else if (var2 == "img4-15") {
		if (state4_15 === 0) {
			document.getElementById(var2).src = url+"button_on";
			state4_15 = 1;
			oh15p = 'setTimeout( "oh15.play()", tempo*14 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state4_15 = 0;
			oh15p = '';
			}
		}
	else if (var2 == "img4-16") {
		if (state4_16 === 0) {
			document.getElementById(var2).src = url+"button_on";
			state4_16 = 1;
			oh16p = 'setTimeout( "oh16.play()", tempo*15 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state4_16 = 0;
			oh16p = '';
			}
		}
	
	
	}

var interVal = "";

function runLoop() {
	
	if ( document.getElementById("runButton").src == url+"run-deactivated.png" ) {
		document.getElementById("tempoValue").disabled = true;
		document.getElementById("tempoValue").style.color = "#777777";
		document.getElementById("runButton").src = url+"run-activated.png";
		setTimeout("singlePlay()" , 0 );
		interVal = setInterval( "singlePlay()", tempo*16 );
		}
	
	else {
		document.getElementById("tempoValue").disabled = false;
		document.getElementById("tempoValue").style.color = "";
		document.getElementById("runButton").src = url+"run-deactivated.png";
		clearInterval(interVal);
		}
	}

function singlePlay() {
	
	s1 = document.getElementById('s1');
	b1 = document.getElementById('b1');
	ch1 = document.getElementById('ch1');
	oh1 = document.getElementById('oh1');
	
	s2 = document.getElementById('s2');
	b2 = document.getElementById('b2');
	ch2 = document.getElementById('ch2');
	oh2 = document.getElementById('oh2');
	
	s3 = document.getElementById('s3');
	b3 = document.getElementById('b3');
	ch3 = document.getElementById('ch3');
	oh3 = document.getElementById('oh3');
	
	s4 = document.getElementById('s4');
	b4 = document.getElementById('b4');
	ch4 = document.getElementById('ch4');
	oh4 = document.getElementById('oh4');
	
	s5 = document.getElementById('s5');
	b5 = document.getElementById('b5');
	ch5 = document.getElementById('ch5');
	oh5 = document.getElementById('oh5');
	
	s6 = document.getElementById('s6');
	b6 = document.getElementById('b6');
	ch6 = document.getElementById('ch6');
	oh6 = document.getElementById('oh6');
	
	s7 = document.getElementById('s7');
	b7 = document.getElementById('b7');
	ch7 = document.getElementById('ch7');
	oh7 = document.getElementById('oh7');
	
	s8 = document.getElementById('s8');
	b8 = document.getElementById('b8');
	ch8 = document.getElementById('ch8');
	oh8 = document.getElementById('oh8');
	
	s9 = document.getElementById('s9');
	b9 = document.getElementById('b9');
	ch9 = document.getElementById('ch9');
	oh9 = document.getElementById('oh9');
	
	s10 = document.getElementById('s10');
	b10 = document.getElementById('b10');
	ch10 = document.getElementById('ch10');
	oh10 = document.getElementById('oh10');
	
	s11 = document.getElementById('s11');
	b11 = document.getElementById('b11');
	ch11 = document.getElementById('ch11');
	oh11 = document.getElementById('oh11');
	
	s12 = document.getElementById('s12');
	b12 = document.getElementById('b12');
	ch12 = document.getElementById('ch12');
	oh12 = document.getElementById('oh12');
	
	s13 = document.getElementById('s13');
	b13 = document.getElementById('b13');
	ch13 = document.getElementById('ch13');
	oh13 = document.getElementById('oh13');
	
	s14 = document.getElementById('s14');
	b14 = document.getElementById('b14');
	ch14 = document.getElementById('ch14');
	oh14 = document.getElementById('oh14');
	
	s15 = document.getElementById('s15');
	b15 = document.getElementById('b15');
	ch15 = document.getElementById('ch15');
	oh15 = document.getElementById('oh15');
	
	s16 = document.getElementById('s16');
	b16 = document.getElementById('b16');
	ch16 = document.getElementById('ch16');
	oh16 = document.getElementById('oh16');
	
	setTimeout("document.getElementById('imgl-1').src = url+'light-on.png'", 0 );
	setTimeout("document.getElementById('imgl-1').src = url+'light-off.png'", tempo );
	setTimeout("document.getElementById('imgl-2').src = url+'light-on.png'", tempo );
	setTimeout("document.getElementById('imgl-2').src = url+'light-off.png'", tempo*2 );
	setTimeout("document.getElementById('imgl-3').src = url+'light-on.png'", tempo*2 );
	setTimeout("document.getElementById('imgl-3').src = url+'light-off.png'", tempo*3 );
	setTimeout("document.getElementById('imgl-4').src = url+'light-on.png'", tempo*3 );
	setTimeout("document.getElementById('imgl-4').src = url+'light-off.png'", tempo*4 );
	setTimeout("document.getElementById('imgl-5').src = url+'light-on.png'", tempo*4 );
	setTimeout("document.getElementById('imgl-5').src = url+'light-off.png'", tempo*5 );
	setTimeout("document.getElementById('imgl-6').src = url+'light-on.png'", tempo*5 );
	setTimeout("document.getElementById('imgl-6').src = url+'light-off.png'", tempo*6 );
	setTimeout("document.getElementById('imgl-7').src = url+'light-on.png'", tempo*6 );
	setTimeout("document.getElementById('imgl-7').src = url+'light-off.png'", tempo*7 );
	setTimeout("document.getElementById('imgl-8').src = url+'light-on.png'", tempo*7 );
	setTimeout("document.getElementById('imgl-8').src = url+'light-off.png'", tempo*8 );
	setTimeout("document.getElementById('imgl-9').src = url+'light-on.png'", tempo*8 );
	setTimeout("document.getElementById('imgl-9').src = url+'light-off.png'", tempo*9 );
	setTimeout("document.getElementById('imgl-10').src = url+'light-on.png'", tempo*9 );
	setTimeout("document.getElementById('imgl-10').src = url+'light-off.png'", tempo*10 );
	setTimeout("document.getElementById('imgl-11').src = url+'light-on.png'", tempo*10 );
	setTimeout("document.getElementById('imgl-11').src = url+'light-off.png'", tempo*11 );
	setTimeout("document.getElementById('imgl-12').src = url+'light-on.png'", tempo*11 );
	setTimeout("document.getElementById('imgl-12').src = url+'light-off.png'", tempo*12 );
	setTimeout("document.getElementById('imgl-13').src = url+'light-on.png'", tempo*12 );
	setTimeout("document.getElementById('imgl-13').src = url+'light-off.png'", tempo*13 );
	setTimeout("document.getElementById('imgl-14').src = url+'light-on.png'", tempo*13 );
	setTimeout("document.getElementById('imgl-14').src = url+'light-off.png'", tempo*14 );
	setTimeout("document.getElementById('imgl-15').src = url+'light-on.png'", tempo*14 );
	setTimeout("document.getElementById('imgl-15').src = url+'light-off.png'", tempo*15 );
	setTimeout("document.getElementById('imgl-16').src = url+'light-on.png'", tempo*15 );
	setTimeout("document.getElementById('imgl-16').src = url+'light-off.png'", tempo*16-1 );
	
	eval(b1p);
	eval(s1p);
	eval(ch1p);
	eval(oh1p);
	eval(b2p);
	eval(s2p);
	eval(ch2p);
	eval(oh2p);
	eval(b3p);
	eval(s3p);
	eval(ch3p);
	eval(oh3p);
	eval(b4p);
	eval(s4p);
	eval(ch4p);
	eval(oh4p);
	eval(b5p);
	eval(s5p);
	eval(ch5p);
	eval(oh5p);
	eval(b6p);
	eval(s6p);
	eval(ch6p);
	eval(oh6p);
	eval(b7p);
	eval(s7p);
	eval(ch7p);
	eval(oh7p);
	eval(b8p);
	eval(s8p);
	eval(ch8p);
	eval(oh8p);
	eval(b9p);
	eval(s9p);
	eval(ch9p);
	eval(oh9p);
	eval(b10p);
	eval(s10p);
	eval(ch10p);
	eval(oh10p);
	eval(b11p);
	eval(s11p);
	eval(ch11p);
	eval(oh11p);
	eval(b12p);
	eval(s12p);
	eval(ch12p);
	eval(oh12p);
	eval(b13p);
	eval(s13p);
	eval(ch13p);
	eval(oh13p);
	eval(b14p);
	eval(s14p);
	eval(ch14p);
	eval(oh14p);
	eval(b15p);
	eval(s15p);
	eval(ch15p);
	eval(oh15p);
	eval(b16p);
	eval(s16p);
	eval(ch16p);
	eval(oh16p);
	}
	
function playSound(soundfile) {
  document.getElementById("ambaudio").innerHTML=
    "<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}