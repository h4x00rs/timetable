// app.js ядро - приложение - контроллер виджета
var Schedule = Schedule || {};
!(function (global) {
    "use strict";
    var
        Widget = function Widget(params) {
            this.run = function () {
                global.loadSchedule(params.apiUrl, params.lpu);
                global.dataProcessor.processRawData();
            };
            /*this.render = function () {
                console.log(global.dataProcessor.processRawData())
            }*/
        }
    ;

    global.Widget = Widget;


}(window.Schedule, window.Schedule.libs));