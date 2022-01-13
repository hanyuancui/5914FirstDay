function button_click() {
    var userInput = document.querySelector("#cocktailname-field");
    return userInput;
}

function search_drinks(drinkName) {
    let drinksArray = null;

    var that = this
    $.ajax({
        type: "GET",
        url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkName,
        timeout: 600000,
        success: function (data) {
            console.log(data);
            that.drinks = data
        },
      });
}


search_drinks(button_click)