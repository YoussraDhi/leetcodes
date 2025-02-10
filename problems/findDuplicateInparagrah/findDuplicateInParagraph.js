var maxDuplicateCount = function (paragraph) {
    var words = paragraph.split(' ');
    var wordCount = {};
    var maxCount = 0;
    var maxWord = '';
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var count = (wordCount[word] || 0) + 1;
        wordCount[word] = count;
        if (count > maxCount) {
            maxCount = count;
            maxWord = word;
        }
    }
    console.log(maxWord);
    return maxWord;
};
maxDuplicateCount("hello world hello world hello world"); // hello
