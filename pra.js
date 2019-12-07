const log = console.log;

// function *gen(n) {
// 	for(const a of map(a=>a.value, limit(n,infi())))
// 	yield a;
// }
// function *limit(l, iter) {
// 	for(const i of iter) {
// 		yield {value:i};
// 		if(i.value==l.value) return;
// 	}
// }
// function *infi(i=0) {
// 	while(true) yield {value:i++};
// }
const map = (f, items) => {
	let res = [];
	for(const item of items) {
		res.push(f(item));
	}
	return res;
}
// let iter = gen({value:3});
// for (const a of iter) {
// 	// console.log(a);
// }


// let m = new Map();
// m.set('a', 10);
// m.set('b', 20);
// log(m);
// log(new Map(map( ([k, v]) => [k+ 'c', v*2], m)));


const filter = (f, iter) => {
	let res = [];
	for(const a of iter) {
		if(f(a)) res.push(a);
	}
	return res;	
}


// log(...filter(p => p.price > 20000, products));


const nums = [1, 2, 3, 4, 5];

let total = 0;
for(const n of nums) {
	total = total + n;
}
log(total);

const add = (a, b) => a + b;

const reduce = (f, acc, iter) => {
	if(!iter) {
		iter = acc[Symbol.iterator]();
		acc = iter.next().value;
	}
	for(const a of iter) {
		acc = f(acc, a);
	}
	return acc;
}

log(reduce(add, nums));
// log(reduce( (total_price, product) => total_price + product.price, 0, products));