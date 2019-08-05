/**
 * 2、折半插入：介于插入思想，是在已经排序好的序列中插入，可以导入二分查找思想
 * step：
 * ① 取 0~i-1 的中间点 m ，array[i]与array[m]进行比较，如果array[i] < array[m]，则说明待插入元素i在 0~m之间，反之
 * 特点：
 *   ① 稳定
 *   ② 原地空间O(1)
 */

const binaryInsertSort = arr => {
    const length = arr.length
    if (length <= 1) return

    let currentEle, arrIndex, currentPreIndex, lowIndex, heightIndex, middleIndex
    for (arrIndex = 1; arrIndex < length; arrIndex++) {
        lowIndex = 0
        heightIndex = arrIndex - 1
        currentEle = arr[arrIndex]
        // console.log('length + arrIndex:', length, arrIndex)
        while (lowIndex <= heightIndex) {
            // console.log(lowIndex, heightIndex)
            middleIndex = (heightIndex + lowIndex) >> 1 // 右移位运算 == Math.floor((h - l) / 2)
            if (currentEle >= arr[middleIndex]) { // 说明插入位置在后半段（=是为了保持稳定性）
                lowIndex = middleIndex + 1
            } else {
                heightIndex = middleIndex - 1
            }
        }
        
        // console.log('index:', lowIndex, arrIndex, heightIndex)
        // 后移带插入位置及其后的元素
        for (currentPreIndex = arrIndex; currentPreIndex > lowIndex; currentPreIndex--){
            arr[currentPreIndex] = arr[currentPreIndex - 1]
            // console.log('arr:', arr[currentPreIndex])
        }
        // console.log('curr:', currentEle)
        // 插入元素
        arr[lowIndex] = currentEle
    }
}

let arr = [],
    startTime = (new Date()).getTime()

for (let i = 0; i < 100000; i++) {
    // console.log(i)
    arr.push(Math.ceil(Math.random()*100))
}
binaryInsertSort(arr)
let endTIme = (new Date()).getTime()

console.log((endTIme - startTime) / 1000, 's', arr)