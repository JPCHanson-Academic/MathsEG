<SCRIPT>
var isCorrect;
var myQuestionText;
var yourAnswer;
var myFeedbackText;
function process1(QNo)
{
var myLocation = ['0','1','2','3','4','5','6','7'];
for (var i=5; i<document.forms[0].elements.length; i++)
	{
		if (document.forms[0].elements[i].name==QNo)
		{var item=i; break} 
	}

if (isCorrect==1)
	{
		document.forms[0].elements[item+3].value = 
		"<font color="+getFgColor_right()+">Your answer was correct.<br><br></font>"
	} 

else 
	{
		document.forms[0].elements[item+3].value = 
		"<font color="+getFgColor_right()+">Your answer was incorrect.<br><br></font>"
	}
	var myOrdersArray = ['O(log<sub>2</sub>(n))','O(n)','O(nlog<sub>2</sub>(n))','O(n<sup>2</sup>)','O(n<sup>3</sup>)','O(n!)','O(2<sup>n</sup>)']
	
	var mySelectionTable = '<br><br><center><table border = "1" width = "80%"><tr>';
	for (i = 0; i < myOrdersArray.length; i++){
		mySelectionTable += '<td width = "12.5%"><center><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myOrdersArray[i]+'</p></font></center></td>';		
	}
	mySelectionTable += '</tr></table></center>';
	document.forms[0].elements[item+3].value =  myQuestionText + mySelectionTable + document.forms[0].elements[item+3].value + myFeedbackText;
	myAnswer = document.forms[0].elements[item+3].value

}

