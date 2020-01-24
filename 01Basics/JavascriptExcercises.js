
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

   /* Write a JavaScript program to 
   convert the letters of a given string in alphabetical order. */
   function sort(str){
      console.log(str.split("").sort().join(""));
      }
   sort("sathwika");



   /*Write a JavaScript program to check whether the characters
   a and b are separated by exactly 3 places anywhere (at least once) in a given string.  */
      function place(str){

         var p=str.split("");
         if(str.includes("a") && str.includes("b")){
            for(i=0;i<p.length;i++){
               if(p[i]=="b"){
                  x=  i;
                  if(p[x-4]=="a" || p[x+4]=="a"){
                    console.log("has a and b");
                  }else{
                     console.log("no a and b");
                  }
               }
            }
         }else{
            console.log("no a and b");
         }
      }
      place("ssasssb");
      place("assb");
      place("asbhjs");
      place("annbnnbnnna")


   /*Write a JavaScript to add two positive integers without carry */
      function carry(num,num1){
         p=num.toString().split("");
         q=num1.toString().split("");
         var o=[];
         for(i=0;i<p.length;i++){
            l=parseInt(p[i])+parseInt(q[i]);
            // console.log("heyy im here");
            if(l >9){
               x=l.toString().split("");
               o+=x[1];
            }else{
               x=l.toString().split("");
               o+=x[0];
            }
         }
         console.log(parseInt(o));

      }
      carry(259,376)


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

/*Write a JavaScript program to check whether 
it is possible to rearrange characters of a given string in such way
that it will become equal to another given string. */


// function p(){
//    var str="abc";
//    var str2="bca";
//    if(str.length==str2.length){
//       for(var i=0;i<str.length;i++){
//          for(var j=0;i<str.length;j++){
//             if(str.charAt(i)===str2.charAt(j)){
//                // console.log(str.charAt(i)==str2.charAt(j));
//                console.log(str2.charAt(j));
//          }
//       }    
      
//       }
//    }  
// }
// p();

/*Write a JavaScript program to 
find the number of inversions of a given array of integers. */

function inversions(){
var arr=[1,5,2,3,7,6];
var count=0;
var p;
for(var i=0;i<arr.length;i++){
   if(arr[i]>arr[i+1]) {
   p=arr[1];
   arr[i]=arr[i+1];
   arr[i+1]=p
   count++;
   }
}
console.log(count);
}
inversions();

/*Write a JavaScript program to find the maximal number 
from a given positive integer by deleting exactly one digit of the given number. */

function max(numb){
   var ar=numb.toString()
   var ar1=[];
   var a;
   var min=0;
      for(i=0;i<ar.length;i++){
      ar1[i] = ar.charAt(i)
      ar1[i]= parseInt(ar1[i],10);
      }
      
   min=Math.min(...ar1)
      // console.log(ar1);
   nump=ar1.indexOf(min)
   a=ar1.slice(0,nump).join("");
   ap=ar1.slice(nump+1,ar1.length).join("");
      // x=a.join("")+ap.join("");
      console.log(parseInt((a+ap),10));

}
max(2015);

/*Write a JavaScript program to swap pairs
 of adjacent digits of a given integer of even length. */

function adj(num){
   var ar=num.toString();
   var ar1=[];
   for(i=0;i<ar.length;i++){
      ar1[i] = ar.charAt(i)
      ar1[i]= parseInt(ar1[i],10);
      }

   if(ar1.length%2==0){
      for(i=0; i<ar1.length;i++){
         p=ar1[i];
         ar1[i]=ar1[i+1];
         ar1[i+1]=p;
         i++
      }
      console.log(parseInt(ar1.join("")));
   }else{
      console.log("can't swap..")
   }
}
adj(123479);

/*Write a JavaScript program to find the shortest possible string which can create 
a string to make it a palindrome by adding characters to the end of it. */
   // function pal(str){
   //    x=str.split("");
   //    if(str.length%2==0){
   //       if(x[str.length-1]==x[str.length-2]){
   //          for(i=str.length-2;i<str.length-1;i--){
   //             p=x[i];
   //          }
   //       }
   //    }
      
   // }
   // pal("satt");

   /* Write a JavaScript program to find the number of times to replace a given 
   number with the sum of its digits until it convert to a single digit number.  */

   function rep(num){
     var x=(num.toString().split(""));
     var p=[];
     var o=0;
     for(i=0;i<x.length;i++){
        p[i]=parseInt(x[i]);
     }
     console.log(p);
     for(i=0;i<p.length;i++){
        o+=p[i];
     } 
   //   console.log(o);
     if(o>9){
         // console.log(o);
        rep(o);
     }else{
      console.log(o);
     }
    
   }
   rep(189);


   /*Write a JavaScript program to break an address of an url and put it's part into an array.  */

   function url(str){
      var p=[];
      i=1;
         if(str.includes("://")){
            p=str.split("://");
            if(str.includes("/")){
               p=p[1].split("/");
               i++;
            }
         }
          
            
      
      console.log(p)
   }
   url("https://www.telerik.com/blogs/creating-a-responsive-layout-in-react");

   /* 143 Write a JavaScript program to sort the strings of a given array of 
   strings in the order of increasing lengths. */

   function inc(arr){
    var x;
      for(i=0;i<arr.length;i++){
         for(j=i+1;j<arr.length;j++){
            if(arr[i].length>arr[j].length){
               x=arr[i];
               arr[i]=arr[j];
               arr[j]=x;
               console.log(arr[i])
            }
         }
          
      }
      console.log(arr)
     
   }
   inc(["Laxmi","sathwika","Hitesh"]);
  
   /*Write a JavaScript program to replace the first digit in a string 
   (should contains at least digit) with $ character.*/

   function dig(str){

      // console.log(parseInt(str.substring(0,1)));
      // console.log(isNaN(parseInt(str.substring(0,1))))
      if(!isNaN(parseInt(str.substring(0,1)))){
         console.log("$"+str.substring(1));
      }
      else{
         console.log(str);
      }
      
   }
   dig("1sath");
   dig("hit")

   /*Write a JavaScript program to check whether a given matrix is an identity matrix.
   ([1, 0, 0], [0, 2, 0], [0, 0, 3] ]) = true */

   function mat(){
      ar=[[1, 0, 0], [0, 2, 0], [0, 0, 3] ]
      for(i=0;i<ar.length;i++){
         for(j=0;j<ar.length;j++){
            if((i!==j) &&(ar[i][j]!==0))
            console.log("NOT AN IDENTIY MATRIX")
         }
      }
      console.log("IDENTITY MATRIX")
   }
   mat();


   // function arrp(){
   //    duplicatesArray=["sathwika","hitesh","Laxmi","sathwika"];
   //    const namesArr = duplicatesArray.filter(function(elem, pos) { duplicatesArray.indexOf(elem) === pos;});
   //   console.log(namesArr);
   //   console.log("im here");
   // }
   // arrp();
    