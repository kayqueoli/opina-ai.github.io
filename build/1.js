webpackJsonp([1],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RespondentProfilePageModule", function() { return RespondentProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__respondent_profile__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RespondentProfilePageModule = /** @class */ (function () {
    function RespondentProfilePageModule() {
    }
    RespondentProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__respondent_profile__["b" /* RespondentProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__respondent_profile__["b" /* RespondentProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */]
            ],
        })
    ], RespondentProfilePageModule);
    return RespondentProfilePageModule;
}());

//# sourceMappingURL=respondent-profile.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RespondentProfilePage; });
/* unused harmony export ResidenceTime */
/* unused harmony export SalaryRange */
/* unused harmony export AgeRange */
/* unused harmony export Discipline */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Respondent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__intro_intro__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_city_city__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_neighborhood_neighborhood__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_database_database__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_respondent_respondent__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_rest_rest__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var RespondentProfilePage = /** @class */ (function () {
    function RespondentProfilePage(menuCtrl, navCtrl, databaseProvider, cityProvider, formBuilder, respondentProvider, neighborhoodProvider, alertCtrl, storage, loadingCtrl, restProvider) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.databaseProvider = databaseProvider;
        this.cityProvider = cityProvider;
        this.formBuilder = formBuilder;
        this.respondentProvider = respondentProvider;
        this.neighborhoodProvider = neighborhoodProvider;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.restProvider = restProvider;
        this.respondentId = 0;
        this.respondentCode = null;
        this.userType = "cidadão";
        this.caseTest = "Levantamento sobre a Saúde Mental - UNIFEI";
        this.ageRangeName = "";
        this.residenceTimeName = "";
        this.salaryRangeName = "";
        this.levelImg = "level0";
        this.disciplineList = [];
        this.disciplineSelected = [];
        this.residenceTypeList = [];
        this.residenceMembersList = [];
        this.financialAssistanceList = [];
        this.genderList = [];
        this.courseEntryList = [];
        this.courseLeftList = [];
        this.courseNameList = [];
        this.userTypeList = [];
        this.cities = [];
        this.residenceTimeList = [];
        this.salaryRangeList = [];
        this.ageRangeList = [];
        this.metricItems = [];
        this.isSameJobCity = "hide";
        this.isCommerce = false;
        this.courseDisabled = true;
        this.jobNeighborhoodDisabled = true;
        this.useGame = false;
        this.editing = false;
        this.hideField = false;
        this.isDiscent = false;
        this.isDiscentEvaded = false;
        this.isDiscentConcluded = false;
        this.isDocent = false;
        this.isTermRead = false;
        this.storage.get('useGame').then(function (data) { return _this.useGame = data; });
        this.storage.set('isRuralZone', false);
        this.createUserTypeList();
        this.createResidenceTypeList();
        this.createResidenceMembersList();
        this.createFinancialAssistanceList();
        this.createForm();
        this.createCourseSemester();
        // this.createDisciplineList();
        // this.createResidenceTimeRange();
        // this.createSalaryRange();
        // this.createAgeRange();
        // this.createGenderList();
        // this.loadAllCities();
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        setTimeout(function () {
            _this.existsRespondent();
            _this.loader.dismiss();
        }, 1000);
    }
    // ---------------- CRIAÇÃO DO FORMULÁRIO ----------------
    RespondentProfilePage.prototype.createForm = function () {
        var financialAssistanceCheck = [];
        this.financialAssistanceList.forEach(function () {
            financialAssistanceCheck.push(false);
        });
        this.respondentForm = this.formBuilder.group({
            // ------------ CASE 2 - UNIFEI ------------
            userType: [''],
            courseName: [''],
            courseEntry: [''],
            residenceType: [''],
            residenceMembers: [''],
            haveChildren: [false],
            haveJob: [false],
            term: [false, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].requiredTrue],
            financialAssistance: this.formBuilder.array(financialAssistanceCheck)
            // ------------ CASE 2 - UNIFEI ------------
            // ------------ CASE 1 - POSCOMP ------------
            // code: [''],
            // courseEntry: [''],
            // courseLeft: [''],
            // userType: [''],
            // name: [''],
            // isDiscentConcluded: [false]
            // ------------ CASE 1 - POSCOMP ------------
            // cpf: ['', [Validators.required], this.validateCPF.bind(this)],
            // email: [''],
            // courseName: [''],
            // residenceCity: [''],
            // jobAddress: [''],
            // jobName: [''],
            // whatsapp: [''],
            // residenceTimeRange: [''],
            // residenceNeighborhood: ['', [Validators.required]],
            // jobCity: [''],
            // jobNeighborhood: [''],
            // salaryRange: [''],
            // age: [''],
            // gender: [''],
            // phone: [''],
            // isCommerce: [false]
        });
        // this.respondentForm.controls['residenceTimeRange'].setValue(0);
        // this.respondentForm.controls['salaryRange'].setValue(0);
    };
    RespondentProfilePage.prototype.setFormData = function () {
        var _this = this;
        var entities = ['city', 'plan', 'isRuralZone', 'questionaries'];
        this.databaseProvider.verifyEntities(entities)
            .then(function (data) {
            if (data.length > 0 && data.filter(function (data) { return data == false; }).length == 0) {
                _this.setEntities();
            }
            else {
                _this.navigateBack();
            }
        })
            .catch(function (error) {
            console.error(error);
            _this.restProvider.sendGoogleAnalyticsErrorData('RespondentProfilePage', 'setFormData', error);
            _this.navigateBack();
        });
    };
    RespondentProfilePage.prototype.setEntities = function () {
        var _this = this;
        this.storage.get('city')
            .then(function (data) {
            if (data != null) {
                _this.city = data;
                _this.cityName = _this.city.name;
                _this.storage.get('plan')
                    .then(function (data) {
                    if (data != null) {
                        _this.plan = data;
                        _this.storage.get('questionaries')
                            .then(function (data) {
                            _this.questionaries = data;
                            if (data != null) {
                                _this.storage.get('points')
                                    .then(function (data) {
                                    if (data != null) {
                                        _this.points = data;
                                        _this.resolveLevel();
                                    }
                                    else {
                                        _this.navigateBack();
                                    }
                                })
                                    .catch(function () { return _this.navigateBack(); });
                            }
                            else {
                                _this.navigateBack();
                            }
                        })
                            .catch(function () { return _this.navigateBack(); });
                    }
                    else {
                        _this.navigateBack();
                    }
                })
                    .catch(function () { return _this.navigateBack(); });
            }
            else {
                _this.navigateBack();
            }
        })
            .catch(function () { return _this.navigateBack(); });
    };
    // ---------------- CRIAÇÃO DO FORMULÁRIO ----------------
    // ---------------- INFORMAÇÕES DO RESPONDENTE ----------------
    RespondentProfilePage.prototype.existsRespondent = function () {
        var _this = this;
        this.storage.get('respondent')
            .then(function (respondent) {
            _this.setFormData();
            if (respondent != null) {
                _this.editing = true;
                _this.isTermRead = true;
                _this.courseDisabled = false;
                // ----------------- CASE 2 - UNIFEI -----------------
                _this.respondentId = respondent.id;
                _this.respondentForm.controls['userType'].setValue(respondent.type);
                _this.respondentForm.controls['courseName'].setValue(respondent.courseName);
                _this.respondentForm.controls['courseEntry'].setValue(respondent.courseEntry);
                _this.respondentForm.controls['residenceType'].setValue(respondent.residenceType);
                _this.respondentForm.controls['residenceMembers'].setValue(respondent.residenceMembers);
                _this.respondentForm.controls['haveChildren'].setValue(respondent.haveChildren);
                _this.respondentForm.controls['haveJob'].setValue(respondent.haveJob);
                var financialAssistanceCheck_1 = _this.respondentForm.controls['financialAssistance'].value;
                JSON.parse(respondent.financialAssistance).forEach(function (financialAssistance) {
                    financialAssistanceCheck_1[financialAssistance.id] = true;
                });
                _this.respondentForm.controls['financialAssistance'].setValue(financialAssistanceCheck_1);
                _this.respondentForm.controls['term'].setValue(true);
                // this.respondentForm.controls['financialAssistance'].setValue(JSON.parse(respondent.financialAssistance));
                // ----------------- CASE 2 - UNIFEI -----------------
                // ----------------- CASE 1 - POSCOMP -----------------
                // this.respondentId = respondent.id;
                // this.respondentCode = respondent.code;
                // this.respondentForm.controls['name'].setValue(respondent.name);
                // this.respondentForm.controls['code'].setValue(respondent.code);
                // this.respondentForm.controls['courseEntry'].setValue(respondent.courseEntry);
                // this.respondentForm.controls['courseLeft'].setValue(respondent.courseLeft);
                // this.respondentForm.controls['userType'].setValue(respondent.type);
                // ----------------- CASE 1 - POSCOMP -----------------
                // this.respondentCode = respondent.code;
                // this.respondentForm.controls['name'].setValue(respondent.name);
                // this.respondentForm.controls['code'].setValue(respondent.code);
                // this.respondentForm.controls['courseEntry'].setValue(respondent.courseEntry);
                // this.respondentForm.controls['courseLeft'].setValue(respondent.courseLeft);
                // this.respondentForm.controls['cpf'].setValue(respondent.cpf);
                // this.respondentForm.controls['email'].setValue(respondent.email);
                // this.respondentForm.controls['residenceTimeRange'].setValue(respondent.residenceTimeRange);
                // this.respondentForm.controls['salaryRange'].setValue(respondent.salaryRange);
                // this.respondentForm.controls['residenceNeighborhood'].setValue(respondent.residenceNeighborhood);
                // this.respondentForm.controls['jobCity'].setValue(respondent.jobCity);
                // this.respondentForm.controls['age'].setValue(respondent.ageRange);
                // this.respondentForm.controls['gender'].setValue(respondent.gender);
                // this.respondentForm.controls['phone'].setValue(respondent.phone);
                // this.respondentForm.controls['courseName'].setValue(respondent.courseName);
                // this.respondentForm.controls['residenceCity'].setValue(respondent.residenceCity);
                // this.respondentForm.controls['jobAddress'].setValue(respondent.jobAddress);
                // this.respondentForm.controls['jobName'].setValue(respondent.jobName);
                // this.respondentForm.controls['whatsapp'].setValue(respondent.whatsapp);
                _this.userType = respondent.type;
                _this.resolveUsertype();
                _this.resolveCheckBoxFinancialAssistence();
                // this.resolveCheckBoxDiscipline();
                // if (respondent.jobNeighborhood != null) {
                //   this.respondentForm.controls['jobNeighborhood'].setValue(respondent.jobNeighborhood);
                //   this.jobCity = respondent.jobCity;
                //   this.loadJobNeighborhoods();
                //   this.isSameJobCity = "";
                // }
            }
        });
    };
    RespondentProfilePage.prototype.saveRespondentInfo = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        //-----------------------MANTER SEMPRE TODOS OS CAMPOS--------------------------
        var cpf = this.respondentForm.controls['cpf'];
        var email = this.respondentForm.controls['email'];
        var residenceNeighborhood = this.respondentForm.controls['residenceNeighborhood'];
        var residenceTimeRange = this.respondentForm.controls['residenceTimeRange'];
        var jobCity = this.respondentForm.controls['jobCity'];
        var jobNeighborhood = this.respondentForm.controls['jobNeighborhood'];
        var salaryRange = this.respondentForm.controls['salaryRange'];
        var age = this.respondentForm.controls['age'];
        var gender = this.respondentForm.controls['gender'];
        var name = this.respondentForm.controls['name'];
        var phone = this.respondentForm.controls['phone'];
        var code = this.respondentForm.controls['code'];
        var courseEntry = this.respondentForm.controls['courseEntry'];
        var courseLeft = this.respondentForm.controls['courseLeft'];
        var courseName = this.respondentForm.controls['courseName'];
        var residenceCity = this.respondentForm.controls['residenceCity'];
        var jobAddress = this.respondentForm.controls['jobAddress'];
        var jobName = this.respondentForm.controls['jobName'];
        var whatsapp = this.respondentForm.controls['whatsapp'];
        var residenceType = this.respondentForm.controls['residenceType'];
        var residenceMembers = this.respondentForm.controls['residenceMembers'];
        var haveChildren = this.respondentForm.controls['haveChildren'];
        var haveJob = this.respondentForm.controls['haveJob'];
        var financialAssistance = this.respondentForm.controls['financialAssistance'];
        var financialAssistanceSelected = [];
        for (var i = 0; i < financialAssistance.value.length; i++) {
            if (financialAssistance.value[i] === true) {
                financialAssistanceSelected.push(this.financialAssistanceList[i]);
            }
        }
        //-----------------------MANTER SEMPRE TODOS OS CAMPOS--------------------------
        var gameType = null;
        if (this.useGame) {
            gameType = "game";
        }
        else {
            gameType = "not game";
        }
        if (!this.respondentForm.valid) {
            if (!cpf.valid) {
                cpf.markAsTouched();
            }
            if (!residenceNeighborhood.valid) {
                residenceNeighborhood.markAsTouched();
            }
            this.loader.dismiss();
        }
        else {
            //-----------------------MANTER SEMPRE TODOS OS CAMPOS--------------------------
            var respondent_1 = new Respondent();
            respondent_1.cpf = cpf ? cpf.value : null;
            respondent_1.email = email ? email.value : null;
            respondent_1.residenceTimeRange = residenceTimeRange ? residenceTimeRange.value : null;
            respondent_1.residenceNeighborhood = residenceNeighborhood ? residenceNeighborhood.value : null;
            respondent_1.jobCity = jobCity ? jobCity.value : null;
            respondent_1.jobNeighborhood = jobNeighborhood ? jobNeighborhood.value : null;
            respondent_1.salaryRange = salaryRange ? salaryRange.value : null;
            respondent_1.ageRange = age ? age.value : null;
            respondent_1.gender = gender ? gender.value : null;
            respondent_1.name = name ? name.value : null;
            respondent_1.phone = phone ? phone.value : null;
            respondent_1.code = code ? code.value : null;
            respondent_1.courseEntry = courseEntry ? courseEntry.value : null;
            respondent_1.courseLeft = courseLeft ? courseLeft.value : null;
            respondent_1.courseName = courseName ? courseName.value : null;
            respondent_1.residenceCity = residenceCity ? residenceCity.value : null;
            respondent_1.jobAddress = jobAddress ? jobAddress.value : null;
            respondent_1.jobName = jobName ? jobName.value : null;
            respondent_1.whatsapp = whatsapp ? whatsapp.value : null;
            respondent_1.residenceType = residenceType ? residenceType.value : null;
            respondent_1.residenceMembers = residenceMembers ? residenceMembers.value : null;
            respondent_1.haveChildren = haveChildren.value;
            respondent_1.haveJob = haveJob.value;
            respondent_1.financialAssistance = financialAssistance ? JSON.stringify(financialAssistanceSelected) : null;
            respondent_1.type = this.userType;
            respondent_1.caseTest = this.caseTest;
            respondent_1.points = this.points;
            respondent_1.gameType = gameType;
            //-----------------------MANTER SEMPRE TODOS OS CAMPOS--------------------------
            //---------------------- VERIFICA SE JA EXISTE UM ALUNO COM A MATRICULA -------------------------
            this.storage.set("disciplineSelected", this.disciplineSelected);
            this.respondentProvider.getRespondentByCode(respondent_1.code, this.respondentCode).then(function (repondentCode) {
                if (!repondentCode) {
                    //---------------------- VERIFICA SE O RESPONDENTE ESTÁ CADASTRADO -------------------------
                    _this.respondentProvider.getRespondentById(_this.respondentId).then(function (result) {
                        if (!result) {
                            //------------- INSERE O RESPONDENTE  -------------
                            _this.respondentProvider.insertRespondent(respondent_1)
                                .then(function (data) {
                                respondent_1.id = data.id;
                                _this.navigate(respondent_1);
                            }).catch(function (error) {
                                console.error(error);
                                _this.restProvider.sendGoogleAnalyticsErrorData('RespondentProfilePage', 'saveRespondentInfo', error);
                                _this.tryAgainSaveRespondent();
                            });
                        }
                        else {
                            //------------- ATUALIZA O RESPONDENTE -------------
                            respondent_1.id = result.id;
                            respondent_1.type = result.type;
                            _this.respondentProvider.updateRespondent(respondent_1)
                                .then(function () {
                                _this.navigate(respondent_1);
                            }).catch(function (error) {
                                console.error(error);
                                _this.restProvider.sendGoogleAnalyticsErrorData('RespondentProfilePage', 'saveRespondentInfo', error);
                                _this.tryAgainSaveRespondent();
                            });
                        }
                    }).catch(function (error) {
                        console.error(error);
                        _this.restProvider.sendGoogleAnalyticsErrorData('RespondentProfilePage', 'saveRespondentInfo', error);
                        _this.tryAgainSaveRespondent();
                    });
                }
                else {
                    //------------- ATUALIZA O RESPONDENTE -------------
                    respondent_1.id = repondentCode.id;
                    respondent_1.type = repondentCode.type;
                    _this.respondentProvider.updateRespondent(respondent_1)
                        .then(function () {
                        _this.navigate(respondent_1);
                    }).catch(function (error) {
                        console.error(error);
                        _this.restProvider.sendGoogleAnalyticsErrorData('RespondentProfilePage', 'saveRespondentInfo', error);
                        _this.tryAgainSaveRespondent();
                    });
                }
            });
        }
    };
    RespondentProfilePage.prototype.tryAgainSaveRespondent = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível salvar os seus dados. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.saveRespondentInfo();
                    }
                }]
        });
        this.loader.dismiss();
        alert.present();
    };
    // ---------------- INFORMAÇÕES DO RESPONDENTE ----------------
    // ---------------- CRIAÇÃO DAS LISTAS DOS SELECTS ----------------
    RespondentProfilePage.prototype.createUserTypeList = function () {
        this.userTypeList = [];
        this.userTypeList = [
            { value: 'Graduação' },
            { value: 'Mestrado' },
            { value: 'Doutorado' }
        ];
    };
    RespondentProfilePage.prototype.createResidenceTypeList = function () {
        this.residenceTypeList = [];
        this.residenceTypeList = [
            { value: 'Com a família' },
            { value: 'República' },
            { value: 'Kitnet' },
            { value: 'Quarto alugado' },
            { value: 'Quarto compartilhado' },
            { value: 'Sozinho' }
        ];
    };
    RespondentProfilePage.prototype.createResidenceMembersList = function () {
        this.residenceMembersList = [];
        this.residenceMembersList = [
            { value: 'Nenhuma' },
            { value: 'Uma pessoa' },
            { value: 'Duas pessoas' },
            { value: 'Três pessoas ' },
            { value: 'Quatro pessoas' },
            { value: 'Mais de quatro pessoas' }
        ];
    };
    RespondentProfilePage.prototype.createFinancialAssistanceList = function () {
        this.financialAssistanceList = [];
        this.financialAssistanceList = [
            { id: 0, value: 'Auxílio da DAE' },
            { id: 1, value: 'Auxílio emergencial de Inclusão Digital' },
            { id: 2, value: 'Bolsa de agências de fomento (CNPQ, CAPES, FAPEMIG ou outras)' },
            { id: 3, value: 'Bolsa de Estágio' },
            { id: 4, value: 'Ajuda de familiares ou amigos' },
            { id: 5, value: 'Outros' }
        ];
    };
    RespondentProfilePage.prototype.createCourseSemester = function () {
        this.courseEntryList = [];
        this.courseEntryList = [
            { value: '1º período' },
            { value: '2º período' },
            { value: '3º período' },
            { value: '4º período' },
            { value: '5º período' },
            { value: '6º período' },
            { value: '7º período' },
            { value: '8º período' },
            { value: '9º período' },
            { value: '10º período' },
            { value: '11º período' },
            { value: '12º período' },
            { value: '13º período' },
            { value: '14º período' },
            { value: '15º período' },
            { value: '16º período' },
            { value: '17º período' },
            { value: '18º período' },
            { value: '19º período' },
            { value: '20º período' }
        ];
        // this.courseEntryList = [
        //   { value: '1º semestre - 2010' },
        //   { value: '2º semestre - 2010' },
        //   { value: '1º semestre - 2011' },
        //   { value: '2º semestre - 2011' },
        //   { value: '1º semestre - 2012' },
        //   { value: '2º semestre - 2012' },
        //   { value: '1º semestre - 2013' },
        //   { value: '2º semestre - 2013' },
        //   { value: '1º semestre - 2014' },
        //   { value: '2º semestre - 2014' },
        //   { value: '1º semestre - 2015' },
        //   { value: '2º semestre - 2015' },
        //   { value: '1º semestre - 2016' },
        //   { value: '2º semestre - 2016' },
        //   { value: '1º semestre - 2017' },
        //   { value: '2º semestre - 2017' },
        //   { value: '1º semestre - 2018' },
        //   { value: '2º semestre - 2018' },
        //   { value: '1º semestre - 2019' },
        //   { value: '2º semestre - 2019' },
        //   { value: '1º semestre - 2020' }
        // ];
        // this.courseLeftList = [];
        // this.courseLeftList = [
        //   { value: '1º semestre - 2010' },
        //   { value: '2º semestre - 2010' },
        //   { value: '1º semestre - 2011' },
        //   { value: '2º semestre - 2011' },
        //   { value: '1º semestre - 2012' },
        //   { value: '2º semestre - 2012' },
        //   { value: '1º semestre - 2013' },
        //   { value: '2º semestre - 2013' },
        //   { value: '1º semestre - 2014' },
        //   { value: '2º semestre - 2014' },
        //   { value: '1º semestre - 2015' },
        //   { value: '2º semestre - 2015' },
        //   { value: '1º semestre - 2016' },
        //   { value: '2º semestre - 2016' },
        //   { value: '1º semestre - 2017' },
        //   { value: '2º semestre - 2017' },
        //   { value: '1º semestre - 2018' },
        //   { value: '2º semestre - 2018' },
        //   { value: '1º semestre - 2019' },
        //   { value: '2º semestre - 2019' },
        //   { value: '1º semestre - 2020' }
        // ];
    };
    RespondentProfilePage.prototype.createCourseNameListGrad = function () {
        this.courseNameList = [];
        this.courseNameList = [
            { value: 'Administração' },
            { value: 'Ciência da Computação' },
            { value: 'Ciências Atmosféricas' },
            { value: 'Ciências Biológicas' },
            { value: 'Engenharia Ambiental' },
            { value: 'Engenharia Ambiental – Itabira' },
            { value: 'Engenharia Civil' },
            { value: 'Engenharia da Mobilidade – Itabira' },
            { value: 'Engenharia de Bioprocessos' },
            { value: 'Engenharia de Computação' },
            { value: 'Engenharia de Computação – Itabira' },
            { value: 'Engenharia de Controle e Automação' },
            { value: 'Engenharia de Controle e Automação – Itabira' },
            { value: 'Engenharia de Energia' },
            { value: 'Engenharia de Materiais' },
            { value: 'Engenharia de Materiais – Itabira' },
            { value: 'Engenharia de Produção' },
            { value: 'Engenharia de Produção – Itabira' },
            { value: 'Engenharia de Saúde e Segurança – Itabira' },
            { value: 'Engenharia Elétrica' },
            { value: 'Engenharia Elétrica – Itabira' },
            { value: 'Engenharia Eletrônica' },
            { value: 'Engenharia Hídrica' },
            { value: 'Engenharia Mecânica' },
            { value: 'Engenharia Mecânica – Itabira' },
            { value: 'Engenharia Mecânica Aeronáutica' },
            { value: 'Engenharia Química' },
            { value: 'Física Bacharelado' },
            { value: 'Física Licenciatura' },
            { value: 'Matemática Bacharelado' },
            { value: 'Matemática Licenciatura' },
            { value: 'Química Bacharelado' },
            { value: 'Química Licenciatura' },
            { value: 'Sistemas de Informação' }
        ];
    };
    RespondentProfilePage.prototype.createCourseNameListMest = function () {
        this.courseNameList = [];
        this.courseNameList = [
            { value: 'Mestrado em Engenharia Elétrica' },
            { value: 'Mestrado em Engenharia Mecânica' },
            { value: 'Mestrado em Engenharia de Produção' },
            { value: 'Mestrado em Multicêntrico em Química de Minas Gerais' },
            { value: 'Mestrado em Meio Ambiente e Recursos Hídricos' },
            { value: 'Mestrado em Materiais para a Engenharia' },
            { value: 'Mestrado em Educação em Ciências' },
            { value: 'Mestrado em Engenharia de Energia' },
            { value: 'Mestrado em Ciência e Tecnologia da Computação' },
            { value: 'Mestrado em Desenvolvimento, Tecnologias e Sociedade' },
            { value: 'Mestrado em Matemática' },
            { value: 'Mestrado em Física' },
            { value: 'Mestrado Profissional em Engenharia de Produção' },
            { value: 'Mestrado Profissional em Administração ' },
            { value: 'Mestrado Profissional em Engenharia Hídrica' },
            { value: 'Mestrado Profissional em Gestão e Regulação de Recursos Hídricos – PROFÁGUA' },
            { value: 'Mestrado Profissional em Engenharia de Materiais ' }
        ];
    };
    RespondentProfilePage.prototype.createCourseNameListDout = function () {
        this.courseNameList = [];
        this.courseNameList = [
            { value: 'Doutorado em Engenharia Elétrica' },
            { value: 'Doutorado em Engenharia Mecânica' },
            { value: 'Doutorado em Engenharia de Produção' },
            { value: 'Doutorado em Multicêntrico em Química de Minas Gerais' },
            { value: 'Doutorado em Meio Ambiente e Recursos Hídricos' },
            { value: 'Doutorado em Materiais para a Engenharia' },
            { value: 'Doutorado em Materiais para a Engenharia - Itabira' },
            { value: 'Doutorado em Multicêntrico em Química de Minas Gerais - Itabira' },
        ];
    };
    RespondentProfilePage.prototype.createDisciplineList = function () {
        this.disciplineList = [];
        this.disciplineList = [
            { value: 0, name: "Algoritmos e Estruturas de Dados" },
            { value: 1, name: "Empreendedorismo Tecnológico" },
            { value: 2, name: "Introdução a Otimização Inteira" },
            { value: 3, name: "Robótica Móvel II" },
            { value: 4, name: "Sistemas Operacionais" },
            { value: 5, name: "Tópicos em Engenharia de Software" },
            { value: 6, name: "Visualização de Informação" }
        ];
    };
    RespondentProfilePage.prototype.createGenderList = function () {
        this.genderList = [];
        this.genderList = [
            { value: 'Masculino' },
            { value: 'Feminino' },
            { value: 'Outro' }
        ];
    };
    RespondentProfilePage.prototype.createResidenceTimeRange = function () {
        this.residenceTimeList = [];
        this.residenceTimeList = [
            { name: 'Menos de um 1 ano', value: 0 },
            { name: 'De 1 a 5 anos', value: 1 },
            { name: 'De 5 a 10 anos', value: 2 },
            { name: 'De 10 a 20 anos', value: 3 },
            { name: 'Mais de 20 anos', value: 4 }
        ];
        this.residenceTimeName = this.residenceTimeList[0].name;
    };
    RespondentProfilePage.prototype.createAgeRange = function () {
        this.ageRangeList = [];
        this.ageRangeList = [
            { name: 'Até 16 anos', value: 0 },
            { name: 'Entre 16 e 25 anos', value: 1 },
            { name: 'Entre 25 e 40 anos', value: 2 },
            { name: 'Entre 40 e 60 anos', value: 3 },
            { name: 'Acima de 60 anos', value: 4 }
        ];
        this.ageRangeName = this.ageRangeList[0].name;
    };
    RespondentProfilePage.prototype.createSalaryRange = function () {
        this.salaryRangeList = [];
        this.salaryRangeList = [
            { name: 'Até 2 Salários Mínimos', value: 0 },
            { name: 'De 2 a 4 Salários Mínimos', value: 1 },
            { name: 'De 4 a 10 Salários Mínimos', value: 2 },
            { name: 'De 10 a 20 Salários Mínimos', value: 3 },
            { name: 'Acima de 20 Salários Mínimos', value: 4 }
        ];
        this.salaryRangeName = this.salaryRangeList[0].name;
    };
    // ---------------- CRIAÇÃO DAS LISTAS DOS SELECTS ----------------
    // ---------------- CRIAÇÃO DAS LISTAS DOS BAIRROS ----------------
    RespondentProfilePage.prototype.loadResidenceNeighborhoods = function () {
        var _this = this;
        this.neighborhoodProvider.getAllNeighborhoodsByCity(this.city)
            .then(function (neighborhoods) {
            if (neighborhoods != null) {
                _this.residenceNeighborhoods = _this.sortAscCollection(neighborhoods);
                _this.storage.set('neighborhoods', _this.residenceNeighborhoods);
                _this.loader.dismiss();
            }
            else {
                _this.showAlertLoadResidenceNeighborhoods();
            }
        })
            .catch(function (error) {
            console.error(error);
            _this.restProvider.sendGoogleAnalyticsErrorData('RespondentProfilePage', 'loadResidenceNeighborhoods', error);
            _this.showAlertLoadResidenceNeighborhoods();
        });
    };
    RespondentProfilePage.prototype.loadJobNeighborhoods = function () {
        var _this = this;
        this.neighborhoodProvider.getAllNeighborhoodsByCity(this.jobCity)
            .then(function (neighborhoods) {
            if (neighborhoods != null) {
                _this.jobNeighborhoodDisabled = false;
                _this.jobNeighborhoods = _this.sortAscCollection(neighborhoods);
                if (_this.compareFn(_this.jobCity, _this.city)) {
                    _this.isSameJobCity = "";
                }
                else {
                    _this.isSameJobCity = "hide";
                }
            }
            else {
                _this.showAlertLoadJobNeighborhoods();
            }
        })
            .catch(function (error) {
            console.error(error);
            _this.restProvider.sendGoogleAnalyticsErrorData('RespondentProfilePage', 'loadJobNeighborhoods', error);
            _this.showAlertLoadJobNeighborhoods();
        });
    };
    RespondentProfilePage.prototype.loadAllCities = function () {
        var _this = this;
        this.cityProvider.getAllCities()
            .then(function (cities) {
            if (cities != null) {
                _this.cities = _this.sortAscCollection(cities);
            }
            else {
                _this.showAlertGetAllCities();
            }
        })
            .catch(function (error) {
            console.error(error);
            _this.restProvider.sendGoogleAnalyticsErrorData('RespondentProfilePage', 'getAllCities', error);
            _this.showAlertGetAllCities();
        });
    };
    // ---------------- CRIAÇÃO DAS LISTAS DOS BAIRROS ----------------
    // ---------------- RESOLVE AS EXIBIÇÕES ----------------
    RespondentProfilePage.prototype.resolveUsertype = function () {
        // ----------------- CASE 2 - UNIFEI -----------------
        if (this.userType == "Graduação") {
            this.courseDisabled = false;
            this.createCourseNameListGrad();
        }
        else if (this.userType == "Mestrado") {
            this.courseDisabled = false;
            this.createCourseNameListMest();
        }
        else if (this.userType == "Doutorado") {
            this.courseDisabled = false;
            this.createCourseNameListDout();
        }
        // ----------------- CASE 2 - UNIFEI -----------------
        // ------------------- CASE 1 - POSCOMP -------------------
        // if (this.userType == "Discente formado") {
        //   this.isDiscent = true;
        //   this.isDiscentConcluded = true;
        //   this.isDiscentEvaded = true;
        //   this.isDocent = false;
        //   this.respondentForm.controls['isDiscentConcluded'].setValue(true);
        //   this.respondentForm.controls['userType'].setValue("Ex-aluno");
        // } else if (this.userType == "Discente evadido") {
        //   this.isDiscent = true;
        //   this.isDiscentConcluded = false;
        //   this.isDiscentEvaded = true;
        //   this.isDocent = false;
        //   this.respondentForm.controls['isDiscentConcluded'].setValue(false);
        //   this.respondentForm.controls['userType'].setValue("Ex-aluno");
        // } else if (this.userType == "Discente") {
        //   this.isDiscent = true;
        //   this.isDiscentConcluded = false;
        //   this.isDiscentEvaded = false;
        //   this.isDocent = false;
        //   this.respondentForm.controls['isDiscentConcluded'].setValue(false);
        // } else if (this.userType == "Docente") {
        //   this.isDiscent = false;
        //   this.isDiscentConcluded = false;
        //   this.isDiscentEvaded = false;
        //   this.isDocent = true;
        //   this.respondentForm.controls['isDiscentConcluded'].setValue(false);
        // }
        // ------------------- CASE 1 - POSCOMP -------------------
    };
    RespondentProfilePage.prototype.resolveCheckBoxDiscipline = function () {
        var _this = this;
        if (this.isDiscent && !this.isDiscentEvaded && !this.isDiscentConcluded) {
            this.storage.get('disciplineSelected').then(function (data) {
                if (data) {
                    data.forEach(function (disc) {
                        _this.checkBox.toArray()[disc.value].checked = true;
                    });
                }
            });
        }
    };
    RespondentProfilePage.prototype.resolveCheckBoxFinancialAssistence = function () {
        var _this = this;
        if (this.isDiscent && !this.isDiscentEvaded && !this.isDiscentConcluded) {
            this.storage.get('disciplineSelected').then(function (data) {
                if (data) {
                    data.forEach(function (disc) {
                        _this.checkBox.toArray()[disc.value].checked = true;
                    });
                }
            });
        }
    };
    RespondentProfilePage.prototype.resolveLevel = function () {
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
    // ---------------- RESOLVE AS EXIBIÇÕES ----------------
    RespondentProfilePage.prototype.changeDiscentType = function () {
        if (this.userType == "Discente formado") {
            this.userType = "Discente evadido";
            this.isDiscentConcluded = false;
            this.respondentForm.controls['courseLeft'].setValue(null);
            this.respondentForm.controls['courseLeft'].disable();
            this.respondentForm.controls['isDiscentConcluded'].setValue(false);
        }
        else {
            this.userType = "Discente formado";
            this.isDiscentConcluded = true;
            this.respondentForm.controls['courseLeft'].enable();
            this.respondentForm.controls['courseLeft'].setValue(null);
            this.respondentForm.controls['isDiscentConcluded'].setValue(true);
        }
        this.scrollToBottom();
    };
    // ---------------- SELEÇÕES E VALIDAÇÕES ----------------
    RespondentProfilePage.prototype.selectUserType = function (userType) {
        this.userType = userType.value;
        // ----------------- CASE 2 - UNIFEI -----------------
        if (this.userType == "Graduação") {
            this.courseDisabled = false;
            this.createCourseNameListGrad();
        }
        else if (this.userType == "Mestrado") {
            this.courseDisabled = false;
            this.createCourseNameListMest();
        }
        else if (this.userType == "Doutorado") {
            this.courseDisabled = false;
            this.createCourseNameListDout();
        }
        // ----------------- CASE 2 - UNIFEI -----------------
        // ----------------- CASE 1 - POSCOMP -----------------
        // if (this.userType == "Discente") {
        //   this.isDiscent = true;
        //   this.isDiscentEvaded = false;
        //   this.isDiscentConcluded = false;
        //   this.isDocent = false;
        //   this.respondentForm.controls['courseEntry'].enable();
        //   this.respondentForm.controls['courseEntry'].setValue(null);
        //   this.respondentForm.controls['code'].enable();
        //   this.respondentForm.controls['code'].setValue(null);
        //   this.respondentForm.controls['courseLeft'].setValue(null);
        //   this.respondentForm.controls['courseLeft'].disable();
        //   this.respondentForm.controls['isDiscentConcluded'].setValue(false);
        // } else if (this.userType == "Ex-aluno") {
        //   this.userType = "Discente evadido";
        //   this.isDiscent = true;
        //   this.isDiscentEvaded = true;
        //   this.isDiscentConcluded = false;
        //   this.isDocent = false;
        //   this.respondentForm.controls['courseEntry'].enable();
        //   this.respondentForm.controls['courseEntry'].setValue(null);
        //   this.respondentForm.controls['courseLeft'].enable();
        //   this.respondentForm.controls['courseLeft'].setValue(null);
        //   this.respondentForm.controls['code'].setValue(null);
        //   this.respondentForm.controls['code'].disable();
        //   this.respondentForm.controls['isDiscentConcluded'].setValue(false);
        // } else {
        //   this.isDiscent = false;
        //   this.isDiscentEvaded = false;
        //   this.isDiscentConcluded = false;
        //   this.isDocent = true;
        //   this.respondentForm.controls['courseEntry'].setValue(null);
        //   this.respondentForm.controls['courseEntry'].disable();
        //   this.respondentForm.controls['courseLeft'].setValue(null);
        //   this.respondentForm.controls['courseLeft'].disable();
        //   this.respondentForm.controls['code'].enable();
        //   this.respondentForm.controls['code'].setValue(null);
        //   this.respondentForm.controls['isDiscentConcluded'].setValue(false);
        // }
        // ----------------- CASE 1 - POSCOMP -----------------
    };
    RespondentProfilePage.prototype.changeUserType = function () {
        if (this.userType == "comerciante") {
            // this.respondentForm.controls['isCommerce'].setValue(false);
            this.isCommerce = false;
            this.userType = "cidadão";
        }
        else {
            // this.respondentForm.controls['isCommerce'].setValue(true);
            this.isCommerce = true;
            this.userType = "comerciante";
        }
    };
    RespondentProfilePage.prototype.updateDisciplineValue = function (disciplineSelect, checked) {
        this.checkBox;
        if (checked) {
            this.disciplineSelected.push(disciplineSelect);
        }
        else {
            this.disciplineSelected =
                this.disciplineSelected.filter(function (discipline) { return !(discipline === disciplineSelect); });
        }
    };
    RespondentProfilePage.prototype.selectCity = function (city) {
        this.jobCity = city;
        if (this.compareFn(this.jobCity, this.city)) {
            this.isSameJobCity = "";
            // this.respondentForm.controls['jobNeighborhood'].setValue('');
        }
        else {
            this.isSameJobCity = "hide";
        }
    };
    RespondentProfilePage.prototype.validate = function (cpf) {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf == '')
            return false;
        // Elimina CPFs invalidos conhecidos
        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            return false;
        // Valida 1o digito
        var add = 0;
        for (var i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
        var rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(9)))
            return false;
        // Valida 2o digito
        add = 0;
        for (var i = 0; i < 10; i++)
            add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        return rev == parseInt(cpf.charAt(10));
    };
    RespondentProfilePage.prototype.validateCPF = function (control) {
        var isValid = this.validate(control.value.toString());
        return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(!isValid).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["map"])(function (result) { return result ? { invalid: true } : null; }));
    };
    RespondentProfilePage.prototype.getResidenceTimeNameByValue = function (event) {
        var residenceTimeChosen = event.value;
        this.residenceTimeName = this.residenceTimeList[residenceTimeChosen].name;
    };
    RespondentProfilePage.prototype.getSalaryRangeNameByValue = function (event) {
        var salaryRangeChosen = event.value;
        this.salaryRangeName = this.salaryRangeList[salaryRangeChosen].name;
    };
    RespondentProfilePage.prototype.getAgeRangeByValue = function (event) {
        var ageRageChoosen = event.value;
        this.ageRangeName = this.ageRangeList[ageRageChoosen].name;
    };
    // ---------------- SELEÇÕES E VALIDAÇÕES ----------------
    // ---------------- MENSAGENS DE ERRO ----------------
    RespondentProfilePage.prototype.showAlertGetAllCities = function () {
        var _this = this;
        this.cities = [];
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.loadAllCities();
                    }
                }]
        });
        alert.present();
    };
    RespondentProfilePage.prototype.showAlertLoadResidenceNeighborhoods = function () {
        var _this = this;
        this.loader.dismiss();
        this.residenceNeighborhoods = [];
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.loadResidenceNeighborhoods();
                    }
                }]
        });
        alert.present();
    };
    RespondentProfilePage.prototype.showAlertLoadJobNeighborhoods = function () {
        var _this = this;
        this.jobNeighborhoods = [];
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.loadJobNeighborhoods();
                    }
                }]
        });
        alert.present();
    };
    // ---------------- MENSAGENS DE ERRO ----------------
    // ---------------- OPERAÇÕES DE ROTINA ----------------
    RespondentProfilePage.prototype.showTerm = function () {
        var _this = this;
        this.isTermRead = true;
        var confirm = this.alertCtrl.create({
            cssClass: 'consent-form',
            title: 'Termo de consentimento',
            message: '<p style="text-align: center;"><strong>Termo de Consentimento</strong></p>' +
                '<p style="text-align: justify;"><strong>Pesquisadores respons&aacute;veis:</strong> Kayque Willy Reis de Oliveira, Melise Maria Veiga de Paula, Fl&aacute;via Ludovico de Matos e Thamiris Daniel dos Santos.</p>' +
                '<p style="text-align: justify;">Voc&ecirc; est&aacute; sendo convidado(a) a participar de uma pesquisa autoaplic&aacute;vel com o objetivo de investigar estrat&eacute;gias de enfrentamento e o impacto da pandemia do novo Coronav&iacute;rus (COVID-19) na sa&uacute;de mental ' +
                'dos alunos de gradua&ccedil;&atilde;o e p&oacute;s-gradua&ccedil;&atilde;o da Universidade Federal de Itajub&aacute;. </p>' +
                '<p style="text-align: justify;">Sua participa&ccedil;&atilde;o nesse estudo &eacute; volunt&aacute;ria e muito importante para n&oacute;s. Fique tranquilo, se voc&ecirc; n&atilde;o quiser ou n&atilde;o puder participar, ou ainda, se quiser desistir depois de iniciar, isso n&atilde;o vai trazer nenhum problema para voc&ecirc;. Voc&ecirc; n&atilde;o ser&aacute; identificado, garantido o sigilo e anonimato das informa&ccedil;&otilde;es. Voc&ecirc; pode conhecer os resultados a qualquer momento, basta entrar em contato atrav&eacute;s do email (kayque-willy@hotmail.com).</p>' +
                '<p style="text-align: justify;"><strong>Tempo para responder as perguntas:</strong> em torno de 10 minutos.</p>' +
                '<p style="text-align: justify;"><strong>Esteja ciente que:</strong></p>' +
                '<ol style="text-align: justify;">' +
                '<li>O estudo tem como objetivo compreender os aspectos psicol&oacute;gicos da sa&uacute;de mental como: sintomas gerais, sintomas depressivos, sintomas durante a Pandemia, qualidade de vida, uso da religiosidade ou espiritualidade, ansiedade, otimismo e pessimismo dos alunos durante a pandemia do novo Coronav&iacute;rus (COVID-19).</li>' +
                '</ol>' +
                '<ol style="text-align: justify;" start="2">' +
                '<li>Os resultados do estudo poder&atilde;o trazer um melhor entendimento para os profissionais de Psicologia da UNIFEI na oferta de servi&ccedil;os adequados &agrave;s necessidades atuais dos discentes, para como melhorar a sa&uacute;de mental, qualidade de vida e bem-estar dos alunos.</li>' +
                '</ol>' +
                '<ol style="text-align: justify;" start="3">' +
                '<li>A sua participa&ccedil;&atilde;o nesta pesquisa n&atilde;o implica no tratamento de alguma doen&ccedil;a. Os question&aacute;rios ser&atilde;o usados apenas para esse estudo e n&atilde;o v&atilde;o impactar qualquer que seja o tratamento que esteja fazendo.</li>' +
                '</ol>' +
                '<ol style="text-align: justify;" start="4">' +
                '<li>Voc&ecirc; ir&aacute; responder perguntas sobre seus sentimentos, pensamentos e comportamentos durante o isolamento social. H&aacute; um pequeno risco de voc&ecirc; se sentir algum incomodo ao responder alguma quest&atilde;o.</li>' +
                '</ol>' +
                '<ol style="text-align: justify;" start="5">' +
                '<li>Os resultados ficar&atilde;o sob a responsabilidade dos pesquisadores e do Servi&ccedil;o de Psicologia da Universidade Federal de Itajub&aacute; e guardados em local seguro. Sua privacidade est&aacute; garantida. A divulgação dos resultados, assim como, a coleta dos dados, ser&aacute; feita de forma a n&atilde;o identificar os volunt&aacute;rios, seguindo os procedimentos &eacute;ticos para fins de estudo. Os pesquisadores poder&atilde;o apresentar ou publicar os resultados desse estudo em eventos e revistas cient&iacute;ficas, mas tamb&eacute;m em ve&iacute;culos de acesso f&aacute;cil como revistas populares, r&aacute;dio ou TV. Vale ressaltar que toda divulga&ccedil;&atilde;o somente ser&aacute; realizada com o objetivo de contribuir para a cria&ccedil;&atilde;o de estrat&eacute;gias de supera&ccedil;&atilde;o das dificuldades emocionais da comunidade acad&ecirc;mica.</li>' +
                '</ol>' +
                '<p style="text-align: justify;">&nbsp;<strong>Os pesquisadores estar&atilde;o a sua disposi&ccedil;&atilde;o para qualquer esclarecimento que considere necess&aacute;rio</strong><strong>:</strong></p>' +
                '<p style="text-align: justify;">Kayque Willy Reis de Oliveira e Melise Maria Veiga de Paula</p>' +
                '<p style="text-align: justify;">Programa de Mestrado em Ci&ecirc;ncia e Tecnologia da Computa&ccedil;&atilde;o &ndash; Universidade Federal de Itajub&aacute;</p>' +
                '<p style="text-align: justify;">kayque-willy@hotmail.com e melise@unifei.edu.br</p>' +
                '<p style="text-align: justify;">&nbsp;</p>' +
                '<p style="text-align: justify;">Fl&aacute;via Ludovico de Matos e Thamiris Daniel dos Santos</p>' +
                '<p style="text-align: justify;">Psic&oacute;logas &ndash; Universidade Federal de Itajub&aacute;</p>' +
                '<p style="text-align: justify;">psicologia@unifei.edu.br</p>' +
                '<p style="text-align: justify;">(35) 3629 1008/1793</p>',
            buttons: [
                {
                    text: 'Não aceito',
                    handler: function () {
                        _this.respondentForm.controls['term'].setValue(false);
                    }
                },
                {
                    text: 'Aceito',
                    handler: function () {
                        _this.respondentForm.controls['term'].setValue(true);
                    }
                }
            ]
        });
        confirm.present();
    };
    RespondentProfilePage.prototype.navigate = function (respondent) {
        this.storage.set('respondent', respondent);
        this.navCtrl.setRoot('QuestionariesListPage', {}).then(this.loader.dismiss());
    };
    RespondentProfilePage.prototype.navigateBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__intro_intro__["a" /* IntroPage */], {}).then(this.loader.dismiss());
    };
    RespondentProfilePage.prototype.sortAscCollection = function (collection) {
        return collection.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
    };
    RespondentProfilePage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    RespondentProfilePage.prototype.compareFn = function (e1, e2) {
        return e1 && e2 ? e1.id === e2.id : e1 === e2;
    };
    RespondentProfilePage.prototype.scrollToBottom = function () {
        if (!!this.content) {
            var content_1 = this.content;
            setTimeout(function () {
                content_1.scrollToBottom(100);
            }, 100);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Content */])
    ], RespondentProfilePage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_10" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Checkbox */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["U" /* QueryList */])
    ], RespondentProfilePage.prototype, "checkBox", void 0);
    RespondentProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-respondent-profile',template:/*ion-inline-start:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\respondent-profile\respondent-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-row>\n\n      <ion-col offset-1 col-2 class="menu-icon-col-not-game" *ngIf="!useGame">\n\n        <button ion-button clear (click)="openMenu()">\n\n          <ion-icon name="md-menu" class="menu-icon"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col offset-1 col-2 class="menu-icon-col" *ngIf="useGame">\n\n        <button ion-button clear (click)="openMenu()">\n\n          <ion-icon name="md-menu" class="menu-icon"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6 *ngIf="!useGame">\n\n        <img class="img-responsive img-not-game" src="assets/imgs/header-logo.png" />\n\n      </ion-col>\n\n      <ion-col col-6 *ngIf="useGame">\n\n        <img class="img-responsive" src="assets/imgs/header-logo.png" />\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h2 *ngIf="useGame" class="profile-title profile-title-game" col-12 text-center>Perfil do respondente</h2>\n\n  <h2 *ngIf="!useGame" class="profile-title" col-12 text-center>Perfil do respondente</h2>\n\n  <!-- Pontuação -->\n\n  <div *ngIf="useGame" class="level-panel">\n\n    <!-- Com Pontuação -->\n\n    <ion-item *ngIf="points > 0" text-wrap>\n\n      <ion-thumbnail item-start>\n\n        <img class="img-responsive" src="assets/imgs/game/{{levelImg}}.png" />\n\n      </ion-thumbnail>\n\n      <ion-label>\n\n        <h2>Você está no nível <strong>{{level}}</strong> de Participação!</h2>\n\n        <p><b>Sua pontuação</b></p>\n\n        <ion-badge>{{points}} pontos</ion-badge>\n\n      </ion-label>\n\n    </ion-item>\n\n    <!-- Com Pontuação -->\n\n    <!-- Sem pontuação -->\n\n    <ion-item *ngIf="points == 0" text-wrap>\n\n      <ion-thumbnail item-start>\n\n        <img class="img-responsive" src="assets/imgs/game/{{levelImg}}.png" />\n\n      </ion-thumbnail>\n\n      <ion-label>\n\n        <h2>Responda os questionários para aumentar o <b>nível</b> de <b>Participação</b>!</h2>\n\n        <p><b>Sua pontuação</b></p>\n\n        <ion-badge>{{points}} pontos</ion-badge>\n\n      </ion-label>\n\n    </ion-item>\n\n    <!-- Sem pontuação -->\n\n  </div>\n\n  <!-- Pontuação -->\n\n  <h3 *ngIf="useGame" class="subtitle subtitle-game" col-12 text-center>Por favor informe os seus dados</h3>\n\n  <h3 *ngIf="!useGame" class="subtitle" col-12 text-center>Por favor informe os seus dados</h3>\n\n  <form [formGroup]="respondentForm">\n\n    <!-----------------------CASE 2 - UNIFEI----------------------->\n\n    <!-- Tipo de Respondente -->\n\n    <ion-item>\n\n      <ion-label floating>Qual o seu vínculo com a Universidade?</ion-label>\n\n      <ion-select formControlName="userType" required>\n\n        <ion-option *ngFor="let userType of userTypeList" [value]="userType.value"\n\n          (ionSelect)="selectUserType(userType)">\n\n          {{userType.value}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <!-- Tipo de Respondente -->\n\n    <!-- Curso -->\n\n    <ion-item>\n\n      <ion-label floating>Qual o seu curso?</ion-label>\n\n      <ion-select formControlName="courseName" required [disabled]="courseDisabled">\n\n        <ion-option *ngFor="let courseName of courseNameList" [value]="courseName.value">\n\n          {{courseName.value}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <!-- Curso -->\n\n    <!-- Período -->\n\n    <ion-item>\n\n      <ion-label floating>Por favor, selecione o seu período atual</ion-label>\n\n      <ion-select [formControl]="respondentForm.controls[\'courseEntry\']" required [disabled]="courseDisabled">\n\n        <ion-option *ngFor="let courseEntry of courseEntryList" [value]="courseEntry.value">\n\n          {{courseEntry.value}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <!-- Período -->\n\n    <!-- Onde mora -->\n\n    <ion-item>\n\n      <ion-label floating>Onde você mora?</ion-label>\n\n      <ion-select formControlName="residenceType" required>\n\n        <ion-option *ngFor="let residenceType of residenceTypeList" [value]="residenceType.value">\n\n          {{residenceType.value}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <!-- Onde mora -->\n\n    <!-- Com quem mora -->\n\n    <ion-item>\n\n      <ion-label floating>Quantas pessoas residem com você?</ion-label>\n\n      <ion-select formControlName="residenceMembers" required>\n\n        <ion-option *ngFor="let residenceMembers of residenceMembersList" [value]="residenceMembers.value">\n\n          {{residenceMembers.value}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <!-- Com quem mora -->\n\n    <!-- Possui filhos -->\n\n    <ion-item>\n\n      <ion-label>Possui filhos?</ion-label>\n\n      <ion-checkbox item-end formControlName="haveChildren">\n\n      </ion-checkbox>\n\n    </ion-item>\n\n    <!-- Possui filhos -->\n\n    <!-- Possui vínculo empregatício -->\n\n    <ion-item>\n\n      <ion-label>Possui vínculo empregatício?</ion-label>\n\n      <ion-checkbox item-end formControlName="haveJob">\n\n      </ion-checkbox>\n\n    </ion-item>\n\n    <!-- Possui vínculo empregatício -->\n\n    <!-- Assistencia financeira -->\n\n    <ion-row class="metric-row">\n\n      <ion-col col-12>\n\n        <h3 class="subtitle check-box-subtitle" col-12 text-center>Você está recebendo algum auxílio financeiro?\n\n        </h3>\n\n        <ion-list radio-group>\n\n          <ion-item *ngFor="let financialAssistance of financialAssistanceList; let i = index" class="item-checkbox">\n\n            <ion-label text-wrap text-left class="item-checkbox-text">{{financialAssistance.value}}</ion-label>\n\n            <ion-checkbox item-end [formControl]="respondentForm.controls[\'financialAssistance\'].controls[i]">\n\n            </ion-checkbox>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n    <!-- Assistencia financeira -->\n\n    <!-- Termo de consentimento -->\n\n    <ion-row class="metric-row">\n\n      <ion-col col-12>\n\n        <h3 class="subtitle check-box-subtitle term-title" col-12 text-center>Termo de consentimento</h3>\n\n        <ion-label text-center text-wrap class="item-checkbox-text term-checbox-legend">Esta pesquisa possui um\n\n          termo de consentimento <a (click)="showTerm()">clique aqui para ler</a></ion-label>\n\n        <ion-list radio-group>\n\n          <ion-item class="item-checkbox">\n\n            <ion-label text-wrap text-left class="item-checkbox-text">Concordo com o termo de consentimento\n\n            </ion-label>\n\n            <ion-checkbox item-end formControlName="term" [disabled]="!isTermRead" required>\n\n            </ion-checkbox>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n    <!-- Termo de consentimento -->\n\n    <!-----------------------CASE 2 - UNIFEI----------------------->\n\n    <!-----------------------CASE 1 - POSCOMP----------------------->\n\n    <!-- Tipo de Respondente -->\n\n    <!-- <ion-item>\n\n      <ion-label floating>Por favor, selecione o tipo de respondente</ion-label>\n\n      <ion-select [formControl]="respondentForm.controls[\'userType\']" required [disabled]="editing">\n\n        <ion-option *ngFor="let userType of userTypeList" [value]="userType.value"\n\n          (ionSelect)="selectUserType(userType)">\n\n          {{userType.value}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item> -->\n\n    <!-- Tipo de Respondente -->\n\n    <!-- Nome -->\n\n    <!-- <ion-item>\n\n      <ion-label floating>Nome</ion-label>\n\n      <ion-input [formControl]="respondentForm.controls[\'name\']" required></ion-input>\n\n    </ion-item> -->\n\n    <!-- Nome -->\n\n    <!-- Discente formado ou evadido -->\n\n    <!-- <ion-item *ngIf="isDiscent && isDiscentEvaded">\n\n      <ion-label>você se formou no curso?</ion-label>\n\n      <ion-checkbox item-end (ionChange)="changeDiscentType()"\n\n        [formControl]="respondentForm.controls[\'isDiscentConcluded\']"></ion-checkbox>\n\n    </ion-item> -->\n\n    <!-- Discente formado ou evadido -->\n\n    <!-- Ano e semestre de ingresso -->\n\n    <!-- <ion-item *ngIf="isDiscent">\n\n      <ion-label floating>Por favor, selecione o ano e semestre de ingresso</ion-label>\n\n      <ion-select [formControl]="respondentForm.controls[\'courseEntry\']" required>\n\n        <ion-option *ngFor="let courseEntry of courseEntryList" [value]="courseEntry.value">\n\n          {{courseEntry.value}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item> -->\n\n    <!-- Ano e semestre de ingresso -->\n\n    <!-- Ano e semestre de conclusão -->\n\n    <!-- <ion-item *ngIf="isDiscent && isDiscentConcluded">\n\n      <ion-label floating>Por favor, selecione o ano e semestre de conclusão</ion-label>\n\n      <ion-select [formControl]="respondentForm.controls[\'courseLeft\']" required>\n\n        <ion-option *ngFor="let courseLeft of courseLeftList" [value]="courseLeft.value">\n\n          {{courseLeft.value}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item> -->\n\n    <!-- Ano e semestre de conclusão -->\n\n    <!-- Número de matricula -->\n\n    <!-- <ion-item *ngIf="isDiscent && !isDiscentEvaded && !isDiscentConcluded">\n\n      <ion-label floating>Número de matrícula</ion-label>\n\n      <ion-input [formControl]="respondentForm.controls[\'code\']"\n\n        [brmasker]="{mask: \'000000000000\', type:\'num\', len: 12}" type="text" required>\n\n      </ion-input>\n\n    </ion-item> -->\n\n    <!-- Número de matricula -->\n\n    <!-- SIAPE -->\n\n    <!-- <ion-item *ngIf="isDocent">\n\n      <ion-label floating>SIAPE</ion-label>\n\n      <ion-input [formControl]="respondentForm.controls[\'code\']"\n\n        [brmasker]="{mask: \'000000000000\', type:\'num\', len: 15}" type="text" required>\n\n      </ion-input>\n\n    </ion-item> -->\n\n    <!-- SIAPE -->\n\n    <!-- Disciplinas -->\n\n    <!-- <ion-row class="metric-row" *ngIf="isDiscent && !isDiscentEvaded && !isDiscentConcluded">\n\n      <ion-col col-12>\n\n        <h3 class="subtitle check-box-subtitle" col-12 text-center>Quais disciplinas você cursou no 2º semestre de 2019?\n\n        </h3>\n\n        <ion-list radio-group>\n\n          <ion-item *ngFor="let discipline of disciplineList" class="item-checkbox">\n\n            <ion-label text-wrap text-left class="item-checkbox-text">{{discipline.name}}</ion-label>\n\n            <ion-checkbox (ionChange)="updateDisciplineValue(discipline,$event.checked)"></ion-checkbox>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row> -->\n\n    <!-- Disciplinas -->\n\n    <!-----------------------CASE 1 - POSCOMP----------------------->\n\n    <!------------------------ TODOS OS CAMPOS ------------------------->\n\n    <!-----------------------INFORMAÇÕES PESSOAIS----------------------->\n\n    <!-- CPF -->\n\n    <!-- <ion-item>\n\n      <ion-label floating>CPF</ion-label>\n\n      <ion-input [formControl]="respondentForm.controls[\'cpf\']" type="text"\n\n        [brmasker]="{mask: \'000.000.000-00\', type:\'num\', len: 14}" required>\n\n      </ion-input>\n\n      <div class="validator-error"\n\n        *ngIf="respondentForm.controls[\'cpf\'].hasError(\'required\') && respondentForm.controls[\'cpf\'].touched">* CPF é\n\n        obrigatório!\n\n      </div>\n\n      <div class="validator-error"\n\n        *ngIf="respondentForm.controls[\'cpf\'].hasError(\'invalid\') && respondentForm.controls[\'cpf\'].touched">* CPF é\n\n        inválido!\n\n      </div>\n\n    </ion-item> -->\n\n    <!-- CPF -->\n\n    <!-- Nome -->\n\n    <!-- <ion-item>\n\n      <ion-label floating>Nome</ion-label>\n\n      <ion-input [formControl]="respondentForm.controls[\'name\']"></ion-input>\n\n    </ion-item> -->\n\n    <!-- Nome -->\n\n    <!-- Genero -->\n\n    <!-- <ion-item>\n\n      <ion-label floating>Gênero</ion-label>\n\n      <ion-select [formControl]="respondentForm.controls[\'gender\']">\n\n        <ion-option *ngFor="let gender of genderList" [value]="gender.value">\n\n          {{gender.value}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item> -->\n\n    <!-- Genero -->\n\n    <!-- Email -->\n\n    <!-- <ion-item>\n\n      <ion-label floating>Email</ion-label>\n\n      <ion-input [email]="true" [formControl]="respondentForm.controls[\'email\']" type="email"></ion-input>\n\n    </ion-item> -->\n\n    <!-- Email -->\n\n    <!-- Telefone -->\n\n    <!-- <ion-item>\n\n      <ion-label floating>Telefone</ion-label>\n\n      <ion-input [brmasker]="{mask: \'(00)00000-0000\', type:\'num\', len: 15}"\n\n        [formControl]="respondentForm.controls[\'phone\']"></ion-input>\n\n    </ion-item> -->\n\n    <!-- Telefone -->\n\n    <!-- WhatsApp -->\n\n    <!-- <ion-item>\n\n      <ion-label floating>WhatsApp</ion-label>\n\n      <ion-input [brmasker]="{mask: \'(00)00000-0000\', type:\'num\', len: 15}"\n\n        [formControl]="respondentForm.controls[\'whatsapp\']"></ion-input>\n\n    </ion-item> -->\n\n    <!-- WhatsApp -->\n\n    <!-- Cidade de residência -->\n\n    <!-- <ion-item>\n\n      <ion-label floating>Cidade de Residência</ion-label>\n\n      <ion-select [formControl]="respondentForm.controls[\'residenceCity\']">\n\n        <ion-option *ngFor="let residenceCity of cities" [value]="residenceCity">\n\n          {{residenceCity.name}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item> -->\n\n    <!-- Cidade de residência -->\n\n    <!-- Bairro de residencia -->\n\n    <!-- <ion-item>\n\n      <ion-label floating>Bairro de Residência</ion-label>\n\n      <ion-select [formControl]="respondentForm.controls[\'residenceNeighborhood\']" [compareWith]="compareFn">\n\n        <ion-option *ngFor="let residenceNeighborhood of residenceNeighborhoods" [value]="residenceNeighborhood">\n\n          {{residenceNeighborhood.name}}\n\n        </ion-option>\n\n      </ion-select>\n\n      <div class="validator-error"\n\n        *ngIf="respondentForm.controls[\'residenceNeighborhood\'].hasError(\'required\') && respondentForm.controls[\'residenceNeighborhood\'].touched">\n\n        * Bairro de Residência é obrigatório!\n\n      </div>\n\n    </ion-item> -->\n\n    <!-- Bairro de residencia -->\n\n    <!-----------------------INFORMAÇÕES PESSOAIS----------------------->\n\n    <!-----------------------INFORMAÇÕES DE TRABALHO----------------------->\n\n    <!-- Comerciante ou não -->\n\n    <!-- <ion-item>\n\n    <ion-label>Possui comércio no centro?</ion-label>\n\n    <ion-checkbox item-end (ionChange)="changeUserType()" [(ngModel)]="isCommerce"></ion-checkbox>\n\n    </ion-item> -->\n\n    <!-- Comerciante ou não -->\n\n    <!-- Cidade de trabalho -->\n\n    <!-- <ion-item>\n\n      <ion-label floating>Cidade de Trabalho</ion-label>\n\n      <ion-select [formControl]="respondentForm.controls[\'jobCity\']" (ionChange)="loadJobNeighborhoods()"\n\n        [compareWith]="compareFn">\n\n        <ion-option *ngFor="let jobCity of cities" [value]="jobCity" (ionSelect)="selectCity(jobCity)">\n\n          {{jobCity.name}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item> -->\n\n    <!-- Cidade de trabalho -->\n\n    <!-- Nome da Empresa -->\n\n    <!-- <ion-item>\n\n      <ion-label floating>Nome da empresa</ion-label>\n\n      <ion-input [formControl]="respondentForm.controls[\'jobName\']"></ion-input>\n\n    </ion-item> -->\n\n    <!-- Nome da Empresa -->\n\n    <!-- Endereço da Empresa -->\n\n    <!-- <ion-item>\n\n      <ion-label floating>Endereço da empresa</ion-label>\n\n      <ion-input [formControl]="respondentForm.controls[\'jobAddress\']"></ion-input>\n\n    </ion-item> -->\n\n    <!-- Endereço da Empresa -->\n\n    <!-- Bairro de trabalho -->\n\n    <!-- <div class="{{isSameJobCity}}">\n\n      <ion-item>\n\n        <ion-label floating>Bairro de Trabalho</ion-label>\n\n        <ion-select [formControl]="respondentForm.controls[\'jobNeighborhood\']" [disabled]="jobNeighborhoodDisabled"\n\n          [compareWith]="compareFn">\n\n          <ion-option *ngFor="let jobNeighborhood of jobNeighborhoods" [value]="jobNeighborhood">\n\n            {{jobNeighborhood.name}}\n\n          </ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    </div> -->\n\n    <!-- Bairro de trabalho -->\n\n    <!-----------------------INFORMAÇÕES DE TRABALHO----------------------->\n\n    <!-----------------------INFORMAÇÕES ACADÊMICAS----------------------->\n\n    <!-- Tipo de Respondente -->\n\n    <!-- <ion-item>\n\n      <ion-label floating>Nível</ion-label>\n\n      <ion-select [formControl]="respondentForm.controls[\'userType\']">\n\n        <ion-option *ngFor="let userType of userTypeList" [value]="userType.value"\n\n          (ionSelect)="selectUserType(userType)">\n\n          {{userType.value}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item> -->\n\n    <!-- Tipo de Respondente -->\n\n    <!-- Discente formado ou evadido -->\n\n    <!-- <ion-item *ngIf="isDiscent">\n\n      <ion-label>Formou no curso?</ion-label>\n\n      <ion-checkbox item-end (ionChange)="changeDiscentType()"></ion-checkbox>\n\n    </ion-item> -->\n\n    <!-- Discente formado ou evadido -->\n\n    <!-- Número de matricula -->\n\n    <!-- <ion-item>\n\n      <ion-label floating>Número de matrícula</ion-label>\n\n      <ion-input [formControl]="respondentForm.controls[\'code\']"\n\n        [brmasker]="{mask: \'000000000000\', type:\'num\', len: 12}" type ="text" required>\n\n      </ion-input>\n\n    </ion-item> -->\n\n    <!-- Número de matricula -->\n\n    <!-- Curso -->\n\n    <!-- <ion-item>\n\n      <ion-label floating>Curso</ion-label>\n\n      <ion-select [formControl]="respondentForm.controls[\'courseName\']" [disabled]="courseDisabled">\n\n        <ion-option *ngFor="let courseName of courseNameList" [value]="courseName.value">\n\n          {{courseName.value}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item> -->\n\n    <!-- Curso -->\n\n    <!-- Ano e semestre de ingresso -->\n\n    <!-- <ion-item *ngIf="isDiscent">\n\n      <ion-label floating>Ano e semestre de ingresso</ion-label>\n\n      <ion-select [formControl]="respondentForm.controls[\'courseEntry\']" [disabled]="courseDisabled">\n\n        <ion-option *ngFor="let courseEntry of courseEntryList" [value]="courseEntry.value">\n\n          {{courseEntry.value}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item> -->\n\n    <!-- Ano e semestre de ingresso -->\n\n    <!-- Ano e semestre de conclusão -->\n\n    <!-- <ion-item *ngIf="isDiscent && isDiscentEvaded">\n\n      <ion-label floating>Ano e semestre de conclusão</ion-label>\n\n      <ion-select [formControl]="respondentForm.controls[\'courseLeft\']">\n\n        <ion-option *ngFor="let courseLeft of courseLeftList" [value]="courseLeft.value">\n\n          {{courseLeft.value}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item> -->\n\n    <!-- Ano e semestre de conclusão -->\n\n    <!-- Idade -->\n\n    <!-- <ion-item>\n\n      <ion-label>Idade</ion-label>\n\n      <ion-range snaps="true" [min]="0" [max]="4" [step]="1" (ionChange)="getAgeRangeByValue($event)"\n\n        [formControl]="respondentForm.controls[\'age\']">\n\n      </ion-range>\n\n      <ion-label>{{ageRangeName}}</ion-label>\n\n    </ion-item> -->\n\n    <!-- Idade -->\n\n    <!-----------------------INFORMAÇÕES ACADÊMICAS----------------------->\n\n    <!-------------------------------RANGES-------------------------------->\n\n    <!-- Tempo de residência -->\n\n    <!-- <ion-item>\n\n      <ion-label>Tempo de Residência</ion-label>\n\n      <ion-range snaps="true" [min]="0" [max]="4" [step]="1" (ionChange)="getResidenceTimeNameByValue($event)"\n\n        [formControl]="respondentForm.controls[\'residenceTimeRange\']">\n\n      </ion-range>\n\n      <ion-label>{{residenceTimeName}}</ion-label>\n\n    </ion-item> -->\n\n    <!-- Tempo de residência -->\n\n    <!-- Renda -->\n\n    <!-- <ion-item>\n\n      <ion-label>Renda</ion-label>\n\n      <ion-range snaps="true" [min]="0" [max]="4" [step]="1" (ionChange)="getSalaryRangeNameByValue($event)"\n\n        [formControl]="respondentForm.controls[\'salaryRange\']">\n\n      </ion-range>\n\n      <ion-label>{{salaryRangeName}}</ion-label>\n\n    </ion-item> -->\n\n    <!-- Renda -->\n\n    <!-------------------------------RANGES-------------------------------->\n\n    <!------------------------ TODOS OS CAMPOS ------------------------->\n\n    <ion-grid>\n\n      <ion-row *ngIf="editing && useGame">\n\n        <ion-col text-center>\n\n          <button ion-button block class="button-background" type="submit" (click)="saveRespondentInfo()"\n\n            [disabled]="!respondentForm.valid">\n\n            <ion-icon id="button-profile-update-game" class="text-button">\n\n              Salvar\n\n            </ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="!editing && useGame">\n\n        <ion-col text-center>\n\n          <button ion-button block class="button-background" type="submit" (click)="saveRespondentInfo()"\n\n            [disabled]="!respondentForm.valid">\n\n            <ion-icon id="button-profile-register-game" class="text-button">\n\n              Salvar\n\n            </ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="editing && !useGame">\n\n        <ion-col text-center>\n\n          <button ion-button block class="button-background" type="submit" (click)="saveRespondentInfo()"\n\n            [disabled]="!respondentForm.valid">\n\n            <ion-icon id="button-profile-update-not-game" class="text-button">\n\n              Salvar\n\n            </ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="!editing && !useGame">\n\n        <ion-col text-center>\n\n          <button ion-button block class="button-background" type="submit" (click)="saveRespondentInfo()"\n\n            [disabled]="!respondentForm.valid">\n\n            <ion-icon id="button-profile-register-not-game" class="text-button">\n\n              Salvar\n\n            </ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\respondent-profile\respondent-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_8__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_city_city__["a" /* CityProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_9__providers_respondent_respondent__["a" /* RespondentProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_neighborhood_neighborhood__["a" /* NeighborhoodProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_11__providers_rest_rest__["a" /* RestProvider */]])
    ], RespondentProfilePage);
    return RespondentProfilePage;
}());

