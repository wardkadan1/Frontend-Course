function arrayfunch(arr, index = 0, sum = 0) {
  if (index >= arr.length) {
    console.log(`index => ${index}`);
    console.log(`sum => ${sum}`);
    return 0;
  }
  console.log(arr[index]);
  return arrayfunch(arr, index + 1, sum + arr[index]);
}

arrayfunch([1, 2, 3, 4, 5]);
