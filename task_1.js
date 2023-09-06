let n = Number.parseInt(prompt(""))

const list = []

for(let i = 0 ; i < n ; i++){
    let string = prompt("")
    list.push(string)
}


let len = list.length
let list_of_len = []
for(let i = 0 ; i < len-1 ; i++){
  let count = 1
    for(let j = i+1 ; j<len ; j++){
        
        if(list[i]===list[j]){
            count++
        }
        
    }
  list_of_len.push(count)
}
console.log(list_of_len.length)
console.log(list_of_len) 