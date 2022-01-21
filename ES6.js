//Scope
// function Scope(){
//     {const a = 1
//     console.log(a)} //lOCAL
//     {var b = 2
//      console.log(b)}//GLOBAL
//     {let c = 3
//     console.log(c)}
//     return "Hello ES6"
//   }
//   console.log(Scope())

//Constant
// const a = 3
// // a = 6
// const tab = [1,3,4,5,6,7]
// tab[0] = 9
// console.log(tab)
// // tab = [1,3,4]
// tab.push(10)
// console.log(tab)
// const obj = {name :"Hachem", age : 12}
// obj.name = "Sahla"
// console.log(obj)

// Arrow function
// function Sum(a,b){
//     return a+b
//   }
//   console.log(Sum(1,2))  
//   const Som  =(a,b)=>{
//       return a+b
//   }
//   console.log(Som(1,5))  
//   const Soom=(a,b)=> a+b  
//   const Salutation=name=> "Hello "+name
//   console.log(Salutation("Hachem"))  
//   const SalutationSahla=()=> "Hello Sahla"

//Template Literals
// const name = 'Sahla'
// const job = 'Student'
// const track = 'Fullstack JS'
// console.log(name+" is "+job+" in "+track)
// console.log(`${name} is ${job} in ${track}`)
// // const ch = "Sofien
// // Sahla 
// // Hachem"
// // console.log(ch)
// const ch = `Hachem
// Sahla
// Sofieneefdefefe efefefecvded efefe`
// console.log(ch)

//Ternary operator
// var age = 70
// if(age<18){
//   console.log("Enfant")
// }else if(age<60){
//   console.log("Adult")
// }else{
//   console.log("Vieux")
// }
// age<18 ? console.log("Enfant") : age<60 ? console.log("Adult") : console.log("Vieux") 
// var age = 40
// if(age <70){
//   console.log("Inférieur à 70")
// }
// age<70 && console.log("Inférieur à 70") 


// Destructuring
// const Hello =a=> `${a.name} has ${a.age} and is studing ${a.fomation.track} in ${a.fomation.Local}`
// var user = {name : "Sahla", age : 29, fomation : {track : "Fullstack" , Local : "Lac"} }
// // console.log(Hello(user))
// const HelloH=d=>{
//   let {name,age,fomation} = d
//   let {track, Local} = fomation
//   return `${name} has ${age} and is studing ${track} in ${Local}`
// }
// console.log(HelloH(user))

// SpreadOperator
// var user = {name : 'Sofiene', age : 27}
// const infoUser = {track : 'FullStack JS', Local : 'Lac'}
// var infoTot = user+infoUser
// var infoTot = {user,infoUser}
// var infoTot = {...user,...infoUser}
// console.log(infoTot)
// user = {...user,id : 1,name : 'Sahla'}
// console.log(user)
// var tab1 = [1,2,4,9,5,8,4]
// var tab2 = [2,4,3,4]
// var Hachem = [...tab1,...tab2]
// var L = [...tab1]
// console.log(Hachem)
// console.log(L)

//Reduce 
// var t = [0,2,3,4]
// console.log(t.reduce((a,c,i,tab)=> i%2 != 0 ? a+c : a  )) Astuce Sofiene a initialisé à 1

//Foreach Map
// var t = [0,2,3,4]
// var c = t.map((el,i,tab)=>el+1)
// var j = t.forEach(el=>console.log(el+1))
// console.log(c)
// console.log(j)
// console.log(c)

//Filter 
// var t = [0,2,3,4]
// console.log(t.filter((el,i,tab)=>el>=2))
// console.log(t.filter((el,i,tab)=>i>=2))

// Find
// var c = t.find(el =>el === 3)
// console.log(c)
// var tab1 = t.filter((el,i,tab)=>el>=2).map(el=> el+1)

// findIndex
// var tab1 = t.findIndex(el=> el == 2)
// console.log(tab1)

// Sort
// console.log(t.sort((a,b)=>b-a))

// Splice  
// console.log(t.splice(1,2))

//Split
// var ch = "Hello Sahla Fullstackjs"
// console.log(ch.split(" "))

// Join
// var t = [0,7,5,4]
// var tab = ["Mahmoud","Sahla", "Hachem"]
// var ch = "Hello Sahla Fullstackjs"
// console.log(ch.split(" "))
// console.log(tab.join(" "))


  




