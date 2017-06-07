let evenArray = [1, 6, 7, 8, 9, 13, 20, 24];
let oddArray = [1, 2, 3];

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
      return middleIndex;
    }
  }
  return -1;
}

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

console.log(`Searching in even array ${evenArray}`);
console.log(`Should not find lower item : ${binarySearch(evenArray, -1)}`);
console.log(`Should find first item at position 0 : ${binarySearch(evenArray, 1)}`);
console.log(`Should find second item at position 1 : ${binarySearch(evenArray, 6)}`);
console.log(`Should find last item at position ${evenArray.length -1} : ${binarySearch(evenArray, 24)}`);
console.log(`Should not find higher item : ${binarySearch(evenArray, 26)}`);

console.log('\n\n');

console.log(`Searching in odd array ${oddArray}`);
console.log(`Should not find lower item : ${binarySearch(oddArray, -1)}`);
console.log(`Should find first item at position 0 : ${binarySearch(oddArray, 1)}`);
console.log(`Should find second item at position 1 : ${binarySearch(oddArray, 2)}`);
console.log(`Should find last item at position ${oddArray.length -1} : ${binarySearch(oddArray, 3)}`);
console.log(`Should not find higher item : ${binarySearch(oddArray, 4)}`);

console.log('\n\n\n');

console.log(`Searching in even array ${evenArray}`);
console.log(`Should not find lower item : ${binarySearchRec(evenArray, -1, 0, evenArray.length -1)}`);
console.log(`Should find first item at position 0 : ${binarySearchRec(evenArray, 1, 0, evenArray.length -1)}`);
console.log(`Should find second item  at position 1 : ${binarySearchRec(evenArray, 6, 0, evenArray.length -1)}`);
console.log(`Should find last item at position ${evenArray.length -1} : ${binarySearchRec(evenArray, 24, 0, evenArray.length -1)}`);
console.log(`Should not find higher item : ${binarySearchRec(evenArray, 26, 0, evenArray.length -1)}`);
console.log('\n\n');
console.log(`Searching in odd array ${oddArray}`);
console.log(`Should not find lower item : ${binarySearchRec(oddArray, -1, 0, oddArray.length -1)}`);
console.log(`Should find first item at position 0 : ${binarySearchRec(oddArray, 1, 0, oddArray.length -1)}`);
console.log(`Should find second item at position 1 : ${binarySearchRec(oddArray, 2, 0, oddArray.length -1)}`);
console.log(`Should find last item at position ${oddArray.length -1} : ${binarySearchRec(oddArray, 3, 0, oddArray.length -1)}`);
console.log(`Should not find higher item : ${binarySearchRec(oddArray, 4, 0, oddArray.length -1)}`);


