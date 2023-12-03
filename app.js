// --> Chapter 15 --> Arrays

//-----------------------------------------------------------------------------------------------------------------------------
// var num1 = 3;
// var num2 = 4;
// // array is a reserved word. Array is a collection of data. Initial index of array is always 0 in JS.
// var arr = [
//   "01",
//   "Saad",
//   "CSC-201",
//   "SMIU",
//   "105.48",
//   true,
//   false,
//   30.13,
//   54,
//   "Farhan Ali",
// ];
// document.write(arr[3]);
// document.write(arr[7]);
// // more than 1 space doesn't count in JS.
// document.write(`<br><br> Name is: ${arr[1]} <br>    University is: ${arr[3]}`);
//-----------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------
// var arr1 = [];
// arr1[0] = "Ali";
// arr1[1] = "Farhan";
// arr1[3] = 29;
// arr1[4] = false;
// document.write(arr1[2]);
// document.write(`<br> Boolean value is: ${arr1[4]} <br>  `);
// document.write(arr1);   // this is not the right way to print data of array in JS.
//-----------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------
// methods

// push          --> akhir is add
// pop           --> akhir se delete
// shift         --> shuru se delete
// unshift       --> shuru se add
// slice         --> copy karta hai
// spice         --> beech se add ya phir delete
//-----------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------
// var arr2 = ["01", "saad", "CSC-201", "SMIU", true, 12, 30.12];
// arr2.push("Daketi", "Mera Dil");
// document.write(arr2);

// arr2.pop();
// arr2.pop();
// arr2.pop();
// document.write(`<br>` + arr2);

// arr2.unshift("add", "hogaya");
// document.write(`<br>` + arr2);

// arr2.pop();
// arr2.pop();
// document.write(`<br>` + arr2);

// arr2.shift();
// document.write(`<br>` + arr2);

// arr2[1] = "Rehman";
// document.write(`<br>` + arr2);
//-----------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------
// var arr3 = ["01", "saad", "CSC-201", "SMIU", true, 12, 30.12];

// arr3[1] = "Rehman";
// arr3.pop();
// arr3.shift();
// arr3.pop();
// arr3.push("nayi", "value");
// arr3[2] = "hello";
// arr3.unshift("kesa", "diya");
// arr3.pop();
// arr3.pop();
// arr3.shift();
// arr3.shift();
// var abc = "haha";
// arr3.unshift("world", abc);
// arr3.pop();

// // Output of above operations:
// // 01,Rehman,csc-201,smiu,true,12,30.12
// // 01,Rehman,csc-201,smiu,true,12
// // Rehman,csc-201,smiu,true,12
// // Rehman,csc-201,smiu,true,nayi,value
// // Rehman,csc-201,hello,true,nayi,value
// // kesa,diya,Rehman,csc-201,hello,true,nayi,value
// // kesa,diya,Rehman,csc-201,hello,true,nayi
// // kesa,diya,Rehman,csc-201,hello,true
// // diya,Rehman,csc-201,hello,true
// // Rehman,csc-201,hello,true
// // world,haha,Rehman,csc-201,hello,true
// // world,haha,Rehman,csc-201,hello
//-----------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------
// var arr4 = ["01", "saad", "CSC-201", "SMIU", true, 12, 30.12];

// // arr4.splice(1, 3);
// // document.write(arr4);

// // arr4.splice(1, 3, "Usama", "Hadi");
// // document.write(arr4);

// // arr4.splice(2, 5);
// // document.write(arr4);

// arr4.splice(2, 0, "Taha");
// document.write(arr4);

// // splice takes 3 parameters.
// // 1st parameters tells to give me starting address number
// // 2nd parameters how many elements to delete
// // 3rd parameter is optional, 4th param is optional, and so on..
//-----------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------
// var arr5 = ["True", "false", 20, "Ali", undefined, "hello", 12.2, false];

// arr5.pop();
// arr5.push("0");
// arr5.shift();
// arr5.pop();
// arr5.pop();
// arr5.unshift(arr5[2],'updated');
// arr5.splice(1)
// arr5.push('new')

// //true,false,20,ali,undefined,hello,12.2
// //true,false,20,ali,undefined,hello,12.2,0
// //false,20,ali,undefined,hello,12.2,0
// //false,20,ali,undefined,hello,12.2
// //false,20,ali,undefined,hello
// //ali,UPDATED,undefined,hello
// //ali,
// //ali,new

// document.write(arr5);
//-----------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------
// var arr6 = ["True", "false", 20, "Ali", undefined, "hello", 12.2, false];

// var arr7 = arr6.slice(0, 3);
// document.write(arr7);
//-----------------------------------------------------------------------------------------------------------------------------


