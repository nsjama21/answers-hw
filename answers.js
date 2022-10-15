console.log('\n\n===============================\n\n')

///////////////////////////////////////////////PART II: JAVASCRIPT REPS/////////////////////////////////////


// /////////////Easy Going///////////////
///////////////////////
// Write a for loop that will log the numbers 1 through 20.

// for (let i = 1; i <= 20; i++) {
//     console.log(i)
// }




console.log('\n\n===============================\n\n')

//Get Even/////////////////
////////////////////





// Write a for loop that will log only the even numbers in 0 through 200.

// Hint: Think about the increment expression.

// for (let i = 0; i <= 200; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

console.log('\n\n===============================\n\n')




// This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz")
//     } else if (i % 3 === 0) {
//         console.log("Fizz")
//     } else if (i % 5 === 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }

console.log('\n\n===============================\n\n')

// Wild Wild Life////////////////
//////////////////////////////////





// Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant", 5000, "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]

// // Plantee just had her birthday; change Plantee's array to reflect her being a year older.

// console.log(plantee[2] + 1)

// //Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

// wolfy[3] = "Gotham City"

// console.log(wolfy[3])

// // Give D'Art a second hometown by adding "Hawkins"

// dart.push("Hawkins")
// console.log(dart)



// // Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
// wolfy[0] = "Gameboy"
// console.log(wolfy)

console.log('\n\n===============================\n\n')


/////////////Yell at the Ninja Turtles////////////
///////////////////////////////////



// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result.
// As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own. You've got this!////////////////

// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelagnelo"]

// for (let turtle of ninjaTurtles) {
//     console.log(turtle.toUpperCase())
// }

console.log('\n\n===============================\n\n')



// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];


// // Console log: the index of Titanic

// console.log(favMovies[8])

// // Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):

// // Note: if you have to add to the array, feel free to add any movie you'd like

// // use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it?
// //Answer: it sorts the array in alphabetical order and yes, it alters it permanently

// favMovies.sort()
// console.log(favMovies)




// // Use the method pop

// favMovies.pop()
// console.log(favMovies)

// // push"Guardians of the Galaxy"

// favMovies.push("Guardians of The Galaxy")
// console.log(favMovies)
// // Reverse the array

// favMovies.reverse()
// console.log(favMovies)

// // Use the shiftmethod

// favMovies.shift()
// console.log(favMovies)

// // // unshift- what does it return?
// // // Answer: Unshift adds to the front of the array


// favMovies.unshift("Warrior")
// console.log(favMovies)


// // // splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
// // // Answer: yes, it permanently altered the array

// const indexOfDjangoUnchained = favMovies.indexOf("Django Unchained")
// console.log(indexOfDjangoUnchained)
// favMovies.splice(3, 1, "Avatar")
// console.log(favMovies)


// // slicethe last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
// // Answer: No, it dpes not permanentely alter the array

// console.log(favMovies.length)  // returns 19

// favMovies.slice([9])

// // store the value of your slicein a variable, console.log it - Thought question: what is going on here?
// // Answer: Slice takes a copy of the sliced array and returns it

// const sliceOfMovies = favMovies.slice([9])  // 9 is where it would start and without and end specified it will go to the end of the array automatically


// // console.log your final results

// console.log(sliceOfMovies)

// // After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
// // Answer --- you should get a -1 as index for a removed item from an array

// const fastMovieIndex = favMovies.indexOf("Fast and Furious")
// console.log(fastMovieIndex)

// // Thought question: that we declared the variable favMovieswith const, and yet, we were allowed to change the array. Weird? Should we have used let?
// // Answer: Arrays are not constants and we can change elements in them

console.log('\n\n===============================\n\n')

////////////////////////WHERE'S WALDO//////////////////////////////
/////////////////////////////////////////////////////////////////

// With the following multi-dimensional array

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
// ["Lucinda", "Jacc", "Neff", "Snoop"],
// ["Petunia", ["Baked Goods", "Waldo"]]];

// // Remove Eggbert (hint look at the slice/splice method(s))

// // const indexOfEggbert = whereIsWaldo.indexOf("Eggbert")
// // console.log(indexOfEggbert)
// // const eggbert = whereIsWaldo.slice([1]).splice([1])
// // console.log(eggbert)

// // // Change "Neff" to "No One"

// // whereIsWaldo[2][2] = "No One"
// // console.log(whereIsWaldo)

// // Access and console.log "Waldo"

// console.log(whereIsWaldo[3][1][1])



console.log('\n\n===============================\n\n')

