'use strict';

function countSameElements(collection) {
    var temp = {};
    var result = [];
    for(var collections of collection){
        if(collections in temp){
            temp[collections] = temp[collections] + 1;
        }else{
            temp[collections] = 1;
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
