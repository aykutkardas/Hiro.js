/*
 * Hiro JS
 * Convert Assyst Raw File > GCODE > DXF
 * Author: Aykut Kardaş
 * Github: https://github.com/aykutkardas
 * 
 */

const fs = require("fs");
const toGcode = require("./assyst.to.gcode");
const toDxf = require("./gcode.to.dxf");

const Task = {

    getFiles: function() {
        return fs.readdirSync(__dirname + "/../input");
    },

    readFile: function(file) {
        return fs.readFileSync(__dirname + "/../input/" + file, "utf8");
    },

    start: function() {
        
        let i;
        let files = this.getFiles();
        let len = files.length;

        for(i = 0; i < len; i++) {
            let fileContent = this.readFile(files[i]);
            
            let gcodeContent = toGcode.convert(fileContent);

            fs.writeFileSync(__dirname + "/../output/" + files[i] + ".nc", gcodeContent);

            let dxfContent = toDxf.convert(gcodeContent);

            fs.writeFileSync(__dirname + "/../output/" + files[i] + ".dxf", dxfContent);
        }



    }




};


module.exports = Task;
