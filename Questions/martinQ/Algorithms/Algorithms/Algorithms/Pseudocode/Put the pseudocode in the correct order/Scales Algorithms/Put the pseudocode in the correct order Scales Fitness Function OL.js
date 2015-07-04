<SCRIPT>
var isCorrect = 0;
var myMyAnswer=[];
var yourAnswer=[];
var myText=[];
var x;
var v;
function process1(QNo)
{
var myLength=0;
var currentTable=[];
var myMyAnswerLength = myMyAnswer.length;
	
for (var i=5; i<document.forms[0].elements.length; i++)
	{
		if (document.forms[0].elements[i].name==QNo)
		{var item=i; break} 
	}
	

		
if (isCorrect == 1)
	{
		document.forms[0].elements[item+3].value = "<font color="+getFgColor_right()+">Your answer was correct.<br></font>";
		myLength=myMyAnswer.length;
		document.forms[0].elements[item+3].value += '<center><table border="1" width="75%"><tr><th><p style="font-size:'+getFontSize()+'">Correct answer</p></th><th><p style="font-size:'+getFontSize()+'">Your answer</p></th></tr>'
		for (i=0;i<myLength;i++){
			document.forms[0].elements[item+3].value += '<tr><td width="50%"><p style="font-size:'+getFontSize()+'">'+ myMyAnswer[i] + '</p></td><td width="50%"><p style="font-size:'+getFontSize()+'">'+ yourAnswer[i] + '</p></td></tr>';
		}
		document.forms[0].elements[item+3].value += '</table></center>';
	} 

else 
	{
		document.forms[0].elements[item+3].value = "<font color="+getFgColor_right()+">Your answer was incorrect</font><br>";
		
		for (i=x+v-1; i > x-1; i--){
			
			if (yourAnswer[i]== '<font color="'+getBgColor()+'">.</font>'){
				yourAnswer.pop();
			} else {
				break
			}
			
		}
		for (i=x+v-1; i > x-1; i--){
			
			if (myMyAnswer[i]== '<font color="'+getBgColor()+'">.</font>'){
				myMyAnswer.pop();
			}
		}

		if (myMyAnswer.length < yourAnswer.length){
			myLength = yourAnswer.length;
				for (i=x; i < myLength; i++){
					myMyAnswer[myMyAnswer.length] = '<font color="'+getBgColor()+'">.</font>';
				}
		} else {
			myLength = myMyAnswer.length;
		}
		document.forms[0].elements[item+3].value += '<center><table border="1" width="75%"><tr><th><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Correct answer</p></font></th><th><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Your answer</p></font></th></tr>'
		for (i=0;i<myLength;i++){
			document.forms[0].elements[item+3].value += '<tr><td width="50%"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+ myMyAnswer[i] + '</p></font></td><td width="50%"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+ yourAnswer[i] + '</p></font></td></tr>';
		}
		document.forms[0].elements[item+3].value += '</table></center>';
	}
	currentTable = myQuestionText+ '<br><br><br><center><table border ="1" width="75%"><tr height="25px"><th width="50%"><font color="'+getBgColor()+'">.</font></th><th align="left"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myInput+'</p></font></th></tr>';
	for (i=0; i < x+v; i++){
		currentTable += '<tr height = "25px"><td width="50%"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myText[2*i]+'</p></font></td><td width="50%"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myText[2*i+1]+'</p></font></td></tr>';
	}
	currentTable += '<tr height = "25px"><td width="50%"><font color="'+getBgColor()+'">.</font></td><th width="50%" align="left"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myOutput+'</p></font></th></tr></table></center><br>';
	
	document.forms[0].elements[item+3].value =  
	currentTable + document.forms[0].elements[item+3].value
	myAnswer = document.forms[0].elements[item+3].value
}

