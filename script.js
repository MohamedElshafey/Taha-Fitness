function func() {	
	var age=document.getElementById("age").value;
	var height=document.getElementById("heightCentimeters").value;
	var weight=document.getElementById("weight").value;
	var BMR;
	var totalCaloriesPerDay = 0;
	var x;
	
	if(document.getElementById("male").checked){
	BMR = 66 + (13.7 * weight) + (5* height) - (6.8 * age);
	}else if(document.getElementById("female").checked){	
	BMR = 655 + (9.6 * weight) + (1.8* height) - (4.7 * age);
	}

	var e = document.getElementById("activity");
	var strUser = e.options[e.selectedIndex].value;

	switch(strUser){
		
		case "activity1":
			x = BMR * 1.2 * 0.2;
		break;
		
		case "activity2":
			x = BMR * 1.375 * 0.3;
		break;
		
		case "activity3":
			x = BMR * 1.55 * 0.4;
		break;
		
		case "activity4":
			x = BMR * 1.725 * 0.5;
		break;
		
		case "activity5":
			x = BMR * 1.9 * 0.6;
		break;
		
		default :
			x = 0 ;
		break;
		
	}
	
	totalCaloriesPerDay =  BMR + x ;

	
	document.getElementById("output1").innerHTML =  "You need  " + Math.round(totalCaloriesPerDay).toFixed(2) + " Calories/day to maintain your weight.";
	document.getElementById("output2").innerHTML =  "You need  " + Math.round(totalCaloriesPerDay -500 ).toFixed(2) + " Calories/day to lose 0.5 kg per week.";	
	document.getElementById("output3").innerHTML =  "You need  " + Math.round(totalCaloriesPerDay -1000 ).toFixed(2) + " Calories/day to lose 1 kg per week.";
	document.getElementById("output4").innerHTML =  "You need  " + Math.round(totalCaloriesPerDay +500 ).toFixed(2) +  " Calories/day to gain 0.5 kg per week.";
	document.getElementById("output5").innerHTML =  "You need  " + Math.round(totalCaloriesPerDay +1000 ).toFixed(2) + " Calories/day to gain 1 kg per week.";
	
	
	
	//document.getElementById("output4").innerHTML =  "You need  " + Math.round(totalCaloriesPerDay +500 ).toFixed(2) + " Calories/day to gain 0.5 kg per week.";
	//document.getElementById("output5").innerHTML =  "You need  " + Math.round(totalCaloriesPerDay +1000 ).toFixed(2) + " Calories/day to gain 1 kg per week";
	
	
	//alert(" "+age+" "+height+" "+weight);
}