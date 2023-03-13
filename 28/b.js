let num = prompt("Enter the number")
let pattern =""
for (i=0; i< num ; i++) {
    pattern=pattern+"\n"
    for (j=0; j<=num; j++) {
     pattern=pattern+"*"
    }
 }

console.log(pattern)
