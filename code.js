function divideAndConquerSum(a) {
    // Base case
    if (a.length === 0) {
        return 0;
    }
    
    // Divide the array into three parts
    const n = a.length;
    const partSize = Math.floor(n / 3);

    // Conquer: Recursively compute the sum of each part
    const sum1 = divideAndConquerSum(a.slice(0, partSize));
    const sum2 = divideAndConquerSum(a.slice(partSize, 2 * partSize));
    const sum3 = divideAndConquerSum(a.slice(2 * partSize, n));

    // Combine: Return the sum of the three sub-arrays
    return sum1 + sum2 + sum3;
}
