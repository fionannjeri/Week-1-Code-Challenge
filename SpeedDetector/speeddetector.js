function checkSpeed(speed) {
    const speedLimit = 70;
    

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / 5);
        
        console.log(`Points: ${demeritPoints}`);
        
         
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}


const speedInput = prompt("Enter the speed of the car:");
const speed = Number(speedInput);
checkSpeed(speed);
