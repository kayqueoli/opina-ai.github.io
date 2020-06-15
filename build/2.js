webpackJsonp([2],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouPageModule", function() { return ThankyouPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thankyou__ = __webpack_require__(437);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ThankyouPageModule = /** @class */ (function () {
    function ThankyouPageModule() {
    }
    ThankyouPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__thankyou__["a" /* ThankyouPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__thankyou__["a" /* ThankyouPage */]),
            ],
        })
    ], ThankyouPageModule);
    return ThankyouPageModule;
}());

//# sourceMappingURL=thankyou.module.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankyouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_questionary_questionary__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_answer_answer__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ThankyouPage = /** @class */ (function () {
    function ThankyouPage(menuCtrl, navCtrl, navParams, answerProvider, loadingCtrl, alertCtrl, storage) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.answerProvider = answerProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.questionary = new __WEBPACK_IMPORTED_MODULE_0__providers_questionary_questionary__["c" /* Questionary */]();
        this.levelImg = "level0";
        this.useGame = false;
        this.storage.get('useGame').then(function (data) {
            _this.useGame = data;
            if (_this.useGame) {
                _this.resolvePerson();
                _this.form_url = "https://bit.ly/avaliacao-gamificacao";
                // this.form_url = "https://bit.ly/avaliacao-usabilidade-game";
            }
            else {
                _this.form_url = "https://bit.ly/avaliacao-nao-gamificado";
                // this.form_url = "https://bit.ly/avaliacao-usabilidade";
            }
            _this.storage.get('showForm').then(function (data) {
                if (!data) {
                    var showFormCont = 1;
                    _this.storage.set('showForm', showFormCont);
                    if (_this.useGame) {
                        _this.showForm();
                    }
                    else {
                        _this.showFormNotGame();
                    }
                }
                else if (data < 3) {
                    data++;
                    _this.storage.set('showForm', data);
                    if (_this.useGame) {
                        _this.showForm();
                    }
                    else {
                        _this.showFormNotGame();
                    }
                }
            });
        });
        this.getUserType();
        this.points = navParams.get('points');
        this.answers = navParams.get('answers');
        this.answersNeighborhoods = navParams.get('answersNeighborhoods');
        this.prioritizations = navParams.get('prioritizations');
        this.progress = 100;
        var questions = navParams.get('questions');
        this.totalQuestions = questions.length;
        this.questionary = navParams.get('questionary');
        this.resolveLevel();
    }
    ThankyouPage.prototype.resolvePerson = function () {
        this.personAnimation = "gif-c-3-crop";
        this.personQuote =
            'Por favor, nos ajude a avaliar a <strong>gamificação do aplicativo</strong> respondendo o '
                + '<strong>formulário</strong>: '
                + '<a *ngIf="useGame" href="' + this.form_url + '">Avaliação da Gamificação</a>';
    };
    ThankyouPage.prototype.talkAnimation = function () {
        var _this = this;
        this.personAnimation = "gif-c-2-crop";
        setTimeout(function () {
            _this.resolvePerson();
        }, 10000);
    };
    ThankyouPage.prototype.resolveLevel = function () {
        if (this.points > 0 && this.points <= 12) {
            this.level = "Bronze";
            this.levelImg = "level1";
        }
        if (this.points > 12 && this.points <= 21) {
            this.level = "Prata";
            this.levelImg = "level2";
        }
        if (this.points > 21) {
            this.level = "Ouro";
            this.levelImg = "level3";
        }
    };
    ThankyouPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    ThankyouPage.prototype.help = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '<div text-center>Nos ajude a avaliar o aplicativo!</div>',
            message: 
            //----------------------MENSAGEM------------------
            '<div class="alert-align-center">'
                + '<img class="img-alert" src="assets/gifs/gif-c-4.webp"/>'
                + '</div>'
                + '<div class="dialogue-box"><div class="tdialogue-box-text">'
                + '<div text-center><strong>Ainda não acabou!</strong></div>'
                + '<div text-center>Você pode responder outros <strong>questionários</strong> e continuar liberando as <strong>dicas de saúde mental</strong>!</div>'
                + '<div text-center>Por favor, nos ajude a avaliar a <strong>gamificação do aplicativo</strong> respondendo o <strong>formulário: <a style="font-size:1.5rem" href="' + this.form_url + '"><strong>Avaliação da gamificação</strong></a></div>'
                + '</div></div>',
            //----------------------MENSAGEM------------------
            buttons: [{
                    text: "sair",
                    handler: function () {
                        _this.talkAnimation();
                    }
                }]
        });
        alert.present();
    };
    ThankyouPage.prototype.getUserType = function () {
        var _this = this;
        this.storage.get('userType')
            .then(function (data) {
            if (data != null) {
                _this.userType = data;
            }
            else {
                var userType = new __WEBPACK_IMPORTED_MODULE_4__home_home__["b" /* UserType */]();
                userType.id = null;
                userType.name = null;
                _this.userType = userType;
            }
        })
            .catch(function () {
            var userType = new __WEBPACK_IMPORTED_MODULE_4__home_home__["b" /* UserType */]();
            userType.id = null;
            userType.name = null;
            _this.userType = userType;
        });
    };
    ThankyouPage.prototype.finishQuestionary = function () {
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        // this.answerProvider.insertAnswersData(this.answers, this.answersNeighborhoods, this.prioritizations, this.userType, this.useGame, this.points)
        //   .then((data: boolean) => {
        //     if (data != null) {
        this.storage.set('points', this.points);
        this.navCtrl.setRoot('QuestionariesListPage', {}).then(this.loader.dismiss());
        //   } else {
        //     let alert = this.alertCtrl.create({
        //       title: 'Oops!',
        //       message: 'Não foi possível enviar os dados para o servidor. Por favor, tente novamente.',
        //       buttons: [{
        //         text: "Tentar novamente",
        //         handler: () => {
        //           this.finishQuestionary();
        //         }
        //       }]
        //     });
        //     alert.present();
        //     this.loader.dismiss();
        //   }
        // })
        // .catch((error) => {
        // console.error(error);
        // this.restProvider.sendGoogleAnalyticsErrorData(
        //   'ThankyouPage',
        //   'finishQuestionary',
        //   error);
        //   let alert = this.alertCtrl.create({
        //     title: 'Oops!',
        //     message: 'Não foi possível enviar os dados para o servidor. Por favor, tente novamente.',
        //     buttons: [{
        //       text: "Tentar novamente",
        //       handler: () => {
        //         this.finishQuestionary();
        //       }
        //     }]
        //   });
        //   alert.present();
        //   this.loader.dismiss();
        // });
    };
    //Mensagem motivadora da narrativa
    ThankyouPage.prototype.showForm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '<div text-center>Nos ajude a avaliar o aplicativo!</div>',
            message: 
            //----------------------MENSAGEM------------------
            '<div class="alert-align-center"><img class="img-alert" src="assets/gifs/gif-c-4.webp"/></div>'
                + '<div class="dialogue-box"><div class="tdialogue-box-text">'
                + '<div><strong>Você utilizou a versão gamificada do aplicativo</strong></div>'
                + '<div text-center>Por favor, nos ajude a avaliar a <strong>gamificação do aplicativo</strong> respondendo o <strong>formulário: <a style="font-size:1.5rem" href="' + this.form_url + '"><strong>Avaliação da gamificação</strong></a></div>'
                + '<div text-center></div>'
                + '</div></div>',
            //----------------------MENSAGEM------------------
            buttons: [{
                    text: "sair",
                    handler: function () {
                        _this.talkAnimation();
                    }
                }]
        });
        alert.present();
    };
    //Mensagem motivadora da narrativa
    ThankyouPage.prototype.showFormNotGame = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '<div text-center>Nos ajude a avaliar o aplicativo!</div>',
            message: 
            //----------------------MENSAGEM------------------
            '<div class="tdialogue-box-text">'
                + '<div text-center>Por favor, nos ajude a avaliar o <strong>aplicativo</strong> respondendo o <strong>formulário: <a style="font-size:1.5rem" href="' + this.form_url + '"><strong>Avaliação do Aplicativo</strong></a></div>'
                + '<div text-center></div>'
                + '</div>',
            //----------------------MENSAGEM------------------
            buttons: [{
                    text: "sair",
                    handler: function () {
                        _this.talkAnimation();
                    }
                }]
        });
        alert.present();
    };
    ThankyouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-thankyou',template:/*ion-inline-start:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\thankyou\thankyou.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="menu-icon-col" *ngIf="useGame">\n        <button ion-button clear (click)="openMenu()">\n          <ion-icon name="md-menu" class="menu-icon"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-2 class="menu-icon-col-not-game" *ngIf="!useGame">\n        <button ion-button clear (click)="openMenu()">\n          <ion-icon name="md-menu" class="menu-icon"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-6 *ngIf="useGame">\n        <img class="img-responsive img-header" src="assets/imgs/header-logo.png" />\n      </ion-col>\n      <ion-col col-9 *ngIf="!useGame">\n        <img class="img-responsive img-not-game" src="assets/imgs/header-logo.png" />\n      </ion-col>\n      <ion-col offset-1 col-2 class="col-button-help">\n        <button class="button-help-thankyou" *ngIf="useGame" ion-button clear (click)="help()">\n          <ion-icon class="icon-help button-help-thankyou" name="alert"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngIf="!useGame" col-6 offset-3 text-center>\n        <img src="assets/imgs/intro/thank-you.png" class="img-responsive-no-game img-thank-you-no-game">\n      </ion-col>\n      <ion-col *ngIf="useGame" col-6 offset-3 text-center>\n        <img src="assets/imgs/intro/thank-you.png" class="img-responsive-game img-thank-you-game">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col *ngIf="useGame" col-12 text-center class="level">\n        <!-- Pontuação -->\n        <ion-item *ngIf="points > 0" text-wrap>\n          <ion-thumbnail item-start>\n            <img class="img-responsive img-level" src="assets/imgs/game/{{levelImg}}.png" />\n          </ion-thumbnail>\n          <ion-label>\n            <h2>Você está no nível <strong>{{level}}</strong> de Participação!</h2>\n            <p><b>Sua pontuação</b></p>\n            <ion-badge>{{points}} pontos</ion-badge>\n          </ion-label>\n        </ion-item>\n        <!-- Pontuação -->\n        <!-- Pontuação -->\n        <ion-item *ngIf="points == 0" text-wrap>\n          <ion-thumbnail item-start>\n            <img class="img-responsive img-level" src="assets/imgs/game/{{levelImg}}.png" />\n          </ion-thumbnail>\n          <ion-label>\n            <h2>Responda os questionários para aumentar o <b>nível</b> de <b>Participação</b>!</h2>\n            <p><b>Sua pontuação</b></p>\n            <ion-badge>{{points}} pontos</ion-badge>\n          </ion-label>\n        </ion-item>\n        <!-- Pontuação -->\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 text-center class="text-form-game">\n        <ion-row *ngIf="useGame" class="row-person">\n          <ion-col col-3 class="text-questionary-list">\n            <img class="text-img" src="assets/gifs/{{personAnimation}}.webp">\n          </ion-col>\n          <ion-col col-9 class="text-questionary-list-game">\n            <h5 [innerHTML]="personQuote"></h5>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="!useGame" text-center>\n          <h5 class="text-questionay-list-not-game">\n            Por favor, nos ajude a <strong>avaliar o aplicativo</strong> respondendo o\n            <strong>formulário</strong>:\n            <a *ngIf="!useGame" href="{{form_url}}">Avaliação do Aplicativo</a>\n          </h5>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 text-center class="text-bottom-game">\n        <img class="img-responsive img-center" src="assets/imgs/intro/intro4.jpg" />\n        <h2>Continue participando!</h2>\n        <p text-justify>\n          Você pode continuar participando respondendo outros <strong>questionários</strong>\n          para desbloquear as <strong>dicas de saúde mental</strong>!\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<!-------------------------- NO GAME -------------------------->\n<ion-footer *ngIf="!useGame" class="footer-not-game">\n  <ion-grid class="button-finish-grid">\n    <ion-row>\n      <ion-col col-12 text-center class="margin-top-10">\n        <button ion-button full class="button-background" (click)="finishQuestionary()">\n          <ion-icon id="button-thank-you-{{questionary.id}}" class="text-button">\n            Vamos lá!\n          </ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-navbar class="toolbar-progress">\n  </ion-navbar>\n</ion-footer>\n<!-------------------------- NO GAME -------------------------->\n<!-------------------------- USE GAME -------------------------->\n<ion-footer *ngIf="useGame">\n  <ion-grid class="button-finish-grid">\n    <ion-row>\n      <ion-col col-12 text-center class="margin-top-10">\n        <button ion-button full class="button-background" (click)="finishQuestionary()">\n          <ion-icon id="button-thank-you-game-{{questionary.id}}" class="text-button">\n            Vamos lá!\n          </ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-navbar class="toolbar-progress">\n    <ion-title text-center>\n      <ion-icon range-right name="md-ribbon"></ion-icon>\n      {{points}} pontos\n    </ion-title>\n    <ion-range class="progress-bar" [min]="0" [max]="100" [step]="1" [(ngModel)]="progress" disabled>\n      <ion-icon range-left name="md-clipboard"></ion-icon>\n      <ion-icon range-right></ion-icon>\n    </ion-range>\n    <div text-center class="progres-text-uper">{{totalQuestions}} de {{totalQuestions}} questões</div>\n  </ion-navbar>\n</ion-footer>\n<!-------------------------- USE GAME -------------------------->'/*ion-inline-end:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\thankyou\thankyou.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_answer_answer__["a" /* AnswerProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], ThankyouPage);
    return ThankyouPage;
}());

//# sourceMappingURL=thankyou.js.map

/***/ })

});
//# sourceMappingURL=2.js.map