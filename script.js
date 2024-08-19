
let quotes=[

           'You are like Monday Mornings, nobody likes you',
           'if laughter is the best medicine. your face must be curing the world.',
           'I guess you prove that even god makes mistakes sometimes.',
           'I’m not saying I hate you, what I’m saying is that you are literally the Monday of my life',
           'I am busy right now, can I ignore you some other time?',
           'It’s okay if you don’t like me. Not everyone has good taste.',
           'I’m sorry while you were talking I was trying to figure out where the hell you got the idea I cared.',
           'You don’t have to repeat yourself. I was ignoring you the first time.',
           'I’m sorry I hurt your feelings when I called you stupid. I really thought you already knew',
           'You’re one in a million… and I wish there were fewer.',
           'You’re like a star… distant, and sometimes I forget you exist.',
           'Thanks for always being there.... to steal my peri peri fries.',
           'You’re living proof that I can tolerate anyone..',
           'You are proof that evolution can go in reverse',
           'When I’m with you guys, I realize why I should win the ‘Patience’ award.',
           'You all are like WhatsApp forwards in my life, something I want to delete without even looking',
           'You’re exactly like the marks kids get these days… ‘Less than expected.',
           'You are the Maggi of my life, always messing up my head in just 2 minutes.',
           'You’re like that annoying ad on YouTube… always showing up when I’m about to enjoy something',
           'You’re like the ‘free advice’ everyone gives… never asked for, but always given.',
           'Life was peaceful before you all showed up, but I guess every story needs its villains.',
           'Our bond is like Wi-Fi—when it’s good, it’s great, but when it’s bad, I want to throw something.',
           'Our bond is like a power cut—dark, annoying, and somehow always at the wrong time.',
           'You bring out the best in me… and by that, I mean my talent for tolerating nonsense.',
           'Like paneer in a veg dish, you think you’re special, but we all know you’re just filler.',
           'We’re like a bad movie—lots of hype, but ultimately just a waste of time.',
           'You’re the ‘stuck in traffic’ of my life—slowing me down and making me question my choices.',
           'You’d be in good shape… if you ran as much as your mouth.',
           'My silence doesn’t mean I agree with you. It’s just that your level of ignorance has rendered me speechless'

];


// let btn=document.querySelector('.btn');
// btn.addEventListener('click', displayQuote);

function displayQuote(){
    //create an index of a random number 
    //convert it into between 0 to length of quotes[]
    let index=Math.floor(Math.random()*quotes.length);
   
    //display the quote of that index
    let div=document.querySelector('#quote');
    let quote=`<div class="card">
    <img src="icons/favicon.png">
    <p>${quotes[index]}</p>
    <img src="icons/favicon.png">
   </div>

    `;
    div.innerHTML=quote;
    
}

