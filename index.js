const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = 0
// Code your solution here
let sum = batteryBatches.reduce(function(total, element){
  return totalBatteries += element
}, totalBatteries)

console.log(sum)