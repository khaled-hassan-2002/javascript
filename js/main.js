var quotes = [
    {
        quote: '“Be yourself; everyone else is already taken.”',
        name: '― Oscar Wilde'
    },
    {
        quote: '“So many books, so little time.”',
        name: '― Frank Zappa'
    },
    {
        quote: '“A room without books is like a body without a soul.”',
        name: '― Marcus Tullius Cicero'
    },
    {
        quote: '“You know you are in love when you cant fall asleep because reality is finally better than your dreams.”',
        name: '― Dr. Seuss'
    },
    {
        quote: '“You only live once, but if you do it right, once is enough.”',
        name: '― Mae West'
    },
    {
        quote: '“If you tell the truth, you dont have to remember anything.”',
        name: '― Mark Twain'
    },
    {
        quote: '“A friend is someone who knows all about you and still loves you.”',
        name: '― Elbert Hubbard'
    }
]
var prvindex = -1;
function newQuote() {
    var lng = quotes.length;
    var randomNum = Math.floor(Math.random() * lng);
    while (randomNum === prvindex) {
        randomNum = Math.floor(Math.random() * lng);
    }
    prvindex = randomNum;
    console.log(prvindex)
    var quote = `
    <h3
        class="mb-4 text">"${quotes[randomNum].quote}"</h3>
        <span class="h4">${quotes[randomNum].name}</span>
    `
    document.getElementById('quote').innerHTML = quote
}