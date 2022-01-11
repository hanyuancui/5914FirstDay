import requests

#returns [text, list of URLs]
def obtainRecipe(drinkName):
    url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drinkName
    print(url)
    drink = requests.get(url)
    print(drink.json())



obtainRecipe('margarita')



