function decimalToBinary(num) {
  // your code here
let sum = "";
while(num>0){
let rem=num%2;
sum=rem+sum;
num=Math.floor(num/2);

}
return sum;
}
const num = parseInt(prompt("Enter a number."));
alert(decimalToBinary(num));
