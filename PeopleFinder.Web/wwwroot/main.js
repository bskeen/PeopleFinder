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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'search',
        component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]
    },
    {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]
    }
];
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

module.exports = "<div class=\"main-body\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
        this.title = 'pf';
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _person_list_person_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./person-list/person-list.component */ "./src/app/person-list/person-list.component.ts");
/* harmony import */ var _person_list_item_person_list_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./person-list-item/person-list-item.component */ "./src/app/person-list-item/person-list-item.component.ts");
/* harmony import */ var _person_display_person_display_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./person-display/person-display.component */ "./src/app/person-display/person-display.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"],
                _person_list_person_list_component__WEBPACK_IMPORTED_MODULE_7__["PersonListComponent"],
                _person_list_item_person_list_item_component__WEBPACK_IMPORTED_MODULE_8__["PersonListItemComponent"],
                _person_display_person_display_component__WEBPACK_IMPORTED_MODULE_9__["PersonDisplayComponent"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__["SpinnerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/person-details.ts":
/*!******************************************!*\
  !*** ./src/app/models/person-details.ts ***!
  \******************************************/
/*! exports provided: PersonDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonDetails", function() { return PersonDetails; });
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./person */ "./src/app/models/person.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PersonDetails = /** @class */ (function (_super) {
    __extends(PersonDetails, _super);
    function PersonDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PersonDetails;
}(_person__WEBPACK_IMPORTED_MODULE_0__["Person"]));



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

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pf-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/person-display/person-display.component.html":
/*!**************************************************************!*\
  !*** ./src/app/person-display/person-display.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"selectedPerson\" class=\"person-container\">\n  <div class=\"picture\">\n      <img [src]=\"selectedPerson.pictureUrl\" />\n  </div>\n  <div class=\"grid-cell label\">\n    Name:\n  </div>\n  <div class=\"grid-cell data\">\n    {{selectedPerson.name}}\n  </div>\n  <div class=\"grid-cell label\">\n    Age:\n  </div>\n  <div class=\"grid-cell data\">\n    {{selectedPerson.age}}\n  </div>\n  <div class=\"grid-cell label\">\n    Address:\n  </div>\n  <div class=\"grid-cell data\">\n    <div>\n      {{selectedPerson.streetAddress}}\n    </div>\n    <div>\n      {{selectedPerson.city}}, {{selectedPerson.stateName}} {{selectedPerson.zip}}\n    </div>\n  </div>\n  <div class=\"grid-cell label\">\n    Interests:\n  </div>\n  <div class=\"grid-cell data\">\n    <ul>\n      <li *ngFor=\"let interest of selectedPerson.interests\">\n        {{interest.name}}\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/person-display/person-display.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/person-display/person-display.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".person-container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 10% 1fr 6fr;\n      grid-template-columns: 10% 1fr 6fr;\n  -ms-grid-rows: auto;\n      grid-template-rows: auto;\n  overflow: initial scroll;\n  font-size: 1.5em; }\n\n.picture {\n  -ms-grid-column-align: stretch;\n      justify-self: stretch;\n  -ms-grid-row-align: stretch;\n      align-self: stretch;\n  grid-row: span 4; }\n\n.picture img {\n    background-color: transparent;\n    -o-object-fit: contain;\n       object-fit: contain;\n    -o-object-position: 50% 0;\n       object-position: 50% 0;\n    width: 100%;\n    height: 100%; }\n\n.data {\n  -ms-grid-row-align: start;\n      align-self: start;\n  -ms-grid-column-align: start;\n      justify-self: start; }\n\n.label {\n  -ms-grid-row-align: start;\n      align-self: start;\n  -ms-grid-column-align: end;\n      justify-self: end;\n  font-weight: bold; }\n\n.grid-cell {\n  margin: 0.5em 0.25em;\n  padding: 0.5em; }\n"

/***/ }),

/***/ "./src/app/person-display/person-display.component.ts":
/*!************************************************************!*\
  !*** ./src/app/person-display/person-display.component.ts ***!
  \************************************************************/
/*! exports provided: PersonDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonDisplayComponent", function() { return PersonDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_person_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/person-details */ "./src/app/models/person-details.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonDisplayComponent = /** @class */ (function () {
    function PersonDisplayComponent() {
        this.selectedPerson = null;
    }
    PersonDisplayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_person_details__WEBPACK_IMPORTED_MODULE_1__["PersonDetails"])
    ], PersonDisplayComponent.prototype, "selectedPerson", void 0);
    PersonDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pf-person-display',
            template: __webpack_require__(/*! ./person-display.component.html */ "./src/app/person-display/person-display.component.html"),
            styles: [__webpack_require__(/*! ./person-display.component.scss */ "./src/app/person-display/person-display.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonDisplayComponent);
    return PersonDisplayComponent;
}());



