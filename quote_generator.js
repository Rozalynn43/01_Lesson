// Array of inspiring quotes
const quotes = [
    "Stop doubting yourself. You've already survived things you once thought would break you!",
    "Code is like humor. When you have to explain it, it's bad.",
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "Every expert was once a beginner. Keep learning, keep growing.",
    "Your limitation—it's only your imagination. Dream big, build bigger!",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Don't watch the clock; do what it does. Keep going.",
    "The future belongs to those who believe in the beauty of their dreams."
];

// Function to get quote based on day of the year
function getQuoteOfTheDay() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    // Use modulo to cycle through quotes
    const quoteIndex = dayOfYear % quotes.length;
    return quotes[quoteIndex];
}

// Function to update the quote on the page
function displayQuote() {
    const quoteElement = document.querySelector('.main-subtitle');
    if (quoteElement) {
        quoteElement.textContent = `"${getQuoteOfTheDay()}"`;
    }
}

// Run when page loads
document.addEventListener('DOMContentLoaded', displayQuote);