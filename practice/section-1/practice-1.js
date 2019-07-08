'use strict';

function collectSameElements(collectionA, collectionB) {

  var tempArray1 = [];
  var tempArray2 = [];

  for(var i=0;i<collectionB.length;i++){
      tempArray1[collectionB[i]]=true;
  }
  for(var i=0;i<collectionA.length;i++){
      if(tempArray1[collectionA[i]]){
          tempArray2.push(collectionA[i]);
      }
  }
  return tempArray2;
}
