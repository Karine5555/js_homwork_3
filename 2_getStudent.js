//2Create a function that takes an array of objects like `{ name: "John", notes: [3, 5, 4] }` and returns an array of objects like `{ name: "John", topNote: 5 }`.If student has no notes (an empty array) then let's assume `topNote: 0`.
function getStudentsWithNamesAndTopNotes(arr){ 
    let i=0; 
    let max=0; 
    let j =[]; 
    while(i<arr.length){ 
       j =Object.values(arr[i].notes); 
       max = Math.max(...j);
       console.log(`{name: ${arr[i].name}, topNote: ${max}}` );
       i++; 
    }
    
}

getStudentsWithNamesAndTopNotes([
    { "name": "John", "notes": [3, 5, 4] },
    { "name": "Max", "notes": [1, 4, 6] },
    { "name": "Zygmund", "notes": [1, 2, 3] }
  ])
