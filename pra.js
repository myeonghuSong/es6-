function *gen(n) {
	for(const a of map(a=>a.value, limit(n,infi())))
	yield a;
}
function *limit(l, iter) {
	for(const i of iter) {
		yield {value:i};
		if(i.value==l.value) return;
	}
}
function *infi(i=0) {
	while(true) yield {value:i++};
}
map = (f, items) => {
	let res = [];
	for(const item of items) {
		res.push(f(item));
	}
	return res;
}
let iter = gen({value:3});
for (const a of iter) {
	console.log(a);
}
