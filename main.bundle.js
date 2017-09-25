webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".splash{\r\n  position: fixed;\r\n  width:100%;\r\n  height: 100%;\r\n  background: black;\r\n  top:0;\r\n  left:0;\r\n  right:0;\r\n  bottom:0;\r\n}\r\n.perc{\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n.loading{\r\n  display: inline-block;\r\n  color:white;\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 300px;\r\n  height: 150px;\r\n  margin: auto;\r\n}\r\n.box{\r\n  border: solid 0px white;\r\n  height:50px;\r\n  width: 300px;\r\n\r\n}\r\n.bar{\r\n  position: fixed;\r\n  background-color: white;\r\n  height: 48px;\r\n}\r\n.b{\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--splash screen starts-->\n<div class=\"splash\" *ngIf=\"hide\">\n  <div class=\"loading\">\n    <div class=\"box\">\n      <span class=\"bar\" *ngIf=\"!success\" [ngStyle]=\"{'width':w}\"></span>\n    </div>\n    <div class=\"perc\" *ngIf=\"!success\"> {{perc}} % </div>\n    <div class=\"b\">\n      <button type=\"button\" *ngIf=\"success\" class=\"btn btn-outline-success\" (click) = \"clear()\" routerLink=\"terminal\">Enter</button>\n    </div>\n  </div>\n</div>\n<!--splash screen ends-->\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.width = 0;
        this.w = '';
        this.i = 0;
        this.perc = 0;
        this.success = false;
        this.hide = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getWidth();
    };
    AppComponent.prototype.getWidth = function () {
        var _this = this;
        for (this.i = 0; this.i < 60; this.i++) {
            setTimeout(function () {
                _this.width = _this.width + 5;
                console.log(_this.width);
                _this.perc = Math.ceil((_this.width / 300) * 100);
                _this.w = _this.width + 'px';
                if (_this.width === 300) {
                    _this.success = true;
                }
            }, 150 * this.i);
        }
    };
    AppComponent.prototype.clear = function () {
        this.hide = false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terminal_terminal_component__ = __webpack_require__("../../../../../src/app/terminal/terminal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__terminal_terminal_component__["a" /* TerminalComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terminal_terminal_component__ = __webpack_require__("../../../../../src/app/terminal/terminal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoute = [{ path: 'terminal', component: __WEBPACK_IMPORTED_MODULE_2__terminal_terminal_component__["a" /* TerminalComponent */] }];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoute, { enableTracing: false } // <-- debugging purposes only
            )
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing-module.js.map

/***/ }),

