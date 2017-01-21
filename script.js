function func() {	
	var age=document.getElementById("age").value;

	var height=document.getElementById("heightCentimeters").value;
	var weight=document.getElementById("weight").value;
	var BMR;
	//var gender=document.getElementById("males").value;
	if(document.getElementById("male").checked){
	//alert(" "+document.getElementById("male").value);
	BMR = 66+(13.7 * weight) + (5* height) - (6.8 * age);
	//alert(BMR);
	
	document.getElementById("output").innerHTML = BMR;
	}
	
	
	if(document.getElementById("female").checked){
	//alert(" "+document.getElementById("female").value);
	BMR = 655+(9.6 * weight) + (1.8* height) - (4.7 * age);
	//alert(BMR);
		document.getElementById("output").innerHTML = BMR;

}
	
	//alert(" "+age+" "+height+" "+weight);
}