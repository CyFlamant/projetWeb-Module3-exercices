function letterFinder(word, match){
    console.log("Paramètre word : " + word + "\nParamètre match : " + match);
    for (var i =0 ; i< word.length ; i++) {
        console.log("i = " + i);
        if (word[i]==match) {
            console.log("Found match ", match, " at ", i);
        }
        else console.log("no match found at "+ i);

    }
}

letterFinder("test","t");