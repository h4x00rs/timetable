//loadSchedule.js запрашивает данные
var Schedule = Schedule || {};
!(function(global){
    "use strict";
    var

        loadSchedule = function (apiUrl, lpu, successCallback, errorCallback) {
            var

                URL = apiUrl + '#lpu=' + lpu;


            Schedule.libs.ajax (URL, {
                method: 'GET',
                success: successCallback,
                async: true,
                error: errorCallback
            });
        };

    global.loadSchedule = loadSchedule;
}(window.Schedule, window.Schedule.libs));