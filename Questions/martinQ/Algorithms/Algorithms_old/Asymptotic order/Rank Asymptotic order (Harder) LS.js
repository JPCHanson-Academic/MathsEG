<SCRIPT>
var isCorrect;
var myQuestionText;
var myEquation;
var myMyAnswer = [[],[],[],[]];
function process%QUESTION.NUMBER%(QNo)
{
	var myQuestionTable;
	var myFeedbackTable;
for (var i=5; i<document.forms[0].elements.length; i++)
	{
		if (document.forms[0].elements[i].name==QNo)
		{var item=i; break} 
	}

if (isCorrect == 1)
	{
		myFeedbackTable = '<center><table border = 1><tr><th colspan="2"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Correct Answer</p></font></th><th colspan="2"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Your Answer</p></font></th></tr><tr><th><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Equation</p></font></th><th><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Order</p></font></th><th><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Equation</p></font></th><th><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Order</p></font></th></tr>';
		for (i = 0; i < 4; i++){
			myFeedbackTable += '<tr><td><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myEquation[i][0]+'</p></font></td><td><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myEquation[i][1]+'</p></font></td><td><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myEquation[i][0]+'</p></font></td><td><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myEquation[i][1]+'</p></font></td></tr>';
		}
		myFeedbackTable += '</table></center>';
		
		
		document.forms[0].elements[item+3].value = 
		"<font color="+getFgColor_right()+">Your answer was correct.<br></font>" + myFeedbackTable;
		
	} 

else 
	{
		myFeedbackTable = '<center><table border = 1><tr><th colspan="2"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Correct Answer</p></font></th><th colspan="2"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Your Answer</p></font></th></tr><tr><th><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Equation</p></font></th><th><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Order</p></font></th><th><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Equation</p></font></th><th><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Order</p></font></th></tr>';
		for (i = 0; i < 4; i++){
			myFeedbackTable += '<tr><td><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myMyAnswer[i][0]+'</p></font></td><td><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myMyAnswer[i][1]+'</p></font></td><td><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myEquation[i][0]+'</p></font></td><td><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myEquation[i][1]+'</p></font></td></tr>';
		}
		myFeedbackTable += '</table></center>';
		document.forms[0].elements[item+3].value = 
		"<font color="+getFgColor_right()+">Your answer was incorrect.<br></font>" + myFeedbackTable;
	}
	myQuestionTable = "<center><table border = '1'>"
	for (i = 0; i < 4; i++){	
		myQuestionTable += '<tr><td><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myEquation[i][0]+'</p></font></td></tr>';
	}
	myQuestionTable += "</table></center>";
	document.forms[0].elements[item+3].value = myQuestionText + "<br><br>" + myQuestionTable +  document.forms[0].elements[item+3].value
	myAnswer = document.forms[0].elements[item+3].value
}

