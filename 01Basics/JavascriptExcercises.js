
/* Write a JavaScript program to get the difference between a given number and 13,
 if the number is greater than 13 return double the absolute difference.*/

 function diff(number){
   if (number>13){ console.log( 2* (number-13))}
   else{
       console.log((13-number));
   }
   
}
diff(8);
