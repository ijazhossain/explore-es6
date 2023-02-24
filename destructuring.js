/* 
.
৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 

*/
const phone = {
    name: 'NOKIA',
    color: 'white',
    price: 3500,
    year: 2009,
    manufacturer: 'nokia.co'
};
const { name, color: body, ...rest } = phone;
console.log(body);
console.log(rest);