function question%QUESTION.NUMBER%()
{
var AAA = []; //used for holding the equations
var BBB; //used for randomising the order
var CCC; //coefficients 
var DDD; // wooh, more holders
var EEE; //storing the max power in creating an equation for setting the order
var FFF; //is a holder variable
var GGG = [];//used for comparing orders within equations
var HHH; //is a holder variable
var LLL = [];//= displayarray(4,0,3,1) //used for randomly selected an order type for an equation
var MMM; //used for selecting the components of the equations
var OOO = []; //used to hold the order
var PPP = []; //holding the powers components will be raised to
var RRR = []; //used for randomising the components of an equation
var ZZZ; //used for removing the max power from PPP after it has been stored to EEE
myEquation = [[],[],[],[]];
var myLocation = ['0','1','2','3'];
var isSelected = [0,0,0,0];
var clicked = 0;
var myOldLocation;

for (i=0; i < 4; i ++){
	LLL[i] = Math.floor(Math.random()*4);
}
LLL.sort(function(a, b){return a-b});
for (j = 0; j < 4; j++){
	myEquation[j][0] = "";
	GGG = [0,0,0,0]
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
			}
			if (MMM == 1){
				if (PPP[i] == 1){
					HHH[i] = CCC[i]+'n';
				} else {
					HHH[i] = CCC[i]+'n<sup>'+PPP[i]+'</sup>';
				}			
			}
			if (MMM == 2){
				if (PPP[i] == 1){
					HHH[i] = CCC[i]+'nlog<sub>2</sub>n';
				} else {
					HHH[i] = CCC[i]+'n<sup>'+Math.floor((Math.random()*4)+3)+'</sup>log<sub>2</sub>n<sup>'+PPP[i]+'</sup>';
				}
			}
			if (MMM == 3){
				if (PPP[i] == 1){
					HHH[i] = '2<sup>n</sup>';
				} else {
					HHH[i] = '2<sup>'+PPP[i]+'n</sup>';
				}
			}
			if (MMM == 4){
				if (PPP[i] == 1){
					HHH[i] = CCC[i]+'n!';
					GGG[i] = 1000;
				} else {
					HHH[i] = CCC[i]+'n!<sup>'+PPP[i]+'</sup>';
					GGG[i] = 1000 + PPP[i]
				}
			}

		}
		if (PPP[3] == 1){
			HHH[HHH.length] = CCC[i]+'n!';
			GGG[3] = 1000;
		} else {
			HHH[HHH.length] = CCC[i]+'n!<sup>'+PPP[i]+'</sup>';
			GGG[3] = 1000 + PPP[i];
		}
		
		DDD = Math.max(GGG[0],GGG[1],GGG[2],GGG[3]);
		for (i = 0; i < 4; i++){
			if (GGG[i] == DDD){
				DDD = i;
				break
			}
		}
		HHH[HHH.length] = CCC[3];
		RRR = displayarray(5,0,4,1)
		for (i = 0; i < 5; i++){
			if (i < 4){
				myEquation[j][0] += HHH[RRR[i]]+' + ';
			} else {
				myEquation[j][0] += HHH[RRR[i]];
			}
		}	
		if (GGG[DDD] == 1000){
			OOO[j] = "O(n!)";
		} else {
			OOO[j] = "O(n!<sup>"+(GGG[DDD]-1000)+"</sup>)";
		}
		myEquation[j][1] = OOO[j];
		myEquation[j][2] = GGG[DDD];
	}
	if (LLL[j] == 1){// order 2^n
		PPP = displayarray(4,1,9,0);
		CCC = displayarray(4,2,20,0);
		HHH = [];
		OOO[j] = "O(2<sup>n</sup>)";
		for (i = 0; i < 3; i++){
			MMM = Math.floor(Math.random()*4);
			if (MMM == 0){
				if (PPP[i] == 1){
					HHH[i] = CCC[i]+'log<sub>2</sub>n'
				} else {
					HHH[i] = CCC[i]+'log<sub>2</sub>n<sup>'+PPP[i]+'</sup>'	
				}
			}
			if (MMM == 1){
				if (PPP[i] == 1){
					HHH[i] = CCC[i]+'n'
				} else {
					HHH[i] = CCC[i]+'n<sup>'+PPP[i]+'</sup>'
				}			
			}
			if (MMM == 2){
				if (PPP[i] == 1){
					HHH[i] = CCC[i]+'nlog<sub>2</sub>n';
				} else {
					HHH[i] = CCC[i]+'n<sup>'+PPP[i]+'</sup>log<sub>2</sub>n<sup>'+Math.floor((Math.random()*4)+3)+'</sup>';
				}
			}
			if (MMM == 3){
				if (PPP[i] == 1){
					HHH[i] = '2<sup>n</sup>';
					GGG[i] = 100;
				} else {
					HHH[i] = '2<sup>'+PPP[i]+'n</sup>';
					GGG[i] = 100 + PPP[i];
				}
			}

		}
		if (PPP[3] == 1){
			HHH[HHH.length] = '2<sup>n</sup>';
			GGG[i] = 100;
		} else {
			HHH[HHH.length] = '2<sup>'+PPP[3]+'n</sup>';
			GGG[i] = 100 + PPP[i];
		}
		DDD = Math.max(GGG[0],GGG[1],GGG[2],GGG[3]);
		for (i = 0; i < 4; i++){
			if (GGG[i] == DDD){
				DDD = i;
				break
			}
		}		
		HHH[HHH.length] = CCC[3];		
		RRR = displayarray(5,0,4,1)
		for (i = 0; i < 5; i++){
			if (i < 4){
				myEquation[j][0] += HHH[RRR[i]]+' + ';
			} else {
				myEquation[j][0] += HHH[RRR[i]];
			}
		}	
		if (GGG[DDD] == 100){
			OOO[j] = "O(2<sup>n</sup>)";
		} else {
			OOO[j] = "O(2<sup>"+(GGG[DDD]-100)+"n</sup>)";
		}
		myEquation[j][1] = OOO[j];
		myEquation[j][2] = GGG[DDD];
		
	}
	if (LLL[j] == 2){// order n^x
		PPP = displayarray(4,1,9,0);
		CCC = displayarray(5,2,20,0);
		HHH = [];		
		ZZZ=Math.max.apply(Math,PPP);
		EEE = ZZZ;
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
					HHH[i] = CCC[i]+'log<sub>2</sub>n';
				} else {
					HHH[i] = CCC[i]+'log<sub>2</sub>n<sup>'+PPP[i]+'</sup>';	
				}
			}
			if (MMM == 1){
				if (PPP[i] == 1){
					HHH[i] = CCC[i]+'n';
				} else {
					HHH[i] = CCC[i]+'n<sup>'+PPP[i]+'</sup>';
				}			
			}
			if (MMM == 2){
				if (PPP[i] == 1){
					HHH[i] = CCC[i]+'nlog<sub>2</sub>n';
				} else {
					HHH[i] = CCC[i]+'n<sup>'+PPP[i]+'</sup>log<sub>2</sub>n<sup>'+(Math.floor(Math.random()*4)+3)+'</sup>';
				}
			}
		}
		HHH[4] = CCC[4];
		RRR = displayarray(5,0,4,1)
		for (i = 0; i < 5; i++){
			if (i < 4){
				myEquation[j][0] += HHH[RRR[i]]+' + ';
			} else {
				myEquation[j][0] += HHH[RRR[i]];
			}
		}
		myEquation[j][1] = OOO[j];
		myEquation[j][2] = 2*EEE;
	}
	if (LLL[j] == 3){// order n^(x-1)ln(n)
		PPP = displayarray(4,1,9,0);
		CCC = displayarray(5,2,20,0);
		HHH = [];		
		ZZZ = Math.max.apply(Math,PPP);
		EEE = ZZZ;
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
					HHH[i] = CCC[i]+'log<sub>2</sub>n';
				} else {
					HHH[i] = CCC[i]+'log<sub>2</sub>n<sup>'+PPP[i]+'</sup>';	
				}
			}
			if (MMM == 1){
				if (PPP[i] == 1){
					HHH[i] = CCC[i]+'n';
				} else {
					HHH[i] = CCC[i]+'n<sup>'+PPP[i]+'</sup>';
				}			
			}
			if (MMM == 2){
				if (PPP[i] == 1){
					HHH[i] = CCC[i]+'nlog<sub>2</sub>n';
				} else {
					HHH[i] = CCC[i]+'n<sup>'+PPP[i]+'</sup>log<sub>2</sub>n<sup>'+Math.floor((Math.random()*4)+3)+'</sup>';
				}
			}
		}
		HHH[4] = CCC[4];
		RRR = displayarray(5,0,4,1)
		for (i = 0; i < 5; i++){
			if (i < 4){
				myEquation[j][0] += HHH[RRR[i]]+' + ';
			} else {
				myEquation[j][0] += HHH[RRR[i]];
			}
		}	
		myEquation[j][1] = OOO[j];
		myEquation[j][2] = 2*EEE+1;		
	}
}

