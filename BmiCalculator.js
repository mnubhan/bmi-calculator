const bmiCalculator = (weight,height) => {
    var weightPowersOfTwo = Math.pow(weight,2)
    var heightPowersOfTwo = Math.pow(height,2)
    var result = Math.round(weightPowersOfTwo/heightPowersOfTwo)
    console.log(result)
} 

bmiCalculator(65,180)