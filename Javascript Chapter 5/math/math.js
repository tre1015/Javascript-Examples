//TraMel Marshall 07/10/2019
   var a = 30, b = 4;
   var add, sub, mul, div, mod;

   add = a + b; //addition of 4 and 30
   sub = a - b; //subtract 4 from 30
   mul = a * b; //Multiplying numbers
   div = a / b; //dividing 30 by 4 
   mod = a % b; //Finds the remainder


   document.getElementById("add").innerHTML = "Addition of " + a +' and ' + b +" is = " + add;
   document.getElementById("sub").innerHTML = "Subtraction of " + a +' and ' + b +" is = " + sub;
   document.getElementById("mul").innerHTML = "Multiplication of " + a +' and ' + b +" is = "+ mul;
   document.getElementById("div").innerHTML = "Division of " + a +' and ' + b +" is = " +  div;
   document.getElementById("mod").innerHTML = "Modulus of " + a +' and ' + b +" is = " +  mod;
