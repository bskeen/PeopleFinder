(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/angular-material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<router-outlet></router-outlet>-->\n<pf-search></pf-search>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "pf-search {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'PeopleFinder';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pf-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _person_person_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./person/person.component */ "./src/app/person/person.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"],
                _person_person_component__WEBPACK_IMPORTED_MODULE_9__["PersonComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/person.ts":
/*!**********************************!*\
  !*** ./src/app/models/person.ts ***!
  \**********************************/
/*! exports provided: Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());



/***/ }),

/***/ "./src/app/person/person.component.html":
/*!**********************************************!*\
  !*** ./src/app/person/person.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button *ngIf=\"person\" mat-icon-button (click)=\"onClose()\">\n  <mat-icon>close</mat-icon>\n</button>\n<div *ngIf=\"person\" class=\"grid-container mat-typography\">\n  <img [src]=\"person.pictureUrl\" class=\"label\" />\n  <h1 class=\"value\">\n    {{person.name}}\n  </h1>\n  <h3 class=\"label\">\n    Age:\n  </h3>\n  <h3 class=\"value\">\n    {{person.age}}\n  </h3>\n  <h3 class=\"label\">\n    Address:\n  </h3>\n  <h3 class=\"value\">\n    {{person.streetAddress}}, {{person.city}} {{person.stateName}} {{person.zip}}\n  </h3>\n  <h3 class=\"label\">\n    Interests:\n  </h3>\n  <mat-chip-list>\n    <mat-chip *ngFor=\"let interest of person.interests\">\n      {{interest.name}}\n    </mat-chip>\n  </mat-chip-list>\n</div>"

/***/ }),

/***/ "./src/app/person/person.component.scss":
/*!**********************************************!*\
  !*** ./src/app/person/person.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: auto;\n      grid-template-rows: auto;\n  -ms-grid-columns: 1fr 3fr;\n      grid-template-columns: 1fr 3fr;\n  grid-column-gap: 16px;\n  grid-row-gap: 24px;\n  grid-auto-rows: auto;\n  align-content: start;\n  position: relative;\n  margin: 0 8px;\n  top: 40px;\n  width: 100%;\n  height: calc(100vh - 40px);\n  overflow-y: scroll; }\n  .grid-container img {\n    max-width: 100px;\n    max-height: 100px;\n    border-radius: 5px; }\n  .label {\n  -ms-grid-column-align: right;\n      justify-self: right;\n  -ms-grid-row-align: center;\n      align-self: center;\n  margin: 0;\n  color: rgba(0, 0, 0, 0.54); }\n  .value {\n  -ms-grid-row-align: center;\n      align-self: center;\n  margin: 0; }\n  button {\n  position: absolute;\n  top: 0;\n  right: 0; }\n"

/***/ }),

