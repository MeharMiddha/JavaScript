
try {
    const res = prompt('Are you a robot ?');
    if(res === 'Y'){
        // throw {
        //     name : 'Mehar'
        // };

        throw new Error('Robot Found');
    }
}catch(error) {
    console.log(error.name, error.message);
} finally {
    console.log("this will always be executed");
}

// try {
// console.log(age);
// } catch(err) {
//     console.log(err.name);
//     console.log(err.message);
// }

const a = 2*4;
console.log('Important',a);
