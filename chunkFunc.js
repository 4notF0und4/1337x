const chunk = function (arr, size) {
  const original = [];
  let subarr = [];
  for (let i = 0; i < arr.length; i++) {
    subarr.push(arr[i]);
    if (subarr.length === size) {
      original.push(subarr);
      subarr = [];
    }
  }
  if (subarr.length) {
    original.push(subarr);
  }
  return original;
};
