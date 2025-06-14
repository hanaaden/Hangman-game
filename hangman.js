// DOM Element Selectors
const button = document.getElementById('btn');
const showRegisterBtn = document.getElementById('showRegister');
const showSigninLink = document.getElementById('showSignin');
const showSignupLink = document.getElementById('showSignup');

const order = document.querySelector('.order'); // General game container for Level 2 (medium) - used if specific layout needed
const order1 = document.querySelector('.order1'); // General game container for Level 1 (easy) - used if specific layout needed
const order3 = document.querySelector('.order3'); // General game container for Level 3 (hard) - used if specific layout needed

const box = document.querySelector('.box'); // Likely the box around the hangman/game info
const typing = document.querySelector('.typing'); // Element for dynamic messages
const intro = document.querySelector('.intro'); // Intro screen

const input = document.getElementById('guess'); // Input for Level 2
const input1 = document.getElementById('guesslv1'); // Input for Level 1
const input3 = document.getElementById('guesslvl3'); // Input for Level 3

const submit = document.getElementById('submit'); // Submit for Level 2
const submitlvl1 = document.getElementById('submitlv1'); // Submit for Level 1
const submitlvl3 = document.getElementById('submitlvl3'); // Submit for Level 3

const wordDisplayContainer = document.querySelector('.word'); // This will hold f1, f2, f3, f4 for Medium
const wordslvl1DisplayContainer = document.querySelector('.wordslvl1'); // This will hold l1f1, l1f2, l1f3, l1f4 for Easy
const wordslvl3DisplayContainer = document.querySelector('.wordslvl3'); // This will hold l3f1, l3f2, l3f3, l3f4, l3f5 for Hard

// Individual letter display spans
const f1 = document.getElementById('f1');
const f2 = document.getElementById('f2');
const f3 = document.getElementById('f3');
const f4 = document.getElementById('f4');
const l1f1 = document.getElementById('l1f1');
const l1f2 = document.getElementById('l1f2');
const l1f3 = document.getElementById('l1f3');
const l1f4 = document.getElementById('l1f4');
const l3f1 = document.getElementById('l3f1');
const l3f2 = document.getElementById('l3f2');
const l3f3 = document.getElementById('l3f3');
const l3f4 = document.getElementById('l3f4');
const l3f5 = document.getElementById('l3f5');

// Hangman parts (using existing IDs from HTML)
const face = document.querySelector('.face');
const tire1 = document.querySelector('.tire1');
const tire2 = document.querySelector('.tire2');
const base = document.querySelector('.base');
const lefthand = document.querySelector('.lefthand');
const righthand = document.querySelector('.righthand');
const leftleg = document.querySelector('.leftleg');
const rightleg = document.querySelector('.rightleg');
const wire1 = document.querySelector('.wire1');
const wire11 = document.querySelector('.wire11');
const wirelong = document.querySelector('.wirelong');

const result = document.querySelector('.result'); // Win message for word in Level 2
const resultlvl1 = document.querySelector('.resultlvl1'); // Win message for word in Level 1
const resultlvl3 = document.querySelector('.resultlvl3'); // Win message for word in Level 3

const agree = document.getElementById('agree'); // for level 2 warning (start button)
const agreee = document.getElementById('agreee'); // for level 2 result (next word button)
const agreelvl1 = document.getElementById('agreelvl1'); // for level 1 warning (start button)
const agreeelvl1 = document.getElementById('agreeelvl1'); // for level 1 result (next word button)
const agreelvl3 = document.getElementById('agreelvl3'); // for level 3 warning (start button)
const agreeelvl3 = document.getElementById('agreeelvl3'); // for level 3 result (next word button)

const warning = document.querySelector('.warning'); // Level 2 warning screen
const warning1 = document.querySelector('.warning1'); // Level 1 warning screen
const warning3 = document.querySelector('.warning3'); // Level 3 warning screen

const hint = document.getElementById('Hint'); // Hint for Level 2
const hintlvl1 = document.getElementById('Hintlvl1'); // Hint for Level 1
const hintlvl3 = document.getElementById('Hintlvl3'); // Hint for Level 3

