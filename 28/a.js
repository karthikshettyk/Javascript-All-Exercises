let num = prompt("enter the number")
let pattern =""
for (i=0; i< num ; i++) {
    pattern=pattern+"\n"
    for (j=0; j<=i; j++) {
     pattern=pattern+"*"
    }
 }

console.log(pattern)
