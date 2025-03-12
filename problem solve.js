function fibonacci(n) {
    let fibSeries = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
    return fibSeries.slice(0, n);
}

// Example usage:
let numTerms = 10; // Change this value to get more terms
console.log(fibonacci(numTerms));
