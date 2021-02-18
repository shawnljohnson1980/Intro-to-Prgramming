
function doThis() {
    // Set Height and Age 
    var height = document.querySelector("#height").value;
    var age = document.querySelector("#age").value;
    // Log Age and Height
    console.log(age);
    console.log(height);
    // Set style => Display to None
    document.querySelector("#success").style.display = "none";
    document.querySelector("#error").style.display = "none";
    // Logic to check age and height using boolean to require both to be true for a sinlge output of yes or no. 
    if (age >= 10 & height >= 52) {
        document.querySelector("#success").innerText = "Get on that ride kiddo!";
        document.querySelector("#success").style.display = "block";
    }
    else {
        document.querySelector("#error").innerText = "Sorry kiddo, maybe next year.";
        document.querySelector("#error").style.display = "block";
    }

}
