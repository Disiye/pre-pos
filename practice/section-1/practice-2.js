'use strict';

var result;
function collectSameElements(collectionA, collectionB) {
  var tempArray1 = [];
  var tempArray2 = [];
  for(var i=0;i<collectionB.length;i++){
    for(var j=0;j<collectionB[i].length;j++){
        tempArray1[collectionB[i][j]]=true;
    }
  }
  for(var i=0;i<collectionA.length;i++){
      if(tempArray1[collectionA[i]]){
          tempArray2.push(collectionA[i]);
      }
  }
  return tempArray2;
}
