/*let mystring = "";
let n = 4;
for(let i = 0;i <= n;i++){
    for(let j = 0;j <= n;j++){
        mystring +=" #";
        console.log(" internal loop!!!")
    }
    console.log("external loop!!!")
    mystring += "\n";
}
console.log(mystring);*/

/*
let n = 5; // row or column count
// defining an empty string
let string = "";

for(let i = 0; i <= n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    string += "* ";
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);
*/ 



function printPattern() {
    let mystring = "", n = 4;
    for (let i = 0; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            mystring += " * ";
        }
        mystring += "\n";
    }
    console.log(mystring)
}

function yourname(fname , lname) {
    let name = fname + lname;
    return name;
}
let output = yourname("muhid ","shaikh ")
//console.log(output)



const myArr = ["naknc","joe","efecc","efqef","fwefew","wevesaxqwd"]
for (let i = 0; i <= myArr.length; i++) {
    console.log(myArr[i])
    
}

const myCars = []
myCars[0] = "audi"
myCars[1] = "lambo"
myCars[2] = "farrari"
myCars[3] = 

console.log(myCars)

















