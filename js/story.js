//Begin JS code

document.write("<h1>Hello!</h1>");

document.write("<p>Let's do a mad lib!</p>");

var user = prompt("Please enter your name.");

var noun1 = prompt("Enter a noun:");
var adjective = prompt("Enter an adjective:");
var adverb = prompt("Enter an adverb \(descriptive word that ends in -ly\)");
var noun2 = prompt("Enter another noun:");

var madLib = "If you want to be the " + noun1 + " of your " + adjective + " party, " + adverb + " grab an inner tube shaped like a\/an " + noun2 + "!";

//Print to web page
document.write("<p class=\"madlib\">" + madLib + "</p>");

document.write("<p>Thanks for playing, " + user + "!</p>");

//End JS code