/* 
  You are given an array of names.
*/

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

//1
const result=names.find(item=> item[0]="A" && item.length>7);
console.log(result)

//2
const result2=names.filter(item=> item[0]!= "A" );
console.log(result2)



/* EXPECTED OUTPUT */
// "Alexandra"
