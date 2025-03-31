/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasSword = true;
const hasMedicine = false;
const hasCompass = false;


console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village' or go back 'home'?\n");

if (choice === "home") {
  console.log("You go back in the house and curl up on the couch with a good book.");
}
  else if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  const secondChoice = readline.question("You see a 'lake' and a 'cabin', which do you choose to investigate?\n");

  if (secondChoice === "lake") {
    console.log("You approach the lake and find a small wooden boat.");
  }
    else if (secondChoice === "cabin") {
    console.log("You enter the cabin and the door slams shut behind you.");
  }
    else {
    console.log("You decide to explore later and lay down to take a nap.");
  }
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/