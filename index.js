// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  let distance;
  if (street > 42) {
    distance = street - 42;
  }
  else if (street < 42) {
    distance = 42- street;
  }
  return distance;
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(start_block, end_block) {
  if (end_block < start_block) {
    return (start_block - end_block) * 264;
  }
  else {
    return (end_block - start_block) * 264;
  }
}

function calculatesFarePrice(start_block, end_block) {
  let distance = distanceTravelledInFeet(start_block, end_block)
  let fare;
  if (distance < 400) {
    fare = 0;
  }
  else if (distance > 400 && distance < 2000) {
    fare = (distance - 400) * .02;
  }
  else if (distance > 2000 && distance < 2500) {
    fare = 25;
  }
  else {
    return 'cannot travel that far';
  }
  return fare;
}
