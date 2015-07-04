<SCRIPT>
var isCorrect = 0;
var myMyAnswer=[[],[]];
var yourAnswer=[[],[]];
var myText=[];
var x1;
var x2;
var v;
var myQuestionText;
var myInput1;
var myInput2;
var myOutput;

function process%QUESTION.NUMBER%(QNo)
{
var myLength=0;
var currentTable=[];
var yourLength=0;
for (var i=5; i<document.forms[0].elements.length; i++)
	{
		if (document.forms[0].elements[i].name==QNo)
		{var item=i; break} 
	}
	

		
if (isCorrect == 1)
	{
		document.forms[0].elements[item+3].value = "<font color="+getFgColor_right()+">Your answer was correct.<br></font>";
		myLength=Math.max(x1,x2);
		for (i = 0; i <myLength; i++){
			if (myMyAnswer[0][i] == null){
				myMyAnswer[0][i] = '<font color="'+getBgColor()+'">.</font>';
			}
			if (myMyAnswer[1][i] == null){
				myMyAnswer[1][i] = '<font color="'+getBgColor()+'">.</font>';
			}
		}
		document.forms[0].elements[item+3].value += '<center><table border="1" width="75%"><tr><th colspan = 2><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Quick Sort</p></font></th><th colspan = 2><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Pivot List</p></font></th></tr><tr><th><p style="font-size:'+getFontSize()+'">Correct answer</p></th><th><p style="font-size:'+getFontSize()+'">Your answer</p></th><th><p style="font-size:'+getFontSize()+'">Correct answer</p></th><th><p style="font-size:'+getFontSize()+'">Your answer</p></th></tr>'
		for (i=0;i<myLength;i++){
			document.forms[0].elements[item+3].value += '<tr><td width="25%"><p style="font-size:'+getFontSize()+'">'+ myMyAnswer[0][i] + '</p></td><td width="25%"><p style="font-size:'+getFontSize()+'">'+ myMyAnswer[0][i] + '</p></td><td width="25%"><p style="font-size:'+getFontSize()+'">'+ myMyAnswer[1][i] + '</p></td><td width="25%"><p style="font-size:'+getFontSize()+'">'+ myMyAnswer[1][i] + '</p></td></tr>';
		}
		document.forms[0].elements[item+3].value += '</table></center>';
	} 

else 
	{
		document.forms[0].elements[item+3].value = "<font color="+getFgColor_right()+">Your answer was incorrect</font><br>";
		
		for (i=16; i > 0; i--){			
			if (yourAnswer[0][i] == '<font color="'+getBgColor()+'">.</font>'){
				yourAnswer[0].pop();
			} else {
				break
			}
		}
		for (i=16; i > 0; i--){
			
			if (yourAnswer[1][i]== '<font color="'+getBgColor()+'">.</font>'){
				yourAnswer[1].pop();
			} else {
				break
			}
		}	
		for (i=16; i > 0; i--){
			
			if (myMyAnswer[0][i] == '<font color="'+getBgColor()+'">.</font>'){
				myMyAnswer[0].pop();
			}
			if (myMyAnswer[1][i] == '<font color="'+getBgColor()+'">.</font>'){
				myMyAnswer[1].pop();
			}			
		}
		
		
			myLength = Math.max(x1,x2,yourAnswer[0].length,yourAnswer[1].length);

		for (i = 0; i <myLength; i++){
			if (myMyAnswer[0][i] == null){
				myMyAnswer[0][i] = '<font color="'+getBgColor()+'">.</font>';
			}
			if (myMyAnswer[1][i] == null){
				myMyAnswer[1][i] = '<font color="'+getBgColor()+'">.</font>';
			}
			if (yourAnswer[0][i] == null){
				yourAnswer[0][i] = '<font color="'+getBgColor()+'">.</font>';
			}
			if (yourAnswer[1][i] == null){
				yourAnswer[1][i] = '<font color="'+getBgColor()+'">.</font>';
			}			
		}
		
		document.forms[0].elements[item+3].value += '<center><table border="1" width="75%"><tr><th colspan = 2><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Quick Sort</p></font></th><th colspan = 2><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Pivot List</p></font></th></tr><tr><th><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Correct answer</p></font></th><th><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Your answer</p></font></th><th><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Correct answer</p></font></th><th><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Your answer</p></font></th></tr>'
		for (i=0;i<myLength;i++){
			document.forms[0].elements[item+3].value += '<tr><td width="25%"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+ myMyAnswer[0][i] + '</p></font></td><td width="25%"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+ yourAnswer[0][i] + '</p></font></td><td width="25%"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+ myMyAnswer[1][i] + '</p></font></td><td width="25%"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+ yourAnswer[1][i] + '</p></font></td></tr>';
		}
		document.forms[0].elements[item+3].value += '</table></center>';
	}
	currentTable = myQuestionText+ '<br><br><br><center><table border ="1" width="75%"><tr><th width="34%"><font color="'+getBgColor()+'">.</font> </th> <th width="33%"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Quick Sort</p></font></th><th width="33%"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Pivot List</p></font></th></tr><tr height="25px"><th width="34%"><font color="'+getBgColor()+'">.</font></th><th width="33%" align="left"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myInput1+'</p></font></th><th width="33%" align="left"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myInput2+'</p></font></th></tr>';
	for (i=0; i < x1+x2+v+v; i++){
		currentTable += '<tr height = "25px"><td width="34%"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myText[3*i]+'</p></font></td><td width="33%"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myText[3*i+1]+'</p></font></td><td width="33%"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myText[3*i+2]+'</p></font></td></tr>';
	}
	currentTable += '<tr height = "25px"><td width="34%"><font color="'+getBgColor()+'">.</font></td><th width="33%" align="left"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myOutput+'</p></font></th><th width="33%" align="left"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myOutput+'</p></font></th></tr></table></center><br>';
	
	document.forms[0].elements[item+3].value =  
	currentTable + document.forms[0].elements[item+3].value
	myAnswer = document.forms[0].elements[item+3].value
}