var ResidenceTime = /** @class */ (function () {
    function ResidenceTime() {
    }
    return ResidenceTime;
}());

var SalaryRange = /** @class */ (function () {
    function SalaryRange() {
    }
    return SalaryRange;
}());

var AgeRange = /** @class */ (function () {
    function AgeRange() {
    }
    return AgeRange;
}());

var Discipline = /** @class */ (function () {
    function Discipline() {
    }
    return Discipline;
}());

var Respondent = /** @class */ (function () {
    function Respondent() {
    }
    return Respondent;
}());

//# sourceMappingURL=respondent-profile.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BrMaskModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrMaskerIonic3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);


var BrMaskModel = (function () {
    function BrMaskModel() {
        this.type = 'alfa';
        this.decimal = 2;
        this.decimalCaracter = ",";
        this.userCaracters = false;
        this.numberAndTousand = false;
    }
    return BrMaskModel;
}());

var BrMaskerIonic3 = (function () {
    function BrMaskerIonic3(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.brmasker = new BrMaskModel();
    }
    BrMaskerIonic3.prototype.inputKeyup = function (event) {
        var value = this.returnValue(event.target.value);
        this.writeValue(value);
        event.target.value = value;
    };
    BrMaskerIonic3.prototype.inputOnblur = function (event) {
        var value = this.returnValue(event.value);
        this.writeValue(value);
        event.value = value;
    };
    BrMaskerIonic3.prototype.inputFocus = function (event) {
        var value = this.returnValue(event.value);
        this.writeValue(value);
        event.value = value;
    };
    BrMaskerIonic3.prototype.ngOnInit = function () {
        if (!this.brmasker.type) {
            this.brmasker.type = 'all';
        }
        if (!this.brmasker.decimal) {
            this.brmasker.decimal = 2;
        }
        if (!this.brmasker.decimalCaracter) {
            this.brmasker.decimalCaracter = ',';
        }
    };
    BrMaskerIonic3.prototype.writeValue = function (fn) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', fn);
    };
    BrMaskerIonic3.prototype.registerOnChange = function (fn) {
        return;
    };
    BrMaskerIonic3.prototype.registerOnTouched = function (fn) {
        return;
    };
    BrMaskerIonic3.prototype.setDisabledState = function (isDisabled) {
        if (isDisabled) {
            this._renderer.setElementAttribute(this._elementRef.nativeElement, 'disabled', 'true');
        }
        else {
            this._renderer.setElementAttribute(this._elementRef.nativeElement, 'disabled', 'false');
        }
    };
    BrMaskerIonic3.prototype.writeCreateValue = function (value, config) {
        if (config === void 0) { config = new BrMaskModel(); }
        if (value && config.phone) {
            return value.replace(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gi, '$1 ($2) $3-$4');
        }
        if (value && config.money) {
            return this.writeValueMoney(value, config);
        }
        if (value && config.person) {
            return this.writeValuePerson(value);
        }
        if (value && config.percent) {
            return this.writeValuePercent(value);
        }
        if (value && config.mask) {
            this.brmasker.mask = config.mask;
            if (config.len) {
                this.brmasker.len = config.len;
            }
            return this.onInput(value);
        }
        return value;
    };
    BrMaskerIonic3.prototype.writeValuePercent = function (value) {
        value.replace(/\D/gi, '');
        value.replace(/%/gi, '');
        return value.replace(/([0-9]{0})$/gi, '%$1');
    };
    BrMaskerIonic3.prototype.writeValuePerson = function (value) {
        if (value.length <= 11) {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, '\$1.\$2.\$3\-\$4');
        }
        else {
            return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/gi, '\$1.\$2.\$3\/\$4\-\$5');
        }
    };
    BrMaskerIonic3.prototype.writeValueMoney = function (value, config) {
        if (config === void 0) { config = new BrMaskModel(); }
        return this.moneyMask(value, config);
    };
    BrMaskerIonic3.prototype.returnValue = function (value) {
        if (!this.brmasker.mask) {
            this.brmasker.mask = '';
        }
        if (value) {
            var v = value;
            if (this.brmasker.type == 'alfa') {
                v = v.replace(/\d/gi, '');
            }
            if (this.brmasker.type == 'num') {
                v = v.replace(/\D/gi, '');
            }
            if (this.brmasker.money) {
                return this.moneyMask(this.onInput(v), this.brmasker);
            }
            if (this.brmasker.phone) {
                return this.phoneMask(v);
            }
            if (this.brmasker.phoneNotDDD) {
                return this.phoneNotDDDMask(v);
            }
            if (this.brmasker.person) {
                return this.peapollMask(v);
            }
            if (this.brmasker.percent) {
                return this.percentMask(v);
            }
            if (this.brmasker.numberAndTousand) {
                return this.thousand(v);
            }
            if (this.brmasker.userCaracters) {
                return this.usingSpecialCharacters(v, this.brmasker.mask, this.brmasker.len);
            }
            return this.onInput(v);
        }
        else {
            return '';
        }
    };
    BrMaskerIonic3.prototype.percentMask = function (v) {
        var tmp = v;
        tmp = tmp.replace(/\D/gi, '');
        tmp = tmp.replace(/%/gi, '');
        tmp = tmp.replace(/([0-9]{0})$/gi, '%$1');
        return tmp;
    };
    BrMaskerIonic3.prototype.phoneMask = function (v) {
        var n = v;
        if (n.length > 14) {
            this.brmasker.len = 15;
            this.brmasker.mask = '(99) 99999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{2})(\d)/gi, '$1 $2');
            n = n.replace(/(\d{5})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        else {
            this.brmasker.len = 14;
            this.brmasker.mask = '(99) 9999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{2})(\d)/gi, '$1 $2');
            n = n.replace(/(\d{4})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        return this.onInput(n);
    };
    BrMaskerIonic3.prototype.phoneNotDDDMask = function (v) {
        var n = v;
        if (n.length > 9) {
            this.brmasker.len = 10;
            this.brmasker.mask = '99999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{5})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        else {
            this.brmasker.len = 9;
            this.brmasker.mask = '9999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{4})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        return this.onInput(n);
    };
    BrMaskerIonic3.prototype.peapollMask = function (v) {
        var n = v;
        if (n.length > 14) {
            this.brmasker.len = 18;
            this.brmasker.mask = '99.999.999/9999-99';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{2})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d)/gi, '$1/$2');
            n = n.replace(/(\d{4})(\d{1,4})$/gi, '$1-$2');
            n = n.replace(/(\d{2})(\d{1,2})$/gi, '$1$2');
        }
        else {
            this.brmasker.len = 14;
            this.brmasker.mask = '999.999.999-99';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{3})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d{1,2})$/gi, '$1-$2');
        }
        return this.onInput(n);
    };
    BrMaskerIonic3.prototype.moneyMask = function (value, config) {
        var decimal = config.decimal || this.brmasker.decimal;
        value = value
            .replace(/\D/gi, '')
            .replace(new RegExp("([0-9]{" + decimal + "})$", "g"), config.decimalCaracter + '$1');
        if (value.length === decimal + 1) {
            return "0" + value; // leading 0 so we're not left with something weird like ",50"
        }
        else if (value.length > decimal + 2 && value.charAt(0) === '0') {
            return value.substr(1); // remove leading 0 when we don't need it anymore
        }
        if (config.thousand && value.length > (Number(4) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.decimalCaracter + "$2");
        }
        if (config.thousand && value.length > (Number(8) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.thousand + "([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.thousand + "$2" + config.decimalCaracter + "$3");
        }
        return value;
    };
    BrMaskerIonic3.prototype.onInput = function (value) {
        var ret = this.formatField(value, this.brmasker.mask, this.brmasker.len);
        return ret;
        // if (ret) {
        //   this.element.nativeElement.value = ret;
        // }
    };
    BrMaskerIonic3.prototype.thousand = function (value) {
        var val = value.replace(/\D/gi, '');
        var reverse = val.toString().split('').reverse().join('');
        var thousands = reverse.match(/\d{1,3}/g);
        if (thousands) {
            return thousands.join("" + (this.brmasker.thousand || '.')).split('').reverse().join('');
        }
        return val;
    };
    BrMaskerIonic3.prototype.usingSpecialCharacters = function (campo, Mascara, tamanho) {
        if (!tamanho) {
            tamanho = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\,| /gi;
        var campoSoNumeros = campo.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === ','));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    BrMaskerIonic3.prototype.formatField = function (campo, Mascara, tamanho) {
        if (!tamanho) {
            tamanho = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\$|\&|\%|\:| /gi;
        var campoSoNumeros = campo.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === '/'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '(') || (Mascara.charAt(i) === ')') || (Mascara.charAt(i) === ' '));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === ',') || (Mascara.charAt(i) === '*') || (Mascara.charAt(i) === '+'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '@') || (Mascara.charAt(i) === '#') || (Mascara.charAt(i) === ':'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '$') || (Mascara.charAt(i) === '&') || (Mascara.charAt(i) === '%'));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    return BrMaskerIonic3;
}());