function question1()
{
	
var k=Math.floor(Math.random()*4)
var myQuestionArray=[
[
"<font face = 'Lucida Console'>"+
"Bubble sort<br>"+
"I)<font color='"+getBgColor()+"'></font>List X of n numbers<br>"+
"1)<font color='"+getBgColor()+"'></font>for i=0 to n-2<br>"+
"2)<font color='"+getBgColor()+"'>---</font>for j=n-1 to i<br>"+
"3)<font color='"+getBgColor()+"'>------</font>if x<sub>j</sub> < x<sub>j-1</sub><br>"+
"4)<font color='"+getBgColor()+"'>---------</font>y=x<sub>j</sub><br>"+
"5)<font color='"+getBgColor()+"'>---------</font>x<sub>j</sub>=x<sub>j-1</sub><br>"+
"6)<font color='"+getBgColor()+"'>---------</font>x<sub>j-1</sub>=y<br>"+
"7)<font color='"+getBgColor()+"'>------</font>end if<br>"+
"8)<font color='"+getBgColor()+"'>---</font>end for<br>"+
"9)<font color='"+getBgColor()+"'></font>end for<br>"+
"O)<font color='"+getBgColor()+"'></font>List X sorted in ascending order<br>"
+"</font>"
],[
"<font face = 'Lucida Console'>"+
"1-D array max<br>"+
"I)<font color='"+getBgColor()+"'></font>a 1-D numerical array of size n<br>"+
"1)<font color='"+getBgColor()+"'></font>let currentMax = a<sub>0</sub><br>"+
"2)<font color='"+getBgColor()+"'></font>for i=1 to n-1<br>"+
"3)<font color='"+getBgColor()+"'>---</font>if a<sub>i</sub> > currentMax<br>"+
"4)<font color='"+getBgColor()+"'>------</font>currentMax = a<sub>i</sub><br>"+
"5)<font color='"+getBgColor()+"'>---</font>end if<br>"+
"6)<font color='"+getBgColor()+"'></font>end for<br>"+
"O)<font color='"+getBgColor()+"'></font>currentMax<br>"
+"</font>"
],[
"<font face = 'Lucida Console'>"+
"2-D array max<br>"+
"I)<font color='"+getBgColor()+"'></font>a 2-D numerical array with n rows and n columns<br>"+
"1)<font color='"+getBgColor()+"'></font>let currentMax = a<sub>oo</sub><br>"+
"2)<font color='"+getBgColor()+"'></font>for i=0 to n-1<br>"+
"3)<font color='"+getBgColor()+"'>---</font>for j=0 to n-1<br>"+
"4)<font color='"+getBgColor()+"'>------</font>if a<sub>ij</sub> > currentMax<br>"+
"5)<font color='"+getBgColor()+"'>---------</font>currentMax = a<sub>ij</sub><br>"+
"6)<font color='"+getBgColor()+"'>------</font>end if<br>"+
"7)<font color='"+getBgColor()+"'>---</font>end for<br>"+
"8)<font color='"+getBgColor()+"'></font>end for<br>"+
"O)<font color='"+getBgColor()+"'></font>currentMax<br>"
+"</font>"
],[
"<font face = 'Lucida Console'>"+
"Floyd-Warshall Algorithm<br>"+
"I)<font color='"+getBgColor()+"'></font>D, an n by n matrix representing distance pairs between nodes<br>"+
"1)<font color='"+getBgColor()+"'></font>let P=D<br>"+
"2)<font color='"+getBgColor()+"'></font>for i = 0 to n - 1<br>"+
"3)<font color='"+getBgColor()+"'>---</font>for j = 0 to n - 1<br>"+
"4)<font color='"+getBgColor()+"'>------</font>for k = 0 to n - 1<br>"+
"5)<font color='"+getBgColor()+"'>---------</font>if P<sub>ij</sub> > P<sub>ik</sub>+P<sub>kj</sub><br>"+
"6)<font color='"+getBgColor()+"'>------------</font>P<sub>ij</sub>=P<sub>ik</sub>+P<sub>kj</sub><br>"+
"7)<font color='"+getBgColor()+"'>---------</font>end if<br>"+
"8)<font color='"+getBgColor()+"'>------</font>end for<br>"+
"9)<font color='"+getBgColor()+"'>---</font>end for<br>"+
"10)<font color='"+getBgColor()+"'></font>end for<br>"+
"O)<font color='"+getBgColor()+"'></font>p, the shortest paths between all nodes<br>"
+"</font>"
]
];

var myFeedbackArray = [
//bubble sort
[['1)','2)','3)','4)','5)','6)','7)','8)','9)'],['for i =0 to n-2','for j=n-1 to i','if x<sub>j</sub> < x<sub>j-1</sub>','y=x<sub>j</sub>','x<sub>j</sub>=x<sub>j-1</sub>','x<sub>j-1</sub>=y','end if','end for','end for'],['There are n-1 operations  because this loops runs n-1 times. 0,1,2,3,...,n-3,n-2.','there are (1/2)(n<sup>2</sup>+n) operations. This is because n + n-1 + n-2 + ... + 1 = (1/2)(n<sup>2</sup>+n).','This takes six operations. Two for reading x<sub>j</sub>; one of which is used for reading j the other for x<sub>j</sub>. Three for reading x<sub>j-1</sub>; one of which is used for reading j, another for calculating the subtraction, and the last for reading x<sub>j-1</sub>, and one for comparing x<sub>j</sub> and x<sub>j-1</sub>.','This takes three operations. Two for reading x<sub>j</sub>; one of which is used to read j and the other to read x<sub>j</sub>. The last operation is used to write the value of x<sub>j</sub>to y.','This takes five operations. Three for reading x<sub>j-1</sub>; one of which is used to read j, another for calculating the subtraction, and the last for reading x<sub>j-1</sub>. The final two are used to write the value of x<sub>j-1</sub> to x<sub>j</sub>; one of which is used to reed the value of j and the other to write the value of x<sub>j-1</sub> to x<sub>j</sub>','This takes four operations. One to read the value of y. The final three are used to write the value of y to x<sub>j-1</sub>; one of which is used to read the value of j, another is used to calculate the subtraction, and the final one is used to write the value of y to x<sub>j-1</sub>','This takes zero operations as it is only indicating the end of the if statment.','This takes zero operations as it is only indicating the end of the for loop.','This takes zero operations as it is only indicating the end of the for loop.'],['n-1','(1/2)(n<sup>2</sup>+n)','6(1/2)(n<sup>2</sup>+n)','3(1/2)(n<sup>2</sup>+n)','5(1/2)(n<sup>2</sup>+n)','4(1/2)(n<sup>2</sup>+n)','0','0','0'],['n-1+(1/2)(n<sup>2</sup>+n)+6(1/2)(n<sup>2</sup>+n)+3(1/2)(n<sup>2</sup>+n)+5(1/2)(n<sup>2</sup>+n)+4(1/2)(n<sup>2</sup>+n)+0+0+0 = 19(1/2)(n<sup>2</sup>+n)+n-1 = (19/2)n<sup>2</sup> + (21/2)n - 1 = O(n<sup>2</sup>)']],
//1-D array max
[['1)','2)','3)','4)','5)','6)'],['let currentMax = a<sub>0</sub>','for i=1 to n-1','if a<sub>j</sub> > currentMax','currentMax = a<sub>j</sub>','end if','end for'],['This takes two operations, one to read the value of a<sub>0</sub> and the other to write this value to the variable currentMax.','There are n01 operations because this loops runs n-1 tumes. 1,2,3,...,n-2,n-1.','This takes four operations, one to read the value of currentMax, one to read the value of i, one to read the value of a<sub>i</sub> now that i is known, and one for compairing the two values of a<sub>i</sub> and currentMax.','Assuming the worst case scinario where a<sub>i</sub> is greater than currentMax for each successive loop, this takes 3 operations. Two reads for reading i and a<sub>i</sub> and one write for setting the value of currentMax to that of a<sub>i</sub>.','This takes zero operations as it is only indicating the end of the if statment.','This takes zero operations as it is only indicating the end of the for loop.'],['2','n-1','4(n-1)','3(n-1)','0','0'],['2+(n-1)+4(n-1)+3(n+1)+0+0 = 8(n-1)+2 = 8n-6 = O(n)']],
//2-D array max
[['1)','2)','3)','4)','5)','6)','7)','8)'],['let currentMax = a<sub>00</sub>','for i=0 to n-1','for j=0 to n-1','if a<sub>ij</sub> > currentMax','currentMax = a<sub>ij</sub>','end if','end for','end for'],['This takes two operations, one to read the value of a<sub>00</sub> and the other to write this value to the variable currentMax.','This takes n operations because this loops runs n times. 1,2,3,...,n-1,n.','This takes n operations because this loops runs n times. 1,2,3,...,n-1,n.','This takes five operations. One each for reading the values of i and j, and one for reading the value of a<sub>ij</sub>. Another operation for reading the value of currentMax, and one operation for compairing the values of a<sub>ij</sub> and currentMax','Assuming the worst case scinario where a<sub>ij</sub> is greater than currentMax for each successive loop, this takes four operations. one each for reading the values of i and j, one for reading the value of a<sub>ij</sub>, and one for writing the value of a<sub>ij</sub> to currentMax.','This takes zero operations as it is only indicating the end of the if statment.','This takes zero operations as it is only indicating the end of the for loop.','This takes zero operations as it is only indicating the end of the for loop.'],['2','n','n<sup>2</sup>','5n<sup>2</sup>','4n<sup>2</sup>','0','0','0'],['2+n+n<sup>2</sup>+5n<sup>2</sup>+4n<sup>2</sup> = 10n<sup>2</sup>+n+2 = O(n<sup>2</sup>)']],
//Floyd-Warshall
[['1)','2)','3)','4)','5)','6)','7)','8)','9)','10)'],['let P=D','for i=0 to n - 1','for j=0 to n - 1','for k=0 to n-1','if P<sub>ij</sub> > P<sub>ik</sub>+P<sub>kj</sub>','P<sub>ij</sub>=P<sub>ik</sub>+P<sub>kj</sub>','end if','end for','end for','end for'],['This takes two operations. One to read the value of D, and the other to write this value to P.','This takes n operations because this loops runs n times. 1,2,3,...,n-1,n.','This takes n operations because this loops runs n times. 1,2,3,...,n-1,n.','This takes n operations because this loops runs n times. 1,2,3,...,n-1,n.','This takes eleven operations. Three for reading the value of P<sub>ij</sub> as you first need to read the values of i and j, similarly reading P<sub>ik</sub> and P<sub>kj</sub> take three operations each too. One for the addition of P<sub>ik</sub> and P<sub>kj</sub>, and one for comparing the values of P<sub>ij</sub> and P<sub>ik</sub>+P<sub>kj</sub>.','This takes 10 operations. Three for reading the value of P<sub>ik</sub> as you first need to read the values of i and k, similarly reading P<sub>kj</sub> also takes three operations. One for the addition of P<sub>ik</sub> and P<sub>kj</sub>. Two for reading i and j for P<sub>ij</sub> and one for writing the sum of P<sub>ik</sub>+P<sub>kj</sub> to P<sub>ij</sub>','This takes zero operations as it is only indicating the end of the if statment.','This takes zero operations as it is only indicating the end of the for loop.','This takes zero operations as it is only indicating the end of the for loop.','This takes zero operations as it is only indicating the end of the for loop.'],['2','n','n<sup>2</sup>','n<sup>3</sup>','11n<sup>3</sup>','10n<sup>3</sup>','0','0','0','0'],['2+n+n<sup>2</sup>+n<sup>3</sup>+11n<sup>3</sup>+10n<sup>3</sup>+0+0+0 = 22n<sup>3</sup>+n<sup>2</sup>+n+2 = O(n<sup>3</sup>)']],
];



myFeedbackText = '<center><table border = "1" width="80%"><tr><th width = "5%"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Line number</p></font></th><th width="15%"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Code</p></font></th><th width="70%"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">temptext</p></font></th><th width="10%"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">temptext</p></font></th></tr>'
for (i = 0; i < myFeedbackArray[k][0].length; i++){
	myFeedbackText += '<tr><td><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myFeedbackArray[k][0][i]+'</p></font></td><td><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myFeedbackArray[k][1][i]+'</p></font></td><td><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myFeedbackArray[k][2][i]+'</p></font></td><td><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myFeedbackArray[k][3][i]+'</p></font></td></tr>'
}
myFeedbackText += '</table></center><br>'+myFeedbackArray[k][4];

var myOrderArray=[4,1,4,5];
var myLocation = ['0','1','2','3','4','5','6','7'];
var isSelected = [0,0,0,0,0,0,0,0]
var clicked = 0;
var myOldLocation;

var mySelectionTable = '<br><br><center><table border = "1" width = "80%"><tr><td id="0" width = "12.5%"><center>O(log<sub>2</sub>(n))</center></td><td id="1" width = "12.5%"><center>O(n)</center></td><td id = "3" width = "12.5%"><center>O(nlog<sub>2</sub>(n))</center></td><td id = "4" width = "12.5%"><center>O(n<sup>2</sup>)</center></td><td id = "5" width = "12.5%"><center>O(n<sup>3</sup>)</center></td><td id = "6" width = "12.5%"><center>O(n!)</center></td><td id = "7" width = "12.5%"><center>O(2<sup>n</sup>)</center></td></tr></table></center>';
myQuestionText = "Find the order of the pseudo code under the worst case scenario. <br>Assume that a loop that runs n times takes n operations.<br><br>" + myQuestionArray[k];
document.write("<br>"+myQuestionText + mySelectionTable);

document.getElementById(myLocation[0]).onclick = function() {Selected(0)};
document.getElementById(myLocation[1]).onclick = function() {Selected(1)};
//document.getElementById(myLocation[2]).onclick = function() {Selected(2)};
document.getElementById(myLocation[3]).onclick = function() {Selected(3)};
document.getElementById(myLocation[4]).onclick = function() {Selected(4)};
document.getElementById(myLocation[5]).onclick = function() {Selected(5)};
document.getElementById(myLocation[6]).onclick = function() {Selected(6)};
document.getElementById(myLocation[7]).onclick = function() {Selected(7)};

for (i=0;i<8;i++){	
	if (i != 2){
		document.getElementById(myLocation[i]).style.color = getFgColor();
		document.getElementById(myLocation[i]).style.fontSize = getFontSize();	
	}
}

function Selected(myIndex) {
	if (clicked == 0){
		isSelected[myIndex] = 1;
		myOldLocation = myIndex;
		document.getElementById(myLocation[myIndex]).style.color = "red";
		clicked = 1;
	} else {
		if (myIndex == myOldLocation){
			document.getElementById(myLocation[myIndex]).style.color = getFgColor();
			clicked = 0;
			isSelected[myIndex] = 0;
		} else {
			document.getElementById(myLocation[myOldLocation]).style.color = getFgColor();
			isSelected[myOldLocation] = 0;
			myOldLocation = myIndex;
			isSelected[myIndex] = 1;
			document.getElementById(myLocation[myIndex]).style.color = "red";
		}		
		
	}
	if (myOrderArray[k] == myIndex) {
		isCorrect = 1;
	} else {
		isCorrect = 0;
	}
	
	process1(1);
}

	document.write("<INPUT TYPE=hidden  "+elementStyle("text",10)+" NAME=" 
	+1 + "  SIZE=10  onChange=process" + 1 + "(this.name)>")
	
	document.write("<INPUT TYPE=hidden  NAME=question VALUE=' " + "some stuff"
	+1 + " ' >")
}

if (document.forms[0].name=="FEEDBACK")
     {}
else  
     {question1()}


</SCRIPT>]]>