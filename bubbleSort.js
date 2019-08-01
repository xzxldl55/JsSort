/**
 * 1、每次只操作相邻两元素
 * 2、一次冒泡至少会让一个元素移动到正确位置，重复n次就完成了n个数据的排序
 * 优点：最基础的排序算法，简单易用
 * 缺点：比较次数多O(n²)效率低
 * 特点：
 *   ①只涉及相邻数据交换，空间复杂度O(1)，为原地排序
 *   ②只有前者比后者大才交换，最终大小相同数据相对位置不变，为稳定排序
 *   ③时间复杂度：最小O(n), max:O(n²), avg: O(n²)
 */
// 优化：当某次冒泡排序时，没有发生任何交换，直接结束
const bubbleSort = arr => {
    console.log("耗时：")
    let startTime = (new Date()).getTime()
    const length = arr.length
    // 小于等于1长度没必要排序
    if (length <= 1) return 
    for (let i = 0; i < length; i++) {
        // 提前退出flag
        let hasChange = false
        // j<length - i - 1因为，内层length-i-1到length-1已经拍好了无须比较
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                let tem = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = tem
                hasChange = true
            }
        }
        if (!hasChange){
            let endTime = (new Date()).getTime()
            console.log((endTime - startTime)/1000, 's')
            return
        }
    }
    let endTime = (new Date()).getTime()
    console.log((endTime - startTime)/1000, 's')
}
let arr = []
for (let i = 0; i < 100000; i++)
    arr.push(Math.random()*100)
bubbleSort(arr)
console.log(arr)