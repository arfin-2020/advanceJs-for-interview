let bonus = 40; //it's global variable ata je kew je kono jaiga thake call korte parbe.

function add(first, second) {
    let result = first + second + bonus;
    if (result < 110) {
        const mood = "Gorte jabo";
        console.log(mood);
    }
    console.log(mood);
    return result;
}
const output = add(34, 35);
// console.log(output);
// console.log(bonus);