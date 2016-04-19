function findRec(arr, key, low, high){
  var mid = Math.floor((low + high) / 2);
  console.log('findRec -> arr:', arr, 'key:', key, 'low:', low, 'high:', high, 'mid:', mid);

  if(arr[mid] === key)
    return mid;

  if(low > high)
    return -1;

  if(key < arr[mid])
    high = mid - 1;
  else
    low = mid + 1;

  return findRec(arr, key, low, high);
}

function find(arr, key){
  return findRec(arr, key, 0, arr.length - 1);
}

// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

var nums = [];
var rnd = Math.floor(Math.random() * 25);
for(var i = 0; i < rnd; i++){
  var num = Math.floor(Math.random() * 25);
  nums.push(num);
}
nums.sort(function(a, b){
  return a - b;
});

var val = Math.floor(Math.random() * 25);
console.log('result:', find(nums, val));

// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
