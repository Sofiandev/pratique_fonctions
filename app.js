//savoir si un mot est un palindrome

let word1 = "kayak";
let word2 = "pompier";

function isPalindrome(str) {
  let reverse = str.split("").reverse().join("");
  console.log(reverse);

  if (str === reverse) {
    console.log("c'est un palindrome");
  } else {
    console.log("ce n'est pas un palindrome");
  }
}

console.log(isPalindrome(word2));
console.log(isPalindrome(word1));

// manipuler un tableau
const students = [
  {
    name: "John",
    notes: [1, 20, 18, 19, 12],
  },
  {
    name: "Jane",
    notes: [17, 18, 20, 13, 15],
  },
  {
    name: "Sophie",
    notes: [17, 12, 14, 15, 13],
  },
  {
    name: "Marc",
    notes: [2, 3, 5, 8, 9],
  },
  {
    name: "Manon",
    notes: [18, 17, 18, 19, 12],
  },
  {
    name: "John",
    notes: [1, 20, 18, 19, 12],
  },
];

const moyenne = (notes) => {
  let sum = 0;
  for (let note of notes) {
    sum += note;
  }
  return sum / notes.length;
};

const compareStudent = (a, b) => {
  return b.moyenne - a.moyenne;
};

for (let student of students) {
  student.moyenne = moyenne(student.notes);
  student.worst = Math.min(...student.notes);
  student.best = Math.max(...student.notes);
}

students.sort(compareStudent);
console.log(students);

const formatStudent = (student) => {
  return `${student.name} avec une moyenne de ${student.moyenne}, la meilleure note est de ${student.best} et la pire est de ${student.worst}`;
};

console.log(`Top 3 des étudiants : 
1 : ${formatStudent(students[0])}
2 : ${formatStudent(students[1])}
3: ${formatStudent(students[2])}
`);

const phrase =
  "Vous savez, moi je ne crois pas qu' un chat mange du chocolat par contre vous je ne sais pas";
const frequencies = {};
const words = phrase.toLowerCase().replace(",", "").split(" ");

for (let word of words) {
  if (word !== "") {
    if (frequencies[word]) {
      frequencies[word]++;
    } else {
      frequencies[word] = 1;
    }
  }
}

console.log(frequencies);