/***/ }),

/***/ "./src/app/person-list-item/person-list-item.animations.ts":
/*!*****************************************************************!*\
  !*** ./src/app/person-list-item/person-list-item.animations.ts ***!
  \*****************************************************************/
/*! exports provided: HoverAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoverAnimations", function() { return HoverAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var animation = '0.25s ease-out';
var styleDefault = {
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,.2), 0px 0px 0px 0px rgba(0,0,0,.14), 0px 0px 0px 0px rgba(0,0,0,.12)",
};
var styleHover = {
    boxShadow: "0px 5px 5px -3px rgba(0,0,0,.2), 0px 8px 10px 1px rgba(0,0,0,.14), 0px 3px 14px 2px rgba(0,0,0,.12)",
};
var styleSelected = {
    boxShadow: styleHover.boxShadow,
    backgroundColor: '#d3d3d3',
    color: '#1976d2',
};
var HoverAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('hover', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])(styleDefault)),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])(styleDefault)),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hover', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])(styleHover)),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('selected', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])(styleSelected)),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => hover', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(animation)
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => selected', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(animation)
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => default', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(animation)
        ])
    ])
];


/***/ }),

/***/ "./src/app/person-list-item/person-list-item.component.html":
/*!******************************************************************!*\
  !*** ./src/app/person-list-item/person-list-item.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-item\" [@hover]=\"state\">\n  <div class=\"list-detail name\">\n    {{person.name}}\n  </div>\n  <div class=\"list-detail address\">\n    {{person.city}}, {{person.stateName}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/person-list-item/person-list-item.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/person-list-item/person-list-item.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-item {\n  border: 1px solid gray;\n  border-radius: 5px;\n  margin: 0.5em;\n  background: white;\n  padding: 0.5em; }\n\n.list-detail {\n  width: 100%;\n  margin: 0.5em; }\n\n.name {\n  font-weight: bold; }\n\n.address {\n  color: gray;\n  font-style: italic; }\n"

/***/ }),

/***/ "./src/app/person-list-item/person-list-item.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/person-list-item/person-list-item.component.ts ***!
  \****************************************************************/
/*! exports provided: PersonListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonListItemComponent", function() { return PersonListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _person_list_item_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./person-list-item.animations */ "./src/app/person-list-item/person-list-item.animations.ts");
/* harmony import */ var _models_person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/person */ "./src/app/models/person.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonListItemComponent = /** @class */ (function () {
    function PersonListItemComponent() {
        this.selected = false;
        this.listItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.state = 'default';
    }
    PersonListItemComponent.prototype.onEnter = function () {
        if (!this.selected) {
            this.state = 'hover';
        }
    };
    PersonListItemComponent.prototype.onExit = function () {
        if (!this.selected) {
            this.state = 'default';
        }
    };
    PersonListItemComponent.prototype.onClick = function () {
        this.listItemSelected.emit(this.person.id);
    };
    Object.defineProperty(PersonListItemComponent.prototype, "currentSelectedID", {
        set: function (id) {
            this.selected = id === this.person.id;
            if (this.selected) {
                this.state = 'selected';
            }
            else if (this.state === 'selected') {
                this.state = 'default';
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_person__WEBPACK_IMPORTED_MODULE_2__["Person"])
    ], PersonListItemComponent.prototype, "person", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PersonListItemComponent.prototype, "listItemSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PersonListItemComponent.prototype, "onEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PersonListItemComponent.prototype, "onExit", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PersonListItemComponent.prototype, "onClick", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('currentSelectedID'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], PersonListItemComponent.prototype, "currentSelectedID", null);
    PersonListItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pf-person-list-item',
            template: __webpack_require__(/*! ./person-list-item.component.html */ "./src/app/person-list-item/person-list-item.component.html"),
            styles: [__webpack_require__(/*! ./person-list-item.component.scss */ "./src/app/person-list-item/person-list-item.component.scss")],
            animations: _person_list_item_animations__WEBPACK_IMPORTED_MODULE_1__["HoverAnimations"]
        }),
        __metadata("design:paramtypes", [])
    ], PersonListItemComponent);
    return PersonListItemComponent;
}());



