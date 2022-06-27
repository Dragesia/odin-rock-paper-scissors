const rules = ["rock", "scissors", "paper"];

        function computerPlay() {
            const rnd = Math.floor(Math.random() * rules.length);
            return rules[rnd];
        }

        function playRound(playerSelection, computerSelection) {

            if(playerSelection == computerSelection) {
                return "Tie!";
            }
            else if (playerSelection == "rock") {
                if (computerSelection == "scissors") {
                    return "You win! Rock beats scissors.";
                }
                return "You lose! Paper beats rock.";
            }
            else if (playerSelection == "scissors") {
                if (computerSelection == "rock") {
                    return "You lose! Rock beats scissors.";
                }
                return "You win! Scissors beats paper.";  
            }
            else if (playerSelection == "paper") {
                if (computerSelection == "rock") {
                    return "You win! Paper beats rock.";
                }
                return "You lose! Scissors beats paper.";
            }
        }

        function game() {
            let userScore = 0;
            let pcScore = 0;

            
            let userPlay = prompt("Rock, paper or scissors?").toLowerCase();
            let result = playRound(userPlay, computerPlay());
            console.log(`Round ${i+1}: `, result);
            if (result.slice(4,7) == "win") {
                userScore++;
            }
            else if (result.slice(4,8) == "lose"){
                pcScore++;
            }


            if(pcScore == userScore) {
                console.log(`Tie! You: ${userScore} - PC: ${pcScore}`);
            }
            else if (pcScore > userScore) {
                console.log(`You win! You: ${userScore} - PC: ${pcScore}`);
            }
            else {
                console.log(`You lose! You: ${userScore} - PC: ${pcScore}`);
            }
        }

        game();