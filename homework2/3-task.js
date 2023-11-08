function groupAnagrams(words){
    const anagramGroups = {};

    for (const word of words){
        const sortedWord = word.split('').sort().join('');

        if (!anagramGroups[sortedWord]){
            anagramGroups[sortedWord] = [];
        }

        anagramGroups[sortedWord].push(word);
    }

    return Object.values(anagramGroups);
}
