const bmiCalculator = (weight,height) => {
    var weightPowersOfTwo = Math.pow(weight,2)
    var heightPowersOfTwo = Math.pow(height,2)
    var result = Math.round(weightPowersOfTwo/heightPowersOfTwo)
    console.log(result)
} 

bmiCalculator(65,180)

function bmiCalculator (weight, height) {
    let bmi = Math.round(weight/Math.pow(height,2))
    if(bmi < 18.5){
        return "Your BMI is " + bmi + " so you are underweight."
    } 
    if(bmi>=18.5 && bmi <= 24.9 ) {
        return "Your BMI is " + bmi + " , so you have a normal weight."
    }
    else{
        return "Your BMI is " +bmi + " so you are overweight."
    }
}
