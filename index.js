var recipes = {}

function updateObjectWithKeyAndValue(recipes, key, value) {
    recipes[key] = value
    return recipes

}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
    recipes[key] = value
    return recipes

}


function deleteFromObjectByKey(recipes, key) {
    // var recipe = recipes
    // delete recipe[key]
    // return recipe
      const newRecipes = Object.assign({}, recipes)
      delete newRecipes[key]
      return newRecipes

  }

function destructivelyDeleteFromObjectByKey(object, key){
    delete recipes[key]
    return recipes


}