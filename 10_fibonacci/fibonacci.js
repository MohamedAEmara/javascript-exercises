const fibonacci = function(number) {
    test = parseInt(number)

    if(!isNaN(test) && test > 0) {
        number = parseInt(number);
        if(number == 1)
            return 1;
        if(number == 2)
            return 1;
        let one = 1;
        let two = 1;
        for(let i=3; i<=number; i++)
        {
            res = one + two;
            one = two;
            two = res;
        }
        return res;
        
    }
    else return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
