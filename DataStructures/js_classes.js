/* 
Js Class syntax is a blue print for pojo 
constructor instanciates an js object. 
*/

class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
    }
    markLate() {
        this.tardies += 1;
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`
    }

    static tardiesOverTheYears(student) {
        return `${student.firstName} ${student.lastName} is in grade ${student.grade}.`
    }
    
}


// We have to instanciate class with the *new* keyword
let firstStudent = new Student('Grog', 'Flogson', 7);
let secondStudent = new Student('Fleg', 'Gregson');
firstStudent.markLate;
firstStudent.markLate;
firstStudent.markLate;
firstStudent.markLate;
//* Instance Methods
//The provide funcitonality that pertains to a single instance of a class 
console.log(Student.tardiesOverTheYears(firstStudent));