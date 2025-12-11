
const extractTable = (table) => {
    if(!table)
        return [];
    var rows = Array.from(table.getElementsByTagName("tr"));
    var headers = Array.from(rows.shift().getElementsByTagName("th")).map(th => th.textContent.trim());
    return rows.map(r => {
        var cells = Array.from(r.getElementsByTagName("td"));
        return cells.reduce((p, c, i) => {
            p[headers[i]] = c.textContent.trim();
            return p;
        }, {});
    });
}

module.exports = extractTable;