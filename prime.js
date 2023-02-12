let factor=0;
let number=5;

for(let i=0;i<=number;i++){
if(number%i==0){
factor++;
}
}
(factor==2)?console.log("It is a prime number"):("It is not a prime number");