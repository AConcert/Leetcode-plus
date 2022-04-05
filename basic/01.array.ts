/* 删除 index 位置的元素 */
function remove(index: number, arr: any[]): void {

    if (index < 0) {
        return;
    }

    for (let i = index; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }

    arr.pop();
}

/* 在 index 后面插入一个 element */
function insert(index: number, element: any, array: any[]): void {

    if (index < 0 || index > array.length) {
        return;
    }

    for (let i = array.length - 1; i >= index + 1; i--) {
        array[i + 1] = array[i];
    }

    array[index + 1] = element;
}

const arr = [1, 2, 4, 5, 6, 7, 8];
remove(4, arr)
console.log(arr);