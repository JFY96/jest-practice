/**
 * Calculates the average, min, max, and length of a list of numbers
 * @param {Array} numbers a list of numbers
 * @returns {Object} Object containing the average, min, max, and length of the input
 */
const arrayAnalysis = (numbers) => {
    const length = numbers.length;
    return {
        average: length ? numbers.reduce((prev, val) => prev + val, 0) / length : 0,
        min: length ? Math.min(...numbers) : 0,
        max: length ? Math.max(...numbers) : 0,
        length: length,
    };
};

export default arrayAnalysis;