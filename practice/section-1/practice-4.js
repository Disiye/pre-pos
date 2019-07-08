'use strict';

function collectSameElements(collectionA, objectB) {
  var result = [];
    for (var collectionAs of collectionA) {
      for (var objectBs of objectB.value) {
        if(collectionAs.key === objectBs){
          result.push(objectBs);
        }
      }
    }
    return result;
}
