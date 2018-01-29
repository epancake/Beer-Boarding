
exports.seed = function(knex, Promise) {
  return knex('questions').del()
    .then(function () {
      return knex('questions').insert([
        { id: 1, question_name: "Array plus array", question: "Get the sum of two arrays...actually the sum of all their elements. Each array includes only integer numbers. Output is a number too.", solution: "function arrayPlusArray(arr1, arr2) { /nreturn arr1.concat(arr2).reduce((acc, cur) => acc + cur);/n}", submitter: "Emily Pancake via codewars"},
        { id: 2, question_name: "Sum 3 integers", question: "Write a function that takes three arguments, sums all three and returns the result", solution: "function sumThreeNum (num1, num2, num3) {/nreturn num1 + num2 + num3/n}", submitter: "Emily Pancake via Galvanize whiteboard curriculum"},
        { id: 3, question_name: "Make a string uppercase", question: "Write a function that takes a string and returns the uppercase version of that string with an !", solution: "function uppercase (string) {/nconst upperString = string.toUpperCase(); /nreturn `${upperString}!`/n}", submitter: "Emily Pancake via Whiteboard curriculum"}
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE questions_id_seq RESTART WITH 4;");
    });
};
