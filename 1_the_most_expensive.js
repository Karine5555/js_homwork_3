//1.Create a function that gets the name of the piece of jewelry with the highest price and returns "The most expensive one is the {name of jewelry piece}".

       function mostExpensive(obj) { 
        //gtnenq max    
        let value=Object.values(obj)
        let i=0;
        let max=0;
        while(i<value.length){
            if(value[i]>max){
                max=value[i]
            }
            i++
        }
        //gtnenq max in hamapatasxan key
        for(let key in obj){

            if(obj[key] == max ){
                console.log (`The most expensive one is the ${key}, price-${obj[key]}$`)
            }
        }
    }
        mostExpensive ({
            "Diamond Earrings": 980,
            "Gold Watch": 250,
            "Pearl Necklace": 4650,
          })
          mostExpensive({
            "Silver Bracelet": 280,
            "Gemstone Earrings": 180,
            "Diamond Ring": 3500
          })