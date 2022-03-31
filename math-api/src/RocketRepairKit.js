class RocketRepairKit {
    /**
     * anggap proses membuat instance RocketRepairKit itu rumit
     * karena ia membutuhkan banyak dependecies 
     */

    constructor(objA, objB, objC){
        this.objA = objA;
        this.objB = objB;
        this.objC = objC;
    }

    repair(rocket){
        /**
         * anggap ini prosses yang diambil dari suatu service external
         * sehingga prossesnya membutuhkan waktu dan rental gagal
         */

        return new Promise((resolve) => {
            setTimeout(() => {
                return resolve(`${rocket.name} repaired!`)
            }, 500)
        })
    }
}

module.exports = RocketRepairKit