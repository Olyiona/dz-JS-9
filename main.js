
//CALL BACK

// let goodMood = 0

// function cookBreakfast (isbreackfastDone,cb){
//     setTimeout(()=>{
// if (isbreackfastDone) {
//     goodMood=100
//     cb(null,goodMood)
// }else {
//     cb("fu",null)
// }
// },5000)
// }




// function goshower (ifhavetime,cb){
//     setTimeout(()=>{
// if (ifhavetime) {
//     goodMood=300
//     cb(null,ifhavetime)
// }else {
//     cb("fu",null)
// }
// },3000)
// }





// function gowork (notrafficjam,cb){
//     setTimeout(()=>{
// if (notrafficjam) {
//     goodMood=500
//     cb(null,notrafficjam)
// }else {
//     cb("blyaha",null)
// }
// },6000)
// }




// function work (projectDone,cb){
//     setTimeout(()=>{
// if (projectDone) {
//     goodMood=100
//     cb(null,projectDone)
// }else {
//     cb("shoRobiti",null)
// }
// },8000)
// }




// function goMarket (byVkusnyashki,cb){
//     setTimeout(()=>{
// if (byVkusnyashki) {
//     goodMood=400
//     cb(null,byVkusnyashki)
// }else {
//     cb("Plakat",null)
// }
// },4000)
// }






// function goBar (goodCompany,cb){
//     setTimeout(()=>{
// if (goodCompany) {
//     goodMood=1000
//     cb(null,goodCompany)
// }else {
//     cb("dontlacky",null)
// }
// },4000)
// }




// function cookDinner (tastyGood,cb){
//     setTimeout(()=>{
// if (tastyGood) {
//     goodMood=800
//     cb(null,goodMood)
// }else {
//     cb("nutakesobi",null)
// }
// },5000)
// }




// cookBreakfast(true,()=>{
//    console.log('cook Breakfast',goodMood)
//    goshower(true,()=>{
//    console.log('goshower',goodMood)
//    gowork(true,()=>{
//    console.log('gowork',goodMood)
//    work(true,()=>{
//    console.log('work',goodMood)
  
//    goMarket(false,(err,data)=>{
//        if(err){
//     console.log('goMarket',err)}
//     else{
//     console.log(data+'data')}
 
//    goBar(true,()=>{
//    console.log('goBar',goodMood)
//    cookDinner(true,()=>{
//    console.log('cook Dinner',goodMood)
// })
// })
// })
// })
// })
// })
// })







//Promise




// let goodMood = 0

// function cookBreakfast (isbreackfastDone){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
// if (isbreackfastDone) {
//     goodMood=100
//     resolve(goodMood)
// }else {
//     reject("fu")
// }
// },5000)
// })}




// function goshower (ifhavetime){
//     return new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
// if (ifhavetime) {
//     goodMood=300
//     resolve(goodMood)
// }else {
//     reject("dirty")
// }
// },3000)
// })}



// function gowork (notrafficjam){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
// if (notrafficjam) {
//     goodMood=500
//     resolve(goodMood)
// }else {
//     reject("blyaha")
// }
// },6000)
// })}




// function work (projectDone){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
// if (projectDone) {
//     goodMood=100
//     resolve(goodMood)
// }else {
//     reject("shoRobiti")
// }
// },8000)
// })}




// function goMarket (byVkusnyashki){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
// if (byVkusnyashki) {
//     goodMood=400
//     resolve(goodMood)
// }else {
//     reject("Plakat")
// }
// },4000)
// })}





// function goBar (goodCompany){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
// if (goodCompany) {
//     goodMood=1000
//     resolve(goodMood)
// }else {
//     reject("dontlacky")
// }
// },4000)
// })}




// function cookDinner (tastyGood){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
// if (tastyGood) {
//     goodMood=800
//     resolve(goodMood)
// }else {
//     reject("nutakesobi")
// }
// },5000)
// })}


//   cookBreakfast(true)
// .then(resolve=>{
// console.log('cook Breacfast',resolve)

// return goshower (goodMood)

// })


// .then(resolve=>{
//     console.log('go shower',resolve) 


// return gowork(goodMood)

// })

// .then(resolve=>{
//     console.log('go work',resolve)

// return work(goodMood)
// })

// .then(resolve=>{
//     console.log('work',resolve)

// return goMarket(false)
// })
// .catch(reject=>{
//     console.log('go Market',reject)
    
//     return goBar(goodMood)
// })

// .then(resolve=>{
//     console.log('go Bar',resolve)

//     return cookDinner(goodMood)

// })
// .then(resolve=>{
//     console.log('cook Dinner',resolve)

// })







//ASINK

// let goodMood = 0

// function cookBreakfast (isbreackfastDone){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
// if (isbreackfastDone) {
//     goodMood=100
//     resolve(goodMood)
// }else {
//     reject("fu")
// }
// },5000)
// })}




// function goshower (ifhavetime){
//     return new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
// if (ifhavetime) {
//     goodMood=300
//     resolve(goodMood)
// }else {
//     reject("dirty")
// }
// },3000)
// })}



// function gowork (notrafficjam){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
// if (notrafficjam) {
//     goodMood=500
//     resolve(goodMood)
// }else {
//     reject("blyaha")
// }
// },6000)
// })}




// function work (projectDone){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
// if (projectDone) {
//     goodMood=100
//     resolve(goodMood)
// }else {
//     reject("shoRobiti")
// }
// },8000)
// })}




// function goMarket (byVkusnyashki){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
// if (byVkusnyashki) {
//     goodMood=400
//     resolve(goodMood)
// }else {
//     reject("Plakat")
// }
// },4000)
// })}





// function goBar (goodCompany){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
// if (goodCompany) {
//     goodMood=1000
//     resolve(goodMood)
// }else {
//     reject("dontlacky")
// }
// },4000)
// })}




// function cookDinner (tastyGood){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
// if (tastyGood) {
//     goodMood=800
//     resolve(goodMood)
// }else {
//     reject("nutakesobi")
// }
// },5000)
// })}


// async function myDay(){
//     try{
// let Breacfast = await cookBreakfast(true)
// console.log('cook Breakfast',Breacfast)

// let shower = await goshower(true)
// console.log('go shower',shower)

// let wayTowork = await gowork(true)
// console.log('go work', wayTowork)

// let hardwork = await work(true)
// console.log('work',hardwork)

// let market = await goMarket(false)
// console.log('go Market',market)

// let Bar = await goBar(true)
// console.log('go work', Bar)

// let dinner = await cookDinner(true)
// console.log('work',dinner)}
// catch(e){
//     console.log(e)
// }
// }
//myDay()





