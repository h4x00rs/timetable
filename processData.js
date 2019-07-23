//processData.js обработка данных
var Schedule = Schedule || {};
!(function(global){
    "use strict";

    var
        processRawData = function (rawData) {
            //process
            rawData = JSON.stringify();
            return [];
        };

    global.dataProcessor = {
        processRawData : processRawData
    }
}(window.Schedule, window.Schedule.libs));