const getTableFromHeader = (titles, toFind) => {
    var el = Array.from(titles).filter(t => t.textContent.trim() === toFind)[0]
    while (el && el.tagName !== "table") {
        el = el.nextSibling
    }

    return el;
}

module.exports = getTableFromHeader;