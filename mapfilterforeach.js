




/*function doubleValues(array){
    let newArray=[];
    for(let i=0; i<array.length; i++){
        newArray.push(array[i]*2);
    }
    return newArray;
} */

function doubleValues(array){
    let newArray=[];
    array.forEach(function(val){
       newArray.push(val*2);              
  });
      return newArray;
  }
  
  /*onlyEvenValues
  
  Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function  */
  
  
  function onlyEvens(array){
    let newArray=[];
    array.forEach(function(val){
      if(val%2===0){
        newArray.push(val);
      }
    });
       return newArray;           
  }
  
  /*showFirstAndLast
  
  Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
  
  showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
  showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
  
  */
  
  function showFirstAndLast(array){
    let newArray=[];
    array.forEach(function(val){
      newArray.push(val[0]+val[val.length-1]);
    });
     return newArray;
  }
  
  /*addKeyAndValue
  
  Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object
  
  addKeyAndValue(
  [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
  ],
    'title',
    'instructor'
  )
  */
  
  function addKeyAndValue(array,key,value){
   
    array.forEach(function(val){
      val[key]=value;
    });
    return array;
  }
  
  /*
  vowelCount
  
  Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
  
  vowelCount('Elie') // {e:2,i:1};
  vowelCount('Tim') // {i:1};
  vowelCount('Matt') // {a:1})
  vowelCount('hmmm') // {};
  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1} */
  
  function vowelCount(str){
    
   let newObj={};
    let vowels='aeiou'
    let myArr=str.split("");
        
    myArr.forEach(function(letter){
        let lowerCasedLetter=letter.toLowerCase();
       if(vowels.indexOf(lowerCasedLetter)!==-1){
         if(newObj[lowerCasedLetter]){
           newObj[lowerCasedLetter]++;
         }else{
           newObj[lowerCasedLetter]=1;
         }
       }       
  });           
    return newObj;
  }
  
  /*
  doubleValuesWithMap
  
  Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled */
  function double(num){
   console.log(num*2);
  }
  
  
  function doubleValuesWithMap(arr){
   return arr.map(function(element){
     return element*2;
      
    });
  }
  
  /*valTimesIndex
  
  Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
  
  valTimesIndex([1,2,3]) // [0,2,6]
  valTimesIndex([1,-2,-3]) // [0,-2,-6]  */
  
  function valTimesIndex(arr){
    return arr.map(function(val){
      return val*arr.indexOf(val);
    });
  }
  
  /*
  extractKey
  
  Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
  
  extractKey(
    [
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ],
    'name'
  )
  
    // ['Elie', 'Tim', Matt', 'Colt']  */
  
  function extractKey(arr,key){
    return arr.map(function(val){
      return val[key];
    });  
  }
  /*
  Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of “first” and the value of a key with the name of “last” in each object, concatenated together with a space. */
  
  function extractFullName(arr){
    return arr.map(function(val){
    return val.first+" "+val.last;
    });
  }
  /*
  Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key. */
  
  function filterByValue(arr,key){
    return arr.filter(function(val){
      return val[key]!==undefined;
    });
  }
  
  
  /*Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.  */
  
  function find(arr,findVal){
    return arr.filter(function(val){
      return val===findVal;
    })[0];
  }
  
  /*findInObj
  
  Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array. */
  
  function findInObj(arr,key,searchVal){
    return arr.filter(function(val){
      return val[key]===searchVal;
    })[0];
  }
  /*
  removeVowels
  
  Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
  
  removeVowels('Elie') // ('l')
  removeVowels('TIM') // ('tm')
  removeVowels('ZZZZZZ') // ('zzzzzz') */
  
  function removeVowels(str){
    let vowels='aeiou'
    let stringArr=str.toLowerCase().split("");
  return stringArr.filter(function(val){
    return vowels.indexOf(val)===-1;
  })
    .join("");
  }
  /*
  doubleOddNumbers
  
  Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).
  
  doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
  doubleOddNumbers([4,4,4,4,4]) // []  */
  
  function doubleOddNumbers(arr){
    return arr.filter(function(val){
      return val%2!==0;
    })
  .map(function(val){
      return val*2;
    });
  }
  
  