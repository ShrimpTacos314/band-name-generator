/*
 The superclass MarkovLink is the template for all the elements in the name.
 Each part of speech (subject, object, verb, name, article, conjunction) is a
 class extending MarkovLink. Their objects have a method that gets a new
 MarkovLink of a different type, according to predetermined probabilities. Each
 MarkovLink derivative also has a "contents" field which contains the actual
 word that the MarkovLink represents.

 The actual gathering of a new MarkovLink can be done using a randomization
 function. How should this function work? It should be weighted, making things
 interesting. The simplest way of calculating weighted random values is to get
 a normal random value and have ranges of increasing size for that value to fall
 into. For instance, if a MarkovLink has a 15% chance of returning one kind of
 MarkovLink and an 85% chance of returning another MarkovLink, then the if/
 whatever should use 0.15 and 0.85 as its values to compare to. This method will
 need some tweaking to make it a little more elegant.

 Another way would be to weight the actual generation call itself. I don't think
 there's a built-in function to do this, and any non-built-in function will look
 like the above method of doing things. Maybe do this to save on repeated code.

 Did that!
*/

class MarkovLink {
    constructor(contents) {
        this.contents = contents;
    }


}
