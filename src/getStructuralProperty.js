const getStructuralProperty = (typeName) => {
    if(typeName.startsWith("Edm.")){
        return 1; // Primitive
    }
    else if(typeName.startsWith("Collection(")){
        return 2; // Collection
    }
    
    return 5;
}

module.exports = getStructuralProperty;