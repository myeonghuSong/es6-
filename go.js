const log = console.log
const curry = f => (a, ..._) => _.length? f(a, ..._) : (..._) => f(a, ..._)
const reduce = curry((f, acc, products) => {
    if(!products) {
        products = acc[Symbol.iterator]();
        acc = products.next().value;
    }
    for(const a of products) {
        acc = f(acc,a)
    }
    return acc;
})
const map = curry((f, items) => {
	let res = [];
	for(const item of items) {
		res.push(f(item));
	}
	return res;
})
const filter = curry((f, items) => {
	let res = [];
	for(const item of items) {
		if(f(item)) res.push(item)
	}
	return res;
})
const go = (...args) => reduce((a,f) => f(a),args);
const pipe = (...fs) => (a) => go(a,...fs)
// go(
//     1,
//     a => a+1,
//     a => a+2,
//     log
// )
// log(pipe(
//     a => a+1,
//     a => a+2,
// )(5))

const products = [
    { name: '반팔티', price: 15000, qu:1, },
    { name: '긴팔티', price: 20000, qu:2, },
    { name: '핸드폰케이스', price: 15000, qu:3, },
    { name: '후드티', price: 30000, qu:5, },
    { name: '바지', price: 25000, qu:8, },
]

const add = (a,b) => a+b;

const sum = curry((f,iter) => pipe(
    map(f),
    reduce(add)
)(iter))

const total_quantity = sum(p => p.qu)


const total_price = sum(p => p.qu * p.price)

log(total_quantity(products));
log(total_price(products));


// log(reduce(
//     (a,b) => a+b,
//     map(p => p.price, products)
// ))
// go(
//     products,
//     arr => map(p => p.price, arr),
//     prices => reduce((a,b)=>a+b, prices),
//     log
// )

