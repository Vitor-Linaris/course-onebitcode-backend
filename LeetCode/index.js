var removeDuplicates = function (nums) {
  let index = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[index]) {
      index++;
      nums[index] = nums[i];
    }
    console.log(nums);
    console.log("Proxima inteiração");
  }

  return index + 1;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
