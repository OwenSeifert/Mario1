
printPyramid(20);
 function printPyramid(height){
   for(var row=0; row < height; row++){
     var numBrick = row + 2;
     var numSpace = height - row - 1;
     var rowStr = "";
     for(var i = 0; i < numSpace; i++) {
       rowStr += ".";
     }
     for(var i = 0; i < numBrick; i++){
      rowStr += "#";}
   console.log(rowStr) 
   }

 }
