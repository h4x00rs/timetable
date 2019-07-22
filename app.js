// app.js ядро - приложение - контроллер виджета
var Schedule = Schedule || {};
!(function(global, libs){
    "use strict";
    var
        successCallback = function (rawData) {
            global.dataProcessor.processRawData(rawData);
        },
        errorCallback = function () {

        }
    ;

    function widget(params) {
        global.loadSchedule(params.url, successCallback, errorCallback);
    }

    global.widget = widget;

}(window.Schedule, window.Schedule.libs));