const gameAudio = document.getElementById("gameAudio");

const levels = document.querySelector('.levels'); // Level selection screen
const easy = document.querySelector('.easy');
const medium = document.querySelector('.medium');
const hard = document.querySelector('.hard');

const failure = document.querySelector('.failure'); // Game Over screen
const success = document.querySelector('.success'); // Level Complete screen
const fail = document.getElementById('fail'); // button inside failure message (Try Again)
const back = document.getElementById('back'); // button inside success message (Play Again)
const failedWordSpan = document.getElementById('failedWord'); // Span to show the word after failure

const signup = document.querySelector('.signup'); // Signup form container
const signin = document.querySelector('.signin'); // Signin form container
const signingin = document.getElementById('signingin'); // Sign In submit button
const signingup = document.getElementById('signingup'); // Sign Up submit button
const signupInput = document.getElementById('sign'); // Input field for signup
const signinInput = document.getElementById('signin'); // Input field for signin

// Custom Alert elements
const customAlert = document.getElementById('customAlert');
const alertMessage = document.getElementById('alertMessage');


// Game State Variables
let currentLevel = null; // 'easy', 'medium', 'hard'
let currentWordIndex = 0; // Index of the current word in the level's word list
let incorrectGuesses = 0; // Count of incorrect guesses for the current word
let points = {
    easy: 0,
    medium: 0,
    hard: 0
};
let currentWordData = null; // Stores the current word object from the array { word: '...', hint: '...' }
let revealedLetters = []; // Array to keep track of correctly guessed letters for current word (e.g., ['f', '', '', 'e'])

// Hangman Parts Array (order matters for display progression)
const hangmanParts = [
    base, wire1, wire11, wirelong, // Gallows/tree structure
    face, tire1, tire2, // Head and body of creature
    lefthand, righthand, // Wings/arms
    leftleg, rightleg // Legs/feet
];

// Word Arrays (keeping previous friendly words)
const wordsMedium = [
    { word: 'seed', hint: 'I am tiny, but can grow very tall.' },
    { word: 'leaf', hint: 'I fall from trees in autumn, but I am not rain.' },
    { word: 'nest', hint: 'Birds build me high in trees to keep their babies safe.' },
    { word: 'moss', hint: 'I am soft and green, and grow on damp rocks and trees.' },
    { word: 'bark', hint: 'I am the skin of a tree, but I am also a sound a dog makes.' }
];

const wordsEasy = [
    { word: 'tree', hint: 'I have a trunk and branches, but no arms or legs.' },
    { word: 'bird', hint: 'I have feathers and can fly, but I am not a plane.' },
    { word: 'frog', hint: 'I am green and jump, and like to live near water.' },
    { word: 'root', hint: 'I grow underground and keep a plant standing tall.' },
    { word: 'path', hint: 'I am a narrow way for walking, often through a forest.' }
];

const wordsHard = [
    { word: 'sprout', hint: 'I am what a seed does when it begins to grow.' }, // 6 letters
    { word: 'pine', hint: 'I am a type of tree with needles instead of leaves.' }, // 4 letters
    { word: 'grove', hint: 'A small group of trees, smaller than a forest.' }, // 5 letters
    { word: 'thyme', hint: 'A fragrant herb often used in cooking; sounds like time.' }, // 5 letters
    { word: 'crane', hint: 'A large bird with a long neck, or a machine that lifts.' }, // 5 letters
    { word: 'stork', hint: 'A large bird known for delivering babies in stories.' } // 5 letters
];

