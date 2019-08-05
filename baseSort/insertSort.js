/**
 * 插入排序：分为直接插入，折半插入与希尔排序
 * 1、直接插入：即类似于打牌时洗牌，将新摸到的牌插入到已经洗好的牌堆里。即通过构建有序序列，而未排序数据则在有序序列中从后向前扫描，找到相对应位置插入
 * step：
 * ① 从第一个元素开始，该元素可认为已经被拍虚了
 * ② 取出下一个元素，在已经排序的元素序列中从后向前扫描
 * ③ 如果被扫描元素，大于新的元素，则将被扫描元素后移一位
 * ④ 重复步骤3，直到扫描到元素小于等于该元素或所有有序元素扫描完毕
 * ⑤ 将该元素插入该位置
 * ⑥ 重复2~5
 * 特点：
 *   ① 空间复杂O(1)为原地排序
 *   ② 稳定
 *   ③ 时间复杂：min:O(n), max:O(n²), avg:O(n²)
 */
// 直接插入
const insertSort = arr => {
    const length = arr.length
    if (length <= 1) return

    let waitForCompare, currentEle
    // i = 1是因为默认第一个元素为已排序
    for (let i = 1;i < length; i++) {
        waitForCompare = i - 1
        currentEle = arr[i] // 切记为元素不能为index，因为如果进入比较成功，则原位会被占据
        while (i >= 0 && arr[waitForCompare] > currentEle) {
            // 当还没遍历完，且待比较元素大于待排序元素时继续向前比较
            // 待比较元素后移一位
            arr[waitForCompare + 1] = arr[waitForCompare]
            waitForCompare--
        }
        if (waitForCompare + 1 !== i) { // 避免同一个元素给自己赋值（即，第一次比较就成功了，原地赋值）
            arr[waitForCompare + 1] = currentEle // wariForCompare最终还被--了，所以预留位置为+1
        }
    }
}

let arr = [],
    startTime = (new Date()).getTime()

for (let i = 0; i < 100000; i++) {
    arr.push(Math.ceil(Math.random()*100))
}
console.log(arr)
insertSort(arr)
let endTime = (new Date()).getTime()
console.log('耗时为：', (endTime - startTime)/1000, 's')
console.log(arr)