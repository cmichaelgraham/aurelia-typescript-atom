var __decorate = this.__decorate || (typeof Reflect === "object" && Reflect.decorate) || function (decorators, target, key, desc) {
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = this.__metadata || (typeof Reflect === "object" && Reflect.metadata) || function () { };
define(["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    var NavBar = (function () {
        function NavBar() {
            this.router = null;
        }
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], NavBar.prototype, "router");
        return NavBar;
    })();
    exports.NavBar = NavBar;
});
