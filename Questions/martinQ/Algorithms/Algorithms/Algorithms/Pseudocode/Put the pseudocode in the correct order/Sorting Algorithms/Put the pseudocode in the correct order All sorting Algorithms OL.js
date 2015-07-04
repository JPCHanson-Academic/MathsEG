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
var sortSelection = Math.floor(Math.random()*4);
if (sortSelection == 0){//bubble sort
var myMyAnswersPlural = [
	[["For i from zero to size of x minus two"],["For i from zero to n-2"],["For i from 0 to |x|-2"]],
	[["For j from size of X minus one down to i"],["For j from n-1 down to i"],["For j from |x|-1 down to i"]],
	[
		[["If X<sub>j</sub> < X<sub>(j-1)</sub>"],["If X<sub>j</sub> less than X<sub>(j-1)</sub>"]], //ascending
		[["If X<sub>j</sub> > X<sub>(j-1)</sub>"],["If X<sub>j</sub> greater than X<sub>(j-1)</sub>"]] //descending
	],
	[["Swap X<sub>j</sub> and X<sub>(j-1)</sub>"]],
	[["End if"]],
	[["End for"]],
	[["End for"]]
]


var myWrongsPlural = [
	[
		[["If X<sub>j</sub> is greater than X<sub>(j-1)</sub>"],["If X<sub>j</sub> > X<sub>(j-1)</sub>"]],
		[["If X<sub>j</sub> is less than X<sub>(j-1)</sub>"],["If X<sub>j</sub> < X<sub>(j-1)</sub>"]]
	],	
	[["For i from zero to size of X minus one"],["For i from 0 to n-1"],["For i from 0 to |X|-1"]],
	[["For i from one to size of X minus one"],["For i from one to n-1"],["For i from 0 to |X|-2"]],
	[["For i from one to size of X minus one"],["For i from one to n-2"],["For i from 1 to |x|-2"]],
	[["For j from size of X minus two down to i"],["For j from n-1 down to i"],["For j from |x|-1 down to i"]],
	[["For j from size of X minus two down to i+1"],["For j from n-1 down to i+1"],["For j from |x|-1 down to i+1"]]
]

v = 2;
var s = Math.floor(Math.random()*2); //ascending or descending
myInput ='Input: List X of n numbers';
myQuestionText = 'You are given some lines of pseudo code below. Order them on the right hand side of the table such that it codes an algorithm that takes an input and performs the Bubble Sort on it. Please use i then j for for loops.<br> You may not need to use all of the lines of pseudocode, if you don\'t then please start at the top and only leave empty space at the end.<br>To move a line, first click on a cell to selected it, then click on the desired location.';

if (s == 0){	
	myOutput="Output: list X sorted in ascending order";
} else if (s == 1) {
	myOutput="Output: list X sorted in descending order";
}

}
if (sortSelection == 1){//Quick sort

var myMyAnswersPlural = [
	[
		[["If first < last then"],["If first is less than last then"]],
		[["If first > last then"],["If first is greater than last then"]]
	],
	[["Let pivot = Pivot(list, first, last)"]],
	[["Call Quicksort(list, first, pivot-1)"]],
	[["Call Quicksort(list, pivot+1, last)"]],
	[["End if"]]
]


var myWrongsPlural = [
	[
		[["If first > last then"],["If first is greater than last then"]],
		[["If first < last then"],["If first is less than last then"]]	
	],
	[["Call Quicksort(list, first, pivot)"]],
	[["Call Quicksort(list, first, pivot+1)"]],
	[["Call Quicksort(list, pivot -1,last)"]],
	[["Call Quicksort(list, pivot,last)"]]

]
v = 4;
var s = Math.floor(Math.random()*2); //ascending or descending
myInput = 'Input: (list,first,last)';
myQuestionText = 'You are given some lines of pseudo code below. Order them on the right hand side of the table such that it codes an algorithm that takes an input and performs the Quick Sort algorithm on it. <br>Here <b>list</b> is the set of elements to be ordered, <b>first</b> is the index of the first element, and <b>last</b> is the index of the last element. <br> You may not need to use all of the lines of pseudocode, if you don\'t then please start at the top and only leave empty space at the end.<br>To move a line, first click on a cell to selected it, then click on the desired location.';
if (s == 0){	
	myOutput="Output: list X sorted in ascending order";
} else if (s == 1) {
	myOutput="Output: list X sorted in descending order";
}
}
if (sortSelection == 2){//Radix sort


var myMyAnswersPlural = [
	[["For i from 0 to bits - 1"],["For i from zero to bits minus one"]],
	[["Let b be 2<sup>i</sup>"],["Let b be 2 to the power of i"]],
	[["Bucket sort list on bit mask b"]],
	[["End for"]]
]


var myWrongsPlural = [
	[["For i = 0 to bits"],["For i from zero to bits"]],
	[["For i = 0 to bits + 1"],["For i from zero to bits plus one"]],
	[["For i = 1 to bits - 1"],["For i from one to bits minus one"]],
	[["For i = 1 to bits"],["For i from one to bits"]],
	[["For i = 1 to bits + 1"],["For i from one to bits plus one"]],
	[["Let b be i"],["Let b be i"]],
	[["Let b be i<sup>2</sup>"],["Let b be i to the power of two"]]
];
v = 3;
myInput = 'Input: (list,bits)';
myQuestionText = 'You are given some lines of pseudo code below. Order them on the right hand side of the table such that it codes an algorithm that takes an input and performs the Radix Sort algorithm on it.<br> Here <b> list </b> is the set of elements to be ordered, and <b> bits </b> is the number of bits in each list element.<br> You may not need to use all of the lines of pseudocode, if you don\'t then please start at the top and only leave empty space at the end.<br>To move a line, first click on a cell to selected it, then click on the desired location.';
myOutput="Output: list in a sorted order";
}
if (sortSelection == 3){//pivot list

var myMyAnswersPlural = [
	[["Let Pivotvalue = list[first] and let Pivotpoint = first"]],
	[["For i from first + 1 to last"],["For i from first plus one to last"]],
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


var myWrongsPlural = [

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

v = 3;
var s = Math.floor(Math.random()*2); //ascending or descending
myInput = 'Input: (list,first,last)';
myQuestionText = 'You are given some lines of pseudo code below. Order them on the right hand side of the table such that it codes an algorithm that takes an input and performs the Pivot List algorithm on it. <br>Here <b>list</b> is the set of elements to be ordered, <b>first</b> is the index of the first element, and <b>last</b> is the index of the last element. <br> You may not need to use all of the lines of pseudocode, if you don\'t then please start at the top and only leave empty space at the end.<br>To move a line, first click on a cell to selected it, then click on the desired location.';
if (s == 0){	
	myOutput="Output: list X sorted in ascending order";
} else if (s == 1) {
	myOutput="Output: list X sorted in descending order";
}
}


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
if (sortSelection == 0 || sortSelection == 1 || sortSelection ==3){
document.getElementById(myLocation[14]).onclick = function() {selecting(14)};
document.getElementById(myLocation[15]).onclick = function() {selecting(15)};
document.getElementById(myLocation[16]).onclick = function() {selecting(16)};
document.getElementById(myLocation[17]).onclick = function() {selecting(17)};
}
if (sortSelection == 3){
document.getElementById(myLocation[18]).onclick = function() {selecting(18)};
document.getElementById(myLocation[19]).onclick = function() {selecting(19)};
document.getElementById(myLocation[20]).onclick = function() {selecting(20)};
document.getElementById(myLocation[21]).onclick = function() {selecting(21)};
}


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