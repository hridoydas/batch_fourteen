// 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720
// 6! = 6 * 5! = 6 * 120 = 720

function factorialRecursion(number) {
  if (number === 1 || number === 0) {
    return 1;
  }
  return number * factorialRecursion(number - 1);
}

console.log(factorialRecursion(0));
/*
generateOTP(6){
  let otp = currenDay+ currentYear
  if(otp==true){
  return otp;
  }else{
    generateOtp;
    } 
}*/