// Helper to map level names to their word arrays and letter display elements
const levelData = {
    easy: {
        words: wordsEasy,
        input: input1,
        submit: submitlvl1,
        wordDisplayContainer: wordslvl1DisplayContainer,
        letterSpans: [l1f1, l1f2, l1f3, l1f4],
        resultScreen: resultlvl1,
        warningScreen: warning1,
        agreeBtn: agreelvl1,
        agreeeBtn: agreeelvl1, // For moving to next word
        hintBtn: hintlvl1,
        typingMessage: 'EXPLORER, YOU ARE ON MOSS PATH',
        scoreNeeded: 50 // 5 words * 10 points/word
    },
    medium: {
        words: wordsMedium,
        input: input,
        submit: submit,
        wordDisplayContainer: wordDisplayContainer,
        letterSpans: [f1, f2, f3, f4],
        resultScreen: result,
        warningScreen: warning,
        agreeBtn: agree,
        agreeeBtn: agreee, // For moving to next word
        hintBtn: hint,
        typingMessage: 'EXPLORER, YOU ARE ON FOREST TRAIL',
        scoreNeeded: 50
    },
    hard: {
        words: wordsHard,
        input: input3,
        submit: submitlvl3,
        wordDisplayContainer: wordslvl3DisplayContainer,
        letterSpans: [l3f1, l3f2, l3f3, l3f4, l3f5], // Max 5 letters
        resultScreen: resultlvl3,
        warningScreen: warning3,
        agreeBtn: agreelvl3,
        agreeeBtn: agreeelvl3, // For moving to next word
        hintBtn: hintlvl3,
        typingMessage: 'EXPLORER, YOU ARE ON MOUNTAIN PEAK',
        scoreNeeded: 50
    }
};

// --- Custom Alert Function ---
let alertTimeout;
function showCustomAlert(message, type = 'info', duration = 2000) {
    clearTimeout(alertTimeout); // Clear any previous timeout
    customAlert.className = 'custom-alert'; // Reset classes
    if (type) {
        customAlert.classList.add(type);
    }
    alertMessage.textContent = message;
    customAlert.style.display = 'block'; // Make it visible
    customAlert.style.opacity = '1'; // Ensure opacity is 1 for animation start

    // Set timeout to hide the alert
    alertTimeout = setTimeout(() => {
        customAlert.style.opacity = '0'; // Start fade out
        // Wait for animation to finish before truly hiding
        setTimeout(() => {
            customAlert.style.display = 'none';
        }, 500); // Match CSS animation duration
    }, duration);
}


// Initial state setup and reset function
function initializeGame() {
    // Hide all major screens/containers
    document.querySelectorAll('.screen, .game-area').forEach(el => el && (el.style.display = 'none'));

    // Hide all hangman parts
    clearHangman();

    // Show initial intro screen and related elements
    intro.style.display = 'flex'; // Use flex for intro content centering
    button.style.display = 'block';
    showRegisterBtn.parentElement.style.display = 'block'; // Show the paragraph containing the register link
    typing.style.display = 'block';
    typing.innerHTML = 'HELLO, EXPLORER!'; // Initial typing message

    // Disable buttons that aren't immediately active
    button.disabled = false;

    // Reset game state variables
    currentLevel = null;
    currentWordIndex = 0;
    incorrectGuesses = 0;
    points = { easy: 0, medium: 0, hard: 0 };
    currentWordData = null;
    revealedLetters = [];

    // Reset all letter displays to underscores
    Object.values(levelData).forEach(level => {
        level.letterSpans.forEach(span => {
            if (span) {
                span.innerHTML = '____'; // Friendly blank
                span.style.display = 'inline-block'; // Ensure spans are initially visible
            }
        });
    });

    gameAudio.pause();
    gameAudio.currentTime = 0;
}

// Shuffle array helper (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to display the current word as blanks or revealed letters
function displayCurrentWord() {
    const { letterSpans } = levelData[currentLevel];
    // Clear previous word display first and reset spans
    letterSpans.forEach(span => {
        if (span) {
            span.innerHTML = '____'; // Default empty state for friendly theme
            span.style.display = 'inline-block'; // Ensure it's visible
        }
    });

    // Hide extra spans if the word is shorter than max length
    for (let i = currentWordData.word.length; i < letterSpans.length; i++) {
        if (letterSpans[i]) {
            letterSpans[i].style.display = 'none';
        }
    }

    // Populate with revealed letters or blanks
    for (let i = 0; i < currentWordData.word.length; i++) {
        if (letterSpans[i]) {
            letterSpans[i].innerHTML = revealedLetters[i] || '____';
            letterSpans[i].style.display = 'inline-block'; // Ensure it's visible
        }
    }
}

