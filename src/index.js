
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = []
    let flag = 0;
    if(matrix === undefined || matrix.length === 0) return [];
matrix.forEach(value=>{
    
    if(flag === 0){
        result.push(value)
        flag = 1;
    }else if(flag === 1){
        result.push(value.reverse())
        flag = 0;
    }
    
})
    return result.flat();
}
