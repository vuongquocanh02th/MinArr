function minArr(arr) {
    let min = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
let arr1 = [1, 2, 0, 4];
let min = minArr(arr1);
alert(min);
