        //psudo code: [from the very start.]
        //The game of "Rock, Paper, Scissors":
        //function 1 (user's input)
        // V 1. Get an input from the user of (rock, paper or scissors)
        // V 2. Convert the user's input into lowerCase char
        //
        //function 2 (computer's choice)
        // V 4. Ganerate a equaly random choice between 3 options
        //function 3 (play)
        // V 5. get computer's and user's choices and compare them.
        // V 6. declare the winner
        //function 4 (score)
        //7. get a score from 5 rounds


        //Score counter 
        let userScore = 0;
        let botScore = 0;

        //function that getting an input from the user and checks that the input is a string.
        function playerSelection() {
            var playerInput = window.prompt("Enter your choise: ");
            if (!/^[a-zA-Z]+$/.test(playerInput) || !playerInput) {
                alert("Type: Rock, Paper or Scissors");
                playerSelection();
            } else {
                return playerInput;
            }
        }

        //function that convert user's input into low case chars 
        function convert_input_to_lowChar() {
            var playerChoice = playerSelection().toLowerCase();
            return playerChoice;
        }

        //function that receiving the converted user's input and making sure that the input is legit.
        function log_users_input() {
            var userChoice = convert_input_to_lowChar();
            if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
                return userChoice
            } else {
                alert("Type: Rock, Paper or Scissors");
                log_users_input();
            }

        }

        //function that checking who the winner is. 
        function check_winner() {

            var userChoice = log_users_input();
            var botChoice = computerPlay();

            if (userChoice === "paper" && botChoice === "rock" ||
                userChoice === "rock" && botChoice === "scissors" ||
                userChoice === "scissors" && botChoice === "paper") {
                console.log("You've Won!");
                return "User";
            } else if (userChoice === botChoice) {
                console.log("It's a tie!");
                return "Tie";
            } else {
                console.log("You've Lost");
                return "Bot";
            }
        }

        //function that randomly genarates computer choice
        function computerPlay() {
            var bot_choice = Math.random() * 3;
            if (bot_choice <= 1) {
                bot_choice = "rock";
            } else if (bot_choice <= 2) {
                bot_choice = "paper";
            } else {
                bot_choice = "scissors";
            }
            return bot_choice;
        }

        //The main function that keeping the score and running all the others
        function five_round_game() {
            while (userScore < 5 && botScore < 5) {
                var result = check_winner();
                if (result === "User") {
                    userScore ++;
                    console.log("user score is:", userScore, "bot score:", botScore)

                } else if (result === "Bot") {
                    botScore ++;
                    console.log("user score is:", userScore, "bot score:", botScore)

                } else if(result === "Tie") {
                    console.log("user score is:", userScore, "bot score:", botScore)
                }
            }
            return winner_declaretion();
        }

        //The function that declare the winner in the end
        function winner_declaretion() {
            if (userScore > botScore) {
                return "YOU WON THE GAME";
            } else {
                return "YOU LOST THE GAME";
            }
        }