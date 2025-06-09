# Code-Challenge-1

## Chai Ingredients Calculator Project☕☕

This mini project focuses on calculating the amount of ingredients needed to prepare a specific number of cups of Swahili-style tea.

#### Default Recipe for 1 Cup:
* Water: 200 ml  
* Milk: 50 ml  
* Tea Leaves (Majani): 1 tablespoon  
* Sugar (Sukari): 2 teaspoons (optional, but included)

#### What I did:
I implemented a JavaScript function called `getChaiIngredients` that:
1. **Prompts the user** for how many cups of tea they want.
2. Accepts `numberOfCups` as a parameter.
3. **Computes** the required amount of each ingredient.
4. **Logs** the final quantities in a readable format on the console.

#### Example Output:
* **User prompt:** `Habari! How many cups of Swahili Tea would you like today?`
* **User input:** `5`
* **Console Output:**  
  > To prepare 5 cups of Swahili Tea, you'll need:  
  > Water: 1000 ml  
  > Milk: 250 ml  
  > Tea Leaves: 5 tablespoons  
  > Sugar: 10 teaspoons  
  >  
  > Kunywa kwa raha!

---

# Code-Challenge-2

## Boda Fare Calculator🏍️🏍️

This task is about building a fare estimator for a boda boda ride depending on travel distance.

#### Pricing Policy:
* **Starting Fare:** KES 50  
* **Rate per Kilometer:** KES 15

#### What I did:
I created a JavaScript function named `getBodaFareEstimate` that:
1. **Prompts the user** to enter their travel distance in kilometers.
2. Uses `distanceInKm` as the input argument.
3. **Computes** the total fare using the equation:  
   `fare = 50 + (15 × distanceInKm)`
4. **Displays** a well-formatted fare breakdown in the console.

#### Example Output:
* **User prompt:** `Ni umbali gani kwa safari yako leo (in KM)?:`
* **User input:** `10`
* **Console Output:**  
  > Safari ya 10 KM:  
  > Base Fare: KES 50  
  > Distance Fare: KES 150  
  > Total Fare: KES 200  
  >  
  > Endesha kwa usalama!

---

# Code-Challenge-3

## Mobile Transfer Fee Checker📲📲

This challenge is about creating a fee estimator for mobile money transfers, using a capped percentage-based model.

#### Fee Rules:
* Fee = 1.5% of amount sent  
* **Minimum Fee:** KES 10  
* **Maximum Fee:** KES 70

#### What I did:
I built a JavaScript function named `calculateMobileFee` that:
1. **Prompts the user** to enter the amount they wish to send.
2. Accepts `amount` as a parameter.
3. **Applies** the 1.5% rule, respecting the fee limits.
4. Computes and displays the total deduction (amount + fee).

#### Example Scenarios:

---

**Scenario 1: Minimum Fee Used**  
* **Prompt:** `Ingiza kiasi cha kutuma (KES):`  
* **Input:** `400`  
* **Console Output:**  
  > Amount: KES 400  
  > Fee: KES 10  
  > Total Deducted: KES 410  
  >  
  > Salama na rahisi!

---

**Scenario 2: Regular Fee**  
* **Input:** `3500`  
* **Console Output:**  
  > Amount: KES 3500  
  > Fee: KES 52.5  
  > Total Deducted: KES 3552.5  
  >  
  > Safe Transfers Always!

---

**Scenario 3: Maximum Fee Used**  
* **Input:** `9000`  
* **Console Output:**  
  > Amount: KES 9000  
  > Fee: KES 70  
  > Total Deducted: KES 9070  
  >  
  > Thanks for using Mobile Transfer Checker!

