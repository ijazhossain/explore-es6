/* 
২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
*/
const templateString1 = `My name is Imran Ali`;

const age = 12;
const schoolName = 'Primary School';

const templateString2 = `My age is ${age} and I read in ${schoolName}`;
// console.log(templateString2);

const birthYear = [1990, 1999, 2000, 2002];
const [year1, year2, ...year3] = birthYear;
const templateString3 = `Rahim born in ${year1}
karim born in ${year2}
Shubtara born in ${year3[0]}
Nafiza born in ${year3[1]}
`;
console.log(templateString3);
