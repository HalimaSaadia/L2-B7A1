// Task 1:
const filterEvenNumbers = (numbers: number[]): number[] =>
  numbers.filter((num) => num % 2 == 0);

filterEvenNumbers([1, 2, 3, 4, 5, 6]);

// Task 2:
const reverseString = (string: string): string =>
  string.split("").reverse().join("");
reverseString("typescript");

// Task 3:
type StringOrNumber = string | number;
const checkType = (value: StringOrNumber) =>
  typeof value === "string" ? "String" : "Number";
checkType("hello");
checkType(42);

// Task 4:
const getProperty = <T, key extends keyof T>(obj: T, key: key) => obj[key];
const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");

// Task 5:
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
const toggleReadStatus = (book: Book) : Book & {isRead:boolean} => {
  return { ...book, isRead: true };
};

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
toggleReadStatus(myBook);

// Task 6:

class Person {
    name:string;
    age:number;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
}

class Student  extends Person {
    grade:string;
    constructor(name:string, age:number, grade:string) {
        super(name, age);
        this.grade = grade;
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    } 
}

const student = new Student("Alice", 20, "A");
student.getDetails()


// Task 7:
const getIntersection = (array1:number[], array2:number[]) => {
    
    const intersectionArray:number[] = [];
    array1.forEach(num => {
        if (array2.includes(num)) {
            intersectionArray.push(num);
        }
    });
    return intersectionArray;
}
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])

