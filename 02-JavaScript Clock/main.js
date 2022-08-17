const hourHand   = document.querySelector('.hour-hand')
const minHand    = document.querySelector('.min-hand')
const secondHand = document.querySelector('.second-hand')

const setDate = () => {
    const now = new Date();

    const hours                = now.getHours();
    const hoursDegree          = ((360/24) * hours);
    hourHand.style.transform   = `rotate(${hoursDegree}deg)`;

    const minutes              = now.getMinutes();
    const minutesDegree        = ((360/60) * minutes) + 90;
    minHand.style.transform    = `rotate(${minutesDegree}deg)`;
    
    const seconds              = now.getSeconds();
    const secondsDegree        = ((360/60) * seconds) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    console.log('hour:', hours)
    console.log('360/12:', 360/12)
    console.log('360/12 * hours:', (360/24) * hours)
}

setInterval(setDate,1000)