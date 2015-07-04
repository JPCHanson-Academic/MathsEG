<SCRIPT>
var isCorrect
var myEquation = [];
var OOO = [];
var myQuestionText
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
		myFeedbackTable = '<table border = "1"><tr><th><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Equation</p></font></th><th><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Order</th></tr>'
		for(i = 0; i < 4; i++){
			myFeedbackTable += '<tr><td><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myEquation[i]+'</p></font></td><td><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+OOO[i]+'</p></font></td></tr>';
		}
		myFeedbackTable += '</table>';
		document.forms[0].elements[item+3].value = 	"<font color="+getFgColor_right()+">Your answer was correct.<br><br></font>" + myFeedbackTable; 
	} 

else 
	{
		myFeedbackTable = '<table border = "1"><tr><th><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Equation</p></font></th><th><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">Order</th></tr>'
		for(i = 0; i < 4; i++){
			myFeedbackTable += '<tr><td><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myEquation[i]+'</p></font></td><td><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+OOO[i]+'</p></font></td></tr>';
		}
		myFeedbackTable += '</table>';
		document.forms[0].elements[item+3].value = 	"<font color="+getFgColor_right()+">Your answer was incorrect.<br><br></font>" + myFeedbackTable;
	}
	myQuestionTable = '<table border = "1">'
	for(i = 0; i < 4; i++){
		myQuestionTable += '<tr><td><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+myEquation[i]+'</p></font></td></tr>';
	}
	myQuestionTable += '<tr><td><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">None of the above</p></font></td></tr>';
	myQuestionTable += '</table><br><br>';
	
	document.forms[0].elements[item+3].value =  myQuestionText + myQuestionTable + document.forms[0].elements[item+3].value
	myAnswer = document.forms[0].elements[item+3].value
}

