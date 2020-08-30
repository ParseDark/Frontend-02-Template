

const greenLight = async (time) => {
    return new Promise((res) => {
        setTimeout(() => {
            console.log('green')
            res(1);
        }, time);
    })
}

const yellowLight = async (time) => {
    return new Promise((res) => {
        setTimeout(() => {
            console.log('yellow')
            res(1);
        }, time);
    })
}

const redLight = async (time) => {
    return new Promise((res) => {
        setTimeout(() => {
            console.log('red')
            res(1);
        }, time);
    })
}


const jober = async () => {
    await greenLight(1000);
    await yellowLight(1000);
    await redLight(1000);
    await jober();
}



jober();
