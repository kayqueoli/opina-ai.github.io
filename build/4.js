webpackJsonp([4],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionariesListPageModule", function() { return QuestionariesListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionaries_list__ = __webpack_require__(441);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuestionariesListPageModule = /** @class */ (function () {
    function QuestionariesListPageModule() {
    }
    QuestionariesListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__questionaries_list__["a" /* QuestionariesListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__questionaries_list__["a" /* QuestionariesListPage */]),
            ],
        })
    ], QuestionariesListPageModule);
    return QuestionariesListPageModule;
}());

//# sourceMappingURL=questionaries-list.module.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionariesListPage; });
/* unused harmony export Achievement */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__intro_intro__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_questionary_questionary__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_questionary_questionary__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_plan_plan__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_question_question__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_prioritization_prioritization__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_rest_rest__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var QuestionariesListPage = /** @class */ (function () {
    function QuestionariesListPage(toastCtrl, menuCtrl, navCtrl, databaseProvider, questionProvider, storage, questionaryProvider, loadingCtrl, alertCtrl, priorizationProvider, actionSheetCtrl, restProvider) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.databaseProvider = databaseProvider;
        this.questionProvider = questionProvider;
        this.storage = storage;
        this.questionaryProvider = questionaryProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.priorizationProvider = priorizationProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.restProvider = restProvider;
        this.achievementList = [];
        this.disciplineList = [];
        this.questionaries = [];
        this.questionary = new __WEBPACK_IMPORTED_MODULE_4__providers_questionary_questionary__["c" /* Questionary */]();
        this.answers = [];
        this.btnContinueDisabled = true;
        this.level = "Nível 0";
        this.levelImg = "level0-min";
        this.useGame = false;
        this.showForm = false;
        this.answeredQuestionaries = 0;
        this.totalQuestionaries = 0;
        this.progress = 0;
        this.plan = new __WEBPACK_IMPORTED_MODULE_7__providers_plan_plan__["a" /* Plan */]();
        this.resolvePerson();
        var entities = ['plan', 'questionaries', 'respondent'];
        this.databaseProvider.verifyEntities(entities)
            .then(function (data) {
            if (data.length > 0 && data.filter(function (data) { return data == false; }).length == 0) {
                _this.setEntities();
            }
            else {
                _this.navigateBack();
            }
        }).catch(function () { return _this.navigateBack(); });
        this.storage.get('useGame').then(function (data) {
            _this.useGame = data;
            if (_this.useGame) {
                _this.formUrl = "https://bit.ly/avaliacao-gamificacao";
                _this.storage.get('achievementList').then(function (data) {
                    if (!data)
                        _this.loadAchievement();
                    else
                        _this.achievementList = data;
                    _this.storage.get('helpHome')
                        .then(function (data) {
                        if (data == null)
                            _this.help();
                    });
                });
            }
            else {
                _this.formUrl = "https://bit.ly/avaliacao-nao-gamificado";
            }
        });
        this.storage.get('disciplineSelected').then(function (data) { return _this.disciplineList = data; });
    }
    //Verifica se as entidades estão armazenadas no IONIC Storage
    QuestionariesListPage.prototype.setEntities = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        this.storage.get('plan')
            .then(function (data) {
            _this.plan = data;
            _this.questionaryProvider.getAllQuestionariesByPlan(_this.plan)
                .then(function (data) {
                _this.storage.set('questionaries', data);
                _this.questionaries = data;
                _this.storage.get('respondent')
                    .then(function (data) {
                    _this.respondent = data;
                    _this.questionaryProvider.getAllPlanQuestionariesAnsweredByRespondent(_this.plan, _this.questionaries, _this.respondent)
                        .then(function (data) {
                        if (data != null) {
                            //--------------IMPORTANTE---------------
                            //-------SELEÇÃO DOS QUESTIONÁRIOS PELO TIPO DO RESPONDENTE-------
                            //------------------------- CASE 1 POSCOMP -------------------------
                            if (_this.respondent.type == "Discente evadido") {
                                data = data.filter(function (item) {
                                    return item.name === "POSCOMP - Evasão Discente";
                                });
                            }
                            else if (_this.respondent.type == "Discente formado") {
                                data = data.filter(function (item) {
                                    return item.name === "POSCOMP - Discente Egresso";
                                });
                            }
                            else if (_this.respondent.type == "Discente") {
                                var dataTemp_1 = [];
                                _this.disciplineList.forEach(function (discipline) {
                                    var questTemp = data.filter(function (quest) {
                                        return quest.name.endsWith(discipline.name);
                                    });
                                    questTemp.forEach(function (q) {
                                        dataTemp_1.push(q);
                                    });
                                });
                                data = data.filter(function (item) { return (item.name === "POSCOMP - Avaliação da Secretaria" ||
                                    item.name === "POSCOMP - Avaliação da Coordenação"); });
                                dataTemp_1.forEach(function (dat) {
                                    return data.push(dat);
                                });
                            }
                            else if (_this.respondent.type == "Docente") {
                                data = data.filter(function (item) { return (item.name === "POSCOMP - Avaliação da Secretaria" ||
                                    item.name === "POSCOMP - Avaliação da Coordenação"); });
                            }
                            //------------------------- CASE 1 POSCOMP -------------------------
                            for (var i = 0; i < data.length; i++) {
                                if (data[i].answered) {
                                    _this.showForm = true;
                                    _this.progress = _this.progress + 1;
                                    if (_this.achievementList.length > 0) {
                                        if (!_this.achievementList[i].unlocked) {
                                            _this.achievementList[i].unlocked = true;
                                            _this.showAchievementUnlock(_this.achievementList[i]);
                                        }
                                    }
                                }
                            }
                            _this.totalQuestionaries = data.length;
                            _this.answeredQuestionaries = _this.progress;
                            _this.progress = _this.progress / data.length;
                            _this.progress = _this.progress * 100;
                            _this.questionaries = data;
                            _this.storage.set('achievementList', _this.achievementList);
                            _this.resolvePerson();
                            _this.loadMetricItemList();
                            _this.loader.dismiss();
                        }
                        else {
                            _this.questionaries = [];
                            _this.showAlertGetAllPlanQuestionariesAnsweredByRespondent();
                        }
                    }).catch(function (error) {
                        console.error(error);
                        _this.restProvider.sendGoogleAnalyticsErrorData('QuestionariesListPage', 'setEntities', error);
                        _this.showAlertGetAllPlanQuestionariesAnsweredByRespondent();
                    });
                }).catch(function (error) {
                    console.error(error);
                    _this.restProvider.sendGoogleAnalyticsErrorData('QuestionariesListPage', 'setEntities', error);
                    _this.showAlertGetRespondent();
                });
            }).catch(function (error) {
                console.error(error);
                _this.restProvider.sendGoogleAnalyticsErrorData('QuestionariesListPage', 'setEntities', error);
                _this.showAlertGetAllQuestionariesByPlan();
            });
        }).catch(function (error) {
            console.error(error);
            _this.restProvider.sendGoogleAnalyticsErrorData('QuestionariesListPage', 'setEntities', error);
            _this.showAlertGetAllPlan();
        });
        this.storage.get('points').then(function (data) {
            _this.points = data;
            _this.resolveLevel();
        });
    };
    QuestionariesListPage.prototype.loadMetricItemList = function () {
        var _this = this;
        this.storage.get('metricItensList').then(function (data) {
            if (!data) {
                _this.priorizationProvider.getAllMetricItensValues().then(function (data) {
                    if (data) {
                        _this.storage.set('metricItensList', data);
                    }
                    else {
                        _this.showAlertloadMetricItemList();
                    }
                }).catch(function (error) {
                    console.error(error);
                    _this.restProvider.sendGoogleAnalyticsErrorData('QuestionariesListPage', 'loadMetricItemList', error);
                    _this.showAlertloadMetricItemList();
                });
            }
        }).catch(function (error) {
            console.error(error);
            _this.restProvider.sendGoogleAnalyticsErrorData('QuestionariesListPage', 'loadMetricItemList', error);
            _this.showAlertloadMetricItemList();
        });
    };
    QuestionariesListPage.prototype.loadAchievement = function () {
        this.achievementList = [];
        this.achievementList = [
            { id: 1, icon: "0", unlocked: false, name: "Dicas para estimular sua inteligência emocional" },
            { id: 2, icon: "1", unlocked: false, name: "Dicas para lidar com o estresse" },
            { id: 3, icon: "2", unlocked: false, name: "Dicas para se proteger do medo" },
            { id: 4, icon: "3", unlocked: false, name: "Dicas para melhorar a qualidade do sono" },
            { id: 5, icon: "4", unlocked: false, name: "Estratégias para facilitar o aprendizado e memorização" }
        ];
        this.storage.set('achievementList', this.achievementList);
    };
    QuestionariesListPage.prototype.resolveLevel = function () {
        if (this.points > 0 && this.points <= 12) {
            this.level = "Bronze";
            this.levelImg = "level1-min";
        }
        if (this.points > 12 && this.points <= 21) {
            this.level = "Prata";
            this.levelImg = "level2-min";
        }
        if (this.points > 21) {
            this.level = "Ouro";
            this.levelImg = "level3-min";
        }
    };
    //Carrega as métricas e vai para a página de priorização
    QuestionariesListPage.prototype.loadMetrics = function (metricId) {
        var _this = this;
        //------------------------CARREGA OS ITENS DE MÉTRICAS-----------------------------
        //1 - GUT, 2 - ESCALA QUALITATIVA, (3-17) - Métricas do questionário de teste
        this.priorizationProvider.getMetricValuesMetric(metricId)
            .then(function (metricItems) {
            if (metricItems != null) {
                _this.metricItems = metricItems;
                _this.storage.set('metricItems', _this.metricItems);
                _this.insertAnswerAndNavigateToPrioritization();
            }
            else {
                _this.showAlertLoadMetrics(metricId);
            }
        }).catch(function (error) {
            console.error(error);
            _this.restProvider.sendGoogleAnalyticsErrorData('QuestionariesListPage', 'loadMetrics', error);
            _this.showAlertLoadMetrics(metricId);
        });
    };
    //Carrega as métricas e vai para a página de priorização
    QuestionariesListPage.prototype.loadMetricsFromList = function (metricId) {
        var _this = this;
        //------------------------CARREGA OS ITENS DE MÉTRICAS-----------------------------
        //1 - GUT, 2 - ESCALA QUALITATIVA, (3-17) - Métricas do questionário de teste
        this.storage.get('metricItensList')
            .then(function (data) {
            var metricItems = data.filter(function (metricItem) { return (metricItem.metricId == metricId); });
            _this.metricItems = metricItems;
            _this.storage.set('metricItems', _this.metricItems);
            _this.insertAnswerAndNavigateToPrioritization();
        }).catch(function (error) {
            console.error(error);
            _this.restProvider.sendGoogleAnalyticsErrorData('QuestionariesListPage', 'loadMetricsFromList', error);
            _this.showAlertLoadMetrics(metricId);
        });
    };
    //Seleciona o questionário
    QuestionariesListPage.prototype.setQuestionary = function (questionary) {
        this.questionary = questionary;
        this.btnContinueDisabled = false;
    };
    //Consulta todas as questões do questionário
    QuestionariesListPage.prototype.getAllQuestionsByQuestionary = function (questionary, isRuralZone) {
        var _this = this;
        this.questionProvider.getAllQuestionsByQuestionary(questionary, isRuralZone)
            .then(function (result) {
            if (result != null) {
                _this.questions = result;
            }
            else {
                _this.showAlertGetAllQuestionsByQuestionary(questionary, isRuralZone);
            }
        }).catch(function (error) {
            console.error(error);
            _this.restProvider.sendGoogleAnalyticsErrorData('QuestionariesListPage', 'getAllQuestionsByQuestionary', error);
            _this.showAlertGetAllQuestionsByQuestionary(questionary, isRuralZone);
        });
    };
    //Exibe os resultados do questionário
    QuestionariesListPage.prototype.getResults = function (quesitonarySelected) {
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        this.navCtrl.push('ResultsPage', {
            questionary: quesitonarySelected,
        }).then(this.loader.dismiss());
    };
    //Navega para a pagina de prioritization
    QuestionariesListPage.prototype.insertAnswerAndNavigateToPrioritization = function () {
        this.createAnswer();
        this.navigatePrioritizationPage();
    };
    //Cria a resposta
    QuestionariesListPage.prototype.createAnswer = function () {
        this.answers = [];
        var answer = new __WEBPACK_IMPORTED_MODULE_1__providers_questionary_questionary__["a" /* Answer */]();
        answer.plan = this.plan;
        answer.questionary = this.questionary;
        answer.question = this.questions[0];
        answer.respondent = this.respondent;
        answer.answer = 1;
        var dateTime = new Date();
        answer.created_at = new Date(dateTime.valueOf() - dateTime.getTimezoneOffset() * 60000).toISOString();
        answer.isCompleted = false;
        this.answers.push(answer);
    };
    //Retorna para a página de perfil
    QuestionariesListPage.prototype.navigateBack = function () {
        this.navCtrl.setRoot('RespondentProfilePage', {});
    };
    //Navegação para as perguntas
    QuestionariesListPage.prototype.navigate = function () {
        var _this = this;
        if (this.questionary) {
            this.loader = this.loadingCtrl.create();
            this.loader.present();
            this.storage.set('plan', this.plan).then(function () {
                //Consulta as questões do questionário
                _this.questionProvider.getAllQuestionsByQuestionary(_this.questionary, 0)
                    .then(function (result) {
                    if (result != null) {
                        _this.questions = result;
                        //se metric_id for nulo, navega para página de questionário
                        if (_this.questions[0].metricId == null) {
                            _this.navigateQuestionaryPage();
                            //Se houver metric_id, carrega as métricas específicas  e navega para página de priorization
                        }
                        else {
                            _this.loadMetricsFromList(_this.questions[0].metricId);
                        }
                    }
                    else {
                        _this.showAlertGetAllQuestionsByQuestionaryNavigate();
                    }
                }).catch(function (error) {
                    console.error(error);
                    _this.restProvider.sendGoogleAnalyticsErrorData('QuestionariesListPage', 'navigate', error);
                    _this.showAlertGetAllQuestionsByQuestionaryNavigate();
                });
            }).catch(function (error) {
                console.error(error);
                _this.restProvider.sendGoogleAnalyticsErrorData('QuestionariesListPage', 'navigate', error);
                _this.showAlertSetPlan();
            });
        }
        else {
            this.btnContinueDisabled = true;
        }
    };
    //Navegação para página do questionário
    QuestionariesListPage.prototype.navigateQuestionaryPage = function () {
        this.navCtrl.push('QuestionaryPage', {
            points: this.points,
            questionary: this.questionary,
            questions: this.questions,
            currentQuestionIndex: 0,
            currentQuestion: this.questions[0],
            answers: [],
            answersNeighborhoods: [],
            prioritizations: []
        }).then(this.loader.dismiss());
    };
    // Navegação para página de priorização
    QuestionariesListPage.prototype.navigatePrioritizationPage = function () {
        this.navCtrl.push('PrioritizationPage', {
            points: this.points,
            plan: this.plan,
            respondent: this.respondent,
            questionary: this.questionary,
            questions: this.questions,
            metricItems: this.metricItems,
            currentMetricItem: this.metricItems[0],
            currentMetricItemIndex: 0,
            currentQuestionIndex: 0,
            currentQuestion: this.questions[0],
            answers: this.answers,
            answersNeighborhoods: [],
            prioritizations: []
        }).then(this.loader.dismiss());
    };
    QuestionariesListPage.prototype.showAlertLoadMetrics = function (metricId) {
        var _this = this;
        this.metricItems = [];
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.loadMetricsFromList(metricId);
                    }
                }]
        });
        alert.present();
    };
    QuestionariesListPage.prototype.showAlertGetAllPlanQuestionariesAnsweredByRespondent = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados dos questionários. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.setEntities();
                    }
                }]
        });
        alert.present();
    };
    QuestionariesListPage.prototype.showAlertGetRespondent = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Erro ao acessar os dados do respondente. Por favor, preencha novamente.',
            buttons: [{
                    text: "Ok",
                    handler: function () {
                        _this.navigateBack();
                    }
                }]
        });
        alert.present();
    };
    QuestionariesListPage.prototype.showAlertGetAllQuestionariesByPlan = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados de questionários. Por favor, tente novamente.',
            buttons: [{
                    text: "Ok",
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__intro_intro__["a" /* IntroPage */], {});
                    }
                }]
        });
        alert.present();
    };
    QuestionariesListPage.prototype.showAlertGetAllPlan = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível os dados do plano. Por favor, tente novamente.',
            buttons: [{
                    text: "Ok",
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__intro_intro__["a" /* IntroPage */], {});
                    }
                }]
        });
        alert.present();
    };
    QuestionariesListPage.prototype.showAlertGetAllQuestionsByQuestionaryNavigate = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os questões do questionário. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.navigate();
                    }
                }]
        });
        alert.present();
    };
    QuestionariesListPage.prototype.showAlertSetPlan = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível armazenar os dados do plano. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.navigate();
                    }
                }]
        });
        alert.present();
    };
    QuestionariesListPage.prototype.showAlertGetAllQuestionsByQuestionary = function (questionary, isRuralZone) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados das questões. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.getAllQuestionsByQuestionary(questionary, isRuralZone);
                    }
                }]
        });
        alert.present();
    };
    QuestionariesListPage.prototype.showAlertloadMetricItemList = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados das questões. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.loadMetricItemList();
                    }
                }]
        });
        alert.present();
    };
    QuestionariesListPage.prototype.showAchievementAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '<img class="img-alert" src="assets/imgs/game/achievement.png"/>',
            cssClass: 'achievement-alert',
            message: '<div class="tdialogue-box-text">'
                + '<div>Responda os questionários para liberar as</div>'
                + '<div text-center><strong>Dicas de saúde mental!</strong></div>'
                + '</div>',
            buttons: [{
                    text: 'Ok!',
                    cssClass: 'achievement-alert-button-confirm',
                    handler: function () {
                        var quote = "Você só pode desbloquear as <strong>dicas de saúde mental</strong> após responder os <strong>questionários</strong>!";
                        _this.talkAnimation(quote);
                        _this.achievementList.forEach(function (achievement) {
                            if (!achievement.unlocked) {
                                _this.achievementIcons.toArray()[parseInt(achievement.icon)].nativeElement.className = "sonar-wave";
                                setTimeout(function () {
                                    _this.achievementIcons.toArray()[parseInt(achievement.icon)].nativeElement.classList.remove("sonar-wave");
                                }, 10000);
                            }
                        });
                    }
                }]
        });
        alert.present();
        this.restProvider.sendGoogleAnalyticsEventTag('Questionary List', 'Clicou na conquista bloqueada', '', 'Game');
    };
    QuestionariesListPage.prototype.showAchievementUnlock = function (achievement) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '<img class="img-alert" src="assets/imgs/game/achievement-msg-' + achievement.icon + '.png"/>',
            cssClass: 'achievement-alert',
            message: '<div class="tdialogue-box-text">'
                + '<div><strong>Você desbloqueou uma dica:</strong></div>'
                + '<div><strong>' + achievement.name + '</strong></div>'
                + '<div text-center>Confira agora!</div>'
                + '</div>',
            buttons: [{
                    text: 'Fechar',
                    cssClass: 'achievement-alert-button-close',
                    handler: function () {
                        var quote = "Você desbloqueou uma dica de saúde! Você pode conferir agora!";
                        _this.talkAnimation(quote);
                        _this.achievementIcons.toArray()[parseInt(achievement.icon)].nativeElement.className = "sonar-wave";
                        setTimeout(function () {
                            _this.achievementIcons.toArray()[parseInt(achievement.icon)].nativeElement.classList.remove("sonar-wave");
                        }, 10000);
                    }
                }, {
                    text: 'Ver a dica!',
                    cssClass: 'achievement-alert-button-confirm',
                    handler: function () {
                        _this.restProvider.sendGoogleAnalyticsEventTag('Questionary List', 'Clicou na conquista pela dialog | ' + achievement.name, '', 'Game');
                        _this.storage.set('achievementList', _this.achievementList).then(function () {
                            _this.getAchievement(achievement);
                        });
                    }
                }]
        });
        alert.present();
    };
    QuestionariesListPage.prototype.getAchievement = function (achievement) {
        this.restProvider.sendGoogleAnalyticsEventTag('Questionary List', 'Clicou na conquista | ' + achievement.name, '', 'Game');
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        this.navCtrl.push('AchievementPage', {
            achievement: achievement,
            plan: this.plan,
        }).then(this.loader.dismiss());
    };
    QuestionariesListPage.prototype.resolvePerson = function () {
        this.personAnimation = "gif-a-4-crop";
        this.personQuote = "Responda os questionários para conseguir <strong>pontos</strong> para liberar as <strong>dicas de saúde</strong>! Você só poderá responder cada questionário uma vez.";
    };
    QuestionariesListPage.prototype.talkAnimation = function (quote) {
        var _this = this;
        this.personAnimation = "gif-a-5-crop";
        this.personQuote = quote;
        setTimeout(function () {
            _this.resolvePerson();
        }, 10000);
    };
    //Mensagem motivadora da narrativa
    QuestionariesListPage.prototype.help = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '<div text-center>Olá! Bem vindo(a) ao Opina Aí</div>',
            message: 
            //----------------------MENSAGEM------------------
            '<div class="alert-align-center">'
                + '<img class="img-alert" src="assets/gifs/gif-a-3.webp"/>'
                + '</div>'
                + '<div class="dialogue-box"><div class="tdialogue-box-text">'
                + '<div><strong>Bem vindo(a) ao Opina Aí!</strong></div>'
                // + '<div text-center>Sinta-se a vontade para contribuir com sua <strong>cidade</strong> respondendo os questionários!</div>'
                // + '<div text-center>Sua <strong>participação</strong> é muito importante!</div>'
                // + '</div></div>',
                + '<div text-center>Sinta-se a vontade para contribuir com a pesquisa para o <strong>levantamento sobre a saúde mental</strong> respondendo os questionários!</div>'
                + '<div text-center>Sua <strong>participação</strong> é muito importante!</div>'
                + '</div></div>',
            //----------------------MENSAGEM------------------
            buttons: [{
                    text: "Entendi, quero participar!",
                    handler: function () {
                        _this.storage.get('helpHome')
                            .then(function (data) {
                            if (data == null) {
                                _this.presentToast();
                                _this.storage.set('helpHome', true);
                            }
                        });
                    }
                }]
        });
        alert.present();
    };
    QuestionariesListPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Clique no icone em caso de dúvidas!',
            duration: 4000,
            position: 'top'
        });
        toast.present();
    };
    QuestionariesListPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_10" /* ViewChildren */])('achievementIcons'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["U" /* QueryList */])
    ], QuestionariesListPage.prototype, "achievementIcons", void 0);
    QuestionariesListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-questionaries-list',template:/*ion-inline-start:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\questionaries-list\questionaries-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col offset-1 col-2 class="menu-icon-col-not-game" *ngIf="!useGame">\n        <button ion-button clear (click)="openMenu()">\n          <ion-icon name="md-menu" class="menu-icon"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col offset-1 col-2 class="menu-icon-col" *ngIf="useGame">\n        <button ion-button clear (click)="openMenu()">\n          <ion-icon name="md-menu" class="menu-icon"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-6 *ngIf="!useGame">\n        <img class="img-responsive img-not-game" src="assets/imgs/header-logo.png" />\n      </ion-col>\n      <ion-col col-6 *ngIf="useGame">\n        <img class="img-responsive" src="assets/imgs/header-logo.png" />\n      </ion-col>\n      <ion-col col-2 *ngIf="useGame">\n        <button ion-button clear (click)="help()" class="button-help-questionary-list">\n          <ion-icon class="icon-help button-help-questionary-list" name="help-circle"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <!-------------------------- USE GAME -------------------------->\n    <ion-row *ngIf="useGame">\n      <h1 class="text-questionary-list" text-center>Questionários - {{plan.name}}</h1>\n      <ion-col col-3 class="text-questionary-list">\n        <img class="text-img" src="assets/gifs/{{personAnimation}}.webp">\n      </ion-col>\n      <ion-col col-9 class="text-questionary-list-game">\n        <h5 text-justify [innerHTML]="personQuote"></h5>\n      </ion-col>\n    </ion-row>\n    <h4 class="form form-game" *ngIf="showForm && useGame" text-justify>\n      Por favor, nos ajude a <strong>avaliar a gamificação do aplicativo</strong> respondendo o\n      formulário: <a href="{{formUrl}}" target="_blank">Avaliação da Gamificação</a>\n    </h4>\n    <ion-row *ngIf="useGame" class="reward__item achievement-row" text-center>\n      <ion-col col-12>\n        <ion-title class="reward_text">Dicas de saúde mental</ion-title>\n      </ion-col>\n      <ion-col col-2 class="achievement-col" *ngFor="let achievement of achievementList">\n        <button *ngIf="achievement.unlocked" ion-button class="button-achievement" (click)="getAchievement(achievement)"\n          clear>\n          <img src="assets/imgs/game/achievement-{{achievement.icon}}.png">\n          <div #achievementIcons></div>\n        </button>\n        <button *ngIf="!achievement.unlocked" ion-button class="button-achievement" (click)="showAchievementAlert()"\n          clear>\n          <ion-icon class="achievement" name="help-circle"></ion-icon>\n          <div #achievementIcons></div>\n        </button>\n      </ion-col>\n    </ion-row>\n    <!-------------------------- USE GAME -------------------------->\n    <!-------------------------- NO GAME -------------------------->\n    <ion-row *ngIf="!useGame">\n      <h1 class="text-questionary-list" text-center>Questionários - {{plan.name}}</h1>\n      <h4 class="form" *ngIf="showForm && !useGame" text-justify>\n        Por favor, nos ajude a <strong>avaliar o aplicativo</strong> respondendo o\n        formulário: <a href="{{formUrl}}" target="_blank">Avaliação do Aplicativo</a>\n      </h4>\n      <!-- <h5>Escolha um questionário abaixo para nos contar sua opinião sobre a requalificação do centro de Pouso Alegre.\n        </h5> -->\n      <h4 text-justify>Escolha um dos questionários abaixo para nos contar sobre a sua saúde mental.\n        Você só poderá responder cada questionário uma vez.</h4>\n    </ion-row>\n    <!-------------------------- NO GAME -------------------------->\n    <ion-row>\n      <ion-col col-12>\n        <!-- Lista de questionários -->\n        <ion-list radio-group>\n          <!-- Item da lista -->\n          <ion-item *ngFor="let questionary of questionaries" class="questionary-item-list">\n            <ion-thumbnail *ngIf="useGame" item-start>\n              <img *ngIf="questionary.answered" class="questionary-img-list"\n                src="assets/icon/{{questionary.icon}}-selected.png">\n              <img *ngIf="!questionary.answered" class="questionary-img-list"\n                src="assets/icon/{{questionary.icon}}.png">\n            </ion-thumbnail>\n            <ion-label *ngIf="!questionary.answered" text-wrap text-left>\n              <h2 class="text-questionary" *ngIf="!useGame">{{questionary.name}}</h2>\n              <h2 *ngIf="useGame">{{questionary.name}}</h2>\n            </ion-label>\n            <ion-label *ngIf="questionary.answered" text-wrap text-left class="label-result">\n              <h2 class="text-questionary" *ngIf="!useGame">{{questionary.name}}</h2>\n              <h2 *ngIf="useGame">{{questionary.name}}</h2>\n              <div *ngIf="useGame">\n                <p>Respondido!</p>\n              </div>\n            </ion-label>\n            <!-- <ion-label *ngIf="questionary.answered" text-right text-wrap class="label-result-button">\n              <button ion-button icon-only text-wrap class="button-result" (click)="getResults(questionary)">\n                Ver resultados\n              </button>\n            </ion-label> -->\n            <ion-radio disabled="{{questionary.answered}}" *ngIf="!questionary.answered"\n              (ionSelect)="setQuestionary(questionary)"></ion-radio>\n          </ion-item>\n          <!-- Item da lista -->\n        </ion-list>\n        <!-- Lista de questionários -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<!-------------------------- NO GAME -------------------------->\n<ion-footer class="footer-not-game" *ngIf="!useGame">\n  <ion-grid>\n    <ion-row>\n      <button ion-button full class="button-background" (click)="navigate()" [disabled]="btnContinueDisabled">\n        <ion-icon id="button-questionary-list-not-game-{{questionary.id}}" class="text-button">\n          Continuar\n        </ion-icon>\n      </button>\n    </ion-row>\n  </ion-grid>\n  <ion-navbar class="toolbar-progress"></ion-navbar>\n</ion-footer>\n<!-------------------------- NO GAME -------------------------->\n<!-------------------------- USE GAME -------------------------->\n<ion-footer *ngIf="useGame">\n  <ion-grid>\n    <ion-row>\n      <button ion-button full class="button-background" (click)="navigate()" [disabled]="btnContinueDisabled">\n        <ion-icon id="button-questionary-list-game-{{questionary.id}}" class="text-button">\n          Continuar\n        </ion-icon>\n      </button>\n    </ion-row>\n  </ion-grid>\n  <ion-navbar class="toolbar-progress">\n    <ion-title text-center class="toolbar-point">\n      <ion-icon range-right name="md-ribbon"></ion-icon>\n      {{points}} pontos\n    </ion-title>\n    <ion-range class="progress-bar" [min]="0" [max]="100" [step]="1" [(ngModel)]="progress" disabled>\n      <ion-row class="row-level" range-left text-center>\n        <ion-col col-12>\n          <img class="img-level" src="assets/imgs/game/{{levelImg}}.png" />\n        </ion-col>\n        <ion-col class="badge-level-col" col-12>\n          <ion-badge>{{level}}</ion-badge>\n        </ion-col>\n      </ion-row>\n      <ion-icon range-right></ion-icon>\n    </ion-range>\n    <div text-center class="progres-text-uper">{{answeredQuestionaries}} de {{totalQuestionaries}}\n      questionários respondidos</div>\n  </ion-navbar>\n</ion-footer>\n<!-------------------------- USE GAME -------------------------->'/*ion-inline-end:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\questionaries-list\questionaries-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_question_question__["a" /* QuestionProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_questionary_questionary__["d" /* QuestionaryProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9__providers_prioritization_prioritization__["a" /* PrioritizationProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_10__providers_rest_rest__["a" /* RestProvider */]])
    ], QuestionariesListPage);
    return QuestionariesListPage;
}());

var Achievement = /** @class */ (function () {
    function Achievement() {
    }
    return Achievement;
}());

//# sourceMappingURL=questionaries-list.js.map

/***/ })

});
//# sourceMappingURL=4.js.map