$(document).ready(function () {
    var parseApplicationId = "ujid4uXj8Pi0VKo1aX87OnO1w53tIfVeGbR3zM44";
    var parseJavaScriptKey = "usmp3rodjZzYLar4QBB1vA4FwxU1N1LPdasiYoUv";
    
    Parse.initialize(parseApplicationId, parseJavaScriptKey);
    var Test = Parse.Object.extend("Test");
    var test = new Test();
    
    test.save({
        name: "Brian",
        text: "Hi"
    }, {
        success: function (object) {
            console.log("Parse.com object is saved: " + object);
        }, 
        error: function (object) {
            console.log("Error! Parse.com object is not saved: " + object);
        }
    });
});