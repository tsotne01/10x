<h1>Story: A race car driver is on the track, starting slow and then speeding up. We need to check if they exceed the speed limit after speeding up.</h1>

Instructions:

* Declare a variable for the speed limit:
* speedLimit - set it to a number like 50 (representing 50 mph, km/h, etc.).
Declare a variable for the car's initial speed:
* carSpeed - set it to a number lower than the speed limit, like 30.
Increase the car's speed:
* Use the += operator to increase carSpeed by a set amount, for example, increase it by 25. (e.g., carSpeed += 25;)
Check if the car's speed exceeds the speed limit:
* Use an if statement to compare carSpeed with speedLimit. Check if carSpeed is greater than speedLimit.
* Print a warning or an "okay" message:
* If the carSpeed is greater than speedLimit, print a simple warning message to the console like: "Speed Warning: You are going too fast!".
* Else (if the speed is not over the limit), print a message like: "Speed is okay."
* Always print the current car speed:
* After checking the speed limit, print the final carSpeed to the console, so we can see the car's speed. Label it clearly, like: "Current Speed: [speed value]". Use a template literal to include the carSpeed value in the message.
