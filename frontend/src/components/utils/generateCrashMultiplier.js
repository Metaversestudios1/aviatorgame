// src/utils.js
export function generateCrashMultiplier(lambda) {
    const randomValue = Math.random(); // generates a random number between 0 and 1
    const crashMultiplier = -Math.log(randomValue) / lambda; // exponential distribution
    return Math.max(1.01, crashMultiplier.toFixed(2)); // ensure the multiplier is >= 1.01
}
