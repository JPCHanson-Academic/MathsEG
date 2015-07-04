<SCRIPT>
var isCorrect = 0;
var myMyAnswer=[];
var yourAnswer=[];
var myText=[];
var x;
var v;
var myQuestionText;
var myInput;
var myOutput;
var LLL;
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
		
		for (i=LLL-1; i > x-1; i--){
			
			if (yourAnswer[i]== '<font color="'+getBgColor()+'">.</font>'){
				yourAnswer.pop();
			} else {
				break
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
	for (i=0; i < LLL; i++){
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
	[["Let S = S<sub>old</sub>"]],
	[["Let i be a random integer between 0 and n - 1 inclusive"],["Let i be a random integer between zero and n minus one inclusive"]],
	[["If S<sub>i</sub> = 0"],["If S<sub>i</sub> = 0"]],
	[["Let S<sub>i</sub> = 1"]],
	[["Else"]],
	[["Let S<sub>i</sub> = 0"]],
	[["End if"]]
]
var myWrongsPlural = [
	[["Let i be a random integer between 1 and n - 1 inclusive"],["Let i be a random integer between one and n minus one inclusive"]],
	[["Let i be a random integer between 0 and n inclusive"],["Let i be a random integer between zero and n inclusive"]],
	[["Let i be a random integer between 0 and n - 1 exclusive"],["Let i be a random integer between zero and n minus one exclusive"]],
	[["Let i be a random integer between 1 and n - 1 exclusive"],["Let i be a random integer between one and n minus one exclusive"]],
	[["Let i be a random integer between 0 and n exclusive"],["Let i be a random integer between zero and n exclusive"]],
	[["If S<sub>i</sub> = 1"]]

]
v = 5;
myInput = 'Input: s<sub>old</sub>';
myQuestionText='You are given the pseudocode for the SmallChange Algorithm for the Scales Problem with one line missing. Here <b>S<sub>old</sub></b> is a binary string of length n. On the left hand side there are some lines of pseudocode. Find the missing line and move it into the pseudocode such that the pseudocode produces the desired output.<br>To move a line, first click on a cell to selected it, then click on the desired location.';
myOutput = "Output: S- a solution to scales close to S old";
var t = Math.floor(Math.random()*2);
var u = Math.floor(Math.random()*2);
var p;// = Math.floor(Math.random()*myMyAnswersPlural.length);
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
//myMyAnswer = myMyAnswersPlural[s][p];
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
//var myWrong = myWrongsPlural[s][t][u];
x = myMyAnswer.length;
var q = myWrong.length;
var myDisplayText = []
for (i=0; i < x; i++){
	myDisplayText[i]=myMyAnswer[i]
}
var k = displayarray(x,0,x-1,x);
for (i=0; i < x; i ++){
	if (myMyAnswersPlural[k[i]].length != 1){
		myDisplayText[k[i]] = '<font color="'+getBgColor()+'">.</font>'; 
		k=k[i];
		break;
	}	
}

var myTempText=[];
var theirAnswer=[];
//put these in a for loop to make automatic
var myLocation = ['0', '1', '2', '3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21'];
var mySelection = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
//
var oldCellValue;
var oldCellLocation;
var clicked = 0;
LLL = Math.max(x,v+1);
var y = displayarray(x,0,x-1,x);
var z = displayarray(q,0,q-1,q);
var zz = displayarray(v+1,0,v,v+1);


var myTable = '<br><p>'+myQuestionText+'</p><br><center><table border="1" width="75%"> <tr> <th><font color="'+getBgColor()+'">.</font> </th> <th align="left";><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myInput+'</p></font></th></tr>';

for (i=0; i <LLL; i++){
	myTable += '<tr height="25px"> <td id= "';
	myTable += 2*i;
	myTable += '" width="50%")}"> </td> <td id = "';
	myTable += 2*i+1;
	myTable += '" width="50%")}"> </td> </tr>';
	
}
myTable += '<tr> <th><font color="'+getBgColor()+'">.</font> </th> <th align="left"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myOutput+'</p></font></th></tr></table></center><br><p id="demo"></p>';


document.write(myTable);


document.getElementById(myLocation[2*k+1]).onclick = function() {selecting(2*k+1)};
document.getElementById(myLocation[0]).onclick = function() {selecting(0)};
//document.getElementById(myLocation[1]).onclick = function() {selecting(1)};
document.getElementById(myLocation[2]).onclick = function() {selecting(2)};
//document.getElementById(myLocation[3]).onclick = function() {selecting(3)};
document.getElementById(myLocation[4]).onclick = function() {selecting(4)};
//document.getElementById(myLocation[5]).onclick = function() {selecting(5)};
document.getElementById(myLocation[6]).onclick = function() {selecting(6)};
//document.getElementById(myLocation[7]).onclick = function() {selecting(7)};
document.getElementById(myLocation[8]).onclick = function() {selecting(8)};
//document.getElementById(myLocation[9]).onclick = function() {selecting(9)};
document.getElementById(myLocation[10]).onclick = function() {selecting(10)};
//document.getElementById(myLocation[11]).onclick = function() {selecting(11)};
document.getElementById(myLocation[12]).onclick = function() {selecting(12)};
//document.getElementById(myLocation[13]).onclick = function() {selecting(13)};

//document.getElementById(myLocation[14]).onclick = function() {selecting(14)};
//document.getElementById(myLocation[15]).onclick = function() {selecting(15)};
//document.getElementById(myLocation[16]).onclick = function() {selecting(16)};
//document.getElementById(myLocation[17]).onclick = function() {selecting(17)};
document.getElementById(myLocation[2*k+1]).style.backgroundColor = 'yellow';

myTempText[0]=myMyAnswer[k];
for (i=0; i < v;i++){
	myTempText[i+1]=myWrong[z[i]];
}
//for (i=v+1; i<v+x; i++){
	//myTempText[i]='<font color="'+getBgColor()+'">.</font>';
//}


for (i=0; i < LLL; i++){
	if (i < v+1){
		myText[2*i] = myTempText[zz[i]];
	} else {
		myText[2*i] ='<font color="'+getBgColor()+'">.</font>';
	}
	if (i < x){
		myText[2*i+1]=myDisplayText[i];
	} else {
	myText[2*i+1] = '<font color="'+getBgColor()+'">.</font>' ;		
	}
}




myUpdate();
for (i=0;i<2*(LLL);i++){
	
	document.getElementById(myLocation[i]).style.color = getFgColor();
	document.getElementById(myLocation[i]).style.fontSize = getFontSize();
	
}
function myUpdate() {
	for (i=0; i < 2*(LLL); i++) {	
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
		if (myMyAnswer[i] == theirAnswer[i]){
			isCorrect = 1;
			continue;
		} else {
			isCorrect = 0;
			break;
		}
				
	}
	
	if (isCorrect == 1){
		for (i=x; i<LLL;i++){
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
	for (i=0; i<LLL; i++){
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