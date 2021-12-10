window.alert("Welcome to Robot Gladiators!");

var playerName = window.prompt("What is your robot's name?");
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyNames) {
  
  if (promptFight === "fight" || promptFight === "FIGHT") {

    enemyHealth = enemyHealth - playerAttack;

    console.log(playerName + enemyNames + " attacked " + playerName + ". " + enemyNames + " now has " + enemyHealth + " health remaining.");

    playerHealth = playerHealth - enemyAttack;

    console.log( enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        if (playerHealth <= 0) {

            window.alert(playerName + " has died!");

        } 

        else {

            window.alert(playerName + " still has" + playerHealth + " health left");

        }

        if (enemyHealth <= 0) {

            window.alert( enemyNames + " has died!");

        } 
        else {

            window.alert( enemyNames + " still has " + enemyHealth + " health left.");
        }

        }   else if (promptFight === "skip" || promptFight === "SKIP") {

                var confirmSkip = window.confirm("Are you sure you'd like to quit?");

                if (confirmSkip) {

                    window.alert(playerName + " has decided to run! Coward!");

                    playerMoney = playerMoney - 2;

                } else {

                    fight(enemyNames);

                } 
                
            } else {

                    window.alert("You need to choose a valid option. Try again!");
                    
                };

};

var startGame = function() {

    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyName = enemyNames[i];

            enemyHealth = 50;

            fight(pickedEnemyName);
        }
        else { 
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    endGame();
};

var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
      } 
      else {
        window.alert("You've lost your robot in battle.");
      }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
    
        startGame();

    } 

    else {

    window.alert("Thank you for playing Robot Gladiators! Come back soon!");

    }
};

startGame();

