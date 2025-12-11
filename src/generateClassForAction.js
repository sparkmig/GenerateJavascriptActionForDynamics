const getTableFromHeader = require('./getTableFromHeader');
const format = require('./format');
const extractTable = require('./extractTable');
var DOMParser = require('xmldom').DOMParser;

async function generateClassForAction(action) {
    let url = `https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/${action}`

    var response = await fetch(url);

    if(!response.ok){
        console.log("The request failed, check if the action name is correct:")
        console.log(response.status)
        console.log(await response.text())
        return
    }
    const html = await response.text();
    const parser = new DOMParser();

    var dom = parser.parseFromString(html, "text/html");
    var titles = dom.getElementsByTagName("h2");

    var boundEntities = getTableFromHeader(titles, "Bound entities");
    var parametersTable = getTableFromHeader(titles, "Parameters");

    const boundParameter = extractTable(boundEntities)[0];
    const parameters = extractTable(parametersTable);

    if(boundParameter) {
        parameters.push({
            "Name": boundParameter["Binding Type"],
            "Type": boundParameter["Entity Type"]
        })
    }

    return format(action, boundParameter, parameters)
}

module.exports = generateClassForAction;