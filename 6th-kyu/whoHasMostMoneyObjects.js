// *** Who has the most money? - 6 kyu
/*
You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}
As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".

Notes:
Each student will have a unique name
There will always be a clear winner: either one person has the most, or everyone has the same amount
If there is only one student, then that student has the most money
*/

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}
const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);

const shepard = new Student('Shepard', 1, 2, 3);
const miranda = new Student('Miranda', 1, 2, 3);
const ashley = new Student('Ashley', 1, 2, 3)

const studentsGroup1 = [andy, stephen, eric, david, phil, cam, geoff]
const studentsGroup2 = [shepard, miranda, ashley]

function mostMoney(students) {
  // accept an array of student objects
  // loop over array and total up money for each student
  // or sort the array from total high to low
  // find the max total and return that student's name
  // return 'all' if array has at least 2 students and all have same total

  // concise solution with helper function 
  function sum(student) {
    return (student.fives * 5) + (student.tens * 10) + (student.twenties * 20);
  }

  students.sort((a,b) => sum(b) - sum(a));
  if(students.length>1 && sum(students[0]) === sum(students[1])) return 'all';
  return students[0].name;


  // long version: with map, reduce, every, and if/else statements

  // check for single student array
  if (students.length === 1) return students[0].name;

  const totalsArr = students.map(studentObj => {
    let total = 0;
    total += studentObj.fives * 5;
    total += studentObj.tens * 10;
    total += studentObj.twenties * 20;
    return {name: studentObj.name, total: total}
  })

  let maxMoney = totalsArr.reduce((max, currentStudent) => 
    max.total > currentStudent.total ? max : currentStudent);

  if (totalsArr.every(student => student.total === maxMoney.total)) {
    return 'all'
  } else {
    return maxMoney.name;
  }

}