export const mergeSort = array => {
    if (array.length === 1) return array;
    const mid = Math.floor(array.length/2);
    const firstHalf = mergeSort(array.slice(0, mid));
    const secondHalf = mergeSort(array.slice(mid));
    const sorted = [];
    let i = 0, j = 0;
    while (i < firstHalf.length && j < secondHalf.length) {
        if (firstHalf[i] < secondHalf[j]) {
            sorted.push(firstHalf[i++]);
        } else {
            sorted.push(secondHalf[j++]);
        }
    }
    while (i < firstHalf.length) {
        sorted.push(firstHalf[i++]);
    }
    while (j < secondHalf.length) {
        sorted.push(secondHalf[j++]);
    }
    return sorted;
};

export const selectionSort = array => {
    const animations = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            animations.push([i, j, false]);
            if (array[j] < array[i]) {
                animations.push([i, j, array[j], array[i], true]);
                var temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    return animations
};