// BUBBLE SORT

// Start at first element and compare to the one next to it
// If the left is bigger, they are out of order, switch
// Go to the next one and repeat
// Do the entire list n times and the the list MUST be sorted

var unsorted = [5,2,6,3,1,4];

// first time through
– check [0] and [1] ... 5 > 2? YES. Switch.
2,5,6,3,1,4
– Check [1] and [2] ... 5 > 6? No.
– Check [2] and [3] ... 6 > 3? Yes. Switch.
2,5,3,6,1,4
– Check [3] and [4] ... 6 > 1? Yes. Switch.
2,5,3,1,6,4
– Check [4] and [5] ... 6 > 4? Yes. Switch.
2,5,3,1,4,6

// second time through
// Keeps going, repeating above until all numbers are sorted

// If n is list length, the biggest number is at the end after 1 time.
// If n is list length, the 2 biggest numbers are at the end after 2 times.
// Run a loop that goes through the whole array and checks each one.
// We only actually have to loop through the whole array minus the number of times already

// 1st iteration = loop whole array
// 2nd iteration = loop whole array - 1
// 3rd iteration = loop whole array - 2
// 4th iteration = loop whole array - 3

// Consider the cases...
// List is in reverse: Go through n elements n times
// List is in order: Still have to go through elements n times

// To optimize ("modified bubble sort"):
// Set up a bool to false that checks if any switch was made. If switch was made, change to true
// At the end of the loop, if the bool is still false (no switches were made), then list is in order, STOP.
// Saved you time

// Now the cases are different...
// List is in reverse: Go through n elements n times
// List is in order: Loop once, bool is still false, stop