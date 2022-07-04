function uncensor(str1, str2){
  let a = [];
  let b = str2;
  let c = 0;
  let d = "";
  for (let i = 0; i < str1.length; i++) {
    a.push(str1[i]);
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "*") {
      a[i] = str2[c];
      c += 1;
    }
  }
  for (let i = 0; i < a.length; i++) {
    d += a[i];
  }
  return d; 
};

console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));
console.log(uncensor("abcd", ""));
console.log(uncensor("*PP*RC*S*", "UEA"));

// let immutable = "";
//   let count = 0;
//   function uncensor(str1, str2) {
//     let result = [];
//     for (var i = 0; i < str1.length; i++) {
//       if (str1[i] == "*") {
//         result.push(str2[count++]);
//       } else {
//         result.push(str1[i]);
//       }
//     }
//     return result.join("");
//   }

// console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));