
let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quote = [

    '"Do not compare yourself with anyone in this world.if you do so,you are insulting yourself. -Bill Gates"',

    '"Success is not final; failure is not fatal: It is the courage to continue that counts. -Winston S. Churchill"',

    '"Art is only the means to life, to the life more abundant. it is not in itself the life more abundant. it merely points the way, something which is overlooked not only by the public, but very often by the artist himself. in becoming an end it defeats itself. -Henry Miller"',

    '"No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader. -Robert Frost"',

    '"A writer who is a pro can take an almost any assignment, but if he or she does not much care about the subject, i try to dissuade the writer, as in that case the book can be jsut plain hard labor. -Sterling Lord"',

    '"Never ever forget that you enlisted in the ranks- you were not press ganged or drafted. Nobody owes you anything-Least of all respect for your work-until you have earned it with what you put on the page. -T.F Rigelhof"',

    '"Before I start a project, I always ask myself the following question. why is this book worth a year of my life? there needs to be something about the theme, the technique, or the research that makes the time spent on it worthwhile. -David Morrel"',

    '"Since I became a novelist I have discovered that I am biased.Either I think a new novel is worse than mine and I do not like it, or I suspect it is better tha my novels and I do not like it. -Umberto Eco"',

    '"I cannot blame modern technology for my predilection for distraction, not after all the hours I have spent watching lost balloons disappear into the clouds. I did it before the internet and I will do it after the apocalypse, assuming we still have helium and weak-gripped children. -Colson Whitehead"',

    '"Work like hell! i had 122 rejection slips before I sold a story. -F.Scott Fitzgerald"'

];


btn.addEventListener('click', function(){
    var randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuote;
})
