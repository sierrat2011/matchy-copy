/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search = function(array, string) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].name === string) {
return array[i]
    }   
}
return null
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var replace = function(animals, name, replacement) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
        animals.splice(animals[i], 1, replacement)
      }  
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var remove  = function(animals, name) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
        animals.splice(animals[i], 1)
      }  
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var add = function(animals, animal) {
    if (!animal.name || typeof animal.name !== 'string' || animal.name.length === 0) {
        return;
      }
      if (!animal.species || typeof animal.species !== 'string' || animal.species.length === 0) {
        return;
      }
      for (let i = 0; i < animals.length; i++) {
        if (animals[i].name === animal.name) {
          return; // Name already exists
        }
      }
    animals.push(animal)
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}