"use strict"

const printStudentName = function () {
    console.log(this.lastname + ", " + this.fistname)
}

const students = [
    {
        fistname: "Max", lastname: "Mustermann",
        printName: printStudentName
        
    },
    {
        fistname: "Erika", lastname: "Musterfrau",
        printName: printStudentName
    }
]

students[0].printName()
students[1].printName()

for (const student of students) {
    student.printName()
}