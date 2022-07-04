//4.Create a function that returns any of the items you can afford in the store with the money you have in your wallet. Sort the list in alphabetical order.


function weeklySalary(hours) { 
    let salary = 0; 
    for (let i = 0; i < hours.length; i++) { 
      if (i < 5) { 
        if (hours[i] > 8) { 
          salary += 8 * 10 + (hours[i] - 8) * 15; 
        } else { 
          salary += hours[i] * 10; 
        } 
      } else { 
        if (hours[i] > 8) { 
          salary += 8 * 20 + (hours[i] - 8) * 30; 
        } else { 
          salary += hours[i] * 20; 
        } 
      } 
    } 
    console.log(salary); 
} 
   
   
 
 
weeklySalary([8, 8, 8, 8, 8, 0, 0]) ; 
 
weeklySalary([10, 10, 10, 0, 8, 0, 0]); 
 
weeklySalary([0, 0, 0, 0, 0, 12, 0]);
