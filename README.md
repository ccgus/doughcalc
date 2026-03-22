
This is Gus's dough calculator.

## Description of what it should do:

You tell it the number of dough balls you want (for bread, pizza, tortillas, or something else), and the ingredients in baker's percentages (different flours, yeast, sourdough starter, water percentage, salt, etc), and it then calculates the total amount in grams you need to make your batch of dough.

The interface where you decide what ingredients go is at the top, and below this interface is the list of ingredients with their weights.

The list of ingredients is read from an ingredients.json file.

It should also support loading a preset recipe from URL parameters.

The general "engine" of the that figures out the percentages should be in it's own .js file, so it's easily testable.

The UI of the calculator needs to be easy to edit HTML, and maybe template-able?

It also needs a built in URL shortener, written in C, for sharing social URLs.



The original calculator is located at https://maybepizza.com/calc/

