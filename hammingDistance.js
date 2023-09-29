// hamming Distance

//input : hello, hrlle
// output: 2

function hammingDistance(x, y) {
    x = x.toString(2);
    y = y.toString(2);

    if (x.length < y.length) {

         while(x.length !== y.length) x = "0" + x;
    }
    else{
        while(x.length !== y.length) y = "0" + y; 
    }

    let distance = 0;

    for (let i = 0; i < x.length; i++) {
        if (x[i] !== y[i]) {
            distance++;
        }
    }

    return distance;
}

console.log(hammingDistance("hello", "hrlle"))