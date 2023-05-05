// 2.9: Null, Unknown and Never Types

//null type

const searchName = (value: string | null) => {

    if (value === null) {

        console.log('there is nothing to search');

    } else {

        console.log('Searching...');

    }

};

searchName(null);

// nuknown type

//mk^-1 --> ms^-1

const getMyCarSpeed = (speed: unknown) => {

    if (typeof speed === 'number') {

        const convertedSpeed = (speed * 1000) / 3600

        console.log(`my speed is ${convertedSpeed}`);

    }

    if (typeof speed === 'string') {

        const [value, unit] = speed.split(' ');  //['10', 'kmh^-1']

        const convertedSpeed = (parseFloat(value) * 1000) / 3600;

        console.log(`my speed is ${convertedSpeed}`);

    } else {

        console.log('there is wrong type');

    }

}

getMyCarSpeed(10);

getMyCarSpeed('10 kmh^-1');

getMyCarSpeed(true);

// never type

function throwError(message: string): never {

    throw new Error(message)

}

throwError('Error hoyeche')