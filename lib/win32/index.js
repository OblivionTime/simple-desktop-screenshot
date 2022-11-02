/*
 * @Description: 
 * @Version: 1.0
 * @Autor: solid
 * @Date: 2022-11-02 10:34:47
 * @LastEditors: solid
 * @LastEditTime: 2022-11-02 11:01:38
 */
const Promise = require('pinkie-promise')
const temp = require('temp')
const path = require('path')
var jimp = require('jimp');
var fs = require('fs');
var childProcess = require('child_process');
function windowsSnapshot(options = {}) {
    return new Promise((resolve, reject) => {
        const format = options.format || 'jpg'
        const tmpPath = temp.path({
            suffix: `.${format}`
        })
        const imgPath = path.resolve(options.filename || tmpPath)
        var nircmd = childProcess.spawn(path.join(__dirname + "/../", "bin", "nircmd.exe"), ["savescreenshot", imgPath]);
        nircmd.on('close', function (code, signal) {
            try {
                fs.statSync(imgPath);
                new jimp(imgPath, function (err, image) {
                    if(err){
                        return reject(err)
                    }
                    return resolve(image.bitmap.data)
                })
            }
            catch (error) {
                console.log(error);
                reject(error)
            }
        });

    })
}

module.exports = windowsSnapshot