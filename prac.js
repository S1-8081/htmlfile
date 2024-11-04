// function maxLen(arr){
//     let idx;
//     for(let i=0;i<arr.length;i++){
//         let len=0;
//         if(len<arr[i].length)
//             idx=i;
//     }
//     return idx;
// }
// let noOfVovels=function(str){
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u')
//         count++;
//     }
//      return count;
// }
// let arr=["india","australia","United states of america","this is the real state of Shiv Babu Dubey"];
// let idx=maxLen(arr);
// console.log(arr[idx]);
// console.log(noOfVovels(arr[idx]));


let func=function(a,b){
    console.log(Math.floor(Math.random()*(b-a))+a);
}
func(10,18);


