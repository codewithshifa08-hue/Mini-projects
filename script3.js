//#Hand wash time calculator
function calculateWashingTime(times, days) {
    const secondsPerWash = 30;//ek baar hath dhone ka time sec me
    let totalSeconds = times * days * secondsPerWash;//total time=times per day*days*time per wash
    //ab total seconds ko minutes or sec me convert krna h
    let minutes = Math.floor(totalSeconds/60);
    let seconds = totalSeconds % 60;
    console.log(`${minutes} minutes and ${seconds} seconds`);
}
calculateWashingTime(5,4);
