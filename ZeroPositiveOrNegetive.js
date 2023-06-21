function check(num) {
    if (num==0) {
        console.log("The number is neither Positive or Negetive");
    }
    else if(num/-1 <0){
        console.log("The number is Positive");
    }
    else if(num/-1 >0){
        console.log("The Number is Negative");
    }
}
var num = -1;
check(num)