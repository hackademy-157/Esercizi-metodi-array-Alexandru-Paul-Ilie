// esercizio 1

// let numbers = [1, 5 ,7 ,12]
// let somma = 0
// for (let index = 0; index < numbers.length; index++) {
//     somma += numbers[index];
    
// }
// console.log(somma);

// let somma = numbers.reduce((acc , number) => acc + number)
// console.log(somma);




// esercizio 2

// let numbers = [3, 7, -2, 5, 8, 1, 2, 5, 6, 11];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);


// esercizio 3


// let numbers1 = [10, 20, 30]
// let numbers2 = [40, 50, 60]
// function sommaArray(array1, array2) {
//     return array1.map((number, i) => number + array2[i])
// }
// let result = sommaArray(numbers1, numbers2);
// console.log(result);


// esercizio 4
    

// function sommapositivo(array) {
    
//     let positives = array.filter((number) => number >= 0)
    
//     if (positives.lenght == 0) {
//         return 0
//     }
//     let somma = positives.reduce((acc, number) => acc + number, 0 )
//     return somma
// }
//     console.log(sommapositivo([5, -7,8,12,-2]));


    // esercizio 5


        
    let string = "i topi non avevano nipoti"
    
    function palindromo(str) {
        
     
            
        
            let nospace = str.replace(/\W/g, "") 
            let inverso = nospace.split("").reverse().join('');
           

            if (inverso === nospace) {
                console.log(True);
                 
                
            } else {
                console.log(False);
               
                
            }
    }
       console.log(palindromo);
       

    
    
         

        // let reversed = chars.reverse()
        
        
        
       
    
        
        