# Binary search algorithm

** The array must be ordeder**

** The complexity is log (n) where n is the length of the array.**

The algorithm basically is:

```
let binarySearch = function(array, item) {
  let startIndex = 0;
  let endIndex = array.length -1;
  while (startIndex <= endIndex) {
    let middleIndex = startIndex + Math.round((endIndex - startIndex) / 2);
    if (array[middleIndex] > item) {
      endIndex = middleIndex - 1;
    } else if (array[middleIndex] < item) {
      startIndex = middleIndex + 1;
    } else {
      return array[middleIndex];
    }
  }
  return null;
}
```

while the recursive one is:
```
let binarySearchRec = function(array, item, startIndex, endIndex) {
  let middleIndex = startIndex + Math.round((endIndex - startIndex) / 2);
  if (startIndex > endIndex) {
    return -1;
  } else if (array[middleIndex] === item) {
    return middleIndex;
  } else if (array[middleIndex] > item) {
    return binarySearchRec(array, item, startIndex, middleIndex - 1);
  } else if (array[middleIndex] < item) {
    return binarySearchRec(array, item, startIndex + 1, endIndex);
  }
  return -1;
}
```