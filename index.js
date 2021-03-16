//Callback
//exercise 2
// const strLength=(name,callbackFunc)=>{
//   callbackFunc(name);
// }
// strLength("Utsav",(word)=>console.log(`OMG! my name is ${word.length} char long!`));





//exercise 3
// const willThanosKillMe=(name,killMe,killMeNot)=>((name.length%2===0)?killMe(name):killMeNot(name));
// willThanosKillMe("Utsav",(word)=>console.log(`${word} will be killed`),(word)=>console.log(`${word} will be not killed`));





//exercise 4
// console.log("work1");
// setTimeout(()=>console.log("Hello after everything"),0);
// console.log("work2");
// console.log("work3");
// setTimeout(()=>console.log("Hello after 5 seconds"),5000);
// console.log("work4");
// console.log("work5");





//exercise 5
// setTimeout(() => console.log("A"), 0);
// setTimeout(() => console.log("C"), 0);
// setTimeout(() => console.log("B"), 0);

// setTimeout(() => console.log("A"), 1000);
// setTimeout(() => console.log("B"), 400);
// setTimeout(() => console.log("C"), 1300);

// console.log("A");
// setTimeout(() => console.log("B"), 0);
// console.log("C");





//exercise 6
// const printbangbang = (num) => {
//   const timerId = setInterval(()=>{
//     if(num===0)
//     console.log("Bang Bang");
//     else
//     {
//       console.log(num);
//       num--;
//     }
//   } ,1000)

//  setTimeout(() => clearInterval(timerId) , (num+2)*1000);
// }
// printbangbang(10);




//exercise 8


