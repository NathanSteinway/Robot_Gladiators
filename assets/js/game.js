window.alert("Welcome to Robot Gladiators!");

var playerName = window.prompt("What is your robot's name?");
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 20;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyNames) {
  
  if (promptFight === "fight" || promptFight === "FIGHT") {

    var damage = randomNumber(playerAttack - 3, playerAttack);

    enemyHealth = Math.max(0, enemyHealth - damage);

    console.log(playerName + enemyNames + " attacked " + playerName + ". " + enemyNames + " now has " + enemyHealth + " health remaining.");

    var damage = randomNumber(enemyAttack - 3, enemyAttack);

    playerHealth = Math.max(0, playerHealth - damage);

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

                    playerMoney = Math.max(0, playerMoney - 10);

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
    playerMoney = 20;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyName = enemyNames[i];

            enemyHealth = randomNumber();

            fight(pickedEnemyName);

                if (playerHealth > 0 && i < enemyNames.length - 1) {
                    var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                }

                if (storeConfirm) {

                    shop();

                }
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

var shop = function() {

    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
      );


      switch (shopOptionPrompt) {
        case "REFILL": // new case
        case "refill":
          if (playerMoney >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
      
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
          }
          else {
            window.alert("You don't have enough money!");
          }
      
          break;
        case "UPGRADE": // new case
        case "upgrade":
          if (playerMoney >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
      
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
          }
          else {
            window.alert("You don't have enough money!");
          }
      
          break;
        case "LEAVE": // new case
        case "leave":
          window.alert("Leaving the store.");
          break;
        default:
          window.alert("You did not pick a valid option. Try again.");
          shop();
          break;
      }
};

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
  };

startGame();
