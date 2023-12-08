var min=(prompt('Enter the minimum number:'));
var max=(prompt('Enter the maximum number:'));
var current=(prompt('Enter the current number:'));

if (min>max) {
    console.log("Error: The minimum value cannot be greater than the maximum value. Please try again.");
}
else {
    if (current>=min && current <= max) {
        console.log('The current number is between the minimum and maximum values.')
    }
 else {
    console.log("The current number is not between the minimum and maximum values.");
}}

