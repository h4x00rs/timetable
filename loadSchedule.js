//loadSchedule.js запрашивает данные
var Schedule = Schedule || {};
!(function (global) {
    "use strict";
    var
        successCallback = function (rawData) {
            global.dataProcessor.processRawData(rawData);
        },
        errorCallback = function (e) {
            console.log(e);
        }
    ;

    var
        loadSchedule = function (apiUrl, lpu) {
            var

                URL = apiUrl + '?lpu=' + lpu;


            Schedule.libs.ajax(URL, {
                method: 'GET',
                success: successCallback,
                async: true,
                error: errorCallback
            });
        };

    global.loadSchedule = loadSchedule;
    global.successCallback = successCallback;
    global.errorCallback = errorCallback;
}(window.Schedule, window.Schedule.libs));