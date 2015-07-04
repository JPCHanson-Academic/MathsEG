<SCRIPT>
var isCorrect = 0;
var CP9;
var mySolutionsArray = [];
var LLL;
var algorithmArray = [];
var myLocationAlgorithms ;
var optionsArray = [];
var myHolder = [];
var correctAlgorithmArray;
var theirAlgorithmArray;
var myQuestionText;
function process1(QNo)
{
	
if (true){//algorithm array theirs

theirAlgorithmArray = [
[
"<font face = 'Lucida Console'>"+
"RM Hill Climber<br>"+
"I)<font color='"+getBgColor()+"'></font>ITER - the number of iterations to run for<br>"+
"1)<font color='"+getBgColor()+"'></font>Let S be a <b>"+myHolder[0]+"</b> in the <b>"+myHolder[1]+"</b>, let F be its <b>"+myHolder[2]+"</b><br>"+
"2)<font color='"+getBgColor()+"'></font>For i = 1 to ITER<br>"+
"3)<font color='"+getBgColor()+"'>---</font>Let S' be a <b>"+myHolder[3]+"</b> close to S, let F' be its <b>"+myHolder[4]+"</b><br>"+
"4)<font color='"+getBgColor()+"'>---</font>If F' is better than F then<br>"+
"5)<font color='"+getBgColor()+"'>------</font>Let S = S' and Let F = F'<br>"+
"6)<font color='"+getBgColor()+"'>---</font>End if<br>"+
"7)<font color='"+getBgColor()+"'></font>End for<br>"+
"O)<font color='"+getBgColor()+"'></font>S - a solution<br>"
+"</font>"
],[
"<font face = 'Lucida Console'>"+
"Simulated Annealing Algorithm<br>"+
"I )<font color='"+getBgColor()+"'></font>T<sub>0</sub>: <b>"+myHolder[0]+"</b><br>"+
"I )<font color='"+getBgColor()+"'></font>Iter: Number of iterations<br>"+
"I )<font color='"+getBgColor()+"'></font>&#955: The <b>"+myHolder[1]+"</b><br>"+
"1 )<font color='"+getBgColor()+"'></font>Let x = a random solution<br>"+
"2 )<font color='"+getBgColor()+"'></font>For i = 0 to Iter - 1<br>"+
"3 )<font color='"+getBgColor()+"'>---</font>Let f = fitness of x<br>"+
"4 )<font color='"+getBgColor()+"'>---</font>Make a small change to x to make x'<br>"+
"5 )<font color='"+getBgColor()+"'>---</font>Let f' = fitness of new point x'<br>"+
"6 )<font color='"+getBgColor()+"'>---</font>If f' is <b>"+myHolder[2]+"</b> then f then<br>"+
"7 )<font color='"+getBgColor()+"'>------</font>Let p = PR(F',f,T<sub>i</sub>)<br>"+
"8 )<font color='"+getBgColor()+"'>------</font>If p < UR(0,1) then<br>"+
"9 )<font color='"+getBgColor()+"'>---------</font><b>"+myHolder[3]+"</b> change (keep x and f)<br>"+
"10)<font color='"+getBgColor()+"'>------</font>Else<br>"+
"11)<font color='"+getBgColor()+"'>---------</font><b>"+myHolder[4]+"</b> change (keep x' and f')<br>"+
"12)<font color='"+getBgColor()+"'>------</font>End if<br>"+
"13)<font color='"+getBgColor()+"'>---</font>Else<br>"+
"14)<font color='"+getBgColor()+"'>------</font>Let x = x'<br>"+
"15)<font color='"+getBgColor()+"'>---</font>End if<br>"+
"16)<font color='"+getBgColor()+"'>---</font>Let T<sub>i+1</sub> = &#955T<sub>i</sub><br>"+
"17)<font color='"+getBgColor()+"'></font>End for<br>"+
"O )<font color='"+getBgColor()+"'></font>The solution x<br>"
+"</font>"
],[
"<font face = 'Lucida Console'>"+
"Genetic Algorithm<br>"+
"I)<font color='"+getBgColor()+"'></font>The GA <b>"+myHolder[0]+"</b>: NG, PS, CP, MP and n<br>"+
"I)<font color='"+getBgColor()+"'></font>The Fitness Function<br>"+
"1)<font color='"+getBgColor()+"'></font>Generate PS <b>"+myHolder[1]+"</b> of length n<br>"+
"2)<font color='"+getBgColor()+"'></font>For i = 1 to NG<br>"+
"3)<font color='"+getBgColor()+"'>---</font><b>"+myHolder[2]+"</b> Population, with chance CP per Chromosome<br>"+
"4)<font color='"+getBgColor()+"'>---</font><b>"+myHolder[3]+"</b> all the Population, with change MP per gene<br>"+
"5)<font color='"+getBgColor()+"'>---</font>Kill off (or fix) all <b>"+myHolder[4]+"</b><br>"+
"6)<font color='"+getBgColor()+"'>---</font>Survival of the Fittest, e.g. <b>"+myHolder[5]+"</b><br>"+
"7)<font color='"+getBgColor()+"'></font>End for<br>"+
"O)<font color='"+getBgColor()+"'></font>The best solution to the problem is the Chromosome in the last generation which has the best fitness value<br>"
+"</font>"
],[
"<font face = 'Lucida Console'>"+
"Evolutionary Programming<br>"+
"I)<font color='"+getBgColor()+"'></font>Population size, number of generations, and Fitness Function<br>"+
"1)<font color='"+getBgColor()+"'></font>Create the <b>"+myHolder[0]+"</b><br>"+
"2)<font color='"+getBgColor()+"'></font>For i = 1 to <b>"+myHolder[1]+"</b><br>"+
"3)<font color='"+getBgColor()+"'>---</font>Mutate the <b>"+myHolder[2]+"</b><br>"+
"4)<font color='"+getBgColor()+"'>---</font>Apply <b>"+myHolder[3]+"</b><br>"+
"5)<font color='"+getBgColor()+"'></font>End for<br>"+
"O)<font color='"+getBgColor()+"'></font>Return the best individual<br>"
+"</font>"
]]	
	
}	
	
for (var i=5; i<document.forms[0].elements.length; i++)
	{
		if (document.forms[0].elements[i].name==QNo)
		{var item=i; break} 
	}

if (isCorrect == 1)
	{
		document.forms[0].elements[item+3].value = "<font color="+getFgColor_right()+">Your answer was correct.<br></font>";
	} 

else 
	{
		document.forms[0].elements[item+3].value = 	"<font color="+getFgColor_right()+">Your answer was incorrect. It should have been:<p></font>" + correctAlgorithmArray[LLL];
	}
	
	var myOptionsTable = "<center><table border = '1'>"
	for (i = 0; i < 18; i++){
		myOptionsTable += '<td width = "16%"><font color="'+getFgColor()+'"><p style="font-size:'+getFontSize()+'">'+optionsArray[CP9[i]]+'</p></font></td>';
			if (i == 5 || i == 11){
			myOptionsTable += "</tr><tr>"
			}
	}
	myOptionsTable += "</tr></table></center>"
	
	document.forms[0].elements[item+3].value = myQuestionText + myOptionsTable + "<p>Your solution was:</p>" + theirAlgorithmArray[LLL] + document.forms[0].elements[item+3].value
	myAnswer = document.forms[0].elements[item+3].value

}

