'use strict';

function collectSameElements(collectionA, objectB) {
 var tempArray1 = [];
 var tempArray2 = [];

 for(var i=0;i<objectB.value.length;i++){
     tempArray1[objectB.value[i]]=true;
 }
 for(var i=0;i<collectionA.length;i++){
     if(tempArray1[collectionA[i]]){
         tempArray2.push(collectionA[i]);
     }
 }
 return tempArray2;
}