function question%QUESTION.NUMBER%()
{
var AAA;
var BBB = [0,0,0,0];
var CCC; 
var DDD;
var EEE;
var GGG =[];
var HHH; 
var III;
var LLL = [];//= displayarray(4,0,3,1)
var MMM;
var PPP = [];
var RRR = [];
var ZZZ;
var myLocation = ['0','1','2','3'];
var isSelected = [0,0,0,0];
var clicked = 0;
var myCounter;
var isReady = 0;
var myOldLocation;
for (i=0; i < 4; i ++){
	LLL[i] = Math.floor(Math.random()*4);
}

for (j = 0; j < 4; j++){
	myEquation[j] = "";
	GGG = [0,0,0,0]
	EEE = 0;
	if (LLL[j] == 0){// order n!
		PPP = displayarray(4,1,9,0);
		CCC = displayarray(4,2,20,0);
		HHH = [];	
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
				if (EEE == 0 && j > 0 && BBB[j-1] !=0 ){
					HHH[i] = CCC[i] + 'n<sup>'+BBB[j-1]+'</sup>';
					EEE++;
				} else {
					if (PPP[i] == 1){
						HHH[i] = CCC[i]+'n';
					} else {
						HHH[i] = CCC[i]+'n<sup>'+PPP[i]+'</sup>';
					}			
				}
			}
			if (MMM == 2){
				if (EEE == 0 && j > 0 && BBB[j-1] !=0 ){
					HHH[i] = CCC[i]+'n<sup>'+BBB[j-1]+'</sup>log<sub>2</sub>n<sup>'+Math.floor((Math.random()*4)+3)+'</sup>';
				} else {
					if (PPP[i] == 1){
						HHH[i] = CCC[i]+'nlog<sub>2</sub>n';
					} else {
						HHH[i] = CCC[i]+'n<sup>'+PPP[i]+'</sup>log<sub>2</sub>n<sup>'+Math.floor((Math.random()*4)+3)+'</sup>';
					}
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
					GGG[i] = 1000
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
			HHH[HHH.length] = CCC[3]+'n!<sup>'+PPP[3]+'</sup>';
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
				if (EEE == 0 && j > 0 && BBB[j-1] !=0 ){
					HHH[i] = CCC[i]+'n<sup>'+BBB[j-1]+'</sup>'
					EEE++
				} else {
					if (PPP[i] == 1){
						HHH[i] = CCC[i]+'n'
					} else {
						HHH[i] = CCC[i]+'n<sup>'+PPP[i]+'</sup>'
					}			
				}
			}
			if (MMM == 2){
				if (EEE == 0 && j > 0 && BBB[j-1] !=0 ){
					HHH[i] = CCC[i]+'n<sup>'+BBB[j-1]+'</sup>log<sub>2</sub>n<sup>'+Math.floor((Math.random()*4)+3)+'</sup>';
					EEE++;
				} else {
					if (PPP[i] == 1){
						HHH[i] = CCC[i]+'nlog<sub>2</sub>n';
					} else {
						HHH[i] = CCC[i]+'n<sup>'+PPP[i]+'</sup>log<sub>2</sub>n<sup>'+Math.floor((Math.random()*4)+3)+'</sup>';
					}
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
			GGG[3] = 100;
		} else {
			HHH[HHH.length] = '2<sup>'+PPP[3]+'n</sup>';
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
		BBB[j] = ZZZ;
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
			if (MMM == 0){ //ln(n)
				if (PPP[i] == 1){
					HHH[i] = CCC[i]+'log<sub>2</sub>n';
				} else {
					HHH[i] = CCC[i]+'log<sub>2</sub>n<sup>'+PPP[i]+'</sup>';	
				}
			}
			if (MMM == 1){ //x^n
				if (PPP[i] == 1){
					HHH[i] = CCC[i]+'n';
				} else {
					HHH[i] = CCC[i]+'n<sup>'+PPP[i]+'</sup>';
				}			
			}
			if (MMM == 2){ //n^xln(n)
				if (EEE == 0 && j > 0 && BBB[j-1] != 0){
					if (PPP[i] == 1){
						HHH[i] = CCC[i]+'nlog<sub>2</sub>n<sup>'+BBB[j-1]+'</sup>';
					} else {
						HHH[i] = CCC[i]+'n<sup>'+PPP[i]+'</sup>log<sub>2</sub>n<sup>'+BBB[j-1]+'</sup>';
					}
					EEE++;
				} else {
					if (PPP[i] == 1){
						HHH[i] = CCC[i]+'nlog<sub>2</sub>n<sup>'+(Math.floor(Math.random()*4)+3)+'</sup>';
					} else {
						HHH[i] = CCC[i]+'n<sup>'+PPP[i]+'</sup>log<sub>2</sub>n<sup>'+(Math.floor(Math.random()*4)+3)+'</sup>';
					}
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
		BBB[j] = ZZZ;
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
				if (EEE == 0 && j > 0 && BBB[j-1] != 0){
					if (PPP[i] == 1){
						HHH[i] = CCC[i]+'nlog<sub>2</sub>n<sup>'+BBB[j-1]+'</sup>';
					} else {
						HHH[i] = CCC[i]+'n<sup>'+PPP[i]+'</sup>log<sub>2</sub>n<sup>'+BBB[j-1]+'</sup>';
					}
					EEE++;

				} else {
					if (PPP[i] == 1){
						HHH[i] = CCC[i]+'nlog<sub>2</sub>n<sup>'+Math.floor((Math.random()*4)+3)+'</sup>';
					} else {
						HHH[i] = CCC[i]+'n<sup>'+PPP[i]+'</sup>log<sub>2</sub>n<sup>'+Math.floor((Math.random()*4)+3)+'</sup>';
					}
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

while (isReady == 0){
	myCounter = 0;
	DDD = Math.floor(Math.random()*4)
	if (DDD == 0){//order n!
		OOO[4] = "O(n!<sup>"+(Math.floor(Math.random()*6)+3)+"</sup>)";
	}
	if (DDD == 1){//order n^2
		OOO[4] = "O(2<sup>"+(Math.floor(Math.random()*6)+3)+"n</sup>)";
	}
	if (DDD == 2){//order n^xlnn
		OOO[4] = "O(n<sup>"+(Math.floor(Math.random()*6)+3)+"</sup>log<sub>2</sub>n)";
	}
	if (DDD == 3){//order n^x
		OOO[4] = "O(n<sup>"+(Math.floor(Math.random()*6)+3)+"</sup>)";
	}
	for (i=0; i <4; i++){
		if (OOO[4] == OOO[i]){
		} else {
			myCounter++
		}
	}
	if (myCounter == 4){
		isReady = 1;
	}
}

AAA = Math.floor(Math.random()*5);
myQuestionText = "Find an equation with order "+OOO[AAA]+".<br><br>"
document.write("<br>"+myQuestionText);
document.write("<table border ='1'>")
for (i = 0; i < myEquation.length; i++){	
	document.write("<tr><td id = '"+myLocation[i]+"'>"+myEquation[i]+"</td></tr>")	
}
document.write("<tr><td id = '"+myLocation[5]+"'>None of the above</td></tr>")
document.write("</table>")

document.getElementById(myLocation[0]).onclick = function() {Selected(0)};
document.getElementById(myLocation[1]).onclick = function() {Selected(1)};
document.getElementById(myLocation[2]).onclick = function() {Selected(2)};
document.getElementById(myLocation[3]).onclick = function() {Selected(3)};
document.getElementById(myLocation[4]).onclick = function() {Selected(4)};

for (i=0;i<5;i++){	
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
	if (OOO[myOldLocation] == OOO[AAA]) {
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