const m = new Map<string, number>();
m.set('maria', 10);
m.set('joana', 7);
m.set('manuela', 9);
console.log(m.has('maria'));
//m.delete('maria');
console.log(m);
console.log(m.get('joana'));

// console.log(m.keys())
for (const key of m.keys()) console.log(key);
for (const value of m.values()) console.log(value);

for (const t of m) console.log(t);

for (const [key, value] of m) 
    console.log(`chave: ${key}, valor: ${value}`);

const xs = [1, 2, 3, 4, 5];
const ys = [...xs]
const zs = [];
for (const x of xs) zs.push(x);
console.log(ys);
