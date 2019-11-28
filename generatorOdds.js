function *infinity(i=0) {
    while(true) yield i++;
}

function *limit(l, iter) {
    for(const a of iter) {
        yield a;
        if(a === l) return;
    }
}
function *odds(l) {
    for(const a of limit(l, infinity(1))) {
        if(a % 2) yield a;
    }
}

let iter2 = odds(10);
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());

for(const a of odds(10)) {
    console.log(a);
}