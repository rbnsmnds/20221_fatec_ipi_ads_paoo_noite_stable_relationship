function freq<A>(xs: A[]): Map<A, number> {
    const count = new Map<A, number>();
    for (const x of xs) {
        // se k é undefined, então x nao é uma
        // das chaves de count
        const k = count.get(x);
        if (k == undefined) count.set(x, 1); // x não é chave de count
        else count.set(x, k+1); // x é chave de count e, portanto, 
                                // k é o numero de ocorrencias de x
                                // em count
    }
    return count;
}


function apply(op: string, x: number, y: number) {
    const ops = new Map<string, (x: number, y: number) => number>(
        [['+', (x, y) => x + y],
         ['-', (x, y) => x - y],
         ['*', (x, y) => x * y],
         ['/', (x, y) => x / y]]);
    if (!ops.has(op)) throw new Error('operador invalido');
    return ops.get(op)!(x, y);
}

const frq = <A>(xs: A[]): Map<A, number> => freq(xs);

console.log(apply('*', 3, 7));

const vs = ['a', 'a', 'b', 'a', 'ac', 'b', 'b'];
console.log(freq(vs));
