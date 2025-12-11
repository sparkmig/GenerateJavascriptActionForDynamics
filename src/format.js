const getStructuralProperty = require('./getStructuralProperty');
const getTypeWithPrefix = require('./getTypeWithPrefix');

const format = (action, boundParameter, parameters) => {
    return `class ${action} { 
    constructor(${parameters?.map(p => p["Name"]).join(", ") ?? ""}) {
        ${parameters.map(p => `this.${p["Name"]} = ${p["Name"]};`).join("\n        ")}
    }
        
    getMetadata() {
        return {
            ${boundParameter ? `boundParameter: "${boundParameter["Binding Type"]}",` : ""}
            ${parameters.length > 0 ?`parameterTypes: {
                ${parameters.map(p => `"${p["Name"]}": { typeName: "${getTypeWithPrefix(p["Type"])}", structuralProperty: ${getStructuralProperty(p["Type"])} }`).join(",\n                ")}
            },
            ` : ""}
            operationType: 0, // Action
            operationName: "${action}"
        }
    }
}`
}

module.exports = format;