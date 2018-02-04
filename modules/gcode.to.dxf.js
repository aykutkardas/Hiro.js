/*
 * Hiro JS
 * Convert Assyst Raw File > GCODE > DXF
 * Author: Aykut Kardaş
 * Github: https://github.com/aykutkardas
 * 
 */

const dxfTemplate = require('./templates/dxf.template');
const config = require('./config').toDxf;

const gcodeToDxf = {

    config: config,

    toHex: function(num) {
        return (num).toString(16).toUpperCase();
    },

    toCoord: function(data, indx) {
        index = indx == "x" ? 1 : indx == "y" ? 2 : false;
        return parseInt(data.split(" ")[index]) / this.config.scale;
    },

    convert: function(fileContent) {

        let i;
        let len;
        let arrContent;
        let dxfContent;

        dxfContent = dxfTemplate.header;

        arrContent = fileContent
        .replace(/X/g, '')
        .replace(/Y/g, '')
        .split("\r\n");

        len = arrContent.length;

        for(i = 0; i < len; i++) {

            let lineTemplate = dxfTemplate.line;

            // First Point
            let x = this.toCoord(arrContent[i], "x");
            let y = this.toCoord(arrContent[i], "y");

            // Second Point
            let x2 = this.toCoord(arrContent[i + 1] || arrContent[i], "x");
            let y2 = this.toCoord(arrContent[i + 1] || arrContent[i], "y");

            // Line index
            let count = this.toHex(i+1);

            dxfContent += lineTemplate
            .replace("{{count}}", count)
            .replace("{{x}}", x)
            .replace("{{y}}", y)
            .replace("{{x2}}", x2)
            .replace("{{y2}}", y2);

        }

        dxfContent += dxfTemplate.footer;

        return dxfContent;

    }

};

module.exports = gcodeToDxf;