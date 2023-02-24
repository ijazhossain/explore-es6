/* 
৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
*/

const products = [
    { id: '1', name: 'phone1', price: 1500 },
    { id: '2', name: 'phone2', price: 2500 },
    { id: '3', name: 'phone3', price: 3500 },
    { id: '3', name: 'phone4', price: 4500 },
    { id: '4', name: 'phone5', price: 5000 }
];
const result = products.find(pd => pd.price === 5000);
console.log(result);