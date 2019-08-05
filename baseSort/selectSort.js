const chalk = require('chalk')
/**
 * 选择排序：类似插入排，分已排区间与未排区间，每次从未排中找到一个min/max（顺序，逆序）放到已排序末尾
 *          即与冒泡相反，冒泡为已排在后面，选择在前面
 * step：
 * ① 首先最开始，已排序区间length = 0，则从序列中找到min，放到最前面，此时其为已排区间
 * ② 再从未排区间找min，放到已排的末尾
 * ③ 重复②直至排完
 * 特点：
 * ① 不稳定（每次都会交换位置，而且不是相邻比较）
 * ② 原地排序O(1)
 * ③ 时间复杂：min = max = avg = o(n²)
 */
const selectSort = arr => {
    const length = arr.length
    if (length <= 1) return

    let currentIndex, minCurrentIndex, searchIndex
    for (currentIndex = 0; currentIndex < length; currentIndex++) {
        minCurrentIndex = currentIndex // 初始化minEle
        searchIndex = length
        while (searchIndex > currentIndex) {
            if (arr[searchIndex] < arr[minCurrentIndex])
                minCurrentIndex = searchIndex // 改变最小值序列
            searchIndex--
        }
        [arr[currentIndex], arr[minCurrentIndex]] = [arr[minCurrentIndex], arr[currentIndex]]
    }
}

let arr = [],
    startTime = (new Date()).getTime()

for (let i = 0; i < 100000; i++) {
    arr.push(Math.ceil(Math.random()*100))
}
// console.log(arr)
selectSort(arr)
let endTime = (new Date()).getTime()
console.log(chalk.green('耗时为：', (endTime - startTime)/1000, 's'))
// console.log(chalk.blue('[',arr,']'))