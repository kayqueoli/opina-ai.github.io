webpackJsonp([6],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AchievementPageModule", function() { return AchievementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__achievement__ = __webpack_require__(437);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__achievement__["a" /* AchievementPage */]),
            ],
        })
    ], AchievementPageModule);
    return AchievementPageModule;
}());

//# sourceMappingURL=achievement.module.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementPage; });
/* unused harmony export Story */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(12);
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
    function AchievementPage(navCtrl, navParams, menuCtrl, loadingCtrl, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.restProvider = restProvider;
        this.position = 0;
        this.storyList = [];
        this.achievement = navParams.get('achievement');
        this.createStoryList(this.achievement);
        // this.achievement = { id: 1, icon: "0", unlocked: true, name: "Dicas para estimular sua inteligência emocional" };
        // this.createStoryList(this.achievement);
        this.talkAnimation();
    }
    AchievementPage.prototype.ngOnInit = function () {
        // this.achievement = { id: 1, icon: "0", unlocked: true, name: "Dicas para estimular sua inteligência emocional" };
        this.createStoryList(this.achievement);
    };
    AchievementPage.prototype.createStoryList = function (achievement) {
        this.storyList = [];
        switch (achievement.id) {
            case 1:
                this.storyList = [
                    {
                        subtitle: 'Inteligência emocional',
                        gif: 'achieve-1',
                        quote: 'A <strong>inteligência emocional</strong> é a habilidade de reconhecer as nossas emoções e a expressão das emoções das pessoas que convivemos, além da maneira de como gerenciamos esses sentimentos.'
                    },
                    {
                        subtitle: 'Inteligência emocional',
                        gif: 'achieve-1',
                        quote: 'Não é uma capacidade inata e nós podemos desenvolvê-la ao longo da nossa vida, desde que tenhamos alguns estímulos e empreguemos alguns esforços e reflexões nesse sentido.'
                    },
                    {
                        subtitle: 'Analise o seu comportamento',
                        gif: 'achieve-2',
                        quote: 'Diante do cenário que estamos vivendo, como são os sentimentos que estão surgindo e como eles impactam em suas relações ou reações diante da situação?'
                    },
                    {
                        subtitle: 'Domine as emoções',
                        gif: 'achieve-3',
                        quote: 'Quando você estiver com emoções intensas, sejam elas positivas ou negativas, não tome decisões ou reaja às situações.'
                    },
                    {
                        subtitle: 'Aprenda a lidar com as emoções negativas',
                        gif: 'achieve-4',
                        quote: 'Elas também fazem parte da nossa vida e são naturais. Tentar se esquivar delas ou se culpar por senti-las pode, ao invés de diminuí-las, potencializá-las.'
                    },
                    {
                        subtitle: 'Exercite a autoconfiança',
                        gif: 'achieve-5',
                        quote: 'Você consegue reconhecer quais são os seus pontos fortes e suas limitações? Faça esse exercício e busque formas para aperfeiçoar as suas características pessoais que podem ser desenvolvidas.'
                    },
                    {
                        subtitle: 'Demonstre seus sentimentos e pensamentos',
                        gif: 'achieve-6',
                        quote: 'Não tenha medo de falar e expor o que você está pensando e sentindo de forma assertiva, pois essa é a melhor forma de ser compreendido pelas pessoas com quem você convive.'
                    },
                    {
                        subtitle: 'Pratique a empatia',
                        gif: 'achieve-7',
                        quote: 'Antes de agir, faça o exercício de se colocar no lugar do outro, tentando se aproximar do que ele pode sentir e pensar em determinada situação. Esse movimento pode auxiliar você a ser mais compreensivo com as pessoas.'
                    },
                    {
                        subtitle: 'Exercite a resiliência',
                        gif: 'achieve-8',
                        quote: 'A resiliência é a capacidade de se adaptar às mudanças. Com todas as dificuldades do momento, será preciso compreender toda a situação e seus impactos para agirmos de forma consciente e equilibrada perante as consequências.'
                    },
                ];
                break;
            case 2:
                this.storyList = [
                    {
                        subtitle: 'Estresse',
                        gif: 'achieve-9',
                        quote: 'O excesso de notícias a que estamos expostos sobre a pandemia, a mudança de rotina, o recolhimento domiciliar, as infinitas listas do que temos que fazer e produzir e as consequências econômicas, sociais e políticas a partir desse novo cenário podem desencadear ou aumentar desconfortos emocionais como o estresse.'
                    },
                    {
                        subtitle: 'Estresse',
                        gif: 'achieve-9',
                        quote: 'Vamos conferir algumas estratégias ajudar você a lidar com os fatores que causam estresse e também táticas para reduzir as reações físicas e emocionais excessivas.'
                    },
                    {
                        subtitle: 'Mantenha uma rotina',
                        gif: 'achieve-10',
                        quote: 'Mantenha uma rotina incluindo exercícios físicos e alimentação equilibrada.'
                    },
                    {
                        subtitle: 'Repense a maneira de como se exepressa',
                        gif: 'achieve-11',
                        quote: 'Repense a maneira de como expressamos verbalmente as nossas emoções pode nos ajudar a lidar com siutações diversas.'
                    },
                    {
                        subtitle: 'Mantenha contato social remoto',
                        gif: 'achieve-12',
                        quote: 'Mantenha o contato social remoto pela internet com seus amigos e familiares mesmo com o distanciamento físico.'
                    },
                    {
                        subtitle: 'Se informe em fontes seguras',
                        gif: 'achieve-13',
                        quote: 'Informe-se em fontes seguras sobre o Coronavírus, evitando sobrecarrega mento de informações falsas.'
                    },
                    {
                        subtitle: 'Evite o excesso de informações',
                        gif: 'achieve-14',
                        quote: 'Evite passar o dia inteiro vendo notícias sobre a Pandemia, procure reservar apenas uma parte do seu dia para isso.'
                    },
                    {
                        subtitle: 'Faça o que sempre gostou',
                        gif: 'achieve-15',
                        quote: 'Separe um tempo para fazer atividades prazerosas que você sempre gostou de fazer, tanto sozinho quanto em família. '
                            + 'Procure descobrir atividades prazerosas que sempre teve vontade de fazer em casa.'
                    },
                ];
                break;
            case 3:
                this.storyList = [
                    {
                        subtitle: 'O medo',
                        gif: 'achieve-16',
                        quote: 'O medo exerce uma função de preservar a vida, mas, em excesso, pode causar doenças físicas e emocionais. Quando o medo é intenso ou desproporcional, ele se torna prejudicial à nossa saúde, aumentando o estresse e a ansiedade.'
                    },
                    {
                        subtitle: 'O medo',
                        gif: 'achieve-16',
                        quote: 'Também pode gerar várias doenças psiquiátricas ou intensificar os sintomas de doenças preexistentes. Vamos conferir algumas dicas para se proteger do medo.'
                    },
                    {
                        subtitle: 'Escolha fontes de informações confiáveis',
                        gif: 'achieve-17',
                        quote: 'Tenha muito cuidado com informações e não passe o dia inteiro acompanhando notícias sobre a Covid-19.'
                    },
                    {
                        subtitle: 'Mantenha contato social remoto',
                        gif: 'achieve-18',
                        quote: 'Mantenha-se conectado com os familiares e amigos pelo telefone e redes sociais.'
                    },
                    {
                        subtitle: 'Compartilhe seus sentimentos',
                        gif: 'achieve-19',
                        quote: 'Compartilhe suas angústias com a sua família e amigos.'
                    },
                    {
                        subtitle: 'Divirta-se com o que você gosta',
                        gif: 'achieve-20',
                        quote: 'Procure distrair-se com atividades de que gosta, como, por exemplo, ler livros ou ver séries.'
                    },
                    {
                        subtitle: 'Se exercite',
                        gif: 'achieve-21',
                        quote: 'Pratique exercícios físicos em casa.'
                    },
                    {
                        subtitle: 'Bebidas e cigarros atrapalham',
                        gif: 'achieve-22',
                        quote: 'Evite o consumo excessivo de bebidas alcoólicas e cigarro.'
                    },
                    {
                        subtitle: 'Foque em você',
                        gif: 'achieve-24',
                        quote: 'Faça exercícios de respiração e meditação.'
                    },
                    {
                        subtitle: 'Durma bem',
                        gif: 'achieve-25',
                        quote: 'Procure ter um sono reparador.'
                    },
                ];
                break;
            case 4:
                this.storyList = [
                    {
                        subtitle: 'O sono',
                        gif: 'achieve-26',
                        quote: 'O sono é uma necessidade física vital. Ter uma boa noite de sono tem um impacto benéfico no nosso dia-a-dia, pois uma ou várias noites mal dormidas podem acarretar dificuldades de concentração, diminuição da atenção e um impacto negativo na capacidade psicomotora.'
                    },
                    {
                        subtitle: 'O sono',
                        gif: 'achieve-26',
                        quote: 'Além disso, as perturbações do sono podem desencadear alterações significativas no funcionamento físico, ocupacional, cognitivo e social, além de comprometer consideravelmente a nossa qualidade de vida.'
                    },
                    {
                        subtitle: 'Sempre durma no horário',
                        gif: 'achieve-27',
                        quote: 'Respeitar uma rotina de horário para dormir à noite e manter-se acordado de dia.'
                    },
                    {
                        subtitle: 'Não durma logo depois de se alimentar',
                        gif: 'achieve-28',
                        quote: 'Fazer a última refeição do dia, pelo menos, duas horas antes de deitar-se.'
                    },
                    {
                        subtitle: 'Procure relaxar antes de dormir',
                        gif: 'achieve-29',
                        quote: 'Diminuir as luzes e ouvir músicas relaxantes, entre outros hábitos de relaxamento antes de deitar-se.'
                    },
                    {
                        subtitle: 'Aparelhos eltrônicos atrapalham',
                        gif: 'achieve-30',
                        quote: 'Evitar televisão e eletrônicos antes de dormir.'
                    },
                    {
                        subtitle: 'Exercícios físicos fora de hora podem prejudicar o sono',
                        gif: 'achieve-31',
                        quote: 'Evitar praticar atividades físicas logo antes de dormir.'
                    },
                    {
                        subtitle: 'Bebida não contribui com o sono',
                        gif: 'achieve-32',
                        quote: 'Evitar café e álcool, pois, ao contrário do que muitos pensam, o álcool prejudica o sono.'
                    },
                ];
                break;
            case 5:
                this.storyList = [
                    {
                        subtitle: 'Estratégias para melhorar o aprendizado',
                        gif: 'achieve-33',
                        quote: 'Vamos conferir algumas estratégias para garantir o aprendizado de forma saudável e viável durante o período da pandemia de COVID-19.'
                    },
                    {
                        subtitle: 'Procure seguir uma rotina',
                        gif: 'achieve-34',
                        quote: 'Acordar cedo, tomar banho, vestir uma roupa adequada para os estudos e tomar o café da manhã no horário normal. A rotina favorece a disciplina e a sensação de controle da situação, que é uma aliada importante nesse cenário imprevisível que estamos vivendo. '
                    },
                    {
                        subtitle: 'Planeje seu dia e mantenha um local organizado para os estudos',
                        gif: 'achieve-34',
                        quote: 'Comece o dia listando as tarefas que você precisa cumprir por ordem de prioridades e, conforme for executando-as, marque como feitas. Isso ajuda a evitar a procrastinação. '
                    },
                    {
                        subtitle: 'Aproveito o tempo usava com deslocamento para descançar',
                        gif: 'achieve-35',
                        quote: 'Aproveite o ambiente seguro e familiar, além do tempo que você economiza com o deslocamento no trajeto até a UNIFEI, para descansar antes de iniciar os estudos.'
                    },
                    {
                        subtitle: 'Prepare um bom ambiente de estudo',
                        gif: 'achieve-36',
                        quote: 'Prepare um ambiente para estudo em sua casa em que a chance de distrações seja a menor possível. Um ambiente bem iluminado e silencioso ajuda a concentrar nos estudos.'
                    },
                    {
                        subtitle: 'Organize seu material para facilitar sua rotina',
                        gif: 'achieve-37',
                        quote: 'Separe todo o material necessário para o seu estudo e deixe-o ao seu alcance para evitar a necessidade de buscar algo a todo o momento e diminuir a possibilidade de distrações.'
                    },
                    {
                        subtitle: 'Faça um cronograma de estudos',
                        gif: 'achieve-38',
                        quote: 'Separe os conteúdos por dia e defina o tempo que vai dedicar para cada disciplina. Uma boa sugestão é focar nas atividades, seguindo os conteúdos programáticos que seriam trabalhados em sala de aula.'
                    },
                    {
                        subtitle: 'Inclua os períodos de pausa no seu cronograma de estudos',
                        gif: 'achieve-39',
                        quote: 'Estipule alguns minutos de descanso entre os estudos das disciplinas ou aulas online. '
                    },
                    {
                        subtitle: 'Use a internet a seu favor',
                        gif: 'achieve-40',
                        quote: ' O conteúdo online permite procurar diferentes fontes de informação e complementar o que há nos livros didáticos. '
                    },
                    {
                        subtitle: 'Mantenha contato com seus colegas',
                        gif: 'achieve-41',
                        quote: 'Mantenha contato com os seus colegas para trocar informações relevantes e tirar dúvidas uns com os outros. Compartilhe com eles experiências e dúvidas sobre o período que estão vivenciando. O diálogo entre pessoas que estão passando por dificuldades semelhantes propicia que estratégias coletivas de superação sejam visualizadas mais facilmente.'
                    },
                    {
                        subtitle: 'Não se isole',
                        gif: 'achieve-42',
                        quote: 'Não se isole emocionalmente das pessoas que são importantes para você, e quando acabar de fazer as atividades acadêmicas do dia, relaxe! Assista um filme ou série, escute música e converse com seus amigos e familiares.'
                    },
                    {
                        subtitle: 'Estratégias para ajudar na memorização',
                        gif: 'achieve-43',
                        quote: 'Vamos conferir algumas técnicas que podem ajudá-lo na memorização dos conteúdos das disciplinas.'
                    },
                    {
                        subtitle: 'Sempre revise o conteúdo das aulas',
                        gif: 'achieve-44',
                        quote: 'Após assistir uma aula, revise o conteúdo várias vezes e de forma intercalada. Isso ativará a memória de longo prazo, facilitando a fixação do conteúdo. Ler as mesmas coisas com intervalos de horas ou dias é mais eficaz que reler a mesma coisa várias vezes seguidas. '
                    },
                    {
                        subtitle: 'Divida seus estudos em blocos',
                        gif: 'achieve-45',
                        quote: 'Faça intervalos para relaxar a mente e o corpo. Isso vale também para as disciplinas: tente intercalar a matéria, pois isso não sobrecarregará o cérebro e, consequentemente, possibilitará maior retenção do conteúdo.'
                    },
                    {
                        subtitle: 'Faça um resumo, escrevendo-o à mão',
                        gif: 'achieve-46',
                        quote: 'Escreva com as suas palavras o que acabou de ler ou assistir, por exemplo, já que isso facilitará a memorização do conteúdo.'
                    },
                    {
                        subtitle: 'Tente relacionar as emoções ao estudo',
                        gif: 'achieve-47',
                        quote: 'A associação de sentimentos positivos a uma informação faz com que o cérebro a retome mais facilmente no futuro quando acionado.'
                    },
                    {
                        subtitle: 'Elimine os “ladrões do tempo”, como notificações das redes sociais',
                        gif: 'achieve-48',
                        quote: 'Se você divide seu foco entre diversos estímulos enquanto está estudando, o cérebro pode entender que essas informações não são relevantes e podem ser descartadas.'
                    },
                    {
                        subtitle: 'Ensine a matéria que estudou para um amigo',
                        gif: 'achieve-49',
                        quote: 'A memorização de uma informação ou conteúdo é facilitada quando colocamos em prática aquilo que aprendemos.'
                    },
                    {
                        subtitle: 'Durma bem',
                        gif: 'achieve-50',
                        quote: 'Uma boa noite de sono é fundamental e está diretamente ligada às funções cognitivas.'
                    },
                ];
                break;
        }
    };
    AchievementPage.prototype.next = function () {
        if (this.position < this.storyList.length)
            this.position++;
        if (this.position == (this.storyList.length - 1))
            this.restProvider.sendGoogleAnalyticsEventTag('Achievement', 'Viu a dica até o final | ' + this.achievement.name, '', 'Game');
        this.talkAnimation();
    };
    AchievementPage.prototype.previous = function () {
        if (this.position > 0)
            this.position--;
        this.talkAnimation();
    };
    AchievementPage.prototype.resolvePerson = function () {
        this.personAnimation = "gif-a-4";
    };
    AchievementPage.prototype.talkAnimation = function () {
        var _this = this;
        this.personAnimation = "gif-a-3";
        setTimeout(function () {
            _this.resolvePerson();
        }, 12000);
    };
    AchievementPage.prototype.navigateBack = function () {
        this.restProvider.sendGoogleAnalyticsEventTag('Achievement', 'Clicou no botão voltar inferior', '', 'Game');
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        this.navCtrl.setRoot('QuestionariesListPage', {}).then(this.loader.dismiss());
    };
    AchievementPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    AchievementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-achievement',template:/*ion-inline-start:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\achievement\achievement.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-1 class="menu-icon-col">\n        <button ion-button clear (click)="openMenu()">\n          <ion-icon name="md-menu" class="menu-icon"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <img class="img-responsive img-header" src="assets/imgs/header-logo.png" />\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 text-justify>\n        <h1 class="subtitle subtitle-game" col-12 text-center>{{achievement.name}}</h1>\n      </ion-col>\n    </ion-row>\n    <ion-row text-center class="img-achieve-row">\n      <ion-col col-2 text-center class="text-questionary-list-game">\n        <button class="button-arrow" ion-button icon-only icon-end (click)="previous()" [disabled]="position == 0">\n          <ion-icon name="ios-arrow-dropleft-circle" class="menu-icon button-arrow-icon"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-18 text-center class="text-questionary-list-game">\n        <img class="img-responsive img-achievement"\n          src="assets/imgs/game/achieve-list/{{storyList[position].gif}}.jpg" />\n      </ion-col>\n      <ion-col col-2 text-center class="text-questionary-list-game">\n        <button class="button-arrow" ion-button icon-only icon-end (click)="next()"\n          [disabled]="position == (storyList.length -1)">\n          <ion-icon name="ios-arrow-dropright-circle" class="menu-icon button-arrow-icon"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row class="person-footer">\n      <ion-col col-3 class="text-questionary-list">\n        <img class="text-img" src="assets/gifs/{{personAnimation}}.webp">\n      </ion-col>\n      <ion-col col-9 class="text-questionary-list-game text-ballon">\n        <h4 class="subtitle subtitle-game" col-12 text-center>{{storyList[position].subtitle}}</h4>\n        <h5 [innerHTML]="storyList[position].quote"></h5>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer class="footer-not-game">\n  <ion-grid>\n    <ion-row>\n      <button ion-button full class="button-background" (click)="navigateBack()">\n        <ion-icon class="text-button">\n          Voltar\n        </ion-icon>\n      </button>\n    </ion-row>\n  </ion-grid>\n  <ion-navbar class="toolbar-progress"></ion-navbar>\n</ion-footer>'/*ion-inline-end:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\achievement\achievement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], AchievementPage);
    return AchievementPage;
}());

var Story = /** @class */ (function () {
    function Story() {
    }
    return Story;
}());

//# sourceMappingURL=achievement.js.map

/***/ })

});
//# sourceMappingURL=6.js.map