/***/ "./src/app/person/person.component.ts":
/*!********************************************!*\
  !*** ./src/app/person/person.component.ts ***!
  \********************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/person */ "./src/app/models/person.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonComponent = /** @class */ (function () {
    function PersonComponent() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PersonComponent.prototype.ngOnInit = function () {
    };
    PersonComponent.prototype.onClose = function () {
        this.close.emit(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_person__WEBPACK_IMPORTED_MODULE_1__["Person"])
    ], PersonComponent.prototype, "person", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PersonComponent.prototype, "close", void 0);
    PersonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pf-person',
            template: __webpack_require__(/*! ./person.component.html */ "./src/app/person/person.component.html"),
            styles: [__webpack_require__(/*! ./person.component.scss */ "./src/app/person/person.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.animations.ts":
/*!*******************************************************!*\
  !*** ./src/app/search/search.component.animations.ts ***!
  \*******************************************************/
/*! exports provided: searchComponentAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchComponentAnimations", function() { return searchComponentAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var searchComponentAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('sidePanel', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fullScreenSearch', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('sidePanelSearch', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '30%'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fullScreenSearchMobile', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fullScreenDetail', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            position: 'absolute',
            top: 0,
            left: 0,
            width: 0
        }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('detailPanel', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fullScreenSearch', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            position: 'absolute',
            width: 0,
            top: 0,
            left: '100%'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('sidePanelSearch', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            position: 'absolute',
            width: '70%',
            top: 0,
            left: '30%'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fullScreenSearchMobile', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            position: 'absolute',
            top: 0,
            left: '100%',
            width: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fullScreenDetail', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
        }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('componentAnimations', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('fullScreenSearch => sidePanelSearch', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@sidePanel', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@detailPanel', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                width: '70%',
                top: 0,
                left: '100%'
            })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@sidePanel', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '30%' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@detailPanel', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '30%' }))
                ])
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('sidePanelSearch => fullScreenSearch', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@sidePanel', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '30%'
            })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@detailPanel', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                width: '70%',
                top: 0,
                left: '30%'
            })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@sidePanel', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '100%' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@detailPanel', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
                ])
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('fullScreenSearchMobile => fullScreenDetail', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@sidePanel', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@detailPanel', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                width: '100%',
                top: 0,
                left: '100%'
            })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@sidePanel', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@detailPanel', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: 0 }))
                ])
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('fullScreenDetail => fullScreenSearchMobile', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@sidePanel', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%'
            })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@detailPanel', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@sidePanel', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: 0 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@detailPanel', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
                ])
            ])
        ]),
    ])
];


/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@componentAnimations]=\"getComponentState()\" class=\"content-container\">\n  <div [@sidePanel]=\"getComponentState()\">\n    <form color=\"primary\" [formGroup]=\"searchForm\">\n      <mat-form-field>\n        <input matInput placeholder=\"Search...\" type=\"search\" formControlName=\"search\" />\n      </mat-form-field>\n      <mat-paginator [id]=\"'paginator'\" [length]=\"totalResults\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"[10, 25, 50, 100]\" [pageIndex]=\"pageIndex\" (page)=\"handlePageEvent($event)\"></mat-paginator>\n    </form>\n    <section name=\"card-list\" [ngClass]=\"listClasses\" *ngIf=\"getComponentState() !== 'fullScreenDetail'\">\n      <mat-card *ngFor=\"let person of people\" class=\"selectable-card\" (click)=\"selectPerson(person.id)\">\n        <mat-card-title>\n          {{person.name}}\n        </mat-card-title>\n        <mat-card-subtitle>\n          {{person.city}}, {{person.stateName}}\n        </mat-card-subtitle>\n      </mat-card>\n    </section>\n  </div>\n  <pf-person [person]=\"selectedPerson\" (close)=\"closeDetail()\" [@detailPanel]=\"getComponentState()\">\n  </pf-person>\n</div>\n<div class=\"spinner-overlay\" *ngIf=\"spinnerActive\">\n  <mat-spinner></mat-spinner>\n</div>\n\n"

/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: calc(100% - 32px);\n  padding: 16px;\n  min-width: 0px; }\n  mat-form-field input {\n    width: 100%;\n    margin: 0;\n    min-width: 0; }\n  form {\n  width: 100%;\n  margin: 0 auto; }\n  section {\n  position: relative;\n  width: 100%;\n  margin: 0 auto;\n  height: calc(100vh - 153.5px);\n  overflow-y: scroll; }\n  section.two-line-paginator {\n    height: calc(100vh - 200.125px); }\n  div.content-container {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n  div.spinner-overlay {\n  background-color: rgba(255, 255, 255, 0.7);\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  @media (min-width: 600px) {\n  mat-card {\n    max-width: 560px; }\n  mat-form-field {\n    max-width: 608px; }\n  section, form {\n    max-width: 608px; } }\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_people_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/people.service */ "./src/app/services/people.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _search_component_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search.component.animations */ "./src/app/search/search.component.animations.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchComponent = /** @class */ (function () {
    function SearchComponent(fb, peopleService, breakpointObserver) {
        this.fb = fb;
        this.peopleService = peopleService;
        this.breakpointObserver = breakpointObserver;
        this.spinnerActive = false;
        this.totalResults = 0;
        this.pageSize = 10;
        this.pageIndex = 0;
        this.listClasses = {
            'one-line-paginator': true,
            'two-line-paginator': false
        };
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isDetailVisible = false;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initSearchForm();
        this.searchForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.spinnerActive = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (values) { return _this.peopleService.getPeopleWithSearch(values.search, _this.pageIndex * _this.pageSize, _this.pageSize); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe)).subscribe(function (results) {
            _this.spinnerActive = false;
            _this.people = results.results;
            _this.pageIndex = 0;
            _this.totalResults = results.totalResultsCount;
            if (document.getElementById('paginator').offsetHeight === 56) {
                _this.listClasses["one-line-paginator"] = true;
                _this.listClasses["two-line-paginator"] = false;
            }
            else {
                _this.listClasses["one-line-paginator"] = false;
                _this.listClasses["two-line-paginator"] = true;
            }
        });
    };
    SearchComponent.prototype.initSearchForm = function () {
        this.searchForm = this.fb.group({
            search: ''
        });
    };
    SearchComponent.prototype.selectPerson = function (id) {
        var _this = this;
        this.spinnerActive = true;
        this.peopleService.getPersonDetail(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe)).subscribe(function (person) {
            _this.selectedPerson = person;
            _this.spinnerActive = false;
            _this.isDetailVisible = true;
        });
    };
    SearchComponent.prototype.getComponentState = function () {
        if (this.breakpointObserver.isMatched('(min-width: 600px)')) {
            return this.isDetailVisible ? 'sidePanelSearch' : 'fullScreenSearch';
        }
        else {
            return this.isDetailVisible ? 'fullScreenDetail' : 'fullScreenSearchMobile';
        }
    };
    SearchComponent.prototype.closeDetail = function () {
        this.isDetailVisible = false;
        this.selectedPerson = null;
    };
    SearchComponent.prototype.handlePageEvent = function (event) {
        var _this = this;
        this.pageSize = event.pageSize;
        this.pageIndex = event.pageIndex;
        this.peopleService.getPeopleWithSearch(this.searchForm.value.search, this.pageIndex * this.pageSize, this.pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe)).subscribe(function (results) {
            _this.spinnerActive = false;
            _this.people = results.results;
            _this.totalResults = results.totalResultsCount;
            if (document.getElementById('paginator').offsetHeight === 56) {
                _this.listClasses["one-line-paginator"] = true;
                _this.listClasses["two-line-paginator"] = false;
            }
            else {
                _this.listClasses["one-line-paginator"] = false;
                _this.listClasses["two-line-paginator"] = true;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paginator'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchComponent.prototype, "paginatorEl", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pf-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")],
            animations: _search_component_animations__WEBPACK_IMPORTED_MODULE_5__["searchComponentAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_people_service__WEBPACK_IMPORTED_MODULE_2__["PeopleService"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["BreakpointObserver"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/people.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/people.service.ts ***!
  \********************************************/
/*! exports provided: PeopleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleService", function() { return PeopleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeopleService = /** @class */ (function () {
    function PeopleService(http) {
        this.http = http;
    }
    PeopleService.prototype.getPeopleWithSearch = function (search, skip, take) {
        return this.http.get("/api/People", {
            params: {
                filter: search,
                skip: skip.toString(),
                take: take.toString()
            }
        });
    };
    PeopleService.prototype.getPersonDetail = function (id) {
        return this.http.get("/api/People/" + id);
    };
    PeopleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PeopleService);
    return PeopleService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/benskeen/PeopleFinder/PeopleFinder.Web/app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map