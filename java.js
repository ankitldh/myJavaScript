var nestedArray = [[1,2,3],[4,5,6],[7,8],[9,10,11,12]];
function printEvens() {
    for (let i = 0; i <nestedArray.length; i++) {
        var array = nestedArray[i];
        for (let x = 0; x < array.length; x++) {
            const list = array[x];
            if (list%2==0) {
                console.log(list)
                
            }   
        }  
    }
}
printEvens(nestedArray)

