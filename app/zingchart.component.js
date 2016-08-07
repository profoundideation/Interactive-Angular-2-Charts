"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ZingChart = (function () {
    function ZingChart(zone) {
        this.zone = zone;
    }
    ZingChart.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () { return zingchart.render(_this.chart); });
    };
    ZingChart.prototype.ngOnDestroy = function () {
        zingchart.exec(this.chart.id, 'destroy');
    };
    ZingChart = __decorate([
        core_1.Component({
            selector: 'zingchart',
            inputs: ['chart'],
            template: '<div id="{{chart.id}}"></div>'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.NgZone !== 'undefined' && core_1.NgZone) === 'function' && _a) || Object])
    ], ZingChart);
    return ZingChart;
    var _a;
}());
exports.ZingChart = ZingChart;
//# sourceMappingURL=zingchart.component.js.map