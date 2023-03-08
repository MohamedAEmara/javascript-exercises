const findTheOldest = function(people) {
    let mx = 0;
    let ans = "";
    let ret = 0;
    let n = people.length;
    for(let i=0; i<n; i++) {
        console.log(people[i]);
        let diff = parseInt(people[i].yearOfDeath) - parseInt(people[i].yearOfBirth);
        diff = parseInt(diff);
        if(diff >= mx) {
            ans = people[i].name;
            mx = diff;
            ret = i;
        }
        if(isNaN(people[i].yearOfDeath))
        {
            mx = Infinity;
            ret = i;
        }
        
    }

    return people[ret];
    
};

// Do not edit below this line
module.exports = findTheOldest;
