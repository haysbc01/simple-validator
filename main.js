var userNumber = prompt("What is your phone number?\nMust be (xxx-xxx-xxxx)");
console.log(userNumber.length === 12 && userNumber.charAt (3) === '-' && userNumber.charAt(7) === '-' && isNaN(userNumber.charAt(0,2)) != true && isNaN(userNumber.charAt(4,6)) != true && isNaN(userNumber.charAt(8,11)) != true);

var userBirth = prompt("What is your date of birth?\nMust be (xx/xx/xx)");
console.log(userBirth.charAt (2) === '/' && userBirth.charAt(5) === '/' && isNaN(userBirth.charAt(0,1)) != true && isNaN(userBirth.charAt(3,4)) != true && isNaN(userBirth.charAt(6,7)) != true);

var userPostal = prompt("What is your Postal Code?\nMust be (xxxxx or xxxxx-xxxx)");
console.log((userPostal.length === 5 && isNaN(userPostal) != true) || (userPostal.length === 10 && userPostal.charAt(5) === '-' && isNaN(userPostal.charAt(0,4)) != true && isNaN(userPostal.charAt(6,9)) != true));

var userState = prompt("What is your States abbreviation?\nMust be abbreviated and capitalized");
console.log(userState.length === 2 && /[A-Z]/.test(userState[0,1]));

var userMarried = prompt("Are you married? (yes or no)");
console.log(userMarried === 'yes' || userMarried === 'Yes' || userMarried === 'YES' ||userMarried === 'no' || userMarried === 'No' ||userMarried === 'NO');
