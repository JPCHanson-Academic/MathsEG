<SCRIPT>
var isCorrect;
var myQuestionText;
var myEquation = [];
var OOO = [];
var FFF;
var AAA = displayarray(6,0,5,1)
function process%QUESTION.NUMBER%(QNo)
{
	var myQuestionTable;
	var myFeedbacktable;
	var myOrder = ['O(n!)','O(c<sup>n</sup>)','O(n<sup>x</sup>log<sub>2</sub>n)','O(n<sup>x</sup>)','O(nlog<sub>2</sub>n)','O(n)','O(log<sub>2</sub>n)'];
for (var i=5; i<document.forms[0].elements.length; i++)
	{
		if (document.forms[0].elements[i].name==QNo)
		{var item=i; break} 
	}

if (isCorrect == 1)
	{
		myFeedbacktable = '<table border = "1" ><tr>'
		for(i = 0; i < myOrder.length; i++){
			myFeedbacktable += '<td><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myOrder[i]+'</p></font></td>';
		}
		myFeedbacktable += '</tr></table>';
		document.forms[0].elements[item+3].value = 	"<font color="+getFgColor_right()+">Your answer was correct.<br>The equation, "+myEquation[0]+", has order "+FFF+"</font><br><br>Here is a table in descending order of orders.<br><br>" + myFeedbacktable + "<br>Here, both <b>c</b> and <b>x</b> are constants greater than 1";
		
	} 

else 
	{
		myFeedbacktable = '<table border = "1" ><tr>'
		for(i = 0; i < myOrder.length; i++){
			myFeedbacktable += '<td><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myOrder[i]+'</p></font></td>';
		}
		myFeedbacktable += '</tr></table>';
		
		document.forms[0].elements[item+3].value = 	"<font color="+getFgColor_right()+">Your answer was incorrect.<br>The equation, "+myEquation[0]+", has order "+FFF+"</font><br><br>Here is a table in descending order of orders.<br><br>" + myFeedbacktable + "<br>Here, both <b>c</b> and <b>x</b> are constants greater than 1";
	}
	myQuestionTable = '<table border = "1"><tr>';
	for(i = 0; i < 6; i++){
		myQuestionTable += '<td><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+OOO[AAA[i]]+'</p></font></td>';
	}
	myQuestionTable += '</tr></table>';
	document.forms[0].elements[item+3].value = myQuestionText + myQuestionTable + document.forms[0].elements[item+3].value
	myAnswer = document.forms[0].elements[item+3].value
}

