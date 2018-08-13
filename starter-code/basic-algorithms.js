// Names and Input
console.log("I'm ready");


// Declare hacker1 who is the driver
var hacker1 = "Diane";
console.log("The driver's name is " + hacker1);

// Conditionals

// Input hacker2 who is the navigator
var hacker2 = prompt("what is the name of the navigator?");
console.log("The navigator's name is " + hacker2);


// Compare the length of hacker1 and hacker2
// The one with the longest is announced or a tie if they have the same length
if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

//Loops

function isPalindrome(str){
  var str = prompt("What is the expression you want to check as a palindrome or not ?")
  // Let's lowercase the string
  var string = str.toLowerCase();

  // Let's reverse the string
  var reversedStr = '';

  // Let's filter the string
  var filteredStr = '';

  for (var i = 0; i < string.length; i++){
    if (string[i] !== " " && string[i] !== "," && string[i] !== "!" && string[i] !== "?") {
      filteredStr = filteredStr + string[i];
    }
  }

  for (var i = filteredStr.length - 1; i >= 0; i--) {
  reversedStr = reversedStr + filteredStr[i];
  }

  // comparing filteredStr to reversedStr
  if (filteredStr === reversedStr){
    console.log('This is a Palindrome');
  } else {
    console.log('This is not a Palindrome !')
  }
}

// Calling the function
isPalindrome('');


// Lorem ipsum generator

function wordCounter(str){

  var strArray = str.split(" ")

  var len = 0

  for (var i = 0; i < strArray.length - 1; i++){
    // check if there is a 'et' somewhere in the text
      if (strArray[i] === "et"){ len += 1 }
  }
  return len
}

var lorem = "Nulla et porttitor eros in ante sagittis bibendum sed molestie purus. Donec elementum, quam ut euismod suscipit, turpis lorem pretium odio, nec maximus nunc odio eget nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc eu sodales diam, sit amet gravida justo. Morbi vitae metus quis nisi ornare rutrum. Aenean vel augue dignissim tortor malesuada scelerisque ut quis dolor. Vivamus posuere commodo egestas. Vestibulum efficitur molestie lorem, ut fringilla ipsum luctus at. Mauris commodo mauris sed iaculis dignissim. Vivamus hendrerit sapien ut tellus lacinia, et molestie ipsum semper. Vivamus tristique ante quis dictum finibus. Vivamus interdum metus magna, quis pellentesque tortor pellentesque id. Suspendisse tristique lorem orci, id efficitur nibh aliquam efficitur.\n Aliquam non convallis turpis. Ut hendrerit lorem sed elit suscipit aliquam. Maecenas tempus mauris at sodales aliquam. Cras metus erat, varius nec leo ut, molestie sollicitudin mi. Sed fringilla cursus magna, ut elementum sem finibus nec. Cras justo turpis, tristique ut ligula eget, imperdiet imperdiet leo. Donec dignissim rhoncus malesuada. Nullam porta turpis nisl, euismod aliquam dui mollis nec.\n Aenean hendrerit interdum consectetur. Nulla at libero auctor leo porta maximus. Morbi efficitur auctor nisl eget eleifend. Nullam ultrices efficitur nunc, vitae elementum ligula tristique et. Duis auctor elementum vestibulum. Fusce lobortis sapien sed dolor varius condimentum. Nullam dapibus diam ut ligula imperdiet scelerisque. Pellentesque cursus rutrum sem nec bibendum. Proin non tellus a lacus efficitur venenatis.";


wordCounter(lorem);