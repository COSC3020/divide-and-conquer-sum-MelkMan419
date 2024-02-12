function divideAndConquerSum(a) {
    if (a.length === 0) {
        return 0;
    }
    const n = a.length;
    const partSize = Math.max(1, Math.floor(n / 3)); // Ensure partSize is at least 1
    const sum1 = divideAndConquerSum(a.slice(0, partSize));
    const sum2 = divideAndConquerSum(a.slice(partSize, Math.min(2 * partSize, n)));
    const sum3 = divideAndConquerSum(a.slice(Math.min(2 * partSize, n), n));
    return sum1 + sum2 + sum3;
}
module.exports = divideAndConquerSum;
