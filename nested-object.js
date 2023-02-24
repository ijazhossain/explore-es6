/* 
১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )
*/
const student = {
    name: 'Fahim Hossain',
    class: 6,
    address: {
        home: 'uttra',
        city: 'dhaka',
        postOffice: {
            name: 'dhaka city post office',
            code: '1216'
        }
    },
    examMarks: {
        bangla: [45, 77],
        english: [55, 66],
        math: [78, 65]

    }

}
const postOfficeCode = student.address?.postOffice?.code;
console.log(postOfficeCode);