//TraMel Marshall 06/27/2019
        var entry;
        var average;
        var scores = [];
        var total = 0;
        var show = "Basket ball scores:\n";
		var highestScore = 0;

        //first use a do-while loop to get scores from user
        do {
            entry = prompt("Basket ball score\n" +
                           "Or enter 200 to end entries", 200);
            entry = parseInt(entry);
            if (entry >= 0 && entry <= 180) {
                scores[scores.length] = entry;
            } else if (entry != 200){
                alert("Entry must by a valid number from 0 through 180\n" +
                      "Or enter 200 to end entries");
            }
        }
        while (entry != 200); 

        //next use a for loop to process the scores
        for (var i = 0; i < scores.length; i++) {
            total = total + scores[i];       //both are numbers so adds
            show = show + scores[i] + "\n";  //strings & numbers so concatenates
			if (scores[i] > highestScore) {
				highestScore = scores[i];
			}
        }

        //then calculate the average and display
        average = parseInt(total/scores.length);
		       		
		// find the highest score and display
//		for (var i = 0; i < scores.length; i++) {
//         	if (scores[i] > highestScore) {
//				highestScore = scores[i];
//			}
//        }
		alert(show + "\nAverage score is " + average + "\nHighest score is " + highestScore);