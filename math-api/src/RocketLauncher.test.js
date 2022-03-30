const Rocket = require('./Rocket');
const RocketLauncher = require('./RocketLauncher');

describe('A RocketLauncher', () => {
    it('should launch all rockets', () => {
        // arrange
        const nasaRocket = new Rocket('Nasa');
        const spaceXRocket = new Rocket('spaceX')
        const rocketLauncher = new RocketLauncher([nasaRocket, spaceXRocket])

        // action 
        rocketLauncher.lounchAllRockets();

        // assert 
        expect(nasaRocket.engineStatus).toEqual('active');
        expect(spaceXRocket.engineStatus).toEqual('active')
        expect(rocketLauncher.rockets.length).toEqual(0)
    })

    it('should launch only ine rocket by queue', () => {
        // Arrange
        const nasaRocket = new Rocket('Nasa');
        const spaceXRocket = new Rocket('SpaceX');
        const rocketLauncher = new RocketLauncher([nasaRocket, spaceXRocket]);

        // Action
        rocketLauncher.launchRocketByQueue();

        // Assert
        expect(nasaRocket.engineStatus).toEqual('active');
        expect(spaceXRocket.engineStatus).toEqual('inactive');
        expect(rocketLauncher.rockets.length).toEqual(1);
    })
})