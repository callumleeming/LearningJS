const numTilePossibilities = (tiles, word = '', words = new Set()) => {
    words.add(word);

    for (let i = 0; i < tiles.length; i++) {
        numTilePossibilities(tiles.slice(0, i) + tiles.slice(i + 1), word + tiles[i], words);
    }

    return words.size - 1;
};

console.log(numTilePossibilities("AB"));

// Input: "AB"
// A B AB BA
// OUTPUT: 4