myEquation.sort(function(a, b){return b[2]-a[2]})
for (i = 0; i < 4; i++){
	myMyAnswer[i][0]=myEquation[i][0];
	myMyAnswer[i][1]=myEquation[i][1];
}	
BBB = displayarray(4,0,3,1);
for(i = 0; i < 4; i++){
	AAA[i] = myEquation[i]	
}
for(i = 0; i < 4; i++){
	myEquation[i] = AAA[BBB[i]]
}
myQuestionText = "A computer scientist is asked to evaluate four programs by considering the operations counts given below. <i>n</i> is the number of inputs. By considering the asymptotic order of each program, rank these from the most expensive to the least expensive to run as <i>n</i> &rarr; &infin;. <p>To move an equation, first click on the equation you wish to move to select it, then click on where you would like it to go and it will swap places with the equation currently in that position."

document.write("<br>"+myQuestionText+"<br><br>");
document.write("<center><table border ='1'>");
for (i = 0; i < myEquation.length; i++){	
	document.write("<tr><td id = '"+myLocation[i]+"'>"+myEquation[i][0]+"</td></tr>")	
}
document.write("</table></center>")


document.getElementById(myLocation[0]).onclick = function() {Selected(0)};
document.getElementById(myLocation[1]).onclick = function() {Selected(1)};
document.getElementById(myLocation[2]).onclick = function() {Selected(2)};
document.getElementById(myLocation[3]).onclick = function() {Selected(3)};

for (i=0;i<4;i++){	
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
			FFF=myEquation[myOldLocation];
			myEquation[myOldLocation]= myEquation[myIndex];
			myEquation[myIndex]=FFF;
			clicked = 0;
		}		
		
	}
	myUpdate();
	answerCheck();
	process%QUESTION.NUMBER%(%QUESTION.NUMBER%);
}
function myUpdate(){
	for (i = 0; i < 4; i++){
		document.getElementById(myLocation[i]).innerHTML = myEquation[i][0]
	}
}
function answerCheck(){
	for (i = 0; i < 4; i++){
		if (myEquation[i][1] == myMyAnswer[i][1]){
			isCorrect = 1;
		} else {
			isCorrect = 0;
			break;
		}
	}
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