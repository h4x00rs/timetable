//processData.js обработка данных
var Schedule = Schedule || {};
!(function(global){
    "use strict";

    var
        processRawData = function (rawData) {
            var dataRaw = JSON.parse(rawData);
            return dataRaw;
        };

    global.dataProcessor = {
        processRawData : processRawData
    }
}(window.Schedule, window.Schedule.libs));