function generateRandomWords() {
    // Check if the word list is already cached in local storage
    const cachedWordList = localStorage.getItem('wordList');
    if (cachedWordList) {
        // If cached, use the cached word list
        displayRandomWords(cachedWordList);
    } else {
        // If not cached, fetch the word list from the text file
        fetch('wordlist.txt')
            .then(response => response.text())
            .then(data => {
                // Cache the word list in local storage
                localStorage.setItem('wordList', data);
                // Display the random words
                displayRandomWords(data);
            })
            .catch(error => {
                console.error('Error fetching word list:', error);
            });
    }
}

function displayRandomWords(wordListData) {

    // Split the text into an array of words
    const wordList = data.trim().toUpperCase().split('\n');

    // Shuffle the array to get random words
    const shuffledWords = shuffleArray(wordList);

    // Select the first 5 words from the shuffled array
    const randomWords = shuffledWords.slice(0, 5);

    // Display random words on the page
    const randomWordsContainer = document.getElementById("randomWords");
    randomWordsContainer.innerHTML = randomWords.map((word, index) => {
        // Define class for each word-box based on index
        const wordClass = `word-item word-color-${index + 1}`;
        return `
            <div class="word-box">
                <div class="word-number">${index + 1}:</div>
                <div class="${wordClass}">${word}</div>
            </div>
        `;
    }).join("");

}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function forceRefreshWordList() {
    // Remove the cached word list from local storage
    localStorage.removeItem('wordList');
    // Call generateRandomWords to fetch and display the updated word list
    generateRandomWords();
}