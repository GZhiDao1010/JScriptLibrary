// 去重
var delRepeat = function(arr) {
    var newArray = [];
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] == arr[j]) {
                ++i;
            }
        }
        newArray.push(arr[i]);
    }
    return newArray;
}
var attr = [1, 2, 3, 4, 25, 25, 5,'aaaaa','aaaaa']

console.log(delRepeat(attr));
