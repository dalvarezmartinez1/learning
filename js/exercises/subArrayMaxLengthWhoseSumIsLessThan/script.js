let array = [3, 1, 2, 1];
let maxSum = 4;

function maxLength(array, maxSum) {
	let i=0, j=0, maxSubArrayLength=0, tempSum = 0;
  
  while(j < array.length){
  	if (tempSum + array[j] > maxSum) { // Reset the subarray
      j = ++i;
      tempSum = 0;
    } else {
    	tempSum += array[j];
    	j++;
    	let currentLength = j - i;
    	if (currentLength > maxSubArrayLength) { // Is the current length of the subarray bigger than what we have? If so, we have a new max
      	maxSubArrayLength = currentLength;
      }
    }
  }
	return maxSubArrayLength - 1; // -1 because it's length not size
};


console.log(maxLength(array, maxSum));
