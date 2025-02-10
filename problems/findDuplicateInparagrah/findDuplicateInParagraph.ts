const maxDuplicateCount = (paragraph) => {
    const words = paragraph.split(' ');
    const wordCount: { [key: string]: number } = {};
    let maxCount = 0;
    let maxWord = '';
    for (const word of words) {
        const count = (wordCount[word] || 0) + 1;
        wordCount[word] = count;
        if (count > maxCount) {
            maxCount = count;
            maxWord = word;
        }
    }

    console.log(maxWord);
    return maxWord;
};


maxDuplicateCount("hello world hello world hello world") // hello