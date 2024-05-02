function generateRandomWords() {
    // Fetch the word list from a text file
    fetch('assets/wordlist.txt')
        .then(response => response.text())
        .then(data => {
            // Split the text into an array of words
            const wordList = data.trim().split('\n');

            // Shuffle the array to get random words
            const shuffledWords = shuffleArray(wordList);

            // Select the first 5 words from the shuffled array
            const randomWords = shuffledWords.slice(0, 5);

            // Display random words on the page
            const randomWordsContainer = document.getElementById("randomWords");
            randomWordsContainer.innerHTML = randomWords.map((word, index) => {
                return `<p class="word-item">${index + 1}: <span class="word">${word}</span></p>`;
            }).join("");
        })
        .catch(error => {
            console.error('Error fetching word list:', error);
        });
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}