function question1()
{
	
var myMyAnswersPlural = [
	[["Let L=0 & R=0"],["Let L=0 and R=0"],["Let R=0 & L=0"],["Let R=0 and L=0"]],
	[["For i from 0 to n-1"],["For i from zero to size of S minus one"],["For i from zero to size of W minus one"],["For i from 0 to |S|-1"],["For i from 0 to |W|-1"]],
	[["If S<sub>i</sub> = 0 then"],["If the ith element of S is zero"]],
	[["Let L = L + W<sub>i</sub>"]],
	[["Else"]],
	[["Let R = R + W<sub>i</sub>"]],
	[["End if"]],
	[["End for"]]
	
]
var myWrongsPlural = [
	[["For i from 1 to n-1"],["For i from one to size of S minus one"],["For i from one to size of W minus one"],["For i from 1 to |S|-1"],["For i from 1 to |W|-1"]],
	[["For i from 0 to n"],["For i from zeroto size of S"],["For i from zero to size of W"],["For i from 0 to |S|"],["For i from 0 to |W|"]],
	[["Let L = R + W<sub>i</sub>"]],
	[["Let R = L + W<sub>i</sub>"]],
	[["Let L = L - W<sub>i</sub>"]],
	[["Let R = R - W<sub>i</sub>"]]
]
v = 3;
var s = 0
myInput = 'Input: (S, W)';
myQuestionText='You are given some lines of pseudo code below. Order them on the right hand side of the table such that it codes an algorithm that takes an input and finds fitness of a given solution to the scales problem. Here <b>S</b> is a binary string of length n, <b>W</b> is a real vector/array of weights of length n, and a value of <b>0</b> in <b>S</b> denotes a position on the left hand side.<br> You may not need to use all of the lines of pseudocode, if you don\'t then please start at the top and only leave empty space at the end.<br>To move a line, first click on a cell to selected it, then click on the desired location.';
myOutput="Output: |L-R|";




var p;
for (i=0; i < myMyAnswersPlural.length;i++){
	if (myMyAnswersPlural[i].length == 1){
		myMyAnswer[i]=myMyAnswersPlural[i]
	} else {
		p=Math.floor(Math.random()*myMyAnswersPlural[i].length);
		myMyAnswersPlural[i][p];
		if (myMyAnswersPlural[i][p].length == 1){
			myMyAnswer[i]=myMyAnswersPlural[i][p]		
		} else {
			p=Math.floor(Math.random()*2);
			myMyAnswer[i]=myMyAnswersPlural[i][s][p]	
		}
	}
}
var myWrong = [];
for (i=0; i < myWrongsPlural.length;i++){
	if (myWrongsPlural[i].length == 1){
		myWrong[i]=myWrongsPlural[i]
	} else {
		p=Math.floor(Math.random()*myWrongsPlural[i].length);
		myWrongsPlural[i][p];
		if (myWrongsPlural[i][p].length == 1){
			myWrong[i]=myWrongsPlural[i][p]		
		} else { //means it's ascending or descending choice
			p=Math.floor(Math.random()*myWrongsPlural[i][s].length);
			myWrong[i]=myWrongsPlural[i][s][p]	
		}
	}
}
x = myMyAnswer.length;
var q = myWrong.length;
var myTempText=[];
var theirAnswer=[];
var myLocation = [];
var mySelection = [];
for (i = 0; i < 2*(x+v); i++){
	myLocation[i] = "'"+i+"'"; 
	mySelection[i] = 0;
}
var oldCellValue;
var oldCellLocation;
var clicked = 0;
var y = displayarray(x,0,x-1,x);
var z = displayarray(q,0,q-1,q);
var zz = displayarray(x+v,0,x+v-1,x+v)


var myTable = '<br><p>'+myQuestionText+'</p><br><center><table border="1" width="75%"> <tr> <th><font color="'+getBgColor()+'">.</font> </th> <th align="left";><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myInput+'</p></font></th></tr>';
for (i=0; i <x+v; i++){
	myTable += '<tr height="25px"> <td id= "'+myLocation[2*i];
	myTable += '" width="50%")}"> </td> <td id = "'+myLocation[2*i+1];
	myTable += '" width="50%")}"> </td> </tr>';
}
myTable += '<tr> <th><font color="'+getBgColor()+'">.</font> </th> <th align="left"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myOutput+'</p></font></th></tr></table></center><br>';
document.write(myTable)


document.getElementById(myLocation[0]).onclick = function() {selecting(0)};
document.getElementById(myLocation[1]).onclick = function() {selecting(1)};
document.getElementById(myLocation[2]).onclick = function() {selecting(2)};
document.getElementById(myLocation[3]).onclick = function() {selecting(3)};
document.getElementById(myLocation[4]).onclick = function() {selecting(4)};
document.getElementById(myLocation[5]).onclick = function() {selecting(5)};
document.getElementById(myLocation[6]).onclick = function() {selecting(6)};
document.getElementById(myLocation[7]).onclick = function() {selecting(7)};
document.getElementById(myLocation[8]).onclick = function() {selecting(8)};
document.getElementById(myLocation[9]).onclick = function() {selecting(9)};
document.getElementById(myLocation[10]).onclick = function() {selecting(10)};
document.getElementById(myLocation[11]).onclick = function() {selecting(11)};
document.getElementById(myLocation[12]).onclick = function() {selecting(12)};
document.getElementById(myLocation[13]).onclick = function() {selecting(13)};
document.getElementById(myLocation[14]).onclick = function() {selecting(14)};
document.getElementById(myLocation[15]).onclick = function() {selecting(15)};
document.getElementById(myLocation[16]).onclick = function() {selecting(16)};
document.getElementById(myLocation[17]).onclick = function() {selecting(17)};
document.getElementById(myLocation[18]).onclick = function() {selecting(18)};
document.getElementById(myLocation[19]).onclick = function() {selecting(19)};
document.getElementById(myLocation[20]).onclick = function() {selecting(20)};
document.getElementById(myLocation[21]).onclick = function() {selecting(21)};



for (i=0; i < x+v; i++){
	if (i < x) {
		myTempText[i] = myMyAnswer[y[i]];
	} else {
		myTempText[i] = myWrong[z[i-x]];
	}
}

for (i=0; i < x+v; i++){
	myText[2*i] = myTempText[zz[i]];
	myText[2*i+1] = '<font color="'+getBgColor()+'">.</font>' ;		
}


myUpdate();
for (i=0;i<2*(x+v);i++){
	
	document.getElementById(myLocation[i]).style.color = getFgColor();
	document.getElementById(myLocation[i]).style.fontSize = getFontSize();
	
}
function myUpdate() {
	for (i=0; i < 2*(x+v); i++) {	
	 document.getElementById(myLocation[i]).innerHTML = myText[i];	 
	 }
}

function selecting(myIndex) {	
	if (clicked == 0 && myText[myIndex] == '<font color="'+getBgColor()+'">.</font>'){
	} else {		
		if (mySelection[myIndex] == 0){
			if (clicked == 1){
				myText[oldCellLocation] = myText[myIndex];
				myText[myIndex] = oldCellValue;
				document.getElementById(myLocation[oldCellLocation]).style.color = getFgColor();
				mySelection[oldCellLocation]=0;
				oldCellLocation = null;
				oldCellValue = null;
				clicked = 0;
				myUpdate();
				answerCheck();
				
			
			} else {
			document.getElementById(myLocation[myIndex]).style.color = "red";
			mySelection[myIndex] = 1;
			oldCellValue = myText[myIndex];
			oldCellLocation = myIndex
			clicked = 1;
			}
			
			
		} else {
			document.getElementById(myLocation[myIndex]).style.color = getFgColor();
			mySelection[myIndex] = 0;
			oldCellValue = null;
			oldCellLocation = null;
			clicked=0;
		}
	
	}			
}


function answerCheck() {
	for (i=0;i<x;i++){
		theirAnswer[i]=myText[2*i+1];		
		if (String(myMyAnswer[i]) == String(theirAnswer[i])){
			isCorrect = 1;
			continue;
		} else {
			isCorrect = 0;
			break;
		}
				
	}
	
	if (isCorrect == 1){
		for (i=x; i<x+v;i++){
			theirAnswer[i]=myText[2*i+1];	
			if(theirAnswer[i] == '<font color="'+getBgColor()+'">.</font>'){
				isCorrect = 1;
				continue;
			} else {
				isCorrect = 0;
				break;
			}
			
		}
	}
	for (i=0; i<x+v; i++){
		yourAnswer[i]=myText[2*i+1];		
	}
	
	
	process1(1);
}
	
	document.write("<INPUT TYPE=hidden "+elementStyle("text",10)+" NAME="+1 + " SIZE=10 >" )
	document.write("<INPUT TYPE=hidden  NAME=question VALUE=' " + "some stuff"
	+1 + " ' >");
	
}

if (document.forms[0].name=="FEEDBACK")
     {}
else  
     {question1()}


</SCRIPT>
