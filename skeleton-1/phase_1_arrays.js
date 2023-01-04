

Array.prototype.uniq = function() {
    let newArr = [];
    for (let i = 0; i < this.length; i++){
        let num = this[i];
        
        if (newArr.includes(num)) {
            continue
        } else {
            newArr.push(num);
        }

    }
    return newArr
}

let nums = [1,1,2,2,3,3,3,4,4];
console.log(nums.uniq())

Array.prototype.twoSum = function() {
    let newArr = [];
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = 1; j < this.length; j++) {
            let num1 = this[i];
            let num2 = this[j];
            if (num1 + num2 === 0) {
                newArr.push([i,j]);
            }
        }
    }
    return newArr;
}

//2D array

Array.prototype.transpose = function() {
    let outterArr = []
    for (let i = 0; i < this.length; i++){
        let innerArr = [];
        for (let j = 0; j < this.length; j++){
            innerArr.push(this[j][i]);
        }
        outterArr.push(innerArr);
        innerArr = [];
    }
    return outterArr;

}

// Array.prototype.transpose = function transpose() {
//     let temp = []; 
//     for (let i = 0; i < this.length; i++){
//         for (let j = 0; j < i; j++){
//             temp = this[i][j]
//             this[i][j] = this[j][i]
//             this[j][i] = temp
//         }
//     }
//     return temp
// }

let pose = [[1,2,3],[1,2,3],[1,2,3]]
console.log(pose.transpose())