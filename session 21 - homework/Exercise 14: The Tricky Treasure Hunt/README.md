<h1>Story: An intrepid adventurer, Alex, is on a quest for a legendary hidden treasure. Finding it isn't just about having a clue, but having the right combination of clues. Let's help determine if Alex has enough to succeed!</h1>

Instructions:

* Declare Boolean Variables for Multiple Clues:

* hasTreasureMap: Does Alex possess an ancient treasure map? (e.g., true)
* foundAncientKey: Has Alex discovered an ancient key? (e.g., false)
* solvedRiddleScroll: Did Alex successfully solve a riddle from a cryptic scroll? (e.g., true)
* hasCompass: Does Alex have a reliable compass? (e.g., true)
* isFullMoon: Is it currently a full moon, as mentioned in legends? (e.g., false)
* Define the Condition for Finding the Treasure:
* To find the treasure, Alex needs to meet a combination of conditions. Here’s the tricky rule: Alex can find the treasure if they have both:
* The Treasure Map AND
* EITHER (The Ancient Key OR (Solved the Riddle Scroll AND Has a Compass))
* Let's break down this condition:

* Core Requirement: They must have the hasTreasureMap.
* Alternative Paths: To proceed beyond the map, they need at least one of these:
* foundAncientKey is enough by itself.
* If they don't have the key, they must have both solvedRiddleScroll and hasCompass.
* Use Logical Operators to Determine Success:
* Write a JavaScript expression using the boolean variables and logical operators (&&, ||, !) to represent the combined condition described in step 2.
* Store the result of this expression (which will be true or false) in a variable called canFindTreasure.
* Print the Outcome:
* Use an if/else statement based on the value of canFindTreasure to print a message to the console:
* If canFindTreasure is true, print: "Success! Alex can find the legendary treasure!"
* If canFindTreasure is false, print: "Alas, Alex is missing crucial clues and cannot find the treasure yet."
