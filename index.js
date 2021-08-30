const chalk = require('chalk');
var readlineSync = require("readline-sync");

let username = readlineSync.question("What is your name!!?");
console.log("Hello"+" "+ chalk.green(username)+" "+"ji");

console.log("LETS play the quiz about Avenger!!");
var score =0;
var question = [
  {
  question:`Who is the richest avenger??
  a.IronMan
  b.Hulk
  c.Thanos
  d.Groot`,
  answer:"a"
},
{
  question:`Brother of Thor is??
  a.IronMan
  b.Hulk
  c.Loki
  d.Rabbit`,
  answer:"c"
},
{
  question:`Which avenger died while taking soulstone ??
  a.IronMan
  b.BlackWidow
  c.Ironlady
  d.Gamora`,
  answer:"b"
},
{
  question:`With whom the time-stone was??
  a.Doctor Strange
  b.Captain America
  c.Thanos
  d.Rabbit`,
  answer:"a"
},
{
  question:`Which famous avenger died in the EndGame??
  a.IronLady
  b.Hulk
  c.Thanos
  d.IronMan`,
  answer:"d"
}
];

var highscore = [{
  name:"ritesh",
  score:9
},
{
  name:"prats",
  score:5
}]

function answer(question,answer)
{
  console.log();
  let username = readlineSync.question(question,"\n");
  console.log("You answered:",username)

  if (username.toLowerCase() == answer.toLowerCase())
  {
    score = score+2;
    console.log("----------\n");
    console.log(chalk.cyan("Correct Answer"));
    console.log(chalk.bgYellow("Score:",score));
  }
  else{
    score = score-1
    console.log("----------\n");
    console.log(chalk.red("Wrong Answer"));
    console.log(chalk.bgRed("Score:-",score));
  }
  console.log("--------");
  console.log(chalk.blue("FinalScore:",score));

  if (score == 10){
    console.log("Yieepe you have answered all the answer correctly");
  }
}


function play(){
  for(var i =0; i<question.length;i++)
  {
    answer(question[i].question,question[i].answer);
  }
}
play()

for(var i = 0 ; i< highscore.length;i++){
  console.log("checkout the HighestScore-->");
  console.log(chalk.cyan("Name:",highscore[i].name));
  console.log(chalk.cyan("score:",highscore[i].score));
  tscore = score;
  if (tscore > highscore[i].score)
  {
    console.log("As you have beaten the highscore of", chalk.yellow(highscore[i].name),"!!Hey!! send me the screenshot and i will update it the highscore");
  }
  else
  {
    console.log("SAD !! You Couldn't beat",chalk.yellow(highscore[i].name),"  Highscore");
  }
}

