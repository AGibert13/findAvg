$(document).ready(function()
{

	function printToPage (msg)
	{
		var message = "<p>" + msg + "<\p>";
		$("#mainSection").append (message);
	}

	// list of quiz scores
	var scores = [46, 41, 34, 33, 30, 30, 28, 27, 25, 21];
	// this function takes in a scores array and base or max score
	// it iterates over all scores determining the grade, adds all the scores and returns 
	// the average of all scores
	function determineAverage(scoresArray, maxScore)
	{
		var percentageScores =[];
		var total = 0
		for(i=0; i<scoresArray.length;i++){
			var percentage = scoresArray[i]/maxScore;
			percentage = Math.round(percentage*100)
			percentageScores.push(percentage)
			total+=percentageScores[i];
		}
		var average = Math.round(total/percentageScores.length);
		return average;
	}

	printToPage ("average result is " +  determineAverage(scores, 55) + "%");

});