const log = console.log;

// const moment = require('moment');
// const format = 'YYYY-MM-DD';

// function *gen(l) {
//     for(let i=1; i<=l; i++)    
//         yield moment().subtract(i,'d').format(format);
// }

// it = gen(10);
// log(it);
// for(const a of it) {
//     log(a);
// }


// const map = (f, iter) => {
//     let res = [];
//     for(const a of iter) {
//         res.push(f(a));
//     }
//     return res;
// }

// log(map(a => {return {'a' : a['a']}}, [{'a':1},{'a':2},{'a':3},{'a':4}]));
// // log(map(([a,k]) => [a+'daeho',k * k], [['a',1],['b',2],['c',3],['d',4]]));
const reduce = (f, acc, products) => {
    if(!products) {
        products = acc[Symbol.iterator]();
        acc = products.next().value;
    }
    for(const a of products) {
        acc = f(acc,a)
    }
    return acc;
}
// log(reduce((acc, a) => acc*=a, [5,2,3]))

const pipe = () => reduce((f1,f2) => f2(f1),[
    a => a+1,
    a => a+2,
])
log(pipe);