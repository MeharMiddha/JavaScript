const ticket = new Promise(function (resolve,reject) {
    const isBoarded=false;
    if(isBoarded){
        resolve("You are not in the Flight");
    }else{
        reject("Your fligth has been cancelled");
    }
});

ticket
    .then((data) => {
        console.log("Wohoo",data);
    })
    .catch((data) => {
        console.log("Oh No",data);
    })
    .finally(() => {
        console.log("I will always be executed");
    });
