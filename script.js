// function decimalToBinary(num) {
//   // your code here
// 	if(num===0)  return 0;
// let sum = "";
// while(num>0){
// let rem=num%2;
// sum=rem+sum;
// num=Math.floor(num/2);
// }
// return sum;
// } 
// const num = parseInt(prompt("Enter a number."));
// alert(decimalToBinary(num));


function decimalToBinary(num) {
  // your code 
	if (num === 0) {
		return "0";
	}
	
    let binaryStr = "";
	while (num > 0) {
		binaryStr = (num % 2) + binaryStr;
        num = Math.floor(num / 2);
    }

    return binaryStr;
	
}
const num = parseInt(prompt("Enter a number."));
alert(decimalToBinary(num));
