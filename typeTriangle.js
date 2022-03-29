const typeTriangle = (sideA, sideB, sideC) => {
    if(sideA == sideB && sideB == sideC){
        return 'Segitiga sama sisi'
    }else if(sideA == sideB || sideA == sideC || sideB == sideC){
        return 'Segitiga sama kaki'
    }else{
        return 'Segitiga sembarang'
    }
}

module.exports = typeTriangle;