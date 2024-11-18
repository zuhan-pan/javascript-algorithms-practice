function naiveStringSearch(str1, str2) {
  let counter = 0;
  for (let i = 0; i < str1.length - str2.length; i++) {
    let match = true;
    for (let j = 0; j < str2.length; j++) {
      if (str1[i + j] !== str2[j]) match = false;
      break;
    }
    if (match) counter++;
  }
  return counter;
}
