const inquirer = require('inquirer')

const choices = ['r', 'p', 's']

let wins = 0,
    ties = 0,
    losses = 0,
    rounds = 0

const round = () => {
    inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: `Please choose 'r'. 'p', or 's'`,
        choice
    })
    .then(res => {
        console.log(res.choice)
        const compChouce = choice[Math.floor(Math.random() * choice.length)]

        if (res.choice === compChoice) {

        } else if ((res.choice === 'r' && compChoice === 's') ||
            (res.choice === 'p' && compChoice === 'r') ||
            (res.choice === 's' && compChoice === 'p')) {
                wins++
                console.log('you won')
            } else {
                losses++
                console.log('You lost!')
            }

            if (rounds < 5) {
                round()
            } else { 
                console.log(`
                results
                _______`
                
                )
            }

    })
    .catch(err => console.log(err))
}

round()