console.log("hello js once again!!!!!")

let mystring = "";
let n = 4;
for(let i = 0;i <= n;i++){
    for(let j = 0;j <= n;j++){
        mystring +=" #";
        // console.log(" internal loop!!!")
    }
    // console.log("external loop!!!")
    mystring += "\n";
}
console.log(mystring);


