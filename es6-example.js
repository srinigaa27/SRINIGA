//let
let studentcount=10;
studentCount =11;
console.log("studentCount:",studentCount);


//const
const collegeName="VETIAS"
console.log("collegeName",collegeName);


//template literals
let studentName ="Arun";
console.log(`Welcome ${studentName} to ${collegeName}`);

//object
const Student=
{
    name:"Arun",
    age:20,
    department:"CSA"
}
//destructing
const{name,age,department}= Student;
console.log("Name:",name);
console.log("Age:",age);
console.log("Department:",department);

//arrow function
const displayStudent =() => {
    console.log(`student Name: ${name}`);
}

//array
const studentArray=["deva","ragavi","nikitha"]
console.log(studentArray);

//spread operator
const updatedStudents=[
    ...studentArray,
    "afrin"
]

console.log(updatedStudents);

//rest operator
function maximumMarks(...marks){

    let max = Math.max(...marks);

    return max;
}

console.log("Maximum Marks:",maximumMarks(80,90,70));