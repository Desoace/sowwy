// ============ EDIT THIS FILE to change the "No" page ============
// gif   : paste a GIF link (e.g. from Giphy) or a local path like 'gifs/sad1.gif'.
//         Leave '' to show the big emoji instead. Broken links fall back to the emoji.
// emoji : shown when there is no gif
// text  : the sad / cute message for that stage
// bg    : page background colour for that stage
// Each time she clicks "No" she moves to the next stage (the last one repeats).
var STAGES = [
    { gif: '', emoji: '🥺', text: "Oh... you said no? 🥺 Please give me one more chance?", bg: '#bde17a' },
    { gif: '', emoji: '😟', text: "I really am sorry... please don't be mad anymore 😟",     bg: '#aecf8a' },
    { gif: '', emoji: '😢', text: "I made a tiny tear... please say yes 😢",                  bg: '#9fbf9f' },
    { gif: '', emoji: '😭', text: "Now I'm crying 😭 pretty pretty please?",                  bg: '#92b0b0' },
    { gif: '', emoji: '💔', text: "My heart just broke into two pieces 💔",                   bg: '#8aa3bd' },
    { gif: '', emoji: '🥹', text: "I'll share all my snacks with you... just say yes 🥹",     bg: '#8396b8' },
    { gif: '', emoji: '😿', text: "The No button keeps growing because I'm so sad 😿",        bg: '#7d8bb0' },
    { gif: '', emoji: '🫠', text: "I'm melting into a puddle of sadness... YES? 🫠",          bg: '#76809f' }
];
