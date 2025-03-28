function mergesort(arr){
    if (arr.length <=1){
        return arr;
    }

    let mid =Math.floor(arr.length/2);
    let left =arr.slice (0,mid);
    let right =arr.slice(mid);


    left =mergesort(left);
    right=mergesort(right);

    return merge(left,right);
}


function merge(left,rigth){
    let result=[];
    let i=0,j=0;

    while (i<left.length && j<rigth .length){

        if (left[i]<rigth[j]){
            result.push(left[i]);
            i++;
        }else{
            result.push(rigth[j]);
            j++
        }
    }
    return result.concat(left.slice(i)).concat(rigth.slice(j));
}


let arr=[5,3,8,4,2]


console.log(mergesort(arr));