// Function to start a new word in the current level
function startNewWord() {
    const level = levelData[currentLevel];

    if (currentWordIndex >= level.words.length) {
        // All words in this level guessed, show level complete screen
        showSuccessScreen();
        return;
    }

    currentWordData = level.words[currentWordIndex];
    revealedLetters = Array(currentWordData.word.length).fill(''); // Initialize with blanks
    incorrectGuesses = 0; // Reset incorrect guesses for the new word
    clearHangman(); // Hide all hangman parts for the new word

    // Hide all transient screens
    document.querySelectorAll('.result, .warning, .warning1, .warning3, .signup, .signin').forEach(el => el.style.display = 'none');

    // Show the main game area
    document.querySelector('.game-area').style.display = 'flex'; // Display the overall game area

    // Hide all specific word display containers first, then show the current one
    [wordDisplayContainer, wordslvl1DisplayContainer, wordslvl3DisplayContainer].forEach(el => el && (el.style.display = 'none'));
    level.wordDisplayContainer.style.display = 'flex'; // Display word container for the current level

    // Hide all input and submit buttons, then show the current ones
    [input, input1, input3].forEach(el => el && (el.style.display = 'none'));
    [submit, submitlvl1, submitlvl3].forEach(el => el && (el.style.display = 'none'));

    level.input.style.display = 'block';
    level.submit.style.display = 'block';
    level.submit.disabled = false; // Enable submit button for the new word
    level.input.focus(); // Focus the input for convenience

    // Hide all hint buttons, then show the current one
    [hint, hintlvl1, hintlvl3].forEach(el => el && (el.style.display = 'none'));
    level.hintBtn.style.display = 'block';

    typing.style.display = 'block';
    typing.innerHTML = level.typingMessage; // Update level message

    // Ensure only the relevant "order" div is shown (if applicable in your CSS/layout)
    // For this generalized structure, we're relying on .game-area and the internal element displays.
    if (order) order.style.display = 'none';
    if (order1) order1.style.display = 'none';
    if (order3) order3.style.display = 'none';

    box.style.display = 'block'; // Make sure the hangman box is visible

    displayCurrentWord(); // Show initial blanks for the new word
}

// Function to check if all letters of the current word are revealed
function checkWordRevealed() {
    return currentWordData.word.split('').every((char, index) => revealedLetters[index] === char);
}

// Function to hide common game elements
function hideGameElements() {
    // Hide inputs, submit buttons, hint buttons, and word display containers
    [input, input1, input3, submit, submitlvl1, submitlvl3, hint, hintlvl1, hintlvl3,
     wordDisplayContainer, wordslvl1DisplayContainer, wordslvl3DisplayContainer, box, typing,
     document.querySelector('.game-area')].forEach(el => el && (el.style.display = 'none'));
}

// Show success screen (after completing a level)
function showSuccessScreen() {
    hideGameElements();
    success.style.display = 'flex'; // Use flex for centering content
    gameAudio.pause();
    gameAudio.currentTime = 0;
}

// Show failure screen (after running out of incorrect guesses for a word)
function showFailureScreen() {
    hideGameElements();
    failure.style.display = 'flex'; // Use flex for centering content
    failedWordSpan.textContent = currentWordData.word.toUpperCase(); // Display the correct word
    gameAudio.pause();
    gameAudio.currentTime = 0;
}

// Clear all hangman parts (hide them)
function clearHangman() {
    hangmanParts.forEach(part => part && (part.style.display = 'none'));
}

// --- Event Listeners ---

document.addEventListener('DOMContentLoaded', initializeGame); // Initialize when DOM is ready

