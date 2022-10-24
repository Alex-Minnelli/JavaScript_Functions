console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
    if (count < 0){
        for(i = count; i < 0; i++){
            if(i%2){
                console.log(i);
            }
        }
    }
    for (i = 0; i <= count; i++){
        if(i%2){
            console.log(i);
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let underSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    return age<16 ? underSixteen : aboveSixteen;
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function quadrant(x, y){
    let ans = '';

    switch (true){
        case (x == 0 && y == 0):
            ans = `(${x},${y}) is the origin`;
            break;
        case (x == 0):
            ans = `(${x},${y}) is on the y axis`;
            break;
        case (y == 0):
            ans = `(${x},${y}) is on the x axis`;
            break;
        case (x > 0 && y > 0):
            ans = `(${x},${y}) is in Quadrant 1`;
            break;
        case (x < 0 && y > 0):
            ans = `(${x},${y}) is in Quadrant 2`;
            break;
        case (x < 0 && y < 0):
            ans = `(${x},${y}) is in Quadrant 3`;
            break;
        case (x > 0 && y < 0):
            ans = `(${x},${y}) is in Quadrant 4`;
            break;
    }
    return ans;
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangleType(a, b, c){
    let ans;

    if (a + b <= c || a + c <= b || b + c <= a){
        ans = `Sides ${a}, ${b}, ${c} makes and invalid triangle`;
    } else if (a == b && b == c && a == c){
        ans = `Sides ${a}, ${b}, ${c} make an equilateral triangle`;
    } else if (a != b && b != c && a != c){
        ans = `Sides ${a}, ${b}, ${c} make a scalene triangle`;
    } else if (a == b || b == c || a == c){
        ans = `Sides ${a}, ${b}, ${c} make an isoceles triangle`;
    }   
    return ans; 
}


// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function data(planLimit, day, usage){
    monthDays = 30;
    let daysLeft = monthDays-day;
    let currentAvg = usage/day;
    let avg = planLimit/monthDays;


    console.log(`${day} days, ${daysLeft} remaining`);
    if(usage > planLimit){
        console.log(`You have EXCEEDED your monthly data limit`);
    }else if(currentAvg > avg){
        console.log(`You have ${planLimit-usage} GB left`);
        let excess = ((monthDays*usage)/day)-planLimit;
        console.log(`You are EXCEEDING your safe average daily use by using(${currentAvg} GB/day),\ncontinuning this usage, you'll exceed your data plan by ${excess} GB`);
        let safe = (planLimit-usage)/(monthDays-day);
        console.log(`To stay below your data limit, use no more than ${safe} GB/day.`)
    } else if (avg > currentAvg){
        console.log(`You have ${planLimit-usage} GB left`);
        console.log(`You are safe to use up to ${(planLimit-usage)/(monthDays-day)} GB/day`);
    }
}



/* The function should compute whether the user is over, under, or right on the average daily usage under the plan. 
It should also inform them of how much data is left 
and how much, on average, they can use per day for the rest of the month. 
If they’ve run out of data, it should inform them of that too. */