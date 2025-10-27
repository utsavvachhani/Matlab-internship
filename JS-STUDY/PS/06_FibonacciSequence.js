function Fibonacci(n) {
    let a = 0, b = 1, next;
    const sequence = [];
    for (let i = 0; i < n; i++) {
        sequence.push(a);
        next = a + b;
        a = b;
        b = next;
    }
    return sequence;
}

console.log(Fibonacci(10));