// Global Enter key listener for submitting guesses or starting game
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        // If a game-over or win screen is up, trigger their "restart" buttons
        if (success.style.display === 'flex' && back.style.display !== 'none') {
            back.click();
            return;
        }
        if (failure.style.display === 'flex' && fail.style.display !== 'none') {
            fail.click();
            return;
        }

        // Handle specific button clicks based on current visible screen
        if (levels.style.display === 'flex') {
            // No default 'Enter' action for level selection, user must click
            return;
        } else if (warning.style.display === 'flex') {
            agree.click();
        } else if (warning1.style.display === 'flex') {
            agreelvl1.click();
        } else if (warning3.style.display === 'flex') {
            agreelvl3.click();
        } else if (result.style.display === 'block') {
            agreee.click();
        } else if (resultlvl1.style.display === 'block') {
            agreeelvl1.click();
        } else if (resultlvl3.style.display === 'block') {
            agreeelvl3.click();
        } else if (document.querySelector('.game-area').style.display === 'flex' && currentLevel) {
            // If in game area, trigger current level's submit button
            const { submit } = levelData[currentLevel];
            if (submit.style.display === 'block' && !submit.disabled) {
                submit.click();
            }
        } else if (intro.style.display === 'flex' && button.style.display === 'block' && !button.disabled) {
            button.click(); // Trigger start button
        } else if (signup.style.display === 'flex' && signingup.style.display === 'block') {
            signingup.click(); // Trigger signup button
        } else if (signin.style.display === 'flex' && signingin.style.display === 'block') {
            signingin.click(); // Trigger signin button
        }
    }
});


// Start Game button (from Intro screen)
button.onclick = function() {
    gameAudio.play().catch(e => console.log("Audio play failed:", e)); // Add catch for Promise rejection
    intro.style.display = 'none';
    showRegisterBtn.parentElement.style.display = 'none'; // Hide the register link paragraph
    levels.style.display = 'flex'; // Show level selection
    button.disabled = true;
};

// Level selection handlers
easy.onclick = function() {
    currentLevel = 'easy';
    levels.style.display = 'none';
    levelData.easy.warningScreen.style.display = 'flex'; // Show level warning
};
medium.onclick = function() {
    currentLevel = 'medium';
    levels.style.display = 'none';
    levelData.medium.warningScreen.style.display = 'flex'; // Show level warning
};
hard.onclick = function() {
    currentLevel = 'hard';
    levels.style.display = 'none';
    levelData.hard.warningScreen.style.display = 'flex'; // Show level warning
};

// Agreement buttons for starting a level after warning (e.g., "LET'S GO!")
Object.values(levelData).forEach(level => {
    level.agreeBtn.onclick = function() {
        level.warningScreen.style.display = 'none';
        currentWordIndex = 0; // Start from the first word in the level
        points[currentLevel] = 0; // Reset points for the chosen level
        shuffleArray(level.words); // Shuffle words for a fresh game experience
        startNewWord();
    };
});

// Agreement buttons for moving to the next word after correct guess (e.g., "NEXT WORD")
Object.values(levelData).forEach(level => {
    level.agreeeBtn.onclick = function() {
        points[currentLevel] += 10; // Add points for correctly guessed word
        currentWordIndex++; // Move to the next word
        level.resultScreen.style.display = 'none'; // Hide word result screen
        startNewWord(); // Attempt to start the next word or end the level
    };
});

// Hint button handlers
Object.values(levelData).forEach(level => {
    level.hintBtn.onclick = function() {
        if (currentWordData && currentWordData.hint) {
            showCustomAlert(`Clue: ${currentWordData.hint}`, 'info');
        } else {
            showCustomAlert('No clue available for this word!', 'warning');
        }
    };
});

