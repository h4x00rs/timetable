//processData.js обработка данных
var Schedule = Schedule || {};
!(function (global) {
    "use strict";

    var
        processRawData = function (rawData) {
            var rawData = JSON.parse(rawData);
            return rawData;
        };

    global.dataProcessor = {
        processRawData: processRawData
    }
}(window.Schedule));