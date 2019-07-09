'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let temp = {};
  let result = [];
  const numPatt = /\d+/g;
  for (const c of collectionA) {
    const ctmp = c[0];
    const num = numPatt.exec(c);
    let count = 1;
    if(num){
      count = Number(num[0]);
    }
    if(ctmp in temp){
      temp[ctmp] = temp[ctmp]+count;
    }else{
      temp[ctmp] = count;
    }
  }
  for (const key in temp) {
    let i = {};
    i['key'] = key;
    i['count'] = temp[key];
    result.push(i);
  }

  const sob = objectB.value.join('');
  return result.map(function(item,index,array) {
    if(sob.includes(item['key'])){
      item['count']-=Math.floor(item['count']/3);
    }
    return item;
  });
}
