function quicksort (arr) {
    if (arr.length <=1){
        return arr ;
    }


    let pivot =arr[arr.length-1];
    let left =[] ;
    let right =[];

    for (let i=0 ; i <arr.lenght - 1 ; i++){
        if (arr[i]<pivot){
            left.push(arr[i]) ;
        }else{
            right.push(arr[i])
        }
    }

    return [... quicksort(left),pivot, ...quicksort(right)];


}
let arr =[5,3,8,4,2]
console.log(quicksort(arr)); 


