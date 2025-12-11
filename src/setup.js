const fs = require('node:fs');

const setUp = () => {
    if (!fs.existsSync('./Outputs')){
        fs.mkdirSync('./Outputs');
    }
}

module.exports = setUp