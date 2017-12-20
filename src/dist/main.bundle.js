webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-body/app-body.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col.s10 > div {\r\n  padding:10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-body/app-body.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <navigation [appBody]=\"this\"></navigation>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col s1\"></div>\r\n  <div class=\"col s10\">\r\n    <div class=\"white z-depth-3\">\r\n      <home-page *ngIf=\"activePage == 'home'\"></home-page>\r\n      <logo-page *ngIf=\"activePage == 'logo'\"></logo-page>\r\n      <foto-page *ngIf=\"activePage == 'foto'\"></foto-page>\r\n      <video-page *ngIf=\"activePage == 'video'\"></video-page>\r\n      <doku-page *ngIf=\"activePage == 'doku'\"></doku-page>\r\n    </div>\r\n  </div>\r\n  <div class=\"col s1\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app-body/appBody.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppBodyComponent = (function () {
    function AppBodyComponent() {
        this.activePage = 'home';
    }
    AppBodyComponent.prototype.setActivePage = function (page) {
        if (page) {
            this.activePage = page;
        }
    };
    AppBodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-body',
            template: __webpack_require__("../../../../../src/app/app-body/app-body.html"),
            styles: [__webpack_require__("../../../../../src/app/app-body/app-body.css")],
        })
    ], AppBodyComponent);
    return AppBodyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-body/dokuPage/dokuPage.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h4>Dokumentation</h4>\r\n  <hr>\r\n  <span>\r\n    <h5>Abweichungen zum Konzept</h5>\r\n    Ich habe bei der Umsetzung der Seite gemerkt, dass ich die grautöhne etwas zu leicht abgestuft habe, weshalb ich noch\r\n    den grautohn \"grey lighten-3\" aus dem Materialize CSS verwendet habe. Die Google Maps API habe ich durch eine Youtube API\r\n    ausgetauscht, da die Maps API keinen Sinn ergibt und ich das Video auslagern musste.\r\n    Ansonsten habe ich das Konzept so umgesetzt.\r\n  </span>\r\n  <hr>\r\n  <span>\r\n    <h5>Reflexion</h5>\r\n    Im allgemeinen war ich etwas knapp mit der Umsetzung des Videos, weshalb wir leider einige Szenen nich hatten beim Schneiden,\r\n    die wir noch nachdrehen hätten können, hätten wir früher Zeit gefunden. Beim dreh ist mir aufgefallen, dass man am besten\r\n    lustig gestaltete Dialoge nicht vorbereitet, sondern einfach 15 minuten mit der Kamera redet, da fast alle Witze spontan\r\n    passiert sind und nicht geplant waren.\r\n    <br>\r\n    Zur Umsetzung der Webseite gab es nicht viele Überraschungen. Die einzige die ich angetroffen habe war ein\r\n    Materialize CSS und Angular 2 Inkompatibilität, so können z.B. keine Modale standardmässig aufgerufen werden.\r\n    Deshalb musste ich noch eine Erweiterung des CSS Frameworks. Der JQuery Eventhandler funktioniert nicht, da $ nicht\r\n    definiert ist in Angular 2 und Typescript. So musste ich eine eigene Instanz von $ global definieren und die Modalklasse\r\n    von hand schreiben.\r\n    <br>\r\n  </span>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app-body/dokuPage/dokuPage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DokuPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DokuPageComponent = (function () {
    function DokuPageComponent() {
    }
    DokuPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'doku-page',
            template: __webpack_require__("../../../../../src/app/app-body/dokuPage/dokuPage.html"),
        })
    ], DokuPageComponent);
    return DokuPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-body/fotoPage/fotoPage.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h4>Foto</h4>\r\n  <hr>\r\n  <span>\r\n    <h5>Idee</h5>\r\n      Passend zum Thema Kampfsport habe ich dieses Bild gemacht. Es zeigt einen einfachen Festhalter.\r\n      Leider ist der Hintergrund nicht so schön, weshalb ich mich dazu entschieden habe diesen unscharf zu machen, so dass\r\n      die Technik selbst in den Vordergrund rückt.\r\n  </span>\r\n  <span>\r\n    <h5>Vorgehensweise</h5>\r\n    Das Bild habe ich mit Gimp bearbeitet. Ich habe zuerst das Layer dupliziert und anschliessend einen Alpha-chanel\r\n    auf den oberen Layer gesetzt. Danach habe ich den Vordergrund ausgeschnitten und den Hintergrund unscharf gemacht.\r\n    <div class=\"row\">\r\n      <div class=\"col\"><gallery [id]=\"11\" [file]=\"'festhalter'\"></gallery></div>\r\n      <div class=\"col\"><gallery [id]=\"12\" [file]=\"'festhalter2'\"></gallery></div>\r\n      <div class=\"col\"><gallery [id]=\"13\" [file]=\"'festhalter3'\"></gallery></div>\r\n    </div>\r\n  </span>\r\n  <hr>\r\n  <span>\r\n    <h5>Idee</h5>\r\n    Bei dieser Bildbearbeitung habe ich das Logo genommen und dessen Farben invertiert. Die Idee ist gekommen, als ich bei der\r\n    Webseite die Navigation gemacht habe und das Schwarze Icon auf dem Schwarzen Menu nicht richtig erkennen konnte.\r\n  </span>\r\n  <span>\r\n    <h5>Umsetzung</h5>\r\n    Zur Umsetzung habe ich Paint.Net verwendet. Ich habe dazu die Invertierungsfunktion genommen. Anschliessend bemerkte ich einige\r\n    schwarzen striche die ich ebenfalls mit MS Paint und dem Radiergummi-Tool entfernt habe.\r\n    <div class=\"row\">\r\n      <div class=\"col\"><gallery [id]=\"14\" [file]=\"'invertcolor'\"></gallery></div>\r\n      <div class=\"col\"><gallery [id]=\"15\" [file]=\"'invertcolor2'\"></gallery></div>\r\n      <div class=\"col\"><gallery [id]=\"16\" [file]=\"'invertcolor3'\"></gallery></div>\r\n    </div>\r\n  </span>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app-body/fotoPage/fotoPage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FotoPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FotoPageComponent = (function () {
    function FotoPageComponent() {
    }
    FotoPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'foto-page',
            template: __webpack_require__("../../../../../src/app/app-body/fotoPage/fotoPage.html"),
        })
    ], FotoPageComponent);
    return FotoPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-body/gallery/gallery.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal.bottom-sheet {\r\n  max-height: 100%;\r\n}\r\na > img {\r\n  height: auto;\r\n  width: 200px;\r\n}\r\nimg {\r\n  max-width:100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-body/gallery/gallery.html":
/***/ (function(module, exports) {

module.exports = "<div materialize>\r\n  <a class=\"waves-effect waves-light\" (click)=\"openModal()\">\r\n    <img src=\"./assets/{{file}}.png\"/>\r\n  </a>\r\n  <div id=\"modal{{id}}\" class=\"modal bottom-sheet\" materialize=\"modal\" [materializeParams]=\"\" [materializeActions]=\"modalActions\">\r\n    <div class=\"modal-content\">\r\n      <h4>Image {{id}}</h4>\r\n      <img src=\"./assets/{{file}}.png\"/>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <a class=\"waves-effect waves-green btn-flat\" (click)=\"closeModal()\">Schliessen</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app-body/gallery/gallery.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryComponent = (function () {
    function GalleryComponent() {
        this.modalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    GalleryComponent.prototype.openModal = function () {
        this.modalActions.emit({ action: 'modal', params: ['open'] });
    };
    GalleryComponent.prototype.closeModal = function () {
        this.modalActions.emit({ action: 'modal', params: ['close'] });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], GalleryComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], GalleryComponent.prototype, "file", void 0);
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["a" /* MaterializeDirective */],
            ],
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'gallery',
            template: __webpack_require__("../../../../../src/app/app-body/gallery/gallery.html"),
            styles: [__webpack_require__("../../../../../src/app/app-body/gallery/gallery.css")],
        })
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-body/homePage/homePage.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <span>\r\n    <h4>Home</h4>\r\n    <hr>\r\n    Dies ist mein E-Portfolio. Das allgemeine Thema ist Kampfsport.\r\n  </span>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app-body/homePage/homePage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'home-page',
            template: __webpack_require__("../../../../../src/app/app-body/homePage/homePage.html"),
        })
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-body/logoPage/logoPage.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-body/logoPage/logoPage.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h4>Logo</h4>\r\n  <hr>\r\n  <span>\r\n    <h5>Vorgehensweise</h5>\r\n    Die Erstellung dieses Logos führte mich durch verschiedene Programme. Verwendet habe ich Inkscape, Photoshop und Paint\r\n    .Net.<br>\r\n    Zuerst habe ich mit Inkscape die form erstellt. Drei Rechtecke mit den weissen strichen durch.\r\n    Anschliessend habe ich die alles weisse des Bildes mit Photoshop entfernt.\r\n    <gallery [id]=\"1\" [file]=\"'logo-dark'\"></gallery>\r\n    Und zuletzt mit Paint .Net zugeschnitten, so dass es nicht zu viel leere Fläche in Anspruch nimmt.\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <gallery [id]=\"2\" [file]=\"'logobearbeitung1'\"></gallery>\r\n      </div>\r\n      <div class=\"col\">\r\n        <gallery [id]=\"3\" [file]=\"'logobearbeitung2'\"></gallery>\r\n      </div>\r\n    </div>\r\n    <h5>Reflexion</h5>\r\n    Ich habe mir zu Beginn ziemlich lange überlegt, was für ein Logo man machen könnte und wollte viel zu schwere Motive machen. Dies habe ich dann jedoch verworfen und mich für etwas Einfacheres entscheiden, da es besser aussieht und sich einfacher zu merken ist. Bei der Erstellung selbst bin ich nicht auf grosse Probleme gestossen. Das grösste Hindernis war das zuschneiden, da ich es weder mit Inkscape noch Photoshop hinbekommen habe.\r\n    Für ein nächstes Mal würde ich schauen, dass ich mir selbst die Ziele nicht zu hoch stecke.\r\n  </span>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app-body/logoPage/logoPage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LogoPageComponent = (function () {
    function LogoPageComponent() {
    }
    LogoPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'logo-page',
            template: __webpack_require__("../../../../../src/app/app-body/logoPage/logoPage.html"),
            styles: [__webpack_require__("../../../../../src/app/app-body/logoPage/logoPage.css")],
        })
    ], LogoPageComponent);
    return LogoPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-body/videoPage/videoPage.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h4>Video</h4>\r\n  <hr>\r\n  <iframe width=\"100%\" height=\"750px\" src=\"https://www.youtube.com/embed/MYesz2L6j5w\"\r\n          allowfullscreen=\"allowfullscreen\">\r\n  </iframe>\r\n  <span>\r\n    <h5>Allgemeines</h5>\r\n    Für die Gesammte bearbeitung des Filmes wurden Adobe Premiere und After Effects verwendet.\r\n    <br>\r\n    Darsteller sind in diesem Film Timon Mock, Mike Schrämli und ich selbst. Kammeramann war Dino Del Prete,\r\n    mit welchem ich zudem auch das Video geschnitten habe.\r\n    Der Film ist als Komödie gedacht und etwas Überspitzt teilweise. Die Kampfszene gegen ende\r\n    hat insofern als einizges etwas mit der Thematik zu tun. Da nur sich ins gesicht hauen etwas langweilig ist, wollte\r\n    ich so bezwecken, dass der Film etwas interessanter zum anschauen wird.\r\n  </span>\r\n  <span>\r\n    <h5>Schnitt</h5>\r\n    Der Schnitt und die Musik wurde in Adobe Premiere eingefügt. Dazu haben wir uns den einfachen Tools vom Programm bedient.\r\n    Wir haben viele kleine Sequenzen gemacht, welche wir dann nur zusammengefügt haben. Mit Aufnahmen aus mehreren Perspektiven\r\n    konnten wir eine gewisse Dynamik hineinbringen. Wir haben dann jeweils nur eine Audiospur genommen und die Bilder von\r\n    den verschiedenen Perspektiven. Für die Audio haben wir ebenfalls auf die Standard Adobe Library zurückgegriffen.\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <gallery [id]=\"4\" [file]=\"'schnitt'\"></gallery>\r\n      </div>\r\n      <div class=\"col\">\r\n        <gallery [id]=\"5\" [file]=\"'schnitt2'\"></gallery>\r\n      </div>\r\n      <div class=\"col\">\r\n        <gallery [id]=\"6\" [file]=\"'schnitt3'\"></gallery>\r\n      </div>\r\n      <div class=\"col\">\r\n        <gallery [id]=\"6\" [file]=\"'farbton'\"></gallery>\r\n      </div>\r\n    </div>\r\n  </span>\r\n  <hr>\r\n  <span>\r\n    <h5>Schusseffekte</h5>\r\n    Die Schusseffekte haben wir mit Adobe After Effects hinzugefügt. Hierfür haben wir uns einem Standard Image von After Effects bedient.\r\n    Zudem haben wir die Schriften mit diesem Tool eingefügt.\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <gallery [id]=\"8\" [file]=\"'guneffects'\"></gallery>\r\n      </div>\r\n      <div class=\"col\">\r\n        <gallery [id]=\"9\" [file]=\"'guneffects2'\"></gallery>\r\n      </div>\r\n      <div class=\"col\">\r\n        <gallery [id]=\"10\" [file]=\"'guneffects3'\"></gallery>\r\n      </div>\r\n    </div>\r\n  </span>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app-body/videoPage/videoPage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VideoPageComponent = (function () {
    function VideoPageComponent() {
    }
    VideoPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'video-page',
            template: __webpack_require__("../../../../../src/app/app-body/videoPage/videoPage.html"),
        })
    ], VideoPageComponent);
    return VideoPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_body_videoPage_videoPage__ = __webpack_require__("../../../../../src/app/app-body/videoPage/videoPage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_body_appBody__ = __webpack_require__("../../../../../src/app/app-body/appBody.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_navigation__ = __webpack_require__("../../../../../src/app/navigation/navigation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_body_homePage_homePage__ = __webpack_require__("../../../../../src/app/app-body/homePage/homePage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_body_dokuPage_dokuPage__ = __webpack_require__("../../../../../src/app/app-body/dokuPage/dokuPage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_body_fotoPage_fotoPage__ = __webpack_require__("../../../../../src/app/app-body/fotoPage/fotoPage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_body_logoPage_logoPage__ = __webpack_require__("../../../../../src/app/app-body/logoPage/logoPage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_body_gallery_gallery__ = __webpack_require__("../../../../../src/app/app-body/gallery/gallery.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_materialize_dist__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_body_appBody__["a" /* AppBodyComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navigation_navigation__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_2__app_body_videoPage_videoPage__["a" /* VideoPageComponent */],
                __WEBPACK_IMPORTED_MODULE_5__app_body_homePage_homePage__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_body_dokuPage_dokuPage__["a" /* DokuPageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_body_fotoPage_fotoPage__["a" /* FotoPageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__app_body_logoPage_logoPage__["a" /* LogoPageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__app_body_gallery_gallery__["a" /* GalleryComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10_angular2_materialize_dist__["b" /* MaterializeModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_body_appBody__["a" /* AppBodyComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/navigation/navigation.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navigation {\r\n  position: relative;\r\n}\r\n.navigation > div:hover:not(:first-child){\r\n  background-color: #757575;\r\n  cursor: pointer;\r\n}\r\n.navigation > div > img{\r\n  margin: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-fixed\">\r\n  <nav class=\"navigation grey darken-3\">\r\n    <div class=\"col s2\">\r\n      <img width=\"48px\" height=\"48px\" src=\"assets/logo-white.png\" />\r\n    </div>\r\n    <div class=\"col s2\" (click)=\"navigate('home')\">\r\n      Home\r\n    </div>\r\n    <div class=\"col s2\" (click)=\"navigate('logo')\">\r\n      Logo\r\n    </div>\r\n    <div class=\"col s2\" (click)=\"navigate('foto')\">\r\n      Foto\r\n    </div>\r\n    <div class=\"col s2\" (click)=\"navigate('video')\">\r\n      Video\r\n    </div>\r\n    <div class=\"col s2\" (click)=\"navigate('doku')\">\r\n      Dokumentation\r\n    </div>\r\n  </nav>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_body_appBody__ = __webpack_require__("../../../../../src/app/app-body/appBody.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.navigate = function (page) {
        this.appBody.setActivePage(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__app_body_appBody__["a" /* AppBodyComponent */])
    ], NavigationComponent.prototype, "appBody", void 0);
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'navigation',
            template: __webpack_require__("../../../../../src/app/navigation/navigation.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation/navigation.css")],
        })
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");






if (__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map