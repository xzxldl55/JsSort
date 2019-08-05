/**
 * 快速排序-1：快速排序速度快，效率高，是处理大数据最快的排序算法之一
 * 思想：
 * ① 先找到一个基准点（一般找数组中部），然后数组被该基准点分为两部分，依次将两部分数据与基准点比较，如果比基准点小，将其放于基准点左边，反之放右边
 * ② 左右分别用一个空数组存储比较后的数据
 * ③ 递归以上操作直到数组长度<=1
 * 特点：速度快，常用；但需要声明另外两个数组，需要占用较大的内存空间。
 */
const quickSort_1 = arr => {
    const length = arr.length
    if (length <= 1) return arr
    // get BasePoint's index
    const midIndex = Math.floor(length / 2)
    // get BasePoint's value (At the same time, we'd splice the array, so 'arr' no longer contains 'midValue' now.)
    const midValue = arr.splice(midIndex, 1)
    // define two array to load data, 'leftArr' loaded the smaller data 'rightArr' on the contrary.
    const leftArr = []
    const rightArr = []
    // OK, we'll traverse the arr.(Because of the action on line 15, arr.length is length-1 now)
    for (let i = 0; i < length - 1; i++) {
        if (arr[i] < midValue) leftArr.push(arr[i])
        else rightArr.push(arr[i])
    }
    // 最后执行递归操作，对leftArr与rightArr，进行递归快速排序，直到其length === 0，即左右侧皆为1一个数，所以此时可将left，mid，right递归拼接回去，组成完整数组
    return quickSort_1(leftArr).concat(midValue, quickSort_1(rightArr))
}

let arr = [],
    startTime = (new Date()).getTime()

for (let i = 0; i < 100000; i++) {
    // console.log(i)
    arr.push(Math.ceil(Math.random()*100))
}
let ret = quickSort_1(arr)
let endTIme = (new Date()).getTime()

console.log((endTIme - startTime) / 1000, 's', ret)