function question%QUESTION.NUMBER%()
{
	

//Quick sort

var myMyAnswersPlural1 = [
	[
		[["If first < last then"],["If first is less than last then"]],
		[["If first > last then"],["If first is greater than last then"]]
	],
	[["Let pivot = Pivot(list, first, last)"]],
	[["Call Quicksort(list, first, pivot-1)"]],
	[["Call Quicksort(list, pivot+1, last)"]],
	[["End if"]]
]


var myWrongsPlural1 = [
	[
		[["If first > last then"],["If first is greater than last then"]],
		[["If first < last then"],["If first is less than last then"]]	
	],
	[["Call Quicksort(list, first, pivot)"]],
	[["Call Quicksort(list, first, pivot+1)"]],
	[["Call Quicksort(list, pivot -1,last)"]],
	[["Call Quicksort(list, pivot,last)"]]

]
v = 2;
var s = Math.floor(Math.random()*2); //ascending or descending
myInput1 = 'Input: (list,first,last)';


//pivot list

var myMyAnswersPlural2 = [
	[["Pivotvalue = list[first] and Pivotpoint = first"]],
	[["For i from first + 1 to last"],["for i from first plus one to last"]],
	[
		[["If list[i] < Pivotvalue then"],["If list[i] is less than Pivotvalue then"]],
		[["If list[i] > Pivotvalue then"],["If list[i] is greater than Pivotvalue then"]]
	],
	[["Pivotpoint = Pivotpoint +1"]],
	[["Swap list[Pivotpoint] and list[i]"]],
	[["End if"]],
	[["End for"]],
	[["Swap list[first] and list[Pivotpoint]"]]
]


var myWrongsPlural2 = [

	[
		[["For i from first - 1 to last"],["For i from first minus one to last"]],
		[["For i from first to last"],["For i from first to last"]]
	],
	[["If list[i+1] < Pivotvalue then"],["If list[i+1] is less than Pivotvalue then"]],
	[["If list[i+1] > Pivotvalue then"],["If list[i+1] is greater than Pivotvalue then"]],
	[["If list[i-1] < Pivotvalue then"],["If list[i-1] is less than Pivotvalue then"]],
	[["If list[i-1] > Pivotvalue then"],["If list[i-1] is greater than Pivotvalue then"]],
	[["Pivotpoint = Pivotpoint - 1"]]

];



myInput2 = 'Input: (list,first,last)';
myQuestionText = 'You are given the pseudocode for both the quick sort and the pivot list, seperate and order the pseudocode into their respective columns.<br>Here <b>list</b> is the set of elements to be ordered, <b>first</b> is the index of the first element, and <b>last</b> is the index of the last element. <br> You may not need to use all of the lines of pseudocode, if you don\'t then please start at the top and only leave empty space at the end.<br>To move a line, first click on a cell to selected it, then click on the desired location.';


if (s == 0){	
	myOutput="Output: list X sorted in ascending order";
} else if (s == 1) {
	myOutput="Output: list X sorted in descending order";
} 



var t = Math.floor(Math.random()*2);
var u = Math.floor(Math.random()*2);
var p;// = Math.floor(Math.random()*myMyAnswersPlural.length);
var myMyAnswersTemp = [];
var myMyAnswerTempTemp = [];
for (i=0; i < myMyAnswersPlural1.length;i++){
	if (myMyAnswersPlural1[i].length == 1){
		myMyAnswer[0][i]=myMyAnswersPlural1[i]
	} else {
		p=Math.floor(Math.random()*myMyAnswersPlural1[i].length);
		myMyAnswersPlural1[i][p];
		if (myMyAnswersPlural1[i][p].length == 1){
			myMyAnswer[0][i]=myMyAnswersPlural1[i][p]		
		} else {
			p=Math.floor(Math.random()*2);
			myMyAnswer[0][i]=myMyAnswersPlural1[i][s][p]	
		}
	}
}
var myWrong = [[],[]];
//myMyAnswer = myMyAnswersPlural[s][p];
for (i=0; i < myWrongsPlural1.length;i++){
	if (myWrongsPlural1[i].length == 1){
		myWrong[0][i]=myWrongsPlural1[i]
	} else {
		p=Math.floor(Math.random()*myWrongsPlural1[i].length);
		myWrongsPlural1[i][p];
		if (myWrongsPlural1[i][p].length == 1){
			myWrong[0][i]=myWrongsPlural1[i][p]		
		} else { //means it's ascending or descending choice
			p=Math.floor(Math.random()*myWrongsPlural1[i][s].length);
			myWrong[0][i]=myWrongsPlural1[i][s][p]	
		}
	}
}
for (i=0; i < myMyAnswersPlural2.length;i++){
	if (myMyAnswersPlural2[i].length == 1){
		myMyAnswer[1][i]=myMyAnswersPlural2[i]
	} else {
		p=Math.floor(Math.random()*myMyAnswersPlural2[i].length);
		myMyAnswersPlural2[i][p];
		if (myMyAnswersPlural2[i][p].length == 1){
			myMyAnswer[1][i]=myMyAnswersPlural2[i][p]		
		} else {
			p=Math.floor(Math.random()*2);
			myMyAnswer[1][i]=myMyAnswersPlural2[i][s][p]	
		}
	}
}

//myMyAnswer = myMyAnswersPlural[s][p];
for (i=0; i < myWrongsPlural2.length;i++){
	if (myWrongsPlural2[i].length == 1){
		myWrong[1][i]=myWrongsPlural2[i]
	} else {
		p=Math.floor(Math.random()*myWrongsPlural2[i].length);
		myWrongsPlural2[i][p];
		if (myWrongsPlural2[i][p].length == 1){
			myWrong[1][i]=myWrongsPlural2[i][p]		
		} else { //means it's ascending or descending choice
			p=Math.floor(Math.random()*myWrongsPlural2[i][s].length);
			myWrong[1][i]=myWrongsPlural2[i][s][p]	
		}
	}
}
//var myWrong = myWrongsPlural[s][t][u];
x1 = myMyAnswer[0].length;
x2 = myMyAnswer[1].length;
var q = myWrong.length;
var myTempText=[];
var theirAnswer=[[],[]];
//put these in a for loop to make automatic
var myLocation = ['0', '1', '2', '3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50'];
var mySelection = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
//
var oldCellValue;
var oldCellLocation;
var clicked = 0;

//var y = displayarray(x,0,x-1,x);
var z = displayarray(q,0,q-1,q);
var zz = displayarray(x1+x2+v+v,0,16,x1+x2+v+v)


var myTable = '<br><p>'+myQuestionText+'</p><br><center><table border="1" width="75%"> <tr><th width="34%"><font color="'+getBgColor()+'">.</font> </th> <th width="33%"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Quick Sort</p></font></th><th width="33%"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Pivot List</p></font></th></tr><tr><th width="34%"><font color="'+getBgColor()+'">.</font> </th> <th width="33%" align="left"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myInput1+'</p></font></th><th width="33%" align="left"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myInput2+'</p></font></th></tr>';

for (i=0; i <x1+x2+v+v; i++){
	myTable += '<tr height="25px"> <td id= "'+myLocation[3*i]+'"></td><td id = "'+myLocation[3*i+1]+'"></td><td id = "'+myLocation[3*i+2]+'"</tr>';	
}
myTable += '<tr> <th><font color="'+getBgColor()+'">.</font> </th> <th align="left"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myOutput+'</p></font></th><th align="left"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myOutput+'</p></font></th></tr></table></center><br><p id="demo"></p>';


document.write(myTable);



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
document.getElementById(myLocation[22]).onclick = function() {selecting(22)};
document.getElementById(myLocation[23]).onclick = function() {selecting(23)};
document.getElementById(myLocation[24]).onclick = function() {selecting(24)};
document.getElementById(myLocation[25]).onclick = function() {selecting(25)};
document.getElementById(myLocation[26]).onclick = function() {selecting(26)};
document.getElementById(myLocation[27]).onclick = function() {selecting(27)};
document.getElementById(myLocation[28]).onclick = function() {selecting(28)};
document.getElementById(myLocation[29]).onclick = function() {selecting(29)};
document.getElementById(myLocation[30]).onclick = function() {selecting(30)};
document.getElementById(myLocation[31]).onclick = function() {selecting(31)};
document.getElementById(myLocation[32]).onclick = function() {selecting(32)};
document.getElementById(myLocation[33]).onclick = function() {selecting(33)};
document.getElementById(myLocation[34]).onclick = function() {selecting(34)};
document.getElementById(myLocation[35]).onclick = function() {selecting(35)};
document.getElementById(myLocation[36]).onclick = function() {selecting(36)};
document.getElementById(myLocation[37]).onclick = function() {selecting(37)};
document.getElementById(myLocation[38]).onclick = function() {selecting(38)};
document.getElementById(myLocation[39]).onclick = function() {selecting(39)};
document.getElementById(myLocation[40]).onclick = function() {selecting(40)};
document.getElementById(myLocation[41]).onclick = function() {selecting(41)};
document.getElementById(myLocation[42]).onclick = function() {selecting(42)};
document.getElementById(myLocation[43]).onclick = function() {selecting(43)};
document.getElementById(myLocation[44]).onclick = function() {selecting(44)};
document.getElementById(myLocation[45]).onclick = function() {selecting(45)};
document.getElementById(myLocation[46]).onclick = function() {selecting(46)};
document.getElementById(myLocation[47]).onclick = function() {selecting(47)};
document.getElementById(myLocation[48]).onclick = function() {selecting(48)};
document.getElementById(myLocation[49]).onclick = function() {selecting(49)};
document.getElementById(myLocation[50]).onclick = function() {selecting(50)};



for (i=0; i < x1; i++){
	myTempText[i] = myMyAnswer[0][i];
}
for (i=0; i < x2; i++){
	myTempText[i+x1] = myMyAnswer[1][i];
}
for (i=0; i < v; i++){
	myTempText[i+x1+x2] = myWrong[0][i];
}
for (i=0; i < v; i++){
	myTempText[i+x1+x2+v] = myWrong[1][i];
}
for (i=0; i < x1+x2+v+v; i++){
	myText[3*i] = myTempText[zz[i]];
	myText[3*i+1] = '<font color="'+getBgColor()+'">.</font>';	
	myText[3*i+2] = '<font color="'+getBgColor()+'">.</font>';		
}




myUpdate();
for (i=0;i<3*(x1+x2+v+v);i++){
	
	document.getElementById(myLocation[i]).style.color = getFgColor();
	document.getElementById(myLocation[i]).style.fontSize = getFontSize();
	
}
function myUpdate() {
	for (i=0; i <3*(x1+x2+v+v); i++) {	
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
	for (i=0;i<x1;i++){
		theirAnswer[0][i]=myText[3*i+1];		
		if (String(myMyAnswer[0][i]) == String(theirAnswer[0][i])){
			isCorrect = 1;
			continue;
		} else {
			isCorrect = 0;
			break;
		}
				
	}
	if (isCorrect == 1){
		for (i=0;i<x2;i++){
		theirAnswer[1][i]=myText[3*i+2];		
			if (String(myMyAnswer[1][i]) == String(theirAnswer[1][i])){
				isCorrect = 1;
				continue;
			} else {
				isCorrect = 0;
				break;
			}
		}
		
		
	}
	
	if (isCorrect == 1){
		for (i=x1; i<x1+x2+v+v;i++){
			theirAnswer[0][i]=myText[3*i+1];	
			if(theirAnswer[0][i] == '<font color="'+getBgColor()+'">.</font>'){
				isCorrect = 1;
				continue;
			} else {
				isCorrect = 0;
				break;
			}
			
		}
	}
	if (isCorrect == 1){
		for (i=x2; i<x1+x2+v+v;i++){
			theirAnswer[1][i]=myText[3*i+2];	
			if(theirAnswer[1][i] == '<font color="'+getBgColor()+'">.</font>'){
				isCorrect = 1;
				continue;
			} else {
				isCorrect = 0;
				break;
			}
			
		}
	}
	for (i=0; i<x1+x2+v+v; i++){
		yourAnswer[0][i]=myText[3*i+1];
		yourAnswer[1][i]=myText[3*i+2];			
	}
	
	process%QUESTION.NUMBER%(%QUESTION.NUMBER%);
}
	
	document.write("<INPUT TYPE=hidden "+elementStyle("text",10)+" NAME="+%QUESTION.NUMBER% + " SIZE=10 >" )
	document.write("<INPUT TYPE=hidden  NAME=question VALUE=' " + "some stuff"
	+%QUESTION.NUMBER% + " ' >");
	
}

if (document.forms[0].name=="FEEDBACK")
     {}
else  
     {question%QUESTION.NUMBER%()}


</SCRIPT>