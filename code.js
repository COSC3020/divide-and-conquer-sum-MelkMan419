function divideAndConquerSum(a) {
    if (a.length === 0) {
        return 0;
    }
    const n = a.length;
    const partSize = Math.floor(n / 3);
    const sum1 = divideAndConquerSum(a.slice(0, partSize));
    const sum2 = divideAndConquerSum(a.slice(partSize, 2 * partSize));
    const sum3 = divideAndConquerSum(a.slice(2 * partSize, n));
    return sum1 + sum2 + sum3;
}
