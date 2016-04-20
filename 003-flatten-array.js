function flatten(arr){
  return arr.reduce(function(list, item){
    var isArray = Object.prototype.toString.call(item) === '[object Array]';
    if(!isArray){
      list.push(item);
    }else{
      list = list.concat(flatten(item));
    }

    return list;
  }, []);
}

var nums = [1,2,[3,4,[5,6,[7,8,[9,10]]]]];
console.log(nums, '::', flatten(nums));
