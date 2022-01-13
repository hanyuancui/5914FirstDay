function search_drinks(drinkName) {
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


function search_drinks_based_on_found(drink) {
    var that = this
    for (var i = 0; i < that.drinks.length; i++) { 
        $.ajax({
            type: "GET",
            url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkName,
            timeout: 600000,
            success: function (data) {
                console.log(data);
                that.drinks[i] = data
            },
          });
    }
    
}


