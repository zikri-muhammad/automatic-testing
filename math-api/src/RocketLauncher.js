class RocketLouncher {
    constructor(rockets = []){
        this.rockets = rockets;
    }

    lounchAllRockets(){
        this.rockets.forEach((rocket)=>{
            rocket.engineStatus = 'active';
        })
        this.rockets = [];
    }

    launchRocketByQueue(){
        const rocket = this.rockets.shift();
        rocket.engineStatus = 'active';
    }
}


module.exports = RocketLouncher;