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
var sortSelection = Math.floor(Math.random()*20);
if (sortSelection == 0){//Evolutionary Programming 	7 long
var myMyAnswersPlural = [
	[["Create the initial population"]],
	[["For i = 1 to number of generations"],["For i from one to number of generations"]],
	[["Mutate the population"]],
	[["Apply Tournament Selection"]],
	[["End for"]]
]


var myWrongsPlural = [
	[["For i = 0 to number of generations"],["For i from zero to number of generations"]],
	[["For i = 1 to number of generations - 1"],["For i from one to number of generations minus one"]],
	[["Survive of the fittest, e.g. Roulette wheel"]],
	[["Crossover Population"]]
]

v = 2;
myInput ='Input: Population size, Number of generations, Fitness Function';
myQuestionText = 'You are given some lines of pseudo code below. Order them on the right hand side of the table such that it codes an Evolutionary Programming Algorithm.<br>Here <b>population size</b> is the size of the population, <b>number of generations</b> is how many generations the population will go through, and <b>fitness function</b> is the fitness funciton.<br> You may not need to use all of the lines of pseudocode, if you don\'t then please start at the top and only leave empty space at the end.<br>To move a line, first click on a cell to selected it, then click on the desired location.';
myOutput="Output: Return the best individual";

}
if (sortSelection == 1){//Holland's Algorithm 		9 long
var myMyAnswersPlural = [
	[["Generate PS random Chromosomes of length n"]],
	[["For i = 1 to NG"],["For i from one to NG"]],
	[["Crossover Population, with chance CP per Chromosome"]],
	[["Mutate all the Population, with chance MP per gene"]],
	[["Kill off (or fix) all invalid Chromosomes"]],
	[["Survival of the fittest, e.g. Roulette wheel"]],
	[["end for"]]
]
var myWrongsPlural = [
	[["Tournament selection"]],
	[["For i = 0 to NG"],["For i from zero to NG"]],
	[["For i = 1 to NG - 1"],["For i from one to NG minus one"]]

]
v = 2;
myInput = 'Input: GA parameters: NG, PS, CP, MP and n, the fitness function';
myQuestionText='You are given some lines of pseudocode below. Order them on the right hand side of the table such that it produces Holland\'s Algorithm. Here <b>NG</b> is the number of generations, <b>PS</b> is the population size, <b>CP</b> is the crossover probability, <b>MP</b> is the mutation probability, and <b>n</b> is the number of bits (genes) making up each chromosome.<br> You may not need to use all of the lines of pseudocode, if you don\'t then please start at the top and only leave empty space at the end.<br>To move a line, first click on a cell to selected it, then click on the desired location.';
myOutput="Output: The best solution to the problem is the chromosome in the last generation which has the best fitness value";
}
if (sortSelection == 2){//RM Hill Climbing 			9 long
var myMyAnswersPlural = [
	[["Let S be a random point in the search space, let F be its fitness"]],
	[["For i = 0 to ITER - 1"],["For i from zero to the number of iterations minus one"]],
	[["Let S' be a random point close to s, let F' be its fitness"]],
	[["If F' is better than F then"]],
	[["Let S = S' and let F = F'"]],
	[["End if"]],
	[["End for"]]
]
var myWrongsPlural = [
	[["For i = 1 to ITER - 1"],["For i from one to the number of iterations minus one"]],
	[["For i = 0 to ITER"],["For i from zero to the number of iterations"]],
	[["If F' is worse than F then"]]

]
v = 2;
myInput = 'Input: ITER';
myQuestionText='You are given some lines of pseudocode below. Order them on the right hand side of the table such that it produces the RM Hill Climbing algorithm. Here <b>ITER</b> is the number of iterations.<br> You may not need to use all of the lines of pseudocode, if you don\'t then please start at the top and only leave empty space at the end.<br>To move a line, first click on a cell to selected it, then click on the desired location.';
myOutput="Output: S- a solution";
}
if (sortSelection == 3){//Floyd-Warshall 			19 long
var myMyAnswersPlural = [
	[["Let x = a random solution"]],
 	[["For i = 0 to Iter - 1"],["For i from zero to the number of iterations minus one"]],
	[["Let f = fitness of x"]],
	[["Make a small change to x to make x'"]],
	[["Let f' = fitness of new point x'"]],
	[["If f' is worse than f then"]],
	[["Let p = pr(f',f,T<sub>i</sub>)"]],
	[["If p < UR(0,1) Then"]],
	[["Keep x and f"]],
	[["Else"]],
	[["Keep x' and f'"]],
	[["End if"]],
	[["Else"]],
	[["Let x = x'"]],
	[["End if"]],
	[["Let T<sub>i+1</sub> = &#955T<sub>i</sub>"]],
	[["End for"]]
]
var myWrongsPlural = [
	[["For i = 0 to Iter"],["For i from zero to the number of iterations"]],
	[["For i = 1 to Iter -1"],["For i from one to the number of iterations minus one"]],
	[["Let f = fitness of x'"],["Keep x and f'"]],
	[["Let f' = fitness of x"],["Keep x' and f"]]

]
v = 2;
myInput = 'Input: (T<sub>0</sub>, Iter, &#955)';
myQuestionText='You are given some lines of pseudo code below. Order them on the right hand side of the table such that it produces the Simulated Annealing Algorithm. Here <b>PR(f\',f,T<sub>i</sub>)</b> = exp(-&#916f/T<sub>i</sub>) where <nobr>&#916f = |f-f\'|</nobr>, <b>T<sub>0</sub></b> is the starting temperature, <b>Iter</b> is the number of iterations, and <b>&#955</b> is the cooling rate.<br> You may not need to use all of the lines of pseudocode, if you don\'t then please start at the top and only leave empty space at the end.<br>To move a line, first click on a cell to selected it, then click on the desired location.';
myOutput="Output: The solution x";
}
if (sortSelection == 4){//bubble sort				9 long
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
if (sortSelection == 5){//Quick sort				9 long

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
if (sortSelection == 6){//Radix sort				7 long


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
if (sortSelection == 7){//pivot list				11 long

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
if (sortSelection == 8){//A* Algorithm 				8 long
var myMyAnswersPlural = [
	[["Let P be a set of routes, currently empty, this set is ordered on f, with the head of P being the smallest value in f"]],
	[["Expand all one step nodes leading from S, and add them to P"]],
	[["While P &#8713 &#8709 and E not reached by head of P"]],
	[["Expand the head of P and add them to P"]],
	[["order P according to f"]],
	[["End while"]]
]
var myWrongsPlural = [
	[["Let P be a set of routes, currently empty, this set is ordered on f, with the head of P being the largest value in f"]],
	[["While P &#8712 &#8709 and E not reached by head of P"]],
	[["While P &#8713 &#8709 and E reached by head of P"]],
	[["While P &#8712 &#8709 and E reached by head of P"]]

]
v = 2;
myInput = 'Input: (G, S, E)';
myQuestionText='You are given some lines of pseudocode below. Order them on the right hand side of the table such that it produces the A* algorithm. <br>Here <b>G</b> is the graph being searched, <b>S</b> is the start node, and <b>E</b> is the goal node. <br> You may not need to use all of the lines of pseudocode, if you don\'t then please start at the top and only leave empty space at the end.<br>To move a line, first click on a cell to selected it, then click on the desired location.';	
myOutput="Output: Head of P if it exists";
}
if (sortSelection == 9){//Deep First Search			8 long
var myMyAnswersPlural = [
	[["Visit(n), and Mark(n)"]],
	[["For every edge nm (from n to m) in G do"]],
	[["If m is not marked then"]],
	[["DFS(G,m)"]],
	[["End if"]],
	[["End for"]]
]
var myWrongsPlural = [
	[["If m is marked then"]],
	[["DFS(G,n)"]]

]
v = 2;
myInput = 'Input: (G , n)';
myQuestionText='You are given some lines of pseudocode below. Order them on the right hand side of the table such that it produces the Deep First Search algorithm.<br>Here <b>G</b> is the graph and <b>n</b> is the current node.<br> You may not need to use all of the lines of pseudocode, if you don\'t then please start at the top and only leave empty space at the end.<br>To move a line, first click on a cell to selected it, then click on the desired location.';	
myOutput = "Output: Depends on the purpose of the search";
}
if (sortSelection == 10){//Exhaustive Search 		8 long
var myMyAnswersPlural = [
	[["For every edge nm (from n to m) in G do"]],
	[["If m &#8713 p then"]],
	[["p = p &#8746 {m}"]],
	[["Exhaustive(G, m, p)"]],
	[["End if"]],
	[["End for"]]
]
var myWrongsPlural = [
	[["If m &#8714 p then"]],
	[["Exhaustive(G, n, p)"]],
	[["p = p &#8745 {m}"]]

]
v = 2;
myInput = 'Input: (G, n, p)';
myQuestionText='You are given some lines of pseudocode below. Order them on the right hand side of the table such that it produces the Exhaustive Search algorithm.<br> Here <b>G</b> is the graph, <b>n</b> is the current node, and <b>p</b> is the path so far.<br> You may not need to use all of the lines of pseudocode, if you don\'t then please start at the top and only leave empty space at the end.<br>To move a line, first click on a cell to selected it, then click on the desired location.';
myOutput="Output: Depends on the purpose of the search";
}
if (sortSelection == 11){//Floyd-Warshall 			12 long
var myMyAnswersPlural = [
	
	[["Let P = D"]],
	[["For i=0 to n-1"],["For i from zero to n minus one"]],
	[["For j=0 to n-1"],["For j from zero to n minus one"]],
	[["For k=0 to n-1"],["For k from zero to n minus one"]],
	[["P<sub>ij</sub> = Min(P<sub>ij</sub>,P<sub>ik</sub>+P<sub>kj</sub>)"]],
	[["End for"]],
	[["End for"]],
	[["End for"]]
]
var myWrongsPlural = [

	[["Let D = P"]],
	[["For i=1 to n-1"],["For i from one to n minus one"]],
	[["For i=0 to n"],["For i from zero to n"]],
	[["For j=1 to n-1"],["For j from one to n minus one"]],
	[["For j=0 to n"],["For j from zero to n"]],
	[["For k=1 to n-1"],["For k from one to n minus one"]],
	[["For k=0 to n"],["For k from zero to n"]],
	[["P<sub>ij</sub>=Max(P<sub>ij</sub>,P<sub>ik</sub>+P<sub>kj</sub>)"]],
	[["P<sub>kj</sub>=Max(P<sub>ij</sub>,P<sub>ik</sub>+P<sub>kj</sub>)"]],
	[["P<sub>ij</sub>=Max(P<sub>ij</sub>,|P<sub>ik</sub>-P<sub>kj</sub>)|"]]

]
v = 4;

myInput = 'Input: D';
myQuestionText='You are given some lines of pseudo code below. Order them on the right hand side of the table such that it codes an algorithm that takes an input and finds the shortest distance between nodes. Here <b>D</b> is a n x n matrix representing the destance between nodes, if there is no edge between i and j then d<sub>ij</sub> equals infinity. Please use i, then j, then k for for loops.<br> You may not need to use all of the lines of pseudocode, if you don\'t then please start at the top and only leave empty space at the end.<br>To move a line, first click on a cell to selected it, then click on the desired location.';
myOutput="Output: P, the shortest distance between nodes";
}
if (sortSelection == 12){//Prim's Algorithm 		10 long
var myMyAnswersPlural = [
	[["Let x be a random node from v"]],
	[["Let Vnew = {x}, and Let Enew = {}"]],
	[["While Vnew &#8800 v"]],
	[["Chose an edge (u,v) with minimal weight, such that u &#8712 Vnew and v &#8713 Vnew"]],
	[["Vnew = Vnew &#8746 {v}, and Enew = Enew &#8746 {(u,v)}"]],
	[["End while"]]
]
var myWrongsPlural = [
	[["Vnew = Vnew &#8745 {v}, and Enew = Enew &#8746 {(u,v)}"]],
	[["Vnew = Vnew &#8746 {v}, and Enew = Enew &#8745 {(u,v)}"]],
	[["Vnew = Vnew &#8745 {v}, and Enew = Enew &#8745 {(u,v)}"]],
	[["While Vnew = v"]],
	[["Chose an edge (u,v) with minimal weight, such that u &#8713 Vnew and v &#8713 Vnew"]],
	[["Chose an edge (u,v) with minimal weight, such that u &#8712 Vnew and v &#8712 Vnew"]],
	[["Chose an edge (u,v) with minimal weight, such that u &#8713 Vnew and v &#8712 Vnew"]]
]
v = 4;
myInput = 'Input: (G, V, E)';
myQuestionText='You are given some lines of pseudocode below. Order them on the right hand side of the table such that it produces the prims algorithm. Here <b>G</b> is a weighted graph with vertices <b>V</b>, and Edges <b>E</b>. <br> You may not need to use all of the lines of pseudocode, if you don\'t then please start at the top and only leave empty space at the end.<br>To move a line, first click on a cell to selected it, then click on the desired location.';
myOutput="Output: Gnew = (Vnew, Enew)";	
}
if (sortSelection == 13){//2-D Array Min/Max		12 long
var myMyAnswersPlural = [
	[
		[["Let currentMax = a<sub>00</sub>"],["Let currentMax be the element in row zero column zero"]],
		[["Let currentMin = a<sub>00</sub>"],["Let currentMin be the element in row zero column zero"]]
	],
	[["For i from 0 to n-1"],["For i from zero to the number of rows in A minus one"]],
	[["For j from 0 to m-1"],["For j from zero to the number of columns in A minus one"]],
	[
		[["If a<sub>ij</sub> > currentMax"],["If a<sub>ij</sub> is greater than currentMax"]],
		[["If a<sub>ij</sub> < currentMin"],["If a<sub>ij</sub> is less than currentMin"]]
	],
	[
		[["currentMax = a<sub>ij</sub>"],["currentMax equals the element in the ith row and jth column"]],
		[["currentMin = a<sub>ij</sub>"],["currentMin equals the element in the ith row and jth column"]]
	],
	[["End if"]],
	[["End for"]],
	[["End for"]]
]
var myWrongsPlural = [
	[
		[["Let currentMin = a<sub>11</sub>"],["Let currentMin be the element in row one column one"]],
		[["Let currentMax = a<sub>11</sub>"],["Let currentMax be the element in row one column one"]]
	],	
	[		
		[["Let currentMin = a<sub>10</sub>"],["Let currentMin be the element in row one column zero"]],
		[["Let currentMax = a<sub>10</sub>"],["Let currentMax be the element in row one column zero"]]
	],	
	[		
		[["Let currentMin = a<sub>01</sub>"],["Let currentMin be the element in row zero column one"]],
		[["Let currentMax = a<sub>01</sub>"],["Let currentMax be the element in row zero column one"]]
	],	
	[["For i from 1 to n"],["For i from one to the number of rows in A"]],
	[["For j from 1 to m"],["For j from one to the number of columns in A"]],
	[["For i from 1 to n-1"],["For i from one to the number of rows in A minus one"]],
	[["For j from 1 to m-1"],["For j from one to the number of columns in A minus one"]],
	[
		[["If a<sub>ij</sub> < currentMin"],["If a<sub>ij</sub> is less than currentMin"]],
		[["If a<sub>ij</sub> > currentMax"],["If a<sub>ij</sub> is greater than currentMax"]]		
	],
	[["currentMin = a<sub>i+1,j+1</sub>"],["currentMin = a<sub>i+1,j</sub>"],["currentMin = a<sub>i+1,j-1</sub>"]],
	[["currentMin = a<sub>i-1,j+1</sub>"],["currentMin = a<sub>i-1,j</sub>"],["currentMin = a<sub>i-1,j-1</sub>"]],
	[["currentMin = a<sub>i,j+1</sub>"],["currentMin = a<sub>i,j-1</sub>"]],
	[["currentMax = a<sub>i+1,j+1</sub>"],["currentMax = a<sub>i+1,j</sub>"],["currentMax = a<sub>i+1,j-1</sub>"]],
	[["currentMax = a<sub>i-1,j+1</sub>"],["currentMax = a<sub>i-1,j</sub>"],["currentMax = a<sub>i-1,j-1</sub>"]],
	[["currentMax = a<sub>i,j+1</sub>"],["currentMax = a<sub>i,j-1</sub>"]],
	[["If a<sub>ij</sub> > currentMin"],["If a<sub>ij</sub> is greater than currentMin"]],
	[["If a<sub>ij</sub> < currentMax"],["If a<sub>ij</sub> is less than currentMax"]]
]
v = 4;
var s = Math.floor(Math.random()*2);
myInput = 'Input: A 2-D numerical array, A, with n rows and m columns';
myQuestionText='You are given some lines of pseudo code below. Order them on the right hand side of the table such that it codes an algorithm that takes an input and finds the maximum or minimum element, depending on the desired output. Please use i then j for for loops.<br> You may not need to use all of the lines of pseudocode, if you don\'t then please start at the top and only leave empty space at the end.<br>To move a line, first click on a cell to selected it, then click on the desired location.';
if (s == 0){	
	myOutput="Output: Max element in array";
} else if (s == 1) {
	myOutput="Output: Min element in array";
} 	
}
if (sortSelection == 14){//1-D Array Min/Max		9 long
var myMyAnswersPlural = [
	[
		[["Let currentMax = a<sub>0</sub>"],["Let currentMax be the 0th element in the array"]],
		[["Let currentMin = a<sub>0</sub>"],["Let currentMin be the 0th element in the array"]]
	],
	[["For i from 1 to n-1"],["For i from one to the size of A minus one"],["For i from 1 to |A|-1"]],
	[
		[["If a<sub>i</sub> > currentMax"],["If a<sub>i</sub> is greater than currentMax"]],
		[["If a<sub>i</sub> < currentMin"],["If a<sub>i</sub> is less than currentMin"]]
	],
	[
		[["currentMax = a<sub>i</sub>"],["currentMax equals the ith element in the array"]],
		[["currentMin = a<sub>i</sub>"],["currentMax equals the ith element in the array"]]
	],
	[["End if"]],
	[["End for"]]
]
var myWrongsPlural = [
	[
		[["Let currentMin = a<sub>1</sub>"],["Let currentMin be the 1st element in the array"]],
		[["Let currentMax = a<sub>1</sub>"],["Let currentMax be the 1st element in the array"]]
	],	
	[["For i from 1 to n"],["For i from one to the size of A"],["For i from 1 to |A|"]],
	[["For i from 1 to n+1"],["For i from one to the size of A plus one"],["For i from 1 to |A|+1"]],
	[
		[["If a<sub>i</sub> < currentMin"],["If a<sub>i</sub> is less than currentMin"]],
		[["If a<sub>i</sub> > currentMax"],["If a<sub>i</sub> is greater than currentMax"]]		
	],
	[["currentMin = a<sub>i+1</sub>"],["currentMin equals the ith plus one element in the array"]],
	[["currentMax = a<sub>i+1</sub>"],["currentMax equals the ith plus one element in the array"]],
	[["currentMin = a<sub>i-1</sub>"],["currentMin equals the ith minus one element in the array"]],
	[["currentMax = a<sub>i-1</sub>"],["currentMax equals the ith minus one element in the array"]],
	[["If a<sub>i</sub> > currentMin"],["If a<sub>i</sub> is greater than currentMin"]],
	[["If a<sub>i</sub> < currentMax"],["If a<sub>i</sub> is less than currentMax"]]
]
v = 3;
var s = Math.floor(Math.random()*2);
myInput = 'Input: A 1-D numerical array, A, of size n';
myQuestionText='You are given some lines of pseudo code below. Order them on the right hand side of the table such that it codes an algorithm that takes an input and finds the maximum or minimum element, depending on the desired output.<br> You may not need to use all of the lines of pseudocode, if you don\'t then please start at the top and only leave empty space at the end.<br>To move a line, first click on a cell to selected it, then click on the desired location.';
if (s == 0){	
	myOutput="Output: Max element in array";
} else if (s == 1) {
	myOutput="Output: Min element in array";
} 	
}
if (sortSelection == 15){//Scales Fitness Function  11 long
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
myQuestionText='You are given some lines of pseudo code below. Order them on the right hand side of the table such that it codes an algorithm that takes an input and finds fitness of a given solution to the scales problem. <br> Here <b>S</b> is a binary string of length n, <b>W</b> is a real vector/array of weights of length n, and a value of <b>0</b> in <b>S</b> denotes a position on the left hand side.<br> You may not need to use all of the lines of pseudocode, if you don\'t then please start at the top and only leave empty space at the end.<br>To move a line, first click on a cell to selected it, then click on the desired location.';
myOutput="Output: |L-R|";	
}
if (sortSelection == 16){//Scales RandomStart		8 long
var myMyAnswersPlural = [
	[["Let s be a n length binary string (or array)"]],
	[["For i = 0 to n-1"],["For i from zero to n minus one"]],
	[["Let S<sub>i</sub> = |Random Integer| mod 2"]],
	[["end for"]]
]
var myWrongsPlural = [
	[["For i = 0 to n"],["For i from zero to n"]],
	[["For i = 1 to n-1"],["For i from one to n minus one"]],
	[["Let S<sub>i</sub> = |Random Integer| mod 1"]],
	[["Let S<sub>i+1</sub> = |Random Integer| mod 1"]],
	[["Let S<sub>i-1</sub> = |Random Integer| mod 1"]],
	[["Let S<sub>i+1</sub> = |Random Integer| mod 2"]],
	[["Let S<sub>i-1</sub> = |Random Integer| mod 2"]]
]
v = 4;
myInput = 'Input: n';
myQuestionText = 'You are given some lines of pseudocode below. Order them on the right hand side of the table such that it produces the Random start algorithm for the scales problem. Here <b>n</b> is the number of weights.<br> You may not need to use all of the lines of pseudocode, if you don\'t then please start at the top and only leave empty space at the end.<br>To move a line, first click on a cell to selected it, then click on the desired location.';
myOutput="Output: S- a random solution to scales";
}
if (sortSelection == 17){//Scales SmallChange		10 long
var myMyAnswersPlural = [
	[["Let S = S<sub>old</sub>"]],
	[["Let i be a random integer between 0 and n - 1 inclusive"],["Let i be a random integer between zero and n minus one inclusive"]],
	[["If S<sub>i</sub> = 0"]],
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
	[["Let i be a random integer between 0 and n exclusive"],["Let i be a random integer between zero and n exclusive"]]

]
v = 3;
myInput = 'Input: s<sub>old</sub>';
myQuestionText='You are given some lines of pseudocode below. Order them on the right hand side of the table such that it produces the SmallChange algorithm. Here <b>S<sub>old</sub></b> is a binary string of length n.<br> You may not need to use all of the lines of pseudocode, if you don\'t then please start at the top and only leave empty space at the end.<br>To move a line, first click on a cell to selected it, then click on the desired location.';
myOutput = "Output: S- a solution to scales close to S old";
}
if (sortSelection == 18){//TSM RandPerm				9 long
var myMyAnswersPlural = [
	[["Let P = list of length N, (|p|=N) where p<sub>i</sub>=i, and T = an empty list"]],
	[["while |p| > 0"]],
	[["Let i = UI(1,|p|)"]],
	[["Add P<sub>i</sub> to the end of T"]],
	[["Delete the ith element (P<sub>i</sub> from P)"]],
	[["End while"]]
	]
var myWrongsPlural = [
	[["while |p| = 0"]],
	[["while |p| > 1"]],
	[["while |p| = 1"]],
	[["Add P<sub>i+1</sub> to the end of T"]],
	[["Add P<sub>i-1</sub> to the end of T"]],
	[["Delete the ith plus one element (P<sub>i+1</sub> from P)"]],
	[["Delete the ith minus one element (P<sub>i-1</sub> from P)"]]
]
v = 3;
myInput = 'Input: N';
myQuestionText='You are given some lines of pseudocode below. Order them on the right hand side of the table such that it produces RandPerm algorithm.Here <b>N</b> is the number of cities.<br> You may not need to use all of the lines of pseudocode, if you don\'t then please start at the top and only leave empty space at the end.<br>To move a line, first click on a cell to selected it, then click on the desired location.';
myOutput="Output: Random tour T";
}
if (sortSelection == 19){//TSM Swap 				9 long
var myMyAnswersPlural = [
	[["Let i = j = 0"],["Let i = 0, and let j = 0"],["Let j = i = 0"],["Let j = 0, and let i = 0"]],
	[["While i = j"],["While j = i"]],
	[["Let i = UI(1,|T|), and let j = UI(1,|T|)"],["Let j = UI(1,|T|), and let i = UI(1,|T|)"]],
	[["End while"]],
	[["Let temp = t<sub>i</sub>"]],
	[["Let t<sub>i</sub> = t<sub>j</sub>"]],
	[["Let t<sub>j</sub> = temp"]]
]
var myWrongsPlural = [
	[["Let i = 0, and let j = 1"],["Let j = 1, and let i = 0"]],
	[["Let i = 1, and let j = 0"],["Let j = 1, and let i = 0"]],
	[["While i &#8800 j"],["While j &#8800 i"]],
	[["Let i = j = UI(1,|T|)"],["Let j = i = UI(1,|T|)"]]

]
v = 2;
myInput = 'Input: A tour (permutation) of size N';
myQuestionText = 'You are given some lines of pseudo code below. Order them on the right hand side of the table such that it codes the Swap algorithm for the TSM.<br> You may not need to use all of the lines of pseudocode, if you don\'t then please start at the top and only leave empty space at the end.<br>To move a line, first click on a cell to selected it, then click on the desired location.';
myOutput="Output: Changed tour T";
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
if (sortSelection == 1 || sortSelection == 2 || sortSelection == 3 || sortSelection == 4 || sortSelection == 5 || sortSelection == 7 || sortSelection == 8 || sortSelection == 9 || sortSelection == 10 || sortSelection == 11 || sortSelection == 12 || sortSelection == 13 || sortSelection == 14 || sortSelection == 15 || sortSelection == 16 || sortSelection == 17 || sortSelection == 18 || sortSelection == 19){
document.getElementById(myLocation[14]).onclick = function() {selecting(14)};
document.getElementById(myLocation[15]).onclick = function() {selecting(15)};
}
if (sortSelection == 1  || sortSelection == 2 || sortSelection == 3 || sortSelection == 4 || sortSelection == 5 || sortSelection == 7 || sortSelection == 11 || sortSelection == 12 || sortSelection == 13 || sortSelection == 14 || sortSelection == 15 || sortSelection == 17 || sortSelection == 18 || sortSelection == 19){
document.getElementById(myLocation[16]).onclick = function() {selecting(16)};
document.getElementById(myLocation[17]).onclick = function() {selecting(17)};
}
if (sortSelection == 3  || sortSelection == 7 || sortSelection == 11 || sortSelection == 12 || sortSelection == 13 || sortSelection == 15 || sortSelection == 17){
document.getElementById(myLocation[18]).onclick = function() {selecting(18)};
document.getElementById(myLocation[19]).onclick = function() {selecting(19)};
}
if (sortSelection == 3 || sortSelection == 7 || sortSelection == 11 || sortSelection == 13 || sortSelection == 15){
document.getElementById(myLocation[20]).onclick = function() {selecting(20)};
document.getElementById(myLocation[21]).onclick = function() {selecting(21)};
}
if (sortSelection == 3 || sortSelection == 11 || sortSelection == 13){
document.getElementById(myLocation[22]).onclick = function() {selecting(22)};
document.getElementById(myLocation[23]).onclick = function() {selecting(23)};
}
if (sortSelection == 3){
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