
/* Write a JavaScript program to get the difference between a given number and 13,
 if the number is greater than 13 return double the absolute difference.*/

 function diff(number){
   if (number>13){ console.log( 2* (number-13))}
   else{
       console.log((13-number));
   }
   
}
diff(8);

/* Write a JavaScript program to compute the sum of the two given integers.
 If the two values are same, then returns triple their sum. */

 function sum(a,b){
     if(a==b){
        console.log ((a+b)*3);
     }else{
        console.log(a+b);
     }
 } 
 sum(5,7);
 sum(5,5);