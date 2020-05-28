webpackJsonp([6],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AchievementPageModule", function() { return AchievementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__achievement__ = __webpack_require__(436);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AchievementPageModule = /** @class */ (function () {
    function AchievementPageModule() {
    }
    AchievementPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__achievement__["a" /* AchievementPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__achievement__["a" /* AchievementPage */]),
            ],
        })
    ], AchievementPageModule);
    return AchievementPageModule;
}());

//# sourceMappingURL=achievement.module.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AchievementPage = /** @class */ (function () {
    function AchievementPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
    }
    AchievementPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    AchievementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-achievement',template:/*ion-inline-start:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\achievement\achievement.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col offset-1 col-2 class="menu-icon-col">\n        <button ion-button clear (click)="openMenu()">\n          <ion-icon name="md-menu" class="menu-icon"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col offset-1 col-6>\n        <img class="img-responsive" src="assets/imgs/header-logo.png" />\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3 class="text-questionary-list">\n        <img class="text-img" src="assets/gifs/gif-a-4-crop.gif">\n      </ion-col>\n      <ion-col col-9 class="text-questionary-list-game">\n        <video width="320" height="240" loop="true" muted="true" autoplay="true">\n          <source src="https://opina-ai-api.com/assets/videos/a3.Explaining.mp4" type="video/mp4">\n        </video>\'\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 class="text-questionary-list-game">\n        <h5>Responda os questionários para conseguir <strong>pontos</strong> para aumentar seu <strong>nível</strong> de\n          participação! Você só poderá responder cada questionário uma vez.</h5>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\achievement\achievement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */]])
    ], AchievementPage);
    return AchievementPage;
}());

//# sourceMappingURL=achievement.js.map

/***/ })

});
//# sourceMappingURL=6.js.map