const readline = require("readline");//Import the built-in readline module to allow user input from the terminal.

//Creates interface for reading input and displaying output in terminal.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//function to calculate the boda fare based on distance.
function calculateBodaFare(distanceInKm){
    const baseFare = 50;//base fare in ksh.
    const perKmRate = 20;//rate per km in ksh.

    //Total fare =base fare + (Rate per km * distance in km).
    return baseFare + (perKmRate * distanceInKm);

}

//Prompts user to input distance the want to travel in km.
rl.question("Unafika wapi Mkubwa? Kilometer ngapi?", (input) => {
    const distance = parseFloat(input);//converts input string to a number.

    //Checks if input is a valid number.
    if(isNaN(distance)){
        console.log("Tafadhali weka nambari sahihi ya kilometa.");
    }
    else{
        const baseFare = 50;
        const distanceFare = 20 * distance;//
        const totalFare = calculateBodaFare(distance);//Total cost using function.

    //Displas the fare breakdown to the user.
        console.log(`\nUko kwote? Io ni ${distance} km:`);
        console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
        console.log(`Mpaka Uko: KES ${distanceFare}`);
        console.log(`Total: KES ${totalFare}\n`);
        console.log("Panda Pikipiki!");
    }

    rl.close();//Closes the readline interface after processing.
});
    