function question1()
{
var isClicked = 0;
var mySelection;
var myLocation = [];
var mySelection = [];
var myOldIndex;
LLL = Math.floor(Math.random()*4);
CP9 = displayarray(18,0,17,1);
var ZG9;
for (i = 0; i < 18; i++){
	myLocation[i] = "'"+i+"'"; 
	mySelection[i] = 0;
}
myLocationAlgorithms = [
["A01","A02","A03","A04","A05"],
["B01","B02","B03","B04","B05"],
["C01","C02","C03","C04","C05","C06"],
["D01","D02","D03","D04"]
]
optionsArray = ["random point","search space","fitness","starting temperature","cooling rate","worse","reject","accept","parameters","random chromosomes","crossover","mutate","invalid chromosomes","roulette wheel","initial population","number of generations","population","tournament selection"];
if (true){//algorithm array question
algorithmArray = [
[
"<font face = 'Lucida Console'>"+
"RM Hill Climber<br>"+
"I)<font color='"+getBgColor()+"'></font>ITER - the number of iterations to run for<br>"+
"1)<font color='"+getBgColor()+"'></font>Let S be a <input type='text' id = '"+myLocationAlgorithms[0][0]+"' readonly> in the <input type='text' id = '"+myLocationAlgorithms[0][1]+"' readonly>, let F be its <input type='text' id = '"+myLocationAlgorithms[0][2]+"' readonly><br>"+
"2)<font color='"+getBgColor()+"'></font>For i = 1 to ITER<br>"+
"3)<font color='"+getBgColor()+"'>---</font>Let S' be a <input type='text' id = '"+myLocationAlgorithms[0][3]+"' readonly> close to S, let F' be its <input type='text' id = '"+myLocationAlgorithms[0][4]+"' readonly><br>"+
"4)<font color='"+getBgColor()+"'>---</font>If F' is better than F then<br>"+
"5)<font color='"+getBgColor()+"'>------</font>Let S = S' and Let F = F'<br>"+
"6)<font color='"+getBgColor()+"'>---</font>End if<br>"+
"7)<font color='"+getBgColor()+"'></font>End for<br>"+
"O)<font color='"+getBgColor()+"'></font>S - a solution<br>"
+"</font>"
],[
"<font face = 'Lucida Console'>"+
"Simulated Annealing Algorithm<br>"+
"I )<font color='"+getBgColor()+"'></font>T<sub>0</sub>: <input type='text' id = '"+myLocationAlgorithms[1][0]+"' readonly><br>"+
"I )<font color='"+getBgColor()+"'></font>Iter: Number of iterations<br>"+
"I )<font color='"+getBgColor()+"'></font>&#955: The <input type='text' id = '"+myLocationAlgorithms[1][1]+"' readonly><br>"+
"1 )<font color='"+getBgColor()+"'></font>Let x = a random solution<br>"+
"2 )<font color='"+getBgColor()+"'></font>For i = 0 to Iter - 1<br>"+
"3 )<font color='"+getBgColor()+"'>---</font>Let f = fitness of x<br>"+
"4 )<font color='"+getBgColor()+"'>---</font>Make a small change to x to make x'<br>"+
"5 )<font color='"+getBgColor()+"'>---</font>Let f' = fitness of new point x'<br>"+
"6 )<font color='"+getBgColor()+"'>---</font>If f' is <input type='text' id = '"+myLocationAlgorithms[1][2]+"' readonly> then f then<br>"+
"7 )<font color='"+getBgColor()+"'>------</font>Let p = PR(F',f,T<sub>i</sub>)<br>"+
"8 )<font color='"+getBgColor()+"'>------</font>If p < UR(0,1) then<br>"+
"9 )<font color='"+getBgColor()+"'>---------</font><input type='text' id = '"+myLocationAlgorithms[1][3]+"' readonly> change (keep x and f)<br>"+
"10)<font color='"+getBgColor()+"'>------</font>Else<br>"+
"11)<font color='"+getBgColor()+"'>---------</font><input type='text' id = '"+myLocationAlgorithms[1][4]+"' readonly> change (keep x' and f')<br>"+
"12)<font color='"+getBgColor()+"'>------</font>End if<br>"+
"13)<font color='"+getBgColor()+"'>---</font>Else<br>"+
"14)<font color='"+getBgColor()+"'>------</font>Let x = x'<br>"+
"15)<font color='"+getBgColor()+"'>---</font>End if<br>"+
"16)<font color='"+getBgColor()+"'>---</font>Let T<sub>i+1</sub> = &#955T<sub>i</sub><br>"+
"17)<font color='"+getBgColor()+"'></font>End for<br>"+
"O )<font color='"+getBgColor()+"'></font>The solution x<br>"
+"</font>"
],[
"<font face = 'Lucida Console'>"+
"Genetic Algorithm<br>"+
"I)<font color='"+getBgColor()+"'></font>The GA <input type='text' id = '"+myLocationAlgorithms[2][0]+"' readonly>: NG, PS, CP, MP and n<br>"+
"I)<font color='"+getBgColor()+"'></font>The Fitness Function<br>"+
"1)<font color='"+getBgColor()+"'></font>Generate PS <input type='text' id = '"+myLocationAlgorithms[2][1]+"' readonly> of length n<br>"+
"2)<font color='"+getBgColor()+"'></font>For i = 1 to NG<br>"+
"3)<font color='"+getBgColor()+"'>---</font><input type='text' id = '"+myLocationAlgorithms[2][2]+"' readonly> Population, with chance CP per Chromosome<br>"+
"4)<font color='"+getBgColor()+"'>---</font><input type='text' id = '"+myLocationAlgorithms[2][3]+"' readonly> all the Population, with change MP per gene<br>"+
"5)<font color='"+getBgColor()+"'>---</font>Kill off (or fix) all <input type='text' id = '"+myLocationAlgorithms[2][4]+"' readonly><br>"+
"6)<font color='"+getBgColor()+"'>---</font>Survival of the Fittest, e.g. <input type='text' id = '"+myLocationAlgorithms[2][5]+"' readonly><br>"+
"7)<font color='"+getBgColor()+"'></font>End for<br>"+
"O)<font color='"+getBgColor()+"'></font>The best solution to the problem is the Chromosome in the last generation which has the best fitness value<br>"
+"</font>"
],[
"<font face = 'Lucida Console'>"+
"Evolutionary Programming<br>"+
"I)<font color='"+getBgColor()+"'></font>Population size, number of generations, and Fitness Function<br>"+
"1)<font color='"+getBgColor()+"'></font>Create the <input type='text' id = '"+myLocationAlgorithms[3][0]+"' readonly><br>"+
"2)<font color='"+getBgColor()+"'></font>For i = 1 to <input type='text' id = '"+myLocationAlgorithms[3][1]+"' readonly><br>"+
"3)<font color='"+getBgColor()+"'>---</font>Mutate the <input type='text' id = '"+myLocationAlgorithms[3][2]+"' readonly><br>"+
"4)<font color='"+getBgColor()+"'>---</font>Apply <input type='text' id = '"+myLocationAlgorithms[3][3]+"' readonly><br>"+
"5)<font color='"+getBgColor()+"'></font>End for<br>"+
"O)<font color='"+getBgColor()+"'></font>Return the best individual<br>"
+"</font>"
]]
}
if (true){//algorithm array correct
correctAlgorithmArray = [
[
"<font face = 'Lucida Console'>"+
"RM Hill Climber<br>"+
"I)<font color='"+getBgColor()+"'></font>ITER - the number of iterations to run for<br>"+
"1)<font color='"+getBgColor()+"'></font>Let S be a <b>random point</b> in the <b>search space</b>, let F be its <b>fitness</b><br>"+
"2)<font color='"+getBgColor()+"'></font>For i = 1 to ITER<br>"+
"3)<font color='"+getBgColor()+"'>---</font>Let S' be a <b>random point</b> close to S, let F' be its <b>fitness</b><br>"+
"4)<font color='"+getBgColor()+"'>---</font>If F' is better than F then<br>"+
"5)<font color='"+getBgColor()+"'>------</font>Let S = S' and Let F = F'<br>"+
"6)<font color='"+getBgColor()+"'>---</font>End if<br>"+
"7)<font color='"+getBgColor()+"'></font>End for<br>"+
"O)<font color='"+getBgColor()+"'></font>S - a solution<br>"
+"</font>"
],[
"<font face = 'Lucida Console'>"+
"Simulated Annealing Algorithm<br>"+
"I )<font color='"+getBgColor()+"'></font>T<sub>0</sub>: <b>starting temperature</b><br>"+
"I )<font color='"+getBgColor()+"'></font>Iter: Number of iterations<br>"+
"I )<font color='"+getBgColor()+"'></font>&#955: The <b>cooling rate</b><br>"+
"1 )<font color='"+getBgColor()+"'></font>Let x = a random solution<br>"+
"2 )<font color='"+getBgColor()+"'></font>For i = 0 to Iter - 1<br>"+
"3 )<font color='"+getBgColor()+"'>---</font>Let f = fitness of x<br>"+
"4 )<font color='"+getBgColor()+"'>---</font>Make a small change to x to make x'<br>"+
"5 )<font color='"+getBgColor()+"'>---</font>Let f' = fitness of new point x'<br>"+
"6 )<font color='"+getBgColor()+"'>---</font>If f' is <b>worse</b> then f then<br>"+
"7 )<font color='"+getBgColor()+"'>------</font>Let p = PR(F',f,T<sub>i</sub>)<br>"+
"8 )<font color='"+getBgColor()+"'>------</font>If p < UR(0,1) then<br>"+
"9 )<font color='"+getBgColor()+"'>---------</font><b>reject</b> change (keep x and f)<br>"+
"10)<font color='"+getBgColor()+"'>------</font>Else<br>"+
"11)<font color='"+getBgColor()+"'>---------</font><b>accept</b> change (keep x' and f')<br>"+
"12)<font color='"+getBgColor()+"'>------</font>End if<br>"+
"13)<font color='"+getBgColor()+"'>---</font>Else<br>"+
"14)<font color='"+getBgColor()+"'>------</font>Let x = x'<br>"+
"15)<font color='"+getBgColor()+"'>---</font>End if<br>"+
"16)<font color='"+getBgColor()+"'>---</font>Let T<sub>i+1</sub> = &#955T<sub>i</sub><br>"+
"17)<font color='"+getBgColor()+"'></font>End for<br>"+
"O )<font color='"+getBgColor()+"'></font>The solution x<br>"
+"</font>"
],[
"<font face = 'Lucida Console'>"+
"Genetic Algorithm<br>"+
"I)<font color='"+getBgColor()+"'></font>The GA <b>parameters</b>: NG, PS, CP, MP and n<br>"+
"I)<font color='"+getBgColor()+"'></font>The Fitness Function<br>"+
"1)<font color='"+getBgColor()+"'></font>Generate PS <b>random chromosomes</b> of length n<br>"+
"2)<font color='"+getBgColor()+"'></font>For i = 1 to NG<br>"+
"3)<font color='"+getBgColor()+"'>---</font><b>crossover</b> Population, with chance CP per Chromosome<br>"+
"4)<font color='"+getBgColor()+"'>---</font><b>mutate</b> all the Population, with change MP per gene<br>"+
"5)<font color='"+getBgColor()+"'>---</font>Kill off (or fix) all <b>invalid chromosomes</b><br>"+
"6)<font color='"+getBgColor()+"'>---</font>Survival of the Fittest, e.g.<b> roulette wheel</b><br>"+
"7)<font color='"+getBgColor()+"'></font>End for<br>"+
"O)<font color='"+getBgColor()+"'></font>The best solution to the problem is the Chromosome in the last generation which has the best fitness value<br>"
+"</font>"
],[
"<font face = 'Lucida Console'>"+
"Evolutionary Programming<br>"+
"I)<font color='"+getBgColor()+"'></font>Population size, number of generations, and Fitness Function<br>"+
"1)<font color='"+getBgColor()+"'></font>Create the <b>initial population</b><br>"+
"2)<font color='"+getBgColor()+"'></font>For i = 1 to <b>number of generations</b><br>"+
"3)<font color='"+getBgColor()+"'>---</font>Mutate the <b>population</b><br>"+
"4)<font color='"+getBgColor()+"'>---</font>Apply <b>tournament selection</b><br>"+
"5)<font color='"+getBgColor()+"'></font>End for<br>"+
"O)<font color='"+getBgColor()+"'></font>Return the best individual<br>"
+"</font>"
]]
	
	
}
mySolutionsArray = [
["random point","search space","fitness","random point","fitness"],
["starting temperature","cooling rate","worse","reject","accept"],
["parameters","random chromosomes","crossover","mutate","invalid chromosomes","roulette wheel"],
["initial population","number of generations","population","tournament selection"]
]


var optionsTable = "<center><table border = '1'><tr>"
for (i = 0; i <18; i++){
	optionsTable += '<td id= "'+myLocation[i]+'" width = "16%">'+optionsArray[CP9[i]]+'</td>';
	if (i == 5 || i == 11){

		optionsTable += "</tr><tr>"
	}
}
optionsTable += "</tr></table></center>";
myQuestionText = "Your task is to fill in the missing words in the pseudocode below. To do this, click on a cell in the table below and then click in the entry box to insert it.<br><br>"
document.write("<br>" + myQuestionText + optionsTable +"<br><br>"+ algorithmArray[LLL]);

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

if (LLL == 0){
	document.getElementById(myLocationAlgorithms[0][0]).onclick = function() {placing(0)};
	document.getElementById(myLocationAlgorithms[0][1]).onclick = function() {placing(1)};
	document.getElementById(myLocationAlgorithms[0][2]).onclick = function() {placing(2)};
	document.getElementById(myLocationAlgorithms[0][3]).onclick = function() {placing(3)};
	document.getElementById(myLocationAlgorithms[0][4]).onclick = function() {placing(4)};
}
if (LLL == 1){
	document.getElementById(myLocationAlgorithms[1][0]).onclick = function() {placing(0)};
	document.getElementById(myLocationAlgorithms[1][1]).onclick = function() {placing(1)};
	document.getElementById(myLocationAlgorithms[1][2]).onclick = function() {placing(2)};
	document.getElementById(myLocationAlgorithms[1][3]).onclick = function() {placing(3)};
	document.getElementById(myLocationAlgorithms[1][4]).onclick = function() {placing(4)};	
}
if (LLL == 2){
	document.getElementById(myLocationAlgorithms[2][0]).onclick = function() {placing(0)};
	document.getElementById(myLocationAlgorithms[2][1]).onclick = function() {placing(1)};
	document.getElementById(myLocationAlgorithms[2][2]).onclick = function() {placing(2)};
	document.getElementById(myLocationAlgorithms[2][3]).onclick = function() {placing(3)};
	document.getElementById(myLocationAlgorithms[2][4]).onclick = function() {placing(4)};	
	document.getElementById(myLocationAlgorithms[2][5]).onclick = function() {placing(5)};	
}
if (LLL == 3){
	document.getElementById(myLocationAlgorithms[3][0]).onclick = function() {placing(0)};
	document.getElementById(myLocationAlgorithms[3][1]).onclick = function() {placing(1)};
	document.getElementById(myLocationAlgorithms[3][2]).onclick = function() {placing(2)};
	document.getElementById(myLocationAlgorithms[3][3]).onclick = function() {placing(3)};
}

for (i=0;i<18;i++){	
	document.getElementById(myLocation[i]).style.color = getFgColor();
	document.getElementById(myLocation[i]).style.fontSize = getFontSize();	
}


function selecting(myIndex){
	if (isClicked == 0){
		isClicked = 1;
		mySelection = optionsArray[CP9[myIndex]];
		document.getElementById(myLocation[myIndex]).style.color = "red";
		myOldIndex = myIndex;
	} else {
		if (myOldIndex == myIndex){
			document.getElementById(myLocation[myIndex]).style.color = getFgColor();
			isClicked = 0;
		} else {
			document.getElementById(myLocation[myOldIndex]).style.color = getFgColor();
			mySelection = optionsArray[CP9[myIndex]];
			document.getElementById(myLocation[myIndex]).style.color = "red";
			myOldIndex = myIndex;
		}
		
	}
		
}
function placing(ID) {
	if (isClicked == 1){
		document.getElementById(myLocationAlgorithms[LLL][ID]).value = mySelection;
	}
	answerCheck();
}	

function myUpdate(){

	if (LLL == 0 || LLL == 1){
		for (i = 0; i < 5; i++){
			if (document.getElementById(myLocationAlgorithms[LLL][i]).value.toString() == ""){
				myHolder[i] = "LEFT BLANK";
			} else {
				myHolder[i]=document.getElementById(myLocationAlgorithms[LLL][i]).value.toString();		
			}	
		}		
	}
	if (LLL == 2){
		for (i = 0; i < 6; i++){			
			if (document.getElementById(myLocationAlgorithms[LLL][i]).value.toString() == ""){
				myHolder[i] = "LEFT BLANK";
			} else {
				myHolder[i]=document.getElementById(myLocationAlgorithms[LLL][i]).value.toString();		
			}		
		}	
	}
	if (LLL == 3){
		for (i = 0; i < 4; i++){			
			if (document.getElementById(myLocationAlgorithms[LLL][i]).value.toString() == ""){
				myHolder[i] = "LEFT BLANK";
			} else {
				myHolder[i]=document.getElementById(myLocationAlgorithms[LLL][i]).value.toString();		
			}		
		}		
	}

}

function answerCheck(){
	for (i = 0; i < mySolutionsArray[LLL].length; i++){
		if (mySolutionsArray[LLL][i].toString() ==  document.getElementById(myLocationAlgorithms[LLL][i]).value.toString()){
			isCorrect = 1;					
		} else {
			isCorrect = 0;
			break;
		}
	}
	myUpdate()
	process1(1);
} 


	document.write("<INPUT TYPE=hidden "+elementStyle("text",10)+" NAME=" 
	+1 + "  SIZE=10  onChange=process" + 1 + "(this.name)>")
	
	document.write("<INPUT TYPE=hidden  NAME=question VALUE=' " + "some stuff"
	+1 + " ' >")
}

if (document.forms[0].name=="FEEDBACK")
     {}
else  
     {question1()}


</SCRIPT>