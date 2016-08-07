"use strict";
var Chart = (function () {
    function Chart(config) {
        this.id = config.id;
        this.data = config.data;
        this.height = config.height || 400;
        this.width = config.width || '100%';
    }
    return Chart;
}());
exports.Chart = Chart;
//# sourceMappingURL=chart-models.js.map