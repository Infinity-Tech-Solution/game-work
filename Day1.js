// Step 1: Define the constructor function
function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;

    // Step 2: Implement the isTeenager() method
    this.isTeenager = function() {
        return this.age >= 13 && this.age <= 19;
    };
}

// Step 3: Create instances of Student
const student1 = new Student('Alice', 14, '8th Grade');
const student2 = new Student('Bob', 20, 'College Sophomore');

// Step 4: Use the isTeenager() method in a for...of loop
const students = [student1, student2];

for (const student of students) {
    console.log(`${student.name} is a teenager: ${student.isTeenager()}`);
}
