'use strict';

function countSameElements(collection) {
  var temp = {};
  var result = [];
  for (var collections of collection) {
    var collectionsTemp = collections[0];
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
    temporary['key'] = key;
    temporary['count'] = temp[key];
    result.push(temporary);
  }
  return result;
}
