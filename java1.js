var nestedArray = [[[1,2],[3,4],[5,6]]];
var sum = 0;
function sumTotal() {
    for (let i = 0; i <nestedArray.length; i++) {
        var list = nestedArray[i];
        for (let x = 0; x < list.length; x++) {
            var element = list[x];
            for (let y = 0; y < element.length; y++) {
                var new_list = element[y];
                sum+=new_list
                
            }   
        }
    }
}

sumTotal(nestedArray)
console.log(sum)