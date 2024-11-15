var myQuote = document.getElementById('quoteHere');
var myQuote2 = document.getElementById('quoteHere2');

var checker = [];

function getQuote() {
    var quotes = ["Be yourself; everyone else is already taken.",
        "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        "So many books, so little time.",
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "A room without books is like a body without a soul.",
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        "You only live once, but if you do it right, once is enough.",
        "Be the change that you wish to see in the world.",
        "In three words I can sum up everything I've learned about life: it goes on.",
        "If you tell the truth, you don't have to remember anything.",
        "You must be the change you wish to see in the world.",
        "The only thing we have to fear is fear itself.",
        "Do one thing every day that scares you.",
        "Well done is better than well said.",
        "It is during our darkest moments that we must focus to see the light.",
        "The believer who mixes with people and endures their injury is better than the person who does not mix with people nor endure their injury.",
        "Let none of you be prevented by his youth from expressing his opinion, for knowledge is not contingent upon youth or old age, but Allah places it wherever He wills.",
        "Don't underestimate your ambitions, for I have seen nothing that hinders a man more than the downfall of his ambition.",
        "Whoever keeps a secret has the upper hand."];
    var quotesMaker = ["― Oscar Wilde",
        "― Marilyn Monroe",
        "― Frank Zappa",
        "― Albert Einstein",
        "― Marcus Tullius Cicero",
        "― Bernard M. Baruch",
        "― Dr. Seuss",
        "― Mae West",
        "― Mahatma Gandhi",
        "― Robert Frost",
        "― Mark Twain",
        "-Mahatma Gandhi",
        "-Franklin D. Roosevelt",
        "-Eleanor Roosevelt",
        "-Benjamin Franklin",
        "-Aristotle",
        "Prophet Mohamed",
        "― Omer Ebn EL-Khatab",
        "― Omer Ebn EL-Khatab",
        "― Omer Ebn EL-Khatab"];

    var num = Math.floor(Math.random() * quotes.length);
    if (num == checker[checker.length - 1]) {
        num++;
        if (num >= quotes.length) {
            num = num - 2;
        }
    }

    checker.push(num);
    myQuote.innerHTML = quotes[num];
    myQuote2.innerHTML = quotesMaker[num];
    console.log(num, quotes[num], quotesMaker[num]);
}
// ==============================End Of Assignment=============================
// =====================================For Design=============================
// =========================My code================================
// function DarkWhiteToggle() {   
//     const body = document.body;
//     const button = document.getElementById('button');
//     if (body.classList.contains('colortoggle')) {
//         body.classList.remove('colortoggle');
//         button.innerHTML = '<i class="fa-regular fa-sun"></i>';
//     } else {
//         body.classList.add('colortoggle');
//         button.innerHTML = '<i class="fa-solid fa-moon"></i>';
//     }
// }
// =============================== with help of AI================================
function DarkWhiteToggle() {
    const body = document.body;
    const button = document.getElementById('button');

    // Check if the user prefers dark mode
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Function to toggle the dark mode manually
    function toggleDarkMode() {
        if (body.classList.contains('colortoggle')) {
            body.classList.remove('colortoggle');
            button.innerHTML = '<i class="fa-regular fa-sun"></i>';
        } else {
            body.classList.add('colortoggle');
            button.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }

    // Check and apply the user's preference on page load
    if (prefersDarkScheme) {
        body.classList.add('colortoggle');
        button.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        body.classList.remove('colortoggle');
        button.innerHTML = '<i class="fa-regular fa-sun"></i>';
    }

    // Add event listener to the button to toggle dark mode manually
    button.addEventListener('click', toggleDarkMode);
}

// Call the function on page load
DarkWhiteToggle();