/***/ }),

/***/ "./src/app/person-list/person-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/person-list/person-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #scrollWindow class=\"person-list-container\">\n  <pf-person-list-item *ngFor=\"let person of people; trackBy: trackByIndex\" [person]=\"person\" (listItemSelected)=\"onItemSelected($event)\" [currentSelectedID]=\"selectedID\">\n  </pf-person-list-item>\n  <!-- <div class=\"overlay\" *ngIf=\"\">\n    <pf-spinner>\n    </pf-spinner>\n  </div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/person-list/person-list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/person-list/person-list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n  visibility: hidden; }\n\n.person-list-container {\n  overflow-y: scroll;\n  position: absolute;\n  top: 4em;\n  bottom: 1em;\n  right: 0;\n  left: 0; }\n"

/***/ }),

/***/ "./src/app/person-list/person-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/person-list/person-list.component.ts ***!
  \******************************************************/
/*! exports provided: PersonListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonListComponent", function() { return PersonListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



;
var DEFAULT_SCROLL_POSITION = {
    sH: 0,
    sT: 0,
    cH: 0
};
var PersonListComponent = /** @class */ (function () {
    function PersonListComponent(elm) {
        var _this = this;
        this.elm = elm;
        this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollBottom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.people = [];
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.scrollPercent = 70;
        this.selectedID = 0;
        this.isUserScrollingDown = function (positions) {
            return positions[0].sT < positions[1].sT;
        };
        this.isScrollExpectedPercent = function (position) {
            return ((position.sT + position.cH) / position.sH) > (_this.scrollPercent / 100);
        };
    }
    Object.defineProperty(PersonListComponent.prototype, "peopleList", {
        set: function (people) {
            this.people = people;
            this.selectedID = this.selectedID;
        },
        enumerable: true,
        configurable: true
    });
    PersonListComponent.prototype.ngAfterViewInit = function () {
        this.registerScrollEvent();
    };
    PersonListComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next(false);
        this.unsubscribe.complete();
    };
    PersonListComponent.prototype.registerScrollEvent = function () {
        var _this = this;
        this.scrollEvent = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.scrollEl.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) { return ({
            sH: event.target.scrollHeight,
            sT: event.target.scrollTop,
            cH: event.target.clientHeight
        }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (positions) {
            return _this.isUserScrollingDown(positions)
                && _this.isScrollExpectedPercent(positions[1]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])([DEFAULT_SCROLL_POSITION, DEFAULT_SCROLL_POSITION]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(function (value) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe(function (value) {
            if (_this.scrollToBottom) {
                _this.scrollToBottom(value);
            }
        });
    };
    PersonListComponent.prototype.onItemSelected = function (id) {
        this.itemSelected.emit(id);
    };
    PersonListComponent.prototype.trackByIndex = function (index, item) {
        return index;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PersonListComponent.prototype, "itemSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PersonListComponent.prototype, "scrollBottom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('people'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], PersonListComponent.prototype, "peopleList", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PersonListComponent.prototype, "scrollToBottom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollWindow'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PersonListComponent.prototype, "scrollEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PersonListComponent.prototype, "selectedID", void 0);
    PersonListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pf-person-list',
            template: __webpack_require__(/*! ./person-list.component.html */ "./src/app/person-list/person-list.component.html"),
            styles: [__webpack_require__(/*! ./person-list.component.scss */ "./src/app/person-list/person-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], PersonListComponent);
    return PersonListComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-container\">\n  <div class=\"search-pane\">\n    <div class=\"search-box\">\n      <input type=\"search\" [formControl]=\"searchTerms\" />\n    </div>\n    <pf-person-list [people]=\"peopleList\" [scrollToBottom]=\"onScrollList\" [selectedID]=\"selectedID\" (itemSelected)=\"onItemSelected($event)\"></pf-person-list>\n    <div class=\"overlay\" *ngIf=\"listSpinnerState\">\n    </div>\n    <div class=\"spinner-container\" *ngIf=\"listSpinnerState\">\n        <pf-spinner></pf-spinner>\n    </div>\n  </div>\n  <div class=\"details-pane\">\n    <pf-person-display [selectedPerson]=\"selectedPerson\"></pf-person-display>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"search\"] {\n  background: none;\n  border: none;\n  outline: none;\n  width: 100%; }\n\n.search-box {\n  margin: 0.5em;\n  margin-bottom: 1em;\n  border: 2px solid gray;\n  border-radius: 5px;\n  padding: 0.5em; }\n\n.search-container {\n  position: fixed;\n  width: 100%;\n  height: 100%; }\n\n.search-pane {\n  grid-area: \"search\";\n  position: absolute;\n  width: 33%;\n  height: 100%;\n  z-index: 0; }\n\n.overlay {\n  width: 100%;\n  position: absolute;\n  top: 4em;\n  bottom: 1em;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  background-color: rgba(255, 255, 255, 0.75); }\n\n.spinner-container {\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -15px;\n  margin-top: -15px;\n  z-index: 2; }\n\n.details-pane {\n  position: absolute;\n  width: 67%;\n  height: 100%;\n  right: 0; }\n"

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
/* harmony import */ var _services_person_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/person.service */ "./src/app/services/person.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
    function SearchComponent(personService) {
        var _this = this;
        this.personService = personService;
        this.selectedPerson = null;
        this.selectedID = 0;
        this.peopleList = [];
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.listSpinnerState = true;
        this.subscriptionFunction = function (people) {
            _this.peopleList = people;
            _this.listSpinnerState = false;
            _this.bottomOfPageObservable.subscribe(_this.subscriptionFunction);
        };
        this.onScrollList = function (value) {
            if (_this.scroll) {
                _this.scroll.next(value);
            }
        };
        this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.scrollObservable = this.scroll.asObservable();
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.searchTerms = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.setupSearchTermsObservable();
        this.setupBottomOfPageObservable();
    };
    SearchComponent.prototype.setupSearchTermsObservable = function () {
        var _this = this;
        this.searchTermsObservable = this.searchTerms.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounce"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (value) {
            _this.listSpinnerState = true;
            _this.onItemSelected(0);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return value; }));
        this.searchTermsObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (value) { return _this.personService.getWithSearch(value, true); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe)).subscribe(this.subscriptionFunction);
    };
    SearchComponent.prototype.setupBottomOfPageObservable = function () {
        var _this = this;
        this.bottomOfPageObservable = this.scrollObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (value) { return _this.listSpinnerState = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (value) { return _this.personService.getWithSearch(_this.searchTerms.value); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.searchTermsObservable));
        this.bottomOfPageSubscription = this.bottomOfPageObservable.subscribe(this.subscriptionFunction);
    };
    SearchComponent.prototype.onItemSelected = function (id) {
        var _this = this;
        this.personService.getByID(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe)).subscribe(function (person) { return _this.selectedPerson = person; });
        this.selectedID = id;
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next(true);
        this.unsubscribe.complete();
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pf-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_person_service__WEBPACK_IMPORTED_MODULE_1__["PersonService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/person.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/person.service.ts ***!
  \********************************************/
/*! exports provided: PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return PersonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonService = /** @class */ (function () {
    function PersonService(http) {
        this.http = http;
        this.currentPeople = [];
    }
    PersonService.prototype.getWithSearch = function (searchTerms, refresh) {
        var _this = this;
        if (refresh === void 0) { refresh = false; }
        if (!refresh && this.currentPeople.length === this.totalResults) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.currentPeople);
        }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (searchTerms) {
            params = params.set('filter', searchTerms);
        }
        if (!refresh) {
            params = params.set('skip', "" + this.currentPeople.length);
        }
        var options = {
            params: params
        };
        return this.http.get('/api/people', options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            _this.totalResults = response.totalResultsCount;
            if (refresh) {
                _this.currentPeople = response.results;
            }
            else {
                _this.currentPeople = _this.currentPeople.concat(response.results);
            }
            return _this.currentPeople;
        }));
    };
    PersonService.prototype.getByID = function (id) {
        return this.http.get("/api/people/" + id);
    };
    PersonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PersonService);
    return PersonService;
}());



/***/ }),

/***/ "./src/app/spinner/spinner.component.html":
/*!************************************************!*\
  !*** ./src/app/spinner/spinner.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\"></div>\n"

/***/ }),

/***/ "./src/app/spinner/spinner.component.scss":
/*!************************************************!*\
  !*** ./src/app/spinner/spinner.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n  border: 3px solid;\n  border-color: lightgray;\n  border-top-color: black;\n  border-radius: 50%;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-name: spin;\n          animation-name: spin;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  width: 100%;\n  height: 100%; }\n\n@-webkit-keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n"

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pf-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.scss */ "./src/app/spinner/spinner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! C:\code\open-source\PeopleFinder\PeopleFinder.Web\app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map