

// object destructuring

const person = {
  name: "abrar",
  age: 50,
  lastName: "hussain"
};

let {name, age, lastName}= person;

document.write(name+"<br >");
document.write(age+"<br >");
document.write(lastName+"<br>");


// array destructuring

let salery = ["25000", "2000", "10000"];
let [high, low, average] = salery;
document.write(low+ "<br>");
document.write(high+"<br>" );
document.write(average+"<br>");

// another example of array destructure by using ...rest

let number = [10, 20, 30, 40, 50, 60, 70];
let [a, b, ...c] = number;
document.write(a+"<br>");
document.write(b+"<br>");
document.write(c);