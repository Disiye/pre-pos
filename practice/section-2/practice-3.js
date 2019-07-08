'use strict';

function countSameElements(collection) {
  let temp = {};
  let result = [];
  for (const collections of collection) {
    const collectionsTemp = collections[0];
    const numString = collections.replace(/[^0-9]/ig,"");
    let count = 1;
    if(numString){
      count = Number(numString[0]);
    }
    if(collectionsTemp in temp){
      temp[collectionsTemp] = temp[collectionsTemp]+count;
    }else{
      temp[collectionsTemp] = count;
    }
  }
  for (const key in temp) {
    let temporary = {};
    temporary['name'] = key;
    temporary['summary'] = temp[key];
    result.push(temporary);
  }
  return result;
}
