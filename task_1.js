let n = Number.parseInt(prompt(""))

const list = []

const occurence = {}
// i am using object instead of array so that i can have key value pairs , useful for occurence count

for(let i = 0 ; i < n ; i++){
    let string = prompt("")
    list.push(string)
   if(!occurence[string]){ //if occurence doesnt have this string , make value = 1 (here , key : string and value : number of occurences(i.e , 1))
     occurence[string] = 1;
   }
  else{
    occurence[string]++;
  }
}

// keys are always unique
//therefore number of keys are number of unique strings , since keys are strings here
//and we have incremented the value of  value of every key on each repeated occurence , therefore values have the number of occurences of each element 

console.log(Object.keys(occurence).length) //how many keys exist in occurence? the number of keys in occurence is the same as the number of unique values in occurence
console.log(Object.values(occurence)) //the array of values of occurence is the array of number of occurences of each element