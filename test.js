/*
 * @Description: 
 * @Version: 1.0
 * @Autor: solid
 * @Date: 2022-11-02 10:49:52
 * @LastEditors: solid
 * @LastEditTime: 2022-11-02 10:54:29
 */
var screenshot = require('./');

screenshot({format: 'png'}).then((img) => {
    console.log(img);
  }).catch((err) => {
    // ...
  })