/***/ "../../../../../src/app/terminal/terminal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  background-color: #272727;\r\n  padding: 10px;\r\n}\r\n\r\n.fakeButtons {\r\n  height: 10px;\r\n  width: 10px;\r\n  border-radius: 50%;\r\n  border: 1px solid #000;\r\n  position: relative;\r\n\r\n  left: 6px;\r\n  background-color: #ff3b47;\r\n  border-color: #9d252b;\r\n  display: inline-block;\r\n}\r\n\r\n.fakeMinimize {\r\n  left: 11px;\r\n  background-color: #ffc100;\r\n  border-color: #9d802c;\r\n}\r\n\r\n.fakeZoom {\r\n  left: 16px;\r\n  background-color: #00d742;\r\n  border-color: #049931;\r\n}\r\n\r\n.line1{\r\n  font-size:130%;color:white;font-family:monospace;margin:0\r\n}\r\n\r\n\r\n\r\n.card-block p {\r\n\r\n\r\n\r\n  text-align: left;\r\n  font-size: 1.25em;\r\n  font-family: monospace;\r\n  white-space: normal;\r\n  overflow: hidden;\r\n  width: 0;\r\n}\r\n\r\nspan {\r\n  color: #fff;\r\n  font-weight: bold;\r\n}\r\n\r\n.line1 {\r\n  color: #c0a0d1;\r\n  -webkit-animation: type .5s 1s steps(20, end) forwards;\r\n  animation: type .5s 1s steps(20, end) forwards;\r\n}\r\n\r\n.cursor1 {\r\n  -webkit-animation: blink 1s 2s 2 forwards;\r\n  animation: blink 1s 2s 2 forwards;\r\n}\r\n\r\n.line2 {\r\n  color: #CDEE69;\r\n  -webkit-animation: type .5s 1.25s steps(20, end) forwards;\r\n  animation: type .5s 1.25s steps(20, end) forwards;\r\n}\r\n\r\n.cursor2 {\r\n  -webkit-animation: blink 1s 5.25s 2 forwards;\r\n  animation: blink 1s 5.25s 2 forwards;\r\n}\r\n\r\n.line3 {\r\n  color: #E09690;\r\n  -webkit-animation: type .5s 3.5s steps(20, end) forwards;\r\n  animation: type .5s 3.5s steps(20, end) forwards;\r\n}\r\n\r\n.cursor3 {\r\n  -webkit-animation: blink 1s 8.5s 2 forwards;\r\n  animation: blink 1s 8.5s 2 forwards;\r\n}\r\n\r\n.line4 {\r\n  color: #fff;\r\n  -webkit-animation: type .5s 2.75s steps(20, end) forwards;\r\n  animation: type .5s 2.75s steps(20, end) forwards;\r\n}\r\n.line5 {\r\n  color: #fff;\r\n  -webkit-animation: type .5s 13.75s steps(20, end) forwards;\r\n  animation: type .5s 13.75s steps(20, end) forwards;\r\n}\r\n\r\n\r\n@-webkit-keyframes blink {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  40% {\r\n    opacity: 0;\r\n  }\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n  90% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes blink {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  40% {\r\n    opacity: 0;\r\n  }\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n  90% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes type {\r\n  to {\r\n    width: 17em;\r\n  }\r\n}\r\n\r\n@keyframes type {\r\n  to {\r\n    width: 17em;\r\n  }\r\n}\r\ninput:focus{\r\n  outline: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/terminal/terminal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"height:100%;background-color:#333333;\">\n  <div class=\"col-md-3\" style=\"overflow:hidden;background-color:#330033;background-image: url(https://www.transparenttextures.com/patterns/dark-stripes-light.png);\">\n\n    <div class=\"jumbotron jumbotron-fluid\" style=\"background-color: rgba(255, 255, 255, 0);\">\n      <div class=\"container\">\n\n        <hr class=\"my-4\" style=\"background-color:white\">\n        <p class=\"lead\" style=\"color:white;text-align:center;font-family: monospace; white-space: normal;\">Shailesh Dheep</p>\n        <hr class=\"my-4\" style=\"background-color:white\">\n        <div class=\"text-center\" >\n          <a href=\"mailto:ngsaileshsaran@gmail.com\" target=\"_top\"><svg style=\"width:36px;height:36px\" viewBox=\"0 0 24 24\">\n\n            <path fill=\"#ffffff\" d=\"M20,18H18V9.25L12,13L6,9.25V18H4V6H5.2L12,10.25L18.8,6H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z\" />\n          </svg> </a>\n          <a href=\"https://www.linkedin.com/in/shailesh-dheep-aa4a0a108/\" target=\"_blank\">\n          <svg style=\"width:36px;height:36px\" viewBox=\"0 0 24 24\">\n            <path fill=\"#ffffff\" d=\"M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z\" />\n          </svg> </a>\n          <a href=\"https://www.facebook.com/ngsailesh\" target=\"_blank\">\n          <svg style=\"width:36px;height:36px\" viewBox=\"0 0 24 24\">\n            <path fill=\"#ffffff\" d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z\" />\n          </svg>\n          </a>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"col-md-9\" style=\"overflow-y:auto;padding:0\" #terminal [scrollTop]=\"terminal.scrollHeight\">\n\n    <div class=\"card\" style=\"height:100%;\">\n\n      <div class=\"card-block\" style=\"background-color:black;\">\n        <form [formGroup]=\"myform\">\n          <div class=\"data\" #conversation>\n            <p class=\"line1\">$ Shailesh Dheep<span class=\"cursor1\">_</span></p>\n\n            <p class=\"line3\">[?] What more would you like? (type help to see the list of commands)<span class=\"cursor3\">_</span></p>\n\n          </div>\n          <p class=\"line3\"  style=\"margin-bottom:0 color: #fff;\"> > <input #input  type=\"text\" formControlName=\"data\" (keydown)=\"eventHandler($event)\"   name=\"fname\" autocomplete=\"off\" style=\"background-color: rgba(0,0,0,0.1);padding:0;border: none;color:white;font-size:100%;font-family:monospace;outline:0;\" autofocus autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n        </form>\n      </div>\n    </div>\n\n\n  </div>\n\n\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/terminal/terminal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TerminalComponent = (function () {
    function TerminalComponent(http, eleme, router) {
        this.http = http;
        this.eleme = eleme;
        this.router = router;
        this.commands = [];
        this.data = [];
        this.user_input = [];
        this.i = 0;
        this.counter = 0;
        this.user_input.push('hi');
        this.data.push('hi');
        this.current_directory = 'home';
        this.myform = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'data': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required])
        });
    }
    TerminalComponent.prototype.ngOnInit = function () {
        this.getDirectory();
        this.high = this.terminal.nativeElement.scrollTop;
    };
    // check level starts
    TerminalComponent.prototype.checkLs = function () {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestOptions */]({ headers: this.headers });
        return this.http.post('https://whispering-reef-16492.herokuapp.com/ls', { 'data': this.current_directory }, this.options);
    };
    // check level ends
    // Set Directory starts
    TerminalComponent.prototype.setDirectory = function (temp) {
        var flag = 0;
        temp = temp.replace('cd', '');
        temp = temp.replace(' ', '');
        console.log(this.current_folders);
        for (this.i = 0; this.i < this.current_folders.length; this.i++) {
            if (this.current_folders[this.i] === temp) {
                flag = 1;
                this.current_directory = 'home/' + temp;
                console.log('setdirectory');
                this.getDirectory();
            }
        }
        if (flag) {
            this.convo.nativeElement.insertAdjacentHTML('beforeEnd', "<p class=\"line1\" style=\"font-size:130%;color:white;font-family:monospace;margin:0\"> > " + this.temp + "</p>");
            console.log('valid directory');
            this.input.nativeElement.value = '';
        }
        else {
            this.convo.nativeElement.insertAdjacentHTML('beforeEnd', "<p class=\"line1\" style=\"font-size:130%;color:white;font-family:monospace;margin:0\"> > " + this.temp + "</p>" + "<p> Invalid path type help to get the list of commands\n </p>");
            this.input.nativeElement.value = '';
        }
    };
    // Set Directory ends
    // Get Directory starts
    TerminalComponent.prototype.getDirectory = function () {
        var _this = this;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestOptions */]({ headers: this.headers });
        return this.http.post('https://whispering-reef-16492.herokuapp.com/ls', { 'data': this.current_directory }, this.options).subscribe(function (data) {
            _this.current_folders = JSON.parse(data['_body']);
        });
    };
    // Get Directory ends
    // printFile starts
    TerminalComponent.prototype.printFile = function (temp) {
        var _this = this;
        temp = temp.replace('cat', '');
        temp = temp.replace(' ', '');
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestOptions */]({ headers: this.headers });
        return this.http.post('https://whispering-reef-16492.herokuapp.com/read', { 'data': this.current_directory, 'file': temp }, this.options).subscribe(function (data) {
            _this.content = JSON.parse(data['_body']);
            _this.convo.nativeElement.insertAdjacentHTML('beforeEnd', "<p class=\"line1\" style=\"font-size:130%;color:white;font-family:monospace;margin:0\"> > " + _this.temp + "</p>" + "<p class=\"line1\" style=\"font-size:130%;color:white;font-family:monospace;margin:0\"> > " + _this.content + "</p>");
        });
    };
    // printFile ends
    TerminalComponent.prototype.printHelp = function () {
        var _this = this;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestOptions */]({ headers: this.headers });
        return this.http.post('https://whispering-reef-16492.herokuapp.com/help', { 'data': this.current_directory, 'file': 'help.txt' }, this.options).subscribe(function (data) {
            _this.content = JSON.parse(data['_body']);
            _this.convo.nativeElement.insertAdjacentHTML('beforeEnd', "<p class=\"line1\" style=\"font-size:130%;color:white;font-family:monospace;margin:0\"> > " + _this.temp + "</p>" + "<p class=\"line1\" style=\"font-size:130%;color:white;font-family:monospace;margin:0\"> > " + _this.content + "</p>");
        });
    };
    TerminalComponent.prototype.eventHandler = function (event) {
        var _this = this;
        console.log('key', event.keyCode);
        this.temp = this.input.nativeElement.value;
        console.log(this.temp);
        if (event.keyCode === 38) {
            console.log("Up");
            console.log(this.commands);
            console.log(this.nav);
            if (this.nav) {
                this.input.nativeElement.value = this.commands[this.nav - 1];
                this.nav--;
            }
        }
        if (event.keyCode === 40) {
            console.log(this.nav);
            if (this.nav < this.commands.length - 1) {
                console.log(this.nav);
                this.nav++;
                this.input.nativeElement.value = this.commands[this.nav - 1];
            }
        }
        if (event.keyCode === 9) {
            event.preventDefault();
            this.check_cd(this.temp);
        }
        if (event.keyCode === 13) {
            this.temp = this.input.nativeElement.value;
            this.commands.push(this.temp);
            this.nav = this.commands.length;
            if (this.temp === 'help') {
                this.printHelp();
            }
            if (this.temp === 'ls') {
                this.checkLs().subscribe(function (data) {
                    _this.current_folders = JSON.parse(data['_body']);
                    _this.convo.nativeElement.insertAdjacentHTML('beforeEnd', "<p class=\"line1\" style=\"font-size:130%;color:white;font-family:monospace;margin:0\"> >" + ' ' + _this.temp + "</p>" + " <p class=\"line1\" style=\"font-size:130%;color:white;font-family:monospace;margin:0\"> > " + _this.current_folders + "</p>");
                });
                this.input.nativeElement.value = '';
                console.log(this.current_folders);
            }
            else if (this.temp.includes('cd')) {
                if (this.temp.includes('.')) {
                    this.current_directory = 'home';
                    this.convo.nativeElement.insertAdjacentHTML('beforeEnd', "<p class=\"line1\" style=\"font-size:130%;color:white;font-family:monospace;margin:0\"> >  cd .. </p>");
                    this.input.nativeElement.value = '';
                    this.getDirectory();
                }
                else {
                    console.log('else part');
                    this.setDirectory(this.temp);
                }
            }
            else if (this.temp.includes('cat')) {
                this.printFile(this.temp);
                this.input.nativeElement.value = '';
            }
            else {
                this.input.nativeElement.value = '';
            }
            this.scrollToBottom();
        }
    };
    TerminalComponent.prototype.scrollToBottom = function () {
        try {
            console.log(this.terminal.nativeElement.scrollHeight);
            this.terminal.nativeElement.scrollTop = this.terminal.nativeElement.scrollHeight - this.high;
            console.log(this.terminal.nativeElement.scrollTop);
        }
        catch (err) {
            console.log(err);
        }
    };
    TerminalComponent.prototype.check_cd = function (str) {
        console.log('str', str);
        this.counter = 0;
        if (str) {
            if (str.includes('cd')) {
                this.counter = 1;
            }
            if (str.includes('cat')) {
                this.counter = 2;
            }
            str = str.replace('cd', '');
            str = str.replace('cat', '');
            str = str.replace(' ', '');
            if (str.length > 0) {
                console.log('str1111', str);
                for (this.i = 0; this.i < this.current_folders.length; this.i++) {
                    if (this.current_folders[this.i].startsWith(str) === true) {
                        str = this.current_folders[this.i];
                        this.temp_directory = str;
                        console.log('str', str);
                    }
                }
            }
        }
        if (this.counter === 1) {
            this.input.nativeElement.value = 'cd ' + str;
        }
        else if (this.counter === 2) {
            this.input.nativeElement.value = 'cat ' + str;
        }
        else if (this.counter === 3) {
            this.input.nativeElement.value = '' + str;
        }
    };
    return TerminalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('conversation'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], TerminalComponent.prototype, "convo", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('input'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _b || Object)
], TerminalComponent.prototype, "input", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('terminal'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _c || Object)
], TerminalComponent.prototype, "terminal", void 0);
TerminalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-terminal',
        template: __webpack_require__("../../../../../src/app/terminal/terminal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/terminal/terminal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _f || Object])
], TerminalComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=terminal.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map