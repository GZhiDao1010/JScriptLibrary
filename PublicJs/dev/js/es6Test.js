class Calc {
    constructor() {
        console.log('Calc constructor');
    }
    add(a, b) {
        return a + b;
    }
}

var c = new Calc();
const id = 123;
//冻结对象
var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach((key, value) => {
        if (typeof obj[key] === 'object') {
            constantize(obj[key]);
        }
    });
};
//获取顶层对象
var getGlobal = function() {
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof global !== 'undefined') {
        return global
    }
    throw new Error('获取顶层对象失败');
}

const G = getGlobal();
console.log(G);
let [a, b] = [{
        a: 1,
        b: 2
    },
    [1, 23, 4, 5, 6]
];
let [aa, bb] = new Set([
    [1, 2, 3,5 ], {
        s: 1,
        c: 2
    }
]);
console.log(a);
