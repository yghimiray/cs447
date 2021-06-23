function foo(msg) {
    console.log(msg);
}
setTimeout(function () {
    foo('timeout');
}, 0);
process.nextTick(foo, 'nextTick');

console.log('bar');
