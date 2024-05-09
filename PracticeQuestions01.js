// Project: Practice Questions 1
// Created by: Mayowa Ogunyemi
// Date created: May 6, 2024
// Date completed: May 8, 2024 


// Question 1 ==================================================================
const label = "keyincollege";
const ltd = "ca";
const domainName = label + "." + ltd;   console.log(domainName);
console.log(``);

// Question 2 ==================================================================
isKeyin = label.toLowerCase().includes("keyin");
console.log(isKeyin);
console.log(``);

// Question 3 ==================================================================
isNotKeyin =! isKeyin;  console.log(isNotKeyin);
console.log(``);

// Question 4 ==================================================================
let byte1 = 2;
let byte2 = 4;
let byte3 = 64;
let byte4 = 128;

const ipAddress = `${byte1}.${byte2}.${byte3}.${byte4}`;  console.log(ipAddress)
console.log(``)

// Question 5 ==================================================================
multiNumber = 15
for(var a = 1; a < 11; a++) {console.log(a * multiNumber)
};


console.log(``);


// Question 6 ==================================================================
const integers = [1,2,3,4,5,6,7,8,9,10];

for(let i = 1; i <= 10; i ++) {
    let integersNew = integers.map(multiplyArray);
    function multiplyArray(num) {
        return num * i
        };
    console.log(integersNew);
    
};
console.log(``);

// Question 7 & 8 ================================================================
let evenCounter = 0
let oddCounter = 0

for(var i = 1; i <= 100; i+=1) {

    if(i %2 == 0) {console.log(`${i} is an EVEN number`);
        evenCounter += i}
    else if(i % 2 == 1) {console.log(`${i} is an ODD number`); oddCounter += i}
    else if(i = 0) {console.log(`${i} doesn't count.`)}   
    };
    console.log(``);
    console.log(`Sum of even numbers: ${evenCounter}`)
    console.log(`Sum of odd numbers: ${oddCounter}`)
    console.log(``);

// Question 9 ==================================================================
function isPerfect(modulusNumber) {
    let n = 0;
    let sum = 0;

    for(let i = 0; i < modulusNumber; i++) {
        n += 1;
        if(modulusNumber % n === 0) {
            sum += n;
        };
    };

    if(sum - modulusNumber === modulusNumber) {

        console.log(`******* ${modulusNumber} is a PERFECT NUMBER *******`)
    } else {console.log(`    ${modulusNumber} is a NOT a perfect number    `)}
    
    return modulusNumber
};


isPerfect(28);
console.log(``);

for(let i = -10; i <= 30; i++) {
    isPerfect(i);
};

console.log(``);

// Question 10 =================================================================
function isPrime (primusNumber){ 
    let n = 0;
    let sum = 0;

    for(let i = 0; i < primusNumber; i++) {
        n += 1;
        if(primusNumber % n === 0) {
            sum += n
        };
    };

    if(primusNumber > 1 && sum - primusNumber < 2) {
        console.log(`**${primusNumber} is a PRIME NUMBER**`)}
    else if(primusNumber > 1 && sum - primusNumber > 2) {
        console.log(`${primusNumber} is NOT a prime number`)}
    else if(primusNumber < 1) {console.log(`${primusNumber} is...Not to be discussed.`)}
    else if(primusNumber = 1) {
    console.log(`${primusNumber} is just the number 1`)};
    
    return primusNumber;
    
};

    


isPrime(47);
isPrime(48);
console.log(``);

for(let i = -5; i <= 100; i++) {
    isPrime(i);
};

