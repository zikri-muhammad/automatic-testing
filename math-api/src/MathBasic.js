const MathBasic = {
    add: (...args) => {
        if(args.length !== 2 ){
            throw new Error('fungsi add hanya menerima dua parameter')
        }

        const [a, b] = args;

        if(typeof a !== 'number' || typeof b !== 'number'){
            throw new Error('funsi hanya menerima parameter number')
        }

        return a + b 
    },

    subtract: (...args) => {
        if(args.length !== 2){
            throw new Error('fungsi subtract hanya menerima dua parameter')
        }

        const [a, b] = args;
        if(typeof a !== 'number' || typeof b !== 'number'){
            throw new Error('fungsi hanya menerima parameter number')
        }

        return a - b
    },

    multiply: () => {

    },

    divide: () => {

    },
}

module.exports = MathBasic