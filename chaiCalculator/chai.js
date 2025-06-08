// Import the readline module to take user input from the terminal
const readline = require("readline");

// Create a readline interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ✅ Define the function here
function calculateChaiIngredients(cups) {
  return {
    water: cups * 150,        // 150ml of water per cup
    sugar: cups * 1,          // 1 teaspoon of sugar per cup
    milk: cups * 50           // 50ml of milk per cup
  };
}

// Ask user how many cups of chai they want to make
rl.question("Karibu! How many cups of Chai Bora would you like to make? ", (input) => {
  const cups = parseInt(input);

  if (isNaN(cups) || cups <= 0) {
    console.log("Please enter a valid positive number of cups.");
  } else {
    const ingredients = calculateChaiIngredients(cups);
    console.log(`\nTo make ${cups} cup(s) of Chai Bora, you will need:`);
    console.log(`- ${ingredients.water} ml water`);
    console.log(`- ${ingredients.sugar} teaspoon(s) of sugar`);
    console.log(`- ${ingredients.milk} ml milk\nEnjoy your Chai Bora! 🍵`);
  }

  rl.close(); // Always close the readline interface
});