function question%QUESTION.NUMBER%()
{
var BBB=[];
var CCC; 
var DDD;
var EEE;
var GGG = [];//used for comparing orders within equations
var HHH; 
var III; // holder variable 
var LLL = [];//= displayarray(4,0,3,1)
var MMM;
var PPP = [];
var RRR = [];
var ZZZ;
var myLocation = ['0','1','2','3','4','5'];
var isSelected = [0,0,0,0,0,0];
var clicked = 0;
var myOldLocation;
var myMyAnswer;
var myCounter;
var isReady = 0;
for (i=0; i < 1; i ++){
	LLL[i] = Math.floor(Math.random()*4);
}

for (j = 0; j < 1; j++){
	myEquation[j] = "";
	GGG=[0,0,0,0];
	if (LLL[j] == 0){// order n!
		PPP = displayarray(4,1,9,0);
		CCC = displayarray(4,2,20,0);
		HHH = [];
		OOO[j] = "O(n!)";		
		for (i = 0; i < 3; i++){
			MMM = Math.floor(Math.random()*5);
			if (MMM == 0){
				if (PPP[i] == 1){
					HHH[i] = CCC[i]+'log<sub>2</sub>n';
				} else {
					HHH[i] = CCC[i]+'log<sub>2</sub>n<sup>'+PPP[i]+'</sup>';	
				}
				BBB[i]='O(log<sub>2</sub>n)';
			}
			if (MMM == 1){
				if (PPP[i] == 1){
					HHH[i] = CCC[i]+'n';
					BBB[i] = 'O(n)';
				} else {
					HHH[i] = CCC[i]+'n<sup>'+PPP[i]+'</sup>';
					BBB[i] = 'O(n<sup>'+PPP[i]+'</sup>)'
				}			
				
			}
			if (MMM == 2){
				if (PPP[i] == 1){
					HHH[i] = CCC[i]+'nlog<sub>2</sub>n';
					BBB[i] = 'O(nlog<sub>2</sub>n)';
				} else {
					HHH[i] = CCC[i]+'n<sup>'+PPP[i]+'</sup>log<sub>2</sub>n<sup>'+Math.floor((Math.random()*4)+3)+'</sup>';
					BBB[i] = 'O(n<sup>'+PPP[i]+'</sup>log<sub>2</sub>)';
				}
			}
			if (MMM == 3){
				if (PPP[i] == 1){
					HHH[i] = '2<sup>n</sup>';
					BBB[i] = 'O(2<sup>n</sup>)';
				} else {
					HHH[i] = '2<sup>'+PPP[i]+'n</sup>';
					BBB[i] = 'O(2<sup>'+PPP[i]+'n</sup>)';
				}
				
			}
			if (MMM == 4){
				if (PPP[i] == 1){
					HHH[i] = CCC[i]+'n!';
					BBB[i] = "O(n!)";
					GGG[i] = 1000
				} else {
					HHH[i] = CCC[i]+'n!<sup>'+PPP[i]+'</sup>';
					BBB[i] = "O(n!<sup>"+PPP[i]+"</sup>)";
					GGG[i] = 1000 + PPP[i]
				}
			}

		}
		if (PPP[3] == 1){
			HHH[HHH.length] = CCC[i]+'n!';
			BBB[3] = "O(n!)";
			GGG[3] = 1000;
		} else {
			HHH[HHH.length] = CCC[3]+'n!<sup>'+PPP[3]+'</sup>';
			BBB[3] = "O(n!<sup>"+PPP[3]+"</sup>)";
			GGG[3] = 1000 + PPP[3];
		}
		III = Math.max(GGG[0],GGG[1],GGG[2],GGG[3]);
		for (i = 0; i < 4; i++){
			if (GGG[i] == III){
				III = i;
				break
			}
		}
		if (GGG[III] == 1000){
			OOO[j] = "O(n!)";
		} else {
			OOO[j] = "O(n!<sup>"+(GGG[III]-1000)+"</sup>)";
		}
		HHH[HHH.length] = CCC[3];
		RRR = displayarray(5,0,4,1)
		for (i = 0; i < 5; i++){
			if (i < 4){
				myEquation[j] += HHH[RRR[i]]+' + ';
			} else {
				myEquation[j] += HHH[RRR[i]];
			}
		}	
		
	}
	if (LLL[j] == 1){// order 2^n
		PPP = displayarray(4,1,9,0);
		CCC = displayarray(4,2,20,0);
		HHH = [];
		for (i = 0; i < 3; i++){
			MMM = Math.floor(Math.random()*4);
			if (MMM == 0){
				if (PPP[i] == 1){
					HHH[i] = CCC[i]+'log<sub>2</sub>n'
				} else {
					HHH[i] = CCC[i]+'log<sub>2</sub>n<sup>'+PPP[i]+'</sup>'	
				}
				BBB[i]='O(log<sub>2</sub>n)';
			}
			if (MMM == 1){
				if (PPP[i] == 1){
					HHH[i] = CCC[i]+'n';
					BBB[i] = 'O(n)';
				} else {
					HHH[i] = CCC[i]+'n<sup>'+PPP[i]+'</sup>';
					BBB[i] = 'O(n<sup>'+PPP[i]+'</sup>)'
				}			
						
			}
			if (MMM == 2){
				if (PPP[i] == 1){
					HHH[i] = CCC[i]+'nlog<sub>2</sub>n';
					BBB[i] = 'O(nlog<sub>2</sub>n)';
				} else {
					HHH[i] = CCC[i]+'n<sup>'+PPP[i]+'</sup>log<sub>2</sub>n<sup>'+Math.floor((Math.random()*4)+3)+'</sup>';
					BBB[i] = 'O(n<sup>'+PPP[i]+'</sup>log<sub>2</sub>)';
				}
			}
			if (MMM == 3){
				if (PPP[i] == 1){
					HHH[i] = '2<sup>n</sup>';
					BBB[i] = "O(2<sup>n</sup>)";
					GGG[i] = 100;
				} else {
					HHH[i] = '2<sup>'+PPP[i]+'n</sup>';
					BBB[i] = "O(2<sup>"+PPP[i]+"n</sup>)";
					GGG[i] = 100 + PPP[i];
				}
			}
			
		}
		if (PPP[3] == 1){
			HHH[HHH.length] = '2<sup>n</sup>';
			BBB[3] = "O(2<sup>n</sup>)";
			GGG[3] = 100;
		} else {
			HHH[HHH.length] = '2<sup>'+PPP[3]+'n</sup>';
			BBB[3] = "O(2<sup>"+PPP[3]+"n</sup>)";
			GGG[3] = 100 + PPP[3]
		}
		III = Math.max(GGG[0],GGG[1],GGG[2],GGG[3]);
		for (i = 0; i < 4; i++){
			if (GGG[i] == III){
				III = i;
				break
			}
		}
		if (GGG[III] == 100){
			OOO[j] = "O(2<sup>n</sup>)";
		} else {
			OOO[j] = "O(2<sup>"+(GGG[III]-100)+"n</sup>)";
		}
		HHH[HHH.length] = CCC[3];
		RRR = displayarray(5,0,4,1)
		for (i = 0; i < 5; i++){
			if (i < 4){
				myEquation[j] += HHH[RRR[i]]+' + ';
			} else {
				myEquation[j] += HHH[RRR[i]];
			}
		}	
		
	}
	if (LLL[j] == 2){// order n^x
		PPP = displayarray(4,1,9,0);
		CCC = displayarray(5,2,20,0);
		HHH = [];		
		ZZZ=Math.max.apply(Math,PPP);
		OOO[j]="O(n<sup>"+ZZZ+"</sup>)"
		HHH[3] = CCC[3]+'n<sup>'+ZZZ+'</sup>';
		for (i = 0; i < PPP.length; i++){ 
			if (PPP[i] == ZZZ){
				ZZZ = i;
				break;
			}
		}
		PPP.splice(ZZZ,1)
		
		for (i = 0; i < 3; i++){			
			MMM = Math.floor(Math.random()*3);
			if (MMM == 0){
				if (PPP[i] == 1){
					HHH[i] = CCC[i]+'log<sub>2</sub>n'
				} else {
					HHH[i] = CCC[i]+'log<sub>2</sub>n<sup>'+PPP[i]+'</sup>'	
				}
				BBB[i]='O(log<sub>2</sub>n)';
			}
			if (MMM == 1){
				if (PPP[i] == 1){
					HHH[i] = CCC[i]+'n';
					BBB[i] = 'O(n)';
				} else {
					HHH[i] = CCC[i]+'n<sup>'+PPP[i]+'</sup>';
					BBB[i] = 'O(n<sup>'+PPP[i]+'</sup>)'
				}			
						
			}
			if (MMM == 2){
				if (PPP[i] == 1){
					HHH[i] = CCC[i]+'nlog<sub>2</sub>n';
					BBB[i] = 'O(nlog<sub>2</sub>n)';
				} else {
					HHH[i] = CCC[i]+'n<sup>'+PPP[i]+'</sup>log<sub>2</sub>n<sup>'+Math.floor((Math.random()*4)+3)+'</sup>';
					BBB[i] = 'O(n<sup>'+PPP[i]+'</sup>log<sub>2</sub>n)';
				}
			}
		}
		HHH[4] = CCC[4];
		RRR = displayarray(5,0,4,1)
		for (i = 0; i < 5; i++){
			if (i < 4){
				myEquation[j] += HHH[RRR[i]]+' + ';
			} else {
				myEquation[j] += HHH[RRR[i]];
			}
		}	
		
	}
	if (LLL[j] == 3){// order n^(x-1)ln(n)
	PPP = displayarray(4,1,9,0);
	CCC = displayarray(5,2,20,0);
	HHH = [];		
	ZZZ = Math.max.apply(Math,PPP);
	OOO[j] = "O(n<sup>"+ZZZ+"</sup>log<sub>2</sub>n)";
	HHH[3] = CCC[3]+'n<sup>'+ZZZ+'</sup>log<sub>2</sub>n<sup>'+(Math.floor(Math.random()*4)+3)+'</sup>';
	for (i = 0; i < PPP.length; i++){
		if (PPP[i] == ZZZ){
			ZZZ = i;
			break;
		}
	}
	PPP.splice(ZZZ,1)
	
	for (i = 0; i < 3; i++){			
		MMM = Math.floor(Math.random()*3);
		if (MMM == 0){
			if (PPP[i] == 1){
				HHH[i] = CCC[i]+'log<sub>2</sub>n'
			} else {
				HHH[i] = CCC[i]+'log<sub>2</sub>n<sup>'+PPP[i]+'</sup>'	
			}
			BBB[i]='O(log<sub>2</sub>n)';
		}
		if (MMM == 1){
			if (PPP[i] == 1){
				HHH[i] = CCC[i]+'n';
				BBB[i] = 'O(n)';
			} else {
				HHH[i] = CCC[i]+'n<sup>'+PPP[i]+'</sup>';
				BBB[i] = 'O(n<sup>'+PPP[i]+'</sup>)'
			}			
					
		}
		if (MMM == 2){
			if (PPP[i] == 1){
				HHH[i] = CCC[i]+'nlog<sub>2</sub>n';
				BBB[i] = 'O(nlog<sub>2</sub>n)';
			} else {
				HHH[i] = CCC[i]+'n<sup>'+PPP[i]+'</sup>log<sub>2</sub>n<sup>'+Math.floor((Math.random()*4)+3)+'</sup>';
				BBB[i] = 'O(n<sup>'+PPP[i]+'</sup>log<sub>2</sub>n)';
			}
		}
	}
	HHH[4] = CCC[4];
	RRR = displayarray(5,0,4,1)
	for (i = 0; i < 5; i++){
		if (i < 4){
			myEquation[j] += HHH[RRR[i]]+' + ';
		} else {
			myEquation[j] += HHH[RRR[i]];
		}
	}	
	
}
}
myQuestionText = "You are given the equation "+myEquation[0]+". Find and select the correct order of the equation.<br><br>";
document.write('<br>'+myQuestionText);

for(i = 0; i < 4; i++){
	OOO[i+1] = BBB[i];
}

while (isReady == 0){
	myCounter = 0
	for(i = 1; i < 6; i++){
		if (OOO[i] == null){
			DDD = Math.floor(Math.random()*4)
			if (DDD == 0){//order n!
				OOO[i] = "O(n!<sup>"+(Math.floor(Math.random()*6)+3)+"</sup>)";
			}
			if (DDD == 1){//order n^2
				OOO[i] = "O(2<sup>"+(Math.floor(Math.random()*6)+3)+"n</sup>)";
			}
			if (DDD == 2){//order n^xlnn
				OOO[i] = "O(n<sup>"+(Math.floor(Math.random()*6)+3)+"</sup>log<sub>2</sub>n)";
			}
			if (DDD == 3){//order n^x
				OOO[i] = "O(n<sup>"+(Math.floor(Math.random()*6)+3)+"</sup>)";
			}
		}
		for(j = 0; j < 6; j++){
			if (i != j){
				if (OOO[i] == OOO[j]){
					delete OOO[i];						
				}
			} 
		}
	}
	for (i =1; i < 6; i++){
		if (OOO[i] == null){
		} else {
			myCounter++;
		}
	}
	if (myCounter == 5){
		isReady = 1;
	}
}
EEE = Math.floor(Math.random()*6)
FFF = OOO[0];
OOO[EEE] = "None of these";
myMyAnswer = OOO[0];

document.write("<table border = '1'><tr>");
for (i = 0; i < 6; i++){
	document.write("<td id='"+myLocation[i]+"'>"+OOO[AAA[i]]+"</td>");
}
document.write("</tr></table>");

document.getElementById(myLocation[0]).onclick = function() {Selected(0)};
document.getElementById(myLocation[1]).onclick = function() {Selected(1)};
document.getElementById(myLocation[2]).onclick = function() {Selected(2)};
document.getElementById(myLocation[3]).onclick = function() {Selected(3)};
document.getElementById(myLocation[4]).onclick = function() {Selected(4)};
document.getElementById(myLocation[5]).onclick = function() {Selected(5)};

for (i=0;i<6;i++){	
	document.getElementById(myLocation[i]).style.color = getFgColor();
	document.getElementById(myLocation[i]).style.fontSize = getFontSize();	
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
	if (OOO[AAA[myOldLocation]].toString() == myMyAnswer.toString()) {
		isCorrect = 1;
	} else {
		isCorrect = 0;
	}
	
	process%QUESTION.NUMBER%(%QUESTION.NUMBER%);
}

	document.write("<INPUT TYPE=hidden "+elementStyle("text",10)+" NAME=" 
	+%QUESTION.NUMBER% + "  SIZE=10  onChange=process" + %QUESTION.NUMBER% + "(this.name)>")
	
	document.write("<INPUT TYPE=hidden  NAME=question VALUE=' " + "some stuff"
	+%QUESTION.NUMBER% + " ' >")
}

if (document.forms[0].name=="FEEDBACK")
     {}
else  
     {question%QUESTION.NUMBER%()}


</SCRIPT>