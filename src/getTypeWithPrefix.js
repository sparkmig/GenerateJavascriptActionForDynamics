const getTypeWithPrefix = (typeName) => {
    if(typeName.startsWith("Edm.") || typeName.startsWith("Collection(")){
        return typeName;
    }
    return `mscrm.${typeName}`;
}

module.exports = getTypeWithPrefix;