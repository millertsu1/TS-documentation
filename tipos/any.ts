(()=>{

let avenger:any = 123;
avenger = 'Dr Strange';
avenger = true
let exists;
let power;

avenger = 'Hulk';
console.log((avenger as string).charAt(0));
    
avenger =123.5677887978;
console.log(<number>avenger.toFixed(2));

console.log(exists);
console.log(power);

})()