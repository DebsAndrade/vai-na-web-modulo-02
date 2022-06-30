//Create 3 variables, each with an array: - Comedy -Action -Fantasy

//Within each array, insert 3 (THREE) Objects, containing: -title: -director: -year:

//Choose a variable and enter a condition for it, (condition of your choice), with the following message to the console: IF: "MY FAVORIT MOVIE IS..." "ELSE: "NOT EVEN 5 STARS..."

let comedy = [
    {
        title: "Jumanji: Welcome to the Jungle",
        director: "Jake Kasdan",
        year: "2017"
    },
    {
        title: "Deadpool",
        director: "Tim Miller",
        year: "2016"
    },
    {
        title: "The Kissing Booth",
        director: "Vince Marcello",
        year: "2018"
    }
]

let action = [
    {
        title: "Uncharted",
        director: "Ruben Fleischer",
        year: "2022"
    },
    {
        title: "Spider-Man: No Way Home",
        director: "Jon Watts",
        year: "2021"
    },
    {
        title: "Mission: Impossible - Fallout",
        director: "Christopher McQuarrie",
        year: "2018"
    }
]

let fantasy = [
    {
        title: "The Hobbit: An Unexpected Journey",
        director: "Peter Jackson",
        year: "2012"
    },
    {
        title: "Charlie and the Chocolate Factory",
        director: "Tim Burton",
        year: "2005"
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        director: "Peter Jackson",
        year: "2001"
    }
]

const favoriteMovie = "Spider-Man: No Way Home"
const categories = [comedy, action, fantasy]

loop1:
for(let i = 0; i < categories.length; i++) {
    const category = categories[i]
    for(let j = 0; j < category.length; j++) {
        const movie = category[j]
        if(movie.title == favoriteMovie) {
            console.log(`My favorite movie is ${movie.title}.`)
            break loop1
        } else {
            console.log(`${movie.title} is not my favorite movie.`)
        }
    }
}
