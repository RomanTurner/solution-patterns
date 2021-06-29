// What is the Base Case?
// Different Input - the recursive call on a subset of the data. 

function countDown(num) {
    if (num <= 0) {
        return;
    }
    console.log(num);
    num--;
    countDown(num)
}

countDown(4);