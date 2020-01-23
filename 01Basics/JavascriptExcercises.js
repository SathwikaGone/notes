
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

 /* Write a JavaScript program to compute the absolute difference between a specified number and 19.
  Returns triple their absolute difference if the specified number is greater than 19. */

  function diff(number){
   if (number>19){ console.log( 3* (number-19))}
   else{
       console.log((19-number));
   }
   
}
diff(8);
diff(29);

/*Write a JavaScript program to create a new string adding "Py" in front of a given string.
 If the given string begins with "Py" then return the original string. */

 function py(name){
    if (name.substring(0,2)==="py"){
       console.log(name);
    }
    else{
       var str="py";
       
       console.log(str.concat(name));
    }
 }
 py("pyname");
 py("sathwika");

 /* Write a JavaScript program to remove a character at the specified position of a given string 
 and return the new string. */

 function remove(name,p){
    var x= name.substring(0,p-1)+name.substring(p,(name.length));
         console.log(x);
 }
 remove("sathwika",4);
 remove("super",5)

 /*Write a JavaScript program to check whether a given
  positive number is a multiple of 3 or a multiple of 7 */

  function multiple(num){
     if((num%3 ==0 )&& (num%7==0)){
      console.log('The '+num+' is multiple of 3 and 7');
     }
  }
  multiple(21);

  /*Write a JavaScript to replace each character of a given string by the next one in the English alphabet. */

  function replaceAll(name){

   for(var i=0;i<name.length;i++){
      var x=name.charAt(i)
      var l=parseInt(x, 36) - 9
      // console.log(parseInt(x, 36) - 9);
      console.log((l + 9+1).toString(36));
   }
     
  }
  replaceAll("hey")

  /* Write a JavaScript code to divide a given array of positive integers into two parts. 
  First element goes to first part, second element goes to second part, 
  and third element goes to first part and so on.
  Now compute the sum of two parts and store into an array of size two.*/

  function arr(){
     ar=[1,2,3,4,5,6,7,8,9]
   var sum1=0,sum2=0;
   for(i=0;i<ar.length;i++){
      if(i%2==0){
         sum1+=ar[i];
         //  console.log(sum1);
      }
      else{
         sum2+=ar[i];
         // console.log(sum2);
      }
   }
   arra=[sum1,sum2];
   console.log(arra);
  }
arr();

/*Write a JavaScript program to find the maximal difference between any two adjacent
elements of a given array of integers. */

function maxDiff(){
   arr=[1,4,7,9,13,7,9,13,7,9];
   // console.log(arr);
   var maxdiv=0,max=0;

   for(var i=0;i<=arr.length;i++){
      if(arr[i]!=arr[i+1]){
         max=Math.abs(arr[i]-arr[i+1]);
         if(maxdiv<max){
            maxdiv=max;
         
         }
      }
   }
   console.log(maxdiv);
}
maxDiff();