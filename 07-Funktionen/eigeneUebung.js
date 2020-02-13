"use strict"

let studentsPerCourse = [
    ["Max", "Monika"], // Erster Kurs
    ["Erik", "Erika", "Jens"] // Zweiter Kurs
  ]

let indexLeastStudents = -1
for (const i in studentsPerCourse) {
  const course = studentsPerCourse[i]

  if (indexLeastStudents === -1) {
    indexLeastStudents = i
  }

  else {
    if (course.length < studentsPerCourse[indexLeastStudents].length) {
      indexLeastStudents = i
    }
  }
}
console.log("Aufgabe 4, C:", indexLeastStudents)

for (const student of studentsPerCourse)
{
    console.log(student)
}