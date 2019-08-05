/**
 * 快速排序_2：
 */
const quickSort_2 = (arr, left, right) => {
	let len = arr.length,
		partitionIndex;
	left = typeof left != 'number' ? 0 : left;
	right = typeof right != 'number' ? len - 1 : right;

	if (left < right) {
		partitionIndex = partition(arr, left, right);
		quickSort_2(arr, left, partitionIndex - 1);
		quickSort_2(arr, partitionIndex + 1, right);
	}
	return arr;
};

const partition = (arr, left, right) => {
	//分区操作
	let pivot = left, //设定基准值（pivot）
		index = pivot + 1;
	for (let i = index; i <= right; i++) {
		if (arr[i] < arr[pivot]) {
			swap(arr, i, index);
			index++;
		}
	}
	swap(arr, pivot, index - 1);
	return index - 1;
};

const swap = (arr, i, j) => {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
};

let arr = [],
    startTime = (new Date()).getTime()

for (let i = 0; i < 100000; i++) {
    // console.log(i)
    arr.push(Math.ceil(Math.random()*100))
}
let ret = quickSort_2(arr)
let endTIme = (new Date()).getTime()

console.log((endTIme - startTime) / 1000, 's', ret)