// Submit guess handlers for all levels
Object.values(levelData).forEach(level => {
    level.submit.onclick = function() {
        const guessInput = level.input;
        const guess = guessInput.value.toLowerCase().trim();
        guessInput.value = ''; // Clear input field immediately

        if (!guess) {
            showCustomAlert('Please enter a letter or the full word!', 'warning');
            return;
        }

        let guessWasCorrect = false;

        if (guess.length === 1) {
            // Single letter guess
            if (currentWordData.word.includes(guess)) {
                let alreadyRevealed = true;
                for (let i = 0; i < currentWordData.word.length; i++) {
                    if (currentWordData.word[i] === guess && revealedLetters[i] === '') {
                        revealedLetters[i] = guess;
                        alreadyRevealed = false;
                        guessWasCorrect = true;
                    }
                }
                displayCurrentWord();

                if (alreadyRevealed) {
                    showCustomAlert(`"${guess.toUpperCase()}" is already revealed!`, 'info');
                } else {
                    showCustomAlert(`Yes! "${guess.toUpperCase()}" is correct!`, 'success');
                }
            } else {
                // Incorrect letter
                if (incorrectGuesses < hangmanParts.length) {
                    hangmanParts[incorrectGuesses].style.display = 'block';
                    incorrectGuesses++;
                }
                showCustomAlert(`No "${guess.toUpperCase()}" here! Try again.`, 'error');
            }
        } else {
            // Full word guess
            if (guess === currentWordData.word) {
                revealedLetters = currentWordData.word.split('');
                displayCurrentWord();
                guessWasCorrect = true;
                showCustomAlert('You got the word! Excellent!', 'success');
            } else {
                // Incorrect full word
                if (incorrectGuesses < hangmanParts.length) {
                    hangmanParts[incorrectGuesses].style.display = 'block';
                    incorrectGuesses++;
                }
                showCustomAlert(`"${guess.toUpperCase()}" is not the word. Keep guessing!`, 'error');
            }
        }

        // Check for game over or word revealed
        if (checkWordRevealed()) {
            // Give a moment for the custom alert to be seen, then transition
            setTimeout(() => {
                level.resultScreen.style.display = 'block';
                hideGameElements();
            }, 1000); // Wait 1 second after custom alert
        } else if (incorrectGuesses >= hangmanParts.length) {
            setTimeout(() => {
                showFailureScreen();
            }, 1000); // Wait 1 second after custom alert
        }
        level.input.focus(); // Keep focus on input after guess
    };
});


// Reset Game to initial state (from failure or success screens)
fail.onclick = initializeGame;
back.onclick = initializeGame;

// --- Sign Up / Sign In Functionality ---

// Show Register/Sign Up form from Intro
showRegisterBtn.onclick = function(e) {
    e.preventDefault(); // Prevent default link behavior
    intro.style.display = 'none';
    button.style.display = 'none';
    typing.style.display = 'none';
    showRegisterBtn.parentElement.style.display = 'none'; // Hide the register link paragraph
    signup.style.display = 'flex'; // Show signup form
    signin.style.display = 'none'; // Ensure signin is hidden
    signupInput.focus();
};

// Toggle to Sign In from Sign Up form
showSigninLink.onclick = function(e) {
    e.preventDefault(); // Prevent default link behavior
    signup.style.display = 'none';
    signin.style.display = 'flex'; // Show signin form
    signinInput.focus();
};

// Toggle to Sign Up from Sign In form
showSignupLink.onclick = function(e) {
    e.preventDefault(); // Prevent default link behavior
    signin.style.display = 'none';
    signup.style.display = 'flex'; // Show signup form
    signupInput.focus();
};

// Handle Sign In submission (placeholder)
signingin.onclick = function() {
    const signinValue = signinInput.value.trim();
    if (signinValue === '') {
        showCustomAlert('Please enter your explorer name to sign in!', 'warning');
    } else {
        // In a real app, you'd send this to a server for authentication.
        showCustomAlert(`Welcome back, ${signinValue}!`, 'success');
        signinInput.value = ''; // Clear input
        setTimeout(initializeGame, 1500); // Go back to initial game screen after alert
    }
};

// Handle Sign Up submission (placeholder)
signingup.onclick = function() {
    const signupValue = signupInput.value.trim();
    if (signupValue === '') {
        showCustomAlert('Please choose an explorer name to embark!', 'warning');
    } else {
        // In a real app, you'd send this to a server for user creation.
        showCustomAlert(`Welcome to the adventure, ${signupValue}!`, 'success');
        signupInput.value = ''; // Clear input
        setTimeout(initializeGame, 1500); // Go back to initial game screen after alert
    }
};