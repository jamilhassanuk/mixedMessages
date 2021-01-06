const randomNum = () => {
    return Math.floor(Math.random() * 5);
};



const philosopherQuote = [
    {
        author: 'Soren Kierkegaard',
        quote: 'Life can only be understood backwards, but it must be lived forwards'
    },
    {
        author: 'Eleanor Roosevelt',
        quote: 'The future belongs to those who believe in the beauty of their dreams.'
    },
    {
        author: 'Albert Einstein',
        quote: 'I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.'
    },
    {
        author: 'Jonathan Safran Foer',
        quote: 'Why didnt I learn to treat everything like it was the last time. My greatest regret was how much I believed in the future.'
    },
    {
        author: 'Mahatma Gandhi',
        quote: 'The future depends on what you do today.'
    }
];


const technologyQuote = [
    {
        author: 'Arthur C. Clarke',
        quote: 'Any sufficiently advanced technology is equivalent to magic.'
    },
    {
        author: 'Mark Kennedy',
        quote: 'All of the biggest technological inventions created by man - the airplane, the automobile, the computer - says little about his intelligence, but speaks volumes about his laziness.'
    },
    {
        author: 'Thomas Edison',
        quote: 'Just because something doesn’t do what you planned it to do doesn’t mean it’s useless.'
    },
    {
        author: 'Alan Kay',
        quote: 'Technology is anything that wasn’t around when you were born.'
    },
    {
        author: 'Albert Einstein',
        quote: 'It has become appallingly obvious that our technology has exceeded our humanity.'
    },
];


const funQuote = [
    {
        author: 'Mitch Hedberg',
        quote: 'I’m sick of following my dreams, man. I’m just going to ask where they’re going and hook up with ’em later.'
    },
    {
        author: 'President Merkin Muffley',
        quote: 'Gentlemen, you can’t fight in here. This is the war room.'
    },
    {
        author: 'Rose (Betty White)',
        quote: 'My mother always used to say: The older you get, the better you get, unless youre a banana.'
    },
    {
        author: 'David Letterman',
        quote: 'Halloween is the beginning of the holiday shopping season. That’s for women. The beginning of the holiday shopping season for men is Christmas Eve.'
    },
    {
        author: 'Jack Handey',
        quote: 'Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.'
    },
]



const quoteGame = () => {
    //console.log(randomNum());
    quote1 = philosopherQuote[randomNum()];
    quote2 = technologyQuote[randomNum()];
    quote3 = funQuote[randomNum()];
    //console.log(quote1);
    console.log('Philosopher quote =====\n' + 'Author: ' + quote1.author + '\n' + 'Quote: ' + quote1.quote + '\n');
    console.log('Technology quote  =====\n' + 'Author: ' + quote2.author + '\n' + 'Quote: ' + quote2.quote + '\n');
    console.log('Fun quote         =====\n' + 'Author: ' + quote3.author + '\n' + 'Quote: ' + quote3.quote);
}

quoteGame();

console.log(randomNum());