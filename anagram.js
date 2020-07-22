const words = ["bat", "code", "cat", "act", "cab", "crazy", "tac", "tab"];
function sortWord(str) {
    str = str.split('');
    str = str.sort();
    str = str.join('');
    return str;
}
function anagram(words){
    const anagramOutput = []
    words.forEach((word) => {
        const sortedWord = sortWord(word);
        console.log(sortedWord)
        if (anagramOutput[sortedWord]) {
            return anagramOutput[sortedWord].push(word);
        }
        anagramOutput[sortedWord] = [word];
    });
    return anagramOutput
}

console.log(anagram(words))
