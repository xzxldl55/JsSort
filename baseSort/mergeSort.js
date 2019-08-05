/**
 * 归并排序：对一个数组做排序时，先将数组从中间分为前后两个部分，然后对前后两部分分别进行排序（分割，排序重复之），再将排序好的两部分合并
 * 特点：
 *   ① 不原地O(n)
 *   ② 时间 O(nlogn)
 */
const mergeSortMain = arr => {
    // 采用递归
    const length = arr.length
    if (length <= 1) return arr
    let middleIndex = length >> 1,
        leftArr = arr.slice(0, middleIndex), // 拆分成两个数组
        rightArr = arr.slice(middleIndex)
    // console.log(leftArr, rightArr)
    // 递归拆分 --> 拆分到length <= 1为止，在进行每部分的sort
    return mergeSort(mergeSortMain(leftArr), mergeSortMain(rightArr))
}

const mergeSort = (leftArr, rightArr) => {
    // console.log(leftArr, rightArr)
    const ret = []

    let leftIndex, rightIndex
    leftIndex = rightIndex = 0
    // console.log(leftArr.length, rightArr.length)
    while((leftArr.length > leftIndex) && (rightArr.length > rightIndex)) {
        if (leftArr[leftIndex] <= rightArr[rightIndex]) {
            ret.push(leftArr[leftIndex++])
        } else {
            ret.push(rightArr[rightIndex++])
        }
    }
    // console.log(leftIndex, rightIndex)
    // 因为左右大小可能不一致，有没比较完的，将其遍历完
    while (leftArr.length > leftIndex) ret.push(leftArr[leftIndex++])
    while (rightArr.length > rightIndex) ret.push(rightArr[rightIndex++])

    return ret
}

let arr = [],
    startTime = (new Date()).getTime()

for (let i = 0; i < 100000; i++) {
    // console.log(i)
    arr.push(Math.ceil(Math.random()*100))
}
let ret = mergeSortMain(arr)
let endTIme = (new Date()).getTime()

console.log((endTIme - startTime) / 1000, 's', ret)

function check(arr){
    for(let i = 0, len = arr.length - 1; i < len; i++){
        if(arr[i + 1] < arr[i]){
            return console.log(`检查不通过！位置：${i}，值：${arr[i]}, ${arr[i+1]}`, arr)
        }
    }
    return console.log('检查通过', arr)
}

check(ret)