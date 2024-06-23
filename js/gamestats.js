 // Create a function to grab the form inputs and display them in the text box
 function submitForm(){
    // Prevent the form from actually submitting and refreshing the page
    event.preventDefault();
    // get our form inputs
    var userName = document.getElementById("txtUserName").value;
    var weapon = document.getElementById("txtWeapon").value;
    var health = document.getElementById("txtHealth").value;
    var coins = document.getElementById("txtCoins").value;

    // String to hold all the info 
    var output = "User Name: " + userName + "\n\n"; //  \n is the newline character
    output += "Weapon: " + weapon + "\n\n";
    output += "Health/Damage: " + health + "\n\n";
    output += "Total Coins: " + coins;

    // Add our formated strin to the text area
    document.getElementById("txtAOutput").value = output;

}