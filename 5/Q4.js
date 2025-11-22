// Create a student object with initial properties
let student = {
  name: "Mahesh",
  age: 16,
  grades: {
    math: 85,
    science: 92,
    english: 78,
    history: 88
  }
};

console.log("=== Initial Student Information ===");
console.log(student);
console.log("\n");

// Operation 1: Add a new property 'class'
student.class = "10th Grade";
console.log("=== After Adding 'class' Property ===");
console.log("Class added:", student.class);
console.log("\n");

// Operation 2: Update the student's grade
student.grades.math = 90;
student.grades.science = 95;
console.log("=== After Updating Grades ===");
console.log("Updated Math grade:", student.grades.math);
console.log("Updated Science grade:", student.grades.science);
console.log("\n");

// Operation 3: Display all student information
console.log("=== Complete Student Information ===");
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Class:", student.class);
console.log("Grades:");
for (let subject in student.grades) {
  console.log(`  ${subject}: ${student.grades[subject]}`);
}

// Alternative: Display using JSON.stringify for formatted output
console.log("\n=== Full Student Object (JSON Format) ===");
console.log(JSON.stringify(student, null, 2));