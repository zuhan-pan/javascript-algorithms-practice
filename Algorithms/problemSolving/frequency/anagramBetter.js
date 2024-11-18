function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const obj = {};
  [...str1].forEach(char => (obj[char] = ++obj[char] || 1));

  for (const char of str2) {
    if (!obj[char]) return false;
    else obj[char] -= 1; // I think this is neat because it checks the freqency inside this loop
  }

  return true;
}
