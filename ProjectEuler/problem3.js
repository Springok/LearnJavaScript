// Largest prime factor
// Problem 3
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

//確認是否可以被整除
var isPrime = function(input) {

  for(var i = 2; i < input; i++){
    if(input % i === 0){
      return false;
    }
  }
  return true; //不能再被整除了
}

var maxPrimeFactor = function(input){

  var factor = input -1;

  while(factor > 1){
    if(input % factor === 0 && isPrime(factor)){
      return factor;
      // 如果輸入數字可被該因數整除，同時該因數也無法再被其他數字整除，就回傳該因數為最大公因數
    }
    factor--; //由最大開始找，隨之遞減。
  }
  return input;  // 找不到除了自己以外的因數的話就回傳自己
}

var num = 57;
maxPrimeFactor(num);

