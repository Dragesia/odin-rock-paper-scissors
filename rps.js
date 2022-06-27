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

        let userScore = 0;
        let pcScore = 0;

        const playerSb = document.querySelector("#player");
        const pcSb = document.querySelector("#computer");

        const resetScore = document.querySelector("#reset");
        resetScore.addEventListener("click", () => {
            userScore = 0;
            pcScore = 0;
            playerSb.innerHTML = userScore;
            pcSb.innerHTML = pcScore;
        })

        const changeScore = document.querySelector("#playing");
        changeScore.addEventListener("click", () => {
            playerSb.innerHTML = userScore;
            pcSb.innerHTML = pcScore;
        })

        const rock = document.querySelector("#rock");
        rock.addEventListener("click", () => {
            let result = playRound("rock", computerPlay());
            if (result.slice(4,7) == "win") {
                userScore++;
                rock.classList.add("won");
                rock.addEventListener("transitionend", () => {
                    rock.classList.remove("won");
                });
            }
            else if (result.slice(4,8) == "lose"){
                pcScore++;
                rock.classList.add("lost");
                rock.addEventListener("transitionend", () => {
                    rock.classList.remove("lost");
                });
            }
            else {
                rock.classList.add("tie");
                rock.addEventListener("transitionend", () => {
                    rock.classList.remove("tie");
                });
            }
        });

        const paper = document.querySelector("#paper");
        paper.addEventListener("click", () => {
            let result = playRound("paper", computerPlay());
            if (result.slice(4,7) == "win") {
                userScore++;
                paper.classList.add("won");
                paper.addEventListener("transitionend", () => {
                    paper.classList.remove("won");
                });
            }
            else if (result.slice(4,8) == "lose"){
                pcScore++;
                paper.classList.add("lost");
                paper.addEventListener("transitionend", () => {
                    paper.classList.remove("lost");
                });
            }
            else {
                paper.classList.add("tie");
                paper.addEventListener("transitionend", () => {
                    paper.classList.remove("tie");
                });
            }
        });

        const scissors = document.querySelector("#scissors");
        scissors.addEventListener("click", () => {
            let result = playRound("scissors", computerPlay());
            if (result.slice(4,7) == "win") {
                userScore++;
                scissors.classList.add("won");
                scissors.addEventListener("transitionend", () => {
                    scissors.classList.remove("won");
                });
            }
            else if (result.slice(4,8) == "lose"){
                pcScore++;
                scissors.classList.add("lost");
                scissors.addEventListener("transitionend", () => {
                    scissors.classList.remove("lost");
                });
            }
            else {
                scissors.classList.add("tie");
                scissors.addEventListener("transitionend", () => {
                    scissors.classList.remove("tie");
                });
            }
        });


       

        

        


        