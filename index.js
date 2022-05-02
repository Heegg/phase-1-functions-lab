// Code your solution in this file!

function distanceFromHqInBlocks(pickUpLocation) {

   if (pickUpLocation < 42) {
       return 42 - pickUpLocation;
   }else {
       return pickUpLocation - 42;
   }
  }

function distanceFromHqInFeet(pickUpLocation) {
  const totalBlocks = distanceFromHqInBlocks(pickUpLocation) 
  return totalBlocks * 264
}

function distanceTravelledInFeet(start, destination){
  if (destination > start){
    const numBlocks = destination - start
    return numBlocks * 264
  } else {
    const numBlocks = start - destination
    return numBlocks * 264
  }
  
}

function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet (start, destination)
    if ( feet <= 400){
      return 0
    } else if( feet > 2500){
      return 'cannot travel that far'
    } else if( feet > 2000){ 
      return 25 
    } else if ( feet < 2000){
      return 
    }
  }
 

  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
  //1 blocks = 264 feet



