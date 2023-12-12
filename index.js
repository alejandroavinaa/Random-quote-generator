console.log("Hello this is the random Quote Generator");

let quote1 = "When you have a dream, you've got to grab it and never let go.";

let quote2 = "Nothing is impossible. The word itself says 'I'm possible!'";

let quote3 = "There is nothing impossible to they who will try.";

let quote4 = "The bad news is time flies. The good news is you're the pilot.";

let quote5 = "Life has got all those twists and turns. You've got to hold on tight and off you go.";

let quote6 = "Keep your face always toward the sunshine, and shadows will fall behind you.";

let fullQuotes = [quote1,quote2,quote3,quote4,quote5,quote6];

let randomQuoteGenerator = () => {

    let result = fullQuotes[Math.floor(Math.random()*6)]

    return result;

};

console.log(randomQuoteGenerator());
