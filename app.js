// app.js ядро - приложение - контроллер виджета
var Schedule = Schedule || {};
!(function(global, libs){
    "use strict";
    var
        successCallback = function (rawData) {
            global.dataProcessor.processRawData(rawData);
        },
        errorCallback = function (e) {
            console.log(e);
        }
    ;

    function widget(params) {
        this.run = function () {
            global.loadSchedule(params.apiUrl, params.lpu, successCallback, errorCallback);
            console.log(successCallback);
        }
    }

    global.widget = widget;

}(window.Schedule, window.Schedule.libs));