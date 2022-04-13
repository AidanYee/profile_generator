const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name?", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
       rl.question("Which meal is your favourite?", (meal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (favFood) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superPower) => {
              console.log(`${name} likes ${activity} and listens to ${music} while ${activity}. ${name} favourite meal is ${meal} but more importantly ${name}\'s favourite food is ${favFood}. ${name}  spends alot of time playing ${sport}.....but did you know ${name} has been hiding their ${superPower} abilities.`);
                rl.close()
             });
           });
        });
      });
    });
  });
});

