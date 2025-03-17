<h1>Story: "Scoops & Smiles" ice cream shop wants to calculate their daily earnings for cones and sundaes. They also want to implement a simple volume discount to encourage larger purchases!</h1>

Instructions:

Define Prices for Ice Cream Items:

"Ice Cream Cone": $4.00
"Ice Cream Sundae": $8.00
Store Daily Sales Data:


Declare variables to store the number of each item sold today:
conesSoldToday = (e.g., 250)
sundaesSoldToday = (e.g., 120)
Implement a Volume Discount:


"Scoops & Smiles" offers a 5% discount on the entire daily earnings if the total earnings before discount are $1000 or more.
Calculate Total Earnings:


Calculate the earnings from cones sales (cone price * cones sold).
Calculate the earnings from sundaes sales (sundae price * sundaes sold).
Calculate the total daily earnings before any discount by adding cone earnings and sundae earnings.
Check for discount: Use an if statement to check if the total daily earnings (before discount) are greater than or equal to $1000.
Apply discount if applicable: If the condition is true, calculate the 5% discount amount and subtract it from the total earnings to get the final daily earnings. (Hint: A 5% discount means you keep 95% of the original price. You can multiply by 0.95).
If the discount does not apply, then the final daily earnings are the same as the total earnings before discount.
Log the Results:


Use template literals to display the following in the console:
Total earnings before discount.
The amount of discount applied (if any, otherwise log $0).
Final total daily earnings after discount (or with no discount applied).
A message indicating if a volume discount was applied (e.g., "Volume Discount Applied: Yes/No").
