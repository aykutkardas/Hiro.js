/*
 * Hiro JS
 * Convert Assyst Raw File > GCODE > DXF
 * Author: Aykut Kardaş
 * Github: https://github.com/aykutkardas
 * 
 */

 const assystToGcode = {

    convert: function(fileContent) {
        
        let i;
        let arrContent;

        arrContent = fileContent
        .replace(/\*/g, "\r\n")
        .replace(/\Y/g, " Y")
        .replace(/S/g, "")
        .split("\r\n");

        for (i = 0; i < arrContent.length; i++) {

            if (arrContent[i][0] === "X")
                arrContent[i] = "G1 " + arrContent[i];
            else
                arrContent.splice(i--, 1);

        }

        arrContent = arrContent.join("\r\n");

        return arrContent;

    }

 };

 module.exports = assystToGcode;