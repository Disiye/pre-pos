'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const sob = objectB.value.join('');
  return collectionA.map(function(item,index,array) {
    if(sob.includes(item['key'])){
    	item['count']-=Math.floor(item['count']/3);
    }
    return item;
  });
}