BrMaskerIonic3.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[brmasker]',
                providers: [
                    {
                        provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
                        useExisting: BrMaskerIonic3,
                        multi: true
                    }
                ]
            },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
BrMaskerIonic3.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
]; };
BrMaskerIonic3.propDecorators = {
    'brmasker': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'inputKeyup': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['keyup', ['$event'],] },],
    'inputOnblur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['ionBlur', ['$event'],] },],
    'inputFocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['ionFocus', ['$event'],] },],
};
//# sourceMappingURL=brmasker-ionic-3.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BrMaskServicesModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrMaskerIonicServices3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var BrMaskServicesModel = (function () {
    function BrMaskServicesModel() {
        this.type = 'alfa';
        this.decimal = 2;
        this.decimalCaracter = ",";
        this.userCaracters = false;
        this.numberAndTousand = false;
    }
    return BrMaskServicesModel;
}());

var BrMaskerIonicServices3 = (function () {
    function BrMaskerIonicServices3() {
        this.brmasker = new BrMaskServicesModel();
    }
    BrMaskerIonicServices3.prototype.ngOnInit = function () {
        if (!this.brmasker.type) {
            this.brmasker.type = 'all';
        }
        if (!this.brmasker.decimal) {
            this.brmasker.decimal = 2;
        }
        if (!this.brmasker.decimalCaracter) {
            this.brmasker.decimalCaracter = ',';
        }
    };
    BrMaskerIonicServices3.prototype.writeCreateValue = function (value, config) {
        if (config === void 0) { config = new BrMaskServicesModel(); }
        if (value && config.phone) {
            return value.replace(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gi, '$1 ($2) $3-$4');
        }
        if (value && config.money) {
            return this.writeValueMoney(value, config);
        }
        if (value && config.person) {
            return this.writeValuePerson(value);
        }
        if (value && config.percent) {
            return this.writeValuePercent(value);
        }
        if (value && config.numberAndTousand) {
            return this.writeValueNumberAndThousand(value);
        }
        if (value && config.userCaracters) {
            return this.writeValueusingSpecialCharacters(value);
        }
        if (value && config.mask) {
            this.brmasker.mask = config.mask;
            if (config.len) {
                this.brmasker.len = config.len;
            }
            return this.onInput(value);
        }
        return value;
    };
    BrMaskerIonicServices3.prototype.writeValuePercent = function (value) {
        value.replace(/\D/gi, '');
        value.replace(/%/gi, '');
        return value.replace(/([0-9]{0})$/gi, '%$1');
    };
    BrMaskerIonicServices3.prototype.writeValuePerson = function (value) {
        if (value.length <= 11) {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, '\$1.\$2.\$3\-\$4');
        }
        else {
            return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/gi, '\$1.\$2.\$3\/\$4\-\$5');
        }
    };
    BrMaskerIonicServices3.prototype.writeValueMoney = function (value, config) {
        if (config === void 0) { config = new BrMaskServicesModel(); }
        return this.moneyMask(value, config);
    };
    BrMaskerIonicServices3.prototype.writeValueNumberAndThousand = function (value, config) {
        if (config === void 0) { config = new BrMaskServicesModel(); }
        return this.thousand(value);
    };
    BrMaskerIonicServices3.prototype.writeValueusingSpecialCharacters = function (value, config) {
        if (config === void 0) { config = new BrMaskServicesModel(); }
        return this.usingSpecialCharacters(value, config.mask, config.len);
    };
    BrMaskerIonicServices3.prototype.moneyMask = function (value, config) {
        var decimal = config.decimal || this.brmasker.decimal;
        value = value
            .replace(/\D/gi, '')
            .replace(new RegExp("([0-9]{" + decimal + "})$", "g"), config.decimalCaracter + '$1');
        if (value.length === decimal + 1) {
            return "0" + value; // leading 0 so we're not left with something weird like ",50"
        }
        else if (value.length > decimal + 2 && value.charAt(0) === '0') {
            return value.substr(1); // remove leading 0 when we don't need it anymore
        }
        if (config.thousand && value.length > (Number(4) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.decimalCaracter + "$2");
        }
        if (config.thousand && value.length > (Number(8) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.thousand + "([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.thousand + "$2" + config.decimalCaracter + "$3");
        }
        return value;
    };
    BrMaskerIonicServices3.prototype.onInput = function (value) {
        var ret = this.formatField(value, this.brmasker.mask, this.brmasker.len);
        return ret;
    };
    BrMaskerIonicServices3.prototype.thousand = function (value) {
        var val = value.replace(/\D/gi, '');
        var reverse = val.toString().split('').reverse().join('');
        var thousands = reverse.match(/\d{1,3}/g);
        val = thousands.join("" + (this.brmasker.thousand || '.')).split('').reverse().join('');
        return val;
    };
    BrMaskerIonicServices3.prototype.usingSpecialCharacters = function (campo, Mascara, tamanho) {
        if (!tamanho) {
            tamanho = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\,| /gi;
        var campoSoNumeros = campo.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === ','));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    BrMaskerIonicServices3.prototype.formatField = function (campo, Mascara, tamanho) {
        if (!tamanho) {
            tamanho = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\$|\&|\%|\:| /gi;
        var campoSoNumeros = campo.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === '/'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '(') || (Mascara.charAt(i) === ')') || (Mascara.charAt(i) === ' '));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === ',') || (Mascara.charAt(i) === '*') || (Mascara.charAt(i) === '+'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '@') || (Mascara.charAt(i) === '#') || (Mascara.charAt(i) === ':'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '$') || (Mascara.charAt(i) === '&') || (Mascara.charAt(i) === '%'));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    return BrMaskerIonicServices3;
}());

BrMaskerIonicServices3.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[brmasker]',
            },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
BrMaskerIonicServices3.ctorParameters = function () { return []; };
//# sourceMappingURL=brmasker-ionic-services.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(447);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives__ = __webpack_require__(448);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrMaskerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_brmasker_ionic_3__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__ = __webpack_require__(435);




var BrMaskerModule = (function () {
    function BrMaskerModule() {
    }
    return BrMaskerModule;
}());

BrMaskerModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_2__directives_brmasker_ionic_3__["a" /* BrMaskerIonic3 */],
                    __WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__["a" /* BrMaskerIonicServices3 */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_2__directives_brmasker_ionic_3__["a" /* BrMaskerIonic3 */],
                    __WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__["a" /* BrMaskerIonicServices3 */]
                ],
                imports: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */]
                ],
                schemas: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]
                ],
                providers: [__WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__["a" /* BrMaskerIonicServices3 */]]
            },] },
];
/** @nocollapse */
BrMaskerModule.ctorParameters = function () { return []; };
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brmasker_ionic_3__ = __webpack_require__(434);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brmasker_ionic_services__ = __webpack_require__(435);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=1.js.map