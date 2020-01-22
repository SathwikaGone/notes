
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