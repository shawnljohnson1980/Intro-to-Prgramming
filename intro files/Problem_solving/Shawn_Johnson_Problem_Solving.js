// one strategy I think I would use to solve this problem would be. Having the program 
//search for and identify the charactaristics that define the problem at hand. 
//IE what depicts if a written item is 1st or 3rd person. google those attributes from a
//literary standpoint. What specific "keywords" or "key phrases" am I looking for? 
//next! how do I define what I am looking for in Javascript? baby steps!
//What would be the most ideal way to put this information together,
//without being lost in a sea of information? For me that is going to depend on,
//the number of factors that I find that make the differences compared to similarities that I may 
//have to be little more specific on. With larger chunks of information to display, search for, or keep in one place 
//I think I'm most likely to put my variables into and array and have funcitons sort out the 
//information for me. based on the total number of varibles that depict each writing style
//separate them using names for the arrays I have. From there I would being to separate
//the information I have in to another set of variables that add up the number of charcteristics
//that define each of the writing styles. to make a final determination. 
//
//The first thing to know????
//What are the most common attributes of fist person writings? "I","we","us" perspective. 
//For third person?? "He""She""it""they", perspective. Also the use of pronous may differ. 
//but I think the keywords would be the best course of action. Why? Becuase in everyday life
//telling a story includes pronouns. Also there are so many Prounouns in the world I 
// I would need a dictionary and a thesaurus to log them all. 
// defines charactaristics of each done!
// step two who to separate them? 
//Arrays are my friend here. Functions? firstPerson/thirdPrson! 
// What else do I need? I need a way for my program to measure the goal? if(array.firstPerson =>)
//array.thridPerson; Story title needs a factor? var story= "".  have a separate container 
//for the actual text of the story to be placed in! HTML text area with a submit button. 
// document.document.querySelector. id='literature". if and else statements to determine which factor is 
// is most likely. if array.firstPerson the console.log ("First Person")else console.log 
//("Third Person")





// var title //= document.document.querySelector("title")
// var literature //= document.document.querySelector("#literature")
// var input //= document.document.querySelector("input")
// var myvar
// function read()
//onclick(read)
// arr1.tp = [I, we, us, our, ourselves, my, mine, ours, myself];
// arr2.tp = [he, him, her, his, hers, they, them, it, thiers];
// keywords = [tp], [fp];

//var source = InputEvent.document.querySelector("input")
const { getQueriesForElement, getAllByDisplayValue, getByTitle, } = require("@testing-library/react");
function includes(array, array2, array3 = + text) {
    text = ""
    var text = (document.querySelector)("#text").id
    document.querySelector = ("#text").toLowerCase.TextEvent;
    title = document.querySelector("#title").id;
    var title = (document.querySelector)("#title")
    array = []
    array2 = []
    array3 = []
    includes = array, array2, array3;
}
onclick(document.querySelector)("#input").id; {
    TextEvent = (document.querySelector("#text").contains)
        (Element = TextEvent)
}

var array = ["I", "we", "us", "our", "ourselves", "my", "mine", "ours", "myself"];
var array2 = ["you", "your", "yours", "yourself", "yourselves"]
var array3 = ["he", " him", "her", "his", "hers", "they", "them", "it", "thiers"];
// var tex

if (array.includes, Element, getAllByDisplayValue) {

}
if (array2.includes, Element, getAllByDisplayValue) {

}
if (array3.includes, Element, getAllByDisplayValue) {

}
if (array < array2, array3) {
    console.log("Text is First person" + "#title");
    document.document.querySelector("return").innerText = "Text is First Person";
    document.querySelector("#return").style.display = "block";
}
else if (array2 < array, array3) {
    console.log("text is second person" + "title");
    document.document.querySelector("#return").innerText = "Text is Second Person";
    document.querySelector("#return").style.display = "block";
}
else {
    console.log("Text is Third Person" + "#title");
    document.querySelector("#return").innerText = "Text is Thrid person";
    document.querySelector("#return").style.display = "block";
}

