function divideAndConquerSum(a) {
    if (a.length === 0) {
        return 0;
    }
    if (a.length === 1) {
        return a[0];
    }
    const n = a.length;
    const partSize = Math.floor(n / 2);
    const sum1 = divideAndConquerSum(a.slice(0, partSize));
    const sum2 = divideAndConquerSum(a.slice(partSize, n));
    return sum1 + sum2;
}

module.exports = divideAndConquerSum;
