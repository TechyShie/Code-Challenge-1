const readline = require("readline"); // Import module to read user input from the terminal

// Set up readline interface for terminal both for user input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to estimate transaction fee based on amount
function estimateTransactionFee(amountToSend) {
    const transactionCost = 0.015 * amountToSend; // 1.5% transaction fee
    const totalAmount = amountToSend + transactionCost;

    // Enforce minimum fee of KES 10
    if (transactionCost < 10) {
        return [
            `Sending KES ${amountToSend}:`,
            `Minimum Transaction Fee Applied: KES 10`,
            `Total amount to be debited: KES ${amountToSend + 10}`
        ];
    } 
    // Enforce maximum fee of KES 70
    else if (transactionCost > 70) {
        return [
            `Sending KES ${amountToSend}:`,
            `Maximum Transaction Fee Applied: KES 70`,
            `Total amount to be debited: KES ${amountToSend + 70}`
        ];
    }

    // If fee is within range, use calculated fee
    return [
        `Sending KES ${amountToSend}:`,
        `Calculated Transaction Fee: KES ${transactionCost.toFixed(2)}`,
        `Total amount to be debited: KES ${totalAmount.toFixed(2)}`
    ];
}

// Ask user to key in amount they want to send
rl.question('Unatuma Ngapi?: ', (input) => {
    const amountToSend = parseFloat(input); // Convert input to number

    if (isNaN(amountToSend)) { // Validate if input is a number 
        console.log("Tafadhali andika namba halali.");
        rl.close();
        return;
    }

    // Show fee estimate
    console.log(estimateTransactionFee(amountToSend).join('\n'));
    rl.close();
});






