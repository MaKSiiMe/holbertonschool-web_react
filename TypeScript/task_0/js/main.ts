// 0. Creating an interface for a student

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Dupont",
  age: 21,
  location: "Paris"
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Martin",
  age: 22,
  location: "Lyon"
};
