let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 19;
if(age >= 18 && registeredEarly == false){
  raceNumber += 1000;
};
if(age > 18 && raceNumber >= 1000){
   console.log(`Your race will start at 9:30 am and your race number is ${raceNumber}`);
}else if(age>18 && raceNumber <=1000){
  console.log(`11:00am Late adults runner ${raceNumber}`)
}else if(age < 18 && raceNumber <=1000){
  console.log(`Your racing time will start at 12:30pm with a race number of ${raceNumber}`);
}else{
  console.log(`See the registration desk`)
}