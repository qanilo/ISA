webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/activation-page/activation-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/activation-page/activation-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Activation link is sent to {{ email }} \r\n</p>\r\n"

/***/ }),

/***/ "./src/app/activation-page/activation-page.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
var ActivationPageComponent = /** @class */ (function () {
    function ActivationPageComponent(user) {
        this.user = user;
    }
    Object.defineProperty(ActivationPageComponent.prototype, "email", {
        get: function () {
            return this.user.email;
        },
        set: function (value) {
            this.user.email = value;
        },
        enumerable: true,
        configurable: true
    });
    ActivationPageComponent.prototype.ngOnInit = function () {
    };
    ActivationPageComponent = __decorate([
        core_1.Component({
            selector: 'app-activation-page',
            template: __webpack_require__("./src/app/activation-page/activation-page.component.html"),
            styles: [__webpack_require__("./src/app/activation-page/activation-page.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_service_1.UserServiceService])
    ], ActivationPageComponent);
    return ActivationPageComponent;
}());
exports.ActivationPageComponent = ActivationPageComponent;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var homepage_component_1 = __webpack_require__("./src/app/homepage/homepage.component.ts");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var register_component_1 = __webpack_require__("./src/app/register/register.component.ts");
var cinemas_component_1 = __webpack_require__("./src/app/cinemas/cinemas.component.ts");
var fanpage_component_1 = __webpack_require__("./src/app/fanpage/fanpage.component.ts");
var page_not_found_component_1 = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
var theatres_component_1 = __webpack_require__("./src/app/theatres/theatres.component.ts");
var userpage_component_1 = __webpack_require__("./src/app/userpage/userpage.component.ts");
var userprofile_component_1 = __webpack_require__("./src/app/userprofile/userprofile.component.ts");
var activation_page_component_1 = __webpack_require__("./src/app/activation-page/activation-page.component.ts");
var update_user_component_1 = __webpack_require__("./src/app/update-user/update-user.component.ts");
var authguard_guard_1 = __webpack_require__("./src/app/authguard.guard.ts");
var logout_component_1 = __webpack_require__("./src/app/logout/logout.component.ts");
var routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'homepage', component: homepage_component_1.HomepageComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'cinemas', component: cinemas_component_1.CinemasComponent },
    { path: 'fanpage', component: fanpage_component_1.FanpageComponent },
    { path: 'theatres', component: theatres_component_1.TheatresComponent },
    { path: 'userpage', canActivate: [authguard_guard_1.AuthguardGuard], component: userpage_component_1.UserpageComponent },
    { path: 'userprofile', component: userprofile_component_1.UserprofileComponent },
    { path: 'activation-page', component: activation_page_component_1.ActivationPageComponent },
    { path: 'logout', component: logout_component_1.LogoutComponent },
    { path: 'update-user', component: update_user_component_1.UpdateUserComponent },
    { path: 'users/:username', component: userprofile_component_1.UserprofileComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.RoutingComponents = [
    homepage_component_1.HomepageComponent,
    login_component_1.LoginComponent,
    register_component_1.RegisterComponent,
    cinemas_component_1.CinemasComponent,
    fanpage_component_1.FanpageComponent,
    theatres_component_1.TheatresComponent,
    userpage_component_1.UserpageComponent,
    page_not_found_component_1.PageNotFoundComponent,
    activation_page_component_1.ActivationPageComponent
];


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var header_component_1 = __webpack_require__("./src/app/header/header.component.ts");
var authguard_guard_1 = __webpack_require__("./src/app/authguard.guard.ts");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
var rekviziti_service_1 = __webpack_require__("./src/app/rekviziti.service.ts");
var rekvizit_component_1 = __webpack_require__("./src/app/rekvizit/rekvizit.component.ts");
var oglas_component_1 = __webpack_require__("./src/app/oglas/oglas.component.ts");
var userprofile_component_1 = __webpack_require__("./src/app/userprofile/userprofile.component.ts");
var upload_file_service_1 = __webpack_require__("./src/app/upload-file.service.ts");
var update_user_component_1 = __webpack_require__("./src/app/update-user/update-user.component.ts");
var logout_component_1 = __webpack_require__("./src/app/logout/logout.component.ts");
var rezervacija_component_1 = __webpack_require__("./src/app/rezervacija/rezervacija.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                app_routing_module_1.RoutingComponents,
                rekvizit_component_1.RekvizitComponent,
                oglas_component_1.OglasComponent,
                userprofile_component_1.UserprofileComponent,
                update_user_component_1.UpdateUserComponent,
                logout_component_1.LogoutComponent,
                rezervacija_component_1.RezervacijaComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule
            ],
            providers: [user_service_service_1.UserServiceService, rekviziti_service_1.RekvizitiService, authguard_guard_1.AuthguardGuard, upload_file_service_1.UploadFileService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/authguard.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
var AuthguardGuard = /** @class */ (function () {
    function AuthguardGuard(user, router) {
        this.user = user;
        this.router = router;
    } //session
    AuthguardGuard.prototype.canActivate = function (next, state) {
        if (!this.user.getLoggedIn()) {
            this.router.navigate(['']);
        }
        return this.user.getLoggedIn();
    };
    AuthguardGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [user_service_service_1.UserServiceService, router_1.Router])
    ], AuthguardGuard);
    return AuthguardGuard;
}());
exports.AuthguardGuard = AuthguardGuard;


/***/ }),

/***/ "./src/app/cinemas/cinemas.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cinemas/cinemas.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  cinemas works!\n</p>\n"

/***/ }),

/***/ "./src/app/cinemas/cinemas.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var CinemasComponent = /** @class */ (function () {
    function CinemasComponent() {
    }
    CinemasComponent.prototype.ngOnInit = function () {
    };
    CinemasComponent = __decorate([
        core_1.Component({
            selector: 'app-cinemas',
            template: __webpack_require__("./src/app/cinemas/cinemas.component.html"),
            styles: [__webpack_require__("./src/app/cinemas/cinemas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CinemasComponent);
    return CinemasComponent;
}());
exports.CinemasComponent = CinemasComponent;


/***/ }),

/***/ "./src/app/fanpage/fanpage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fanpage/fanpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<nav>\r\n\t\t<button (click)=\"zvanicnaProdavnica()\">Zvanicna prodavnica</button>\r\n\t\t<button (click)=\"polovniOglasi()\">Oglasi</button>\r\n\t</nav>\r\n</div>\r\n\r\n\t\t\t\t\t   \r\n\r\n\r\n\r\n<div [ngSwitch]=\"state\">\r\n\t<div *ngSwitchCase=\"'zvanicni'\">\r\n\t\t<div *ngFor=\"let r of zvanicniRekviziti\">\r\n\t\t\t<div *ngFor = \"let f of fileUploads\">\r\n\t\t\t\t<div *ngIf=\"isImage(r.slika,f)\">\r\n\t\t\t\t\t<app-rekvizit [rekvizit]=\"r\" [username]=\"user\" [fileUpload]='f'></app-rekvizit>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t</div>\r\n \r\n\t<div *ngSwitchCase=\"'oglasi'\">\r\n\t\t<nav>\r\n\t\t\t<button (click)=\"noviOglas()\">Novi oglas</button>\r\n\t\t\t<button (click)=\"aktivniOglasi()\">Aktivni oglasi</button>\r\n\t\t</nav>\r\n\t\t<div *ngFor = \"let o of oglasi\">\r\n\t\t\t<app-oglas [oglas]=\"o\"></app-oglas>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div *ngSwitchCase=\"'noviOglas'\">\r\n\t\t<div>\r\n\t\t\t<h3>Naziv oglasa</h3>\r\n\t\t\t<input #nazivOglasa type=\"text\">\r\n\t\t\t<h3>Opis oglasa</h3>\r\n\t\t\t<textarea #opisOglasa rows=\"10\" cols=\"30\"></textarea>\r\n\t\t\t<h3>Slika oglasa</h3>\r\n\t\t\t\r\n\t\t\t<input type='file' (change)=\"onSelectFile($event)\">\r\n\t\t\t\r\n\t\t\t<h3>Cena oglasa</h3>\r\n\t\t\t<input #cenaOglasa type=\"number\">\r\n\t\t\t<h3>Datum isteka oglasa</h3>\r\n\t\t\t<input #datumOglasa type=\"date\">\r\n\t\t\t<button (click)=\"postaviOglas(nazivOglasa.value,opisOglasa.value,cenaOglasa.value,datumOglasa.value)\">Postavi oglas</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/fanpage/fanpage.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var rekviziti_service_1 = __webpack_require__("./src/app/rekviziti.service.ts");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
var upload_file_service_1 = __webpack_require__("./src/app/upload-file.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var FanpageComponent = /** @class */ (function () {
    function FanpageComponent(_rekvizitiService, _userService, _uploadService) {
        this._rekvizitiService = _rekvizitiService;
        this._userService = _userService;
        this._uploadService = _uploadService;
        this.zvanicniRekviziti = null;
        this.oglasi = null;
        this.oglasiKorisnika = null;
        this.user = "vlada";
        this.state = "zvanicni";
    }
    FanpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._rekvizitiService.getZvanicniRekviziti().subscribe(function (data) { return _this.zvanicniRekviziti = data; });
        this._rekvizitiService.getPolovniRekviziti().subscribe(function (data) { return _this.oglasi = data; });
        this._uploadService.getFiles().subscribe(function (data) { return _this.fileUploads = data; });
        console.log('fileUploads:');
        console.log(this.fileUploads);
        //        this._rekvizitiService.getAktivniOglasi(this.user).subscribe(data => this.oglasiKorisnika = data);
        //this._userService.getUser().subscribe(data => this.user = data);
    };
    FanpageComponent.prototype.zvanicnaProdavnica = function () {
        var _this = this;
        this.state = "zvanicni";
        this._uploadService.getFiles().subscribe(function (data) { return _this.fileUploads = data; });
    };
    FanpageComponent.prototype.polovniOglasi = function () {
        this.state = "oglasi";
    };
    FanpageComponent.prototype.noviOglas = function () {
        this.state = "noviOglas";
    };
    FanpageComponent.prototype.aktivniOglasi = function () {
        this.state = "aktivniOglasi";
    };
    FanpageComponent.prototype.postaviOglas = function (nazivOglasa, opisOglasa, cenaOglasa, datumOglasa) {
        var _this = this;
        var slikaOglasa = "testSlikeValjda";
        console.log('postavljen oglas :');
        console.log(nazivOglasa, opisOglasa, slikaOglasa, cenaOglasa, datumOglasa);
        this._rekvizitiService.posaljiOglasNaProveru(nazivOglasa, opisOglasa, slikaOglasa, cenaOglasa, this.user, datumOglasa);
        this.currentFileUpload = this.selectedFiles.item(0);
        this._uploadService.pushFileToStorage(this.currentFileUpload).subscribe(function (event) {
            if (event instanceof http_1.HttpResponse) {
                console.log('File is completely uploaded!');
            }
        });
        this.selectedFiles = undefined;
        this._uploadService.getFiles().subscribe(function (data) { return _this.fileUploads = data; });
        this.state = "zvanicni";
    };
    FanpageComponent.prototype.onSelectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    FanpageComponent.prototype.isImage = function (r, file) {
        console.log(r);
        console.log(file);
        return file.includes(r);
    };
    FanpageComponent = __decorate([
        core_1.Component({
            selector: 'app-fanpage',
            template: __webpack_require__("./src/app/fanpage/fanpage.component.html"),
            styles: [__webpack_require__("./src/app/fanpage/fanpage.component.css")]
        }),
        __metadata("design:paramtypes", [rekviziti_service_1.RekvizitiService,
            user_service_service_1.UserServiceService,
            upload_file_service_1.UploadFileService])
    ], FanpageComponent);
    return FanpageComponent;
}());
exports.FanpageComponent = FanpageComponent;


/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<button routerLink=\"/homepage\">Home</button>\r\n</div>\r\n\r\n<nav>\r\n\t<div *ngIf=\"isLoggedIn() then userpagebutton; else loginpagebutton;\"></div>\r\n\t<ng-template #loginpagebutton>\r\n\t\t<a routerLink=\"/login\">Login</a>\r\n\t</ng-template>\r\n\t<ng-template #userpagebutton>\r\n\t\t<strong><a routerLink=\"/users/{{getUsername()}}\">{{getUsername()}} </a></strong>\r\n\t\t<a routerLink=\"/logout\">Logout</a>\r\n\r\n\t</ng-template>\r\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_userService) {
        this._userService = _userService;
        this.user = null;
        this.loggedIn = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUser().subscribe(function (data) { return _this.user = data; });
    };
    HeaderComponent.prototype.isLoggedIn = function () {
        return this._userService.getLoggedIn();
    };
    HeaderComponent.prototype.getUsername = function () {
        return this._userService.getUsername();
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_service_1.UserServiceService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\r\n\t<div *ngIf=\"isLoggedIn() then userpagebutton; else loginpagebutton;\"></div>\r\n\t<ng-template #loginpagebutton>\r\n\t\t<!--  <a routerLink=\"/login\">Login</a> -->\r\n\t</ng-template>\r\n\t<ng-template #userpagebutton>\r\n\t\t<a routerLink=\"/userpage\">Userpage</a>\r\n\t\t{{user.username}}\r\n\t</ng-template>\r\n</nav>\r\n\r\n<nav>\r\n\t<a routerLink=\"/cinemas\">Cinemas</a>\r\n\t<a routerLink=\"/theatres\">Theatres</a>\r\n</nav>\r\n\r\n<nav>\r\n\t<a routerLink=\"/fanpage\">Fanpage</a>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(_userService) {
        this._userService = _userService;
        // public user = '{"name":"vlada"}';
        this.user = null;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUser().subscribe(function (data) { return _this.user = data; });
    };
    HomepageComponent.prototype.isLoggedIn = function () {
        return this._userService.getLoggedIn();
    };
    HomepageComponent = __decorate([
        core_1.Component({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_service_1.UserServiceService])
    ], HomepageComponent);
    return HomepageComponent;
}());
exports.HomepageComponent = HomepageComponent;


/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);\r\n*:focus {\r\n  outline: none;\r\n}\r\n#login-box {\r\n    margin: auto;\r\n      width: 50%;\r\n\r\n  height: 880px;\r\n  background: #FFF;\r\n\r\n}\r\nh1 {\r\n  margin: 0 0 20px 0;\r\n  font-weight: 300;\r\n  font-size: 28px;\r\n}\r\ninput[type=\"text\"],\r\ninput[type=\"password\"] {\r\n  display: block;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  margin-bottom: 20px;\r\n  padding: 4px;\r\n  width: 220px;\r\n  height: 32px;\r\n  border: none;\r\n  border-bottom: 1px solid #AAA;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  -webkit-transition: 0.2s ease;\r\n  transition: 0.2s ease;\r\n}\r\ninput[type=\"text\"]:focus,\r\ninput[type=\"password\"]:focus {\r\n  border-bottom: 2px solid #16a085;\r\n  color: #16a085;\r\n  -webkit-transition: 0.2s ease;\r\n  transition: 0.2s ease;\r\n}\r\ninput[type=\"submit\"] {\r\n  margin-top: 28px;\r\n  width: 120px;\r\n  height: 32px;\r\n  background: #16a085;\r\n  border: none;\r\n  border-radius: 2px;\r\n  color: #FFF;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 500;\r\n  text-transform: uppercase;\r\n  -webkit-transition: 0.1s ease;\r\n  transition: 0.1s ease;\r\n  cursor: pointer;\r\n}\r\ninput[type=\"submit\"]:hover,\r\ninput[type=\"submit\"]:focus {\r\n  opacity: 0.8;\r\n  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\r\n          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\r\n  -webkit-transition: 0.1s ease;\r\n  transition: 0.1s ease;\r\n}\r\ninput[type=\"submit\"]:active {\r\n  opacity: 1;\r\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\r\n          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\r\n  -webkit-transition: 0.1s ease;\r\n  transition: 0.1s ease;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n\r\n\t<form (submit)=\"loginUser($event)\">\r\n\t  <div class=\"container\">\r\n\r\n\r\n\r\n\r\n\t    <div id=\"login-box\">\r\n\t     <div class=\"left\">\r\n\t       <h1>Sign in</h1>\r\n\r\n\t       <label for=\"email\"><b>Username</b></label>\r\n\t       <input type=\"text\" placeholder=\"Enter Username\" name=\"email\" required><br>\r\n\r\n\t       <label for=\"psw\"><b>Password</b></label>\r\n\t       <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required><br>\r\n\r\n\r\n\t\t   <input type=\"submit\" name=\"signup_submit\" value=\"Sign in\" />\r\n\t\t   <br><br><br>\r\n\t\t   <br> <br>\r\n\t\t   Don't have an account?\r\n\t\t   <button routerLink=\"/register\">Register</button>\r\n\t\t\t</div>\r\n\r\n\r\n\t   </div>\r\n\r\n\t  </div>\r\n\t</form>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, http, _userService) {
        this.router = router;
        this.http = http;
        this._userService = _userService;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.loginUser = function (e) {
        var _this = this;
        e.preventDefault();
        var email = e.target.elements[0].value;
        var password = e.target.elements[1].value;
        var user = {
            email: email,
            password: password
        };
        //console.log(email,password);
        this.http.post('/login', user).subscribe(function (data) {
            //if(data['email'] != ''){
            if (data != null) {
                console.log(data);
                _this._userService.setLoggedIn();
                _this.router.navigate(['userpage']);
                _this._userService.email = data['email'];
                _this._userService.friends = data['friends'];
                _this._userService.name = data['name'];
                _this._userService.lastname = data['lastname'];
                _this._userService.city = data['city'];
                _this._userService.phoneNumber = data['phoneNumber'];
                _this._userService.username = data['username'];
                _this._userService.utype = data['type'];
                _this._userService.setUser(data);
            }
        });
        return false;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            http_1.HttpClient,
            user_service_service_1.UserServiceService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/logout/logout.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(router, http, _userService) {
        this.router = router;
        this.http = http;
        this._userService = _userService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this._userService.logout();
        this.router.navigate(['login']);
    };
    LogoutComponent = __decorate([
        core_1.Component({
            selector: 'app-logout',
            template: __webpack_require__("./src/app/logout/logout.component.html"),
            styles: [__webpack_require__("./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            http_1.HttpClient,
            user_service_service_1.UserServiceService])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;


/***/ }),

/***/ "./src/app/oglas/oglas.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/oglas/oglas.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t{{oglas.naziv}}<br>\r\n\t{{oglas.opis}}<br>\r\n\t{{oglas.slika}}<br>\r\n\t{{oglas.cena}}<br>\r\n\t{{oglas.username}}<br>\r\n\t{{oglas.datumIsteka}}<br>\r\n\t<button>Daj ponudu</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/oglas/oglas.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var OglasComponent = /** @class */ (function () {
    function OglasComponent() {
    }
    OglasComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input('oglas'),
        __metadata("design:type", Object)
    ], OglasComponent.prototype, "oglas", void 0);
    OglasComponent = __decorate([
        core_1.Component({
            selector: 'app-oglas',
            template: __webpack_require__("./src/app/oglas/oglas.component.html"),
            styles: [__webpack_require__("./src/app/oglas/oglas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OglasComponent);
    return OglasComponent;
}());
exports.OglasComponent = OglasComponent;


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>\n\tPage Not Found!\n</h3>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        core_1.Component({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;


/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);\r\n*:focus {\r\n  outline: none;\r\n}\r\n#login-box {\r\n    margin: auto;\r\n      width: 50%;\r\n\r\n  height: 880px;\r\n  background: #FFF;\r\n\r\n}\r\nh1 {\r\n  margin: 0 0 20px 0;\r\n  font-weight: 300;\r\n  font-size: 28px;\r\n}\r\ninput[type=\"text\"],\r\ninput[type=\"password\"] {\r\n  display: block;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  margin-bottom: 20px;\r\n  padding: 4px;\r\n  width: 220px;\r\n  height: 32px;\r\n  border: none;\r\n  border-bottom: 1px solid #AAA;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  -webkit-transition: 0.2s ease;\r\n  transition: 0.2s ease;\r\n}\r\ninput[type=\"text\"]:focus,\r\ninput[type=\"password\"]:focus {\r\n  border-bottom: 2px solid #16a085;\r\n  color: #16a085;\r\n  -webkit-transition: 0.2s ease;\r\n  transition: 0.2s ease;\r\n}\r\ninput[type=\"submit\"] {\r\n  margin-top: 28px;\r\n  width: 120px;\r\n  height: 32px;\r\n  background: #16a085;\r\n  border: none;\r\n  border-radius: 2px;\r\n  color: #FFF;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 500;\r\n  text-transform: uppercase;\r\n  -webkit-transition: 0.1s ease;\r\n  transition: 0.1s ease;\r\n  cursor: pointer;\r\n}\r\ninput[type=\"submit\"]:hover,\r\ninput[type=\"submit\"]:focus {\r\n  opacity: 0.8;\r\n  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\r\n          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\r\n  -webkit-transition: 0.1s ease;\r\n  transition: 0.1s ease;\r\n}\r\ninput[type=\"submit\"]:active {\r\n  opacity: 1;\r\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\r\n          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\r\n  -webkit-transition: 0.1s ease;\r\n  transition: 0.1s ease;\r\n}\r\nbutton {\r\n\t opacity: 1;\r\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\r\n          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\r\n  -webkit-transition: 0.1s ease;\r\n  transition: 0.1s ease;\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form  (submit)=\"register($event)\">\r\n  <div class=\"container\">\r\n\r\n    <div id=\"login-box\">\r\n     <div class=\"left\">\r\n       <h1>Sign up</h1>\r\n\r\n       <label for=\"email\"><b>Email</b></label>\r\n       <input type=\"text\" placeholder=\"Enter Email\" name=\"email\" required><br>\r\n\r\n       <label for=\"username\"><b>Username - Used as url to your profile</b></label>\r\n       <input type=\"text\" placeholder=\"Enter username\" name=\"username\" required><br>\r\n\r\n       <label for=\"psw\"><b>Password</b></label>\r\n       <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required><br>\r\n\r\n       <label for=\"psw-repeat\"><b>Repeat Password</b></label>\r\n       <input type=\"password\" placeholder=\"Repeat Password\" name=\"psw-repeat\" required><br>\r\n\r\n       <label for=\"name\"><b>First Name</b></label>\r\n       <input type=\"text\" placeholder=\"Enter your first name\" name=\"name\" required><br>\r\n\r\n       <label for=\"lastname\"><b>Last Name</b></label>\r\n       <input type=\"text\" placeholder=\"Enter your last name\" name=\"lastname\" required><br>\r\n\r\n       <label for=\"city\"><b>City</b></label>\r\n       <input type=\"text\" placeholder=\"Enter your city\" name=\"city\" required><br>\r\n\r\n       <label for=\"phone\"><b>Phone Number</b></label>\r\n       <input type=\"text\" placeholder=\"Enter your phone number\" name=\"phoneNumber\" required><br>\r\n\r\n       <input type=\"submit\" name=\"signup_submit\" value=\"Sign up\" />\r\n     </div>\r\n\r\n   </div>\r\n\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, http, _userService) {
        this.router = router;
        this.http = http;
        this._userService = _userService;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.register = function (e) {
        var _this = this;
        e.preventDefault();
        if (!isNaN(parseFloat(e.target.elements[7].value)) && isFinite(e.target.elements[7].value)) {
            var email = e.target.elements[0].value;
            var username = e.target.elements[1].value;
            var password = e.target.elements[2].value;
            var password_repeat = e.target.elements[3].value;
            var name = e.target.elements[4].value;
            var lname = e.target.elements[5].value;
            var city = e.target.elements[6].value;
            var phoneNumber = e.target.elements[7].value;
            var new_user = {
                email: email,
                password: password,
                password_repeat: password_repeat,
                name: name,
                lastname: lname,
                city: city,
                phoneNumber: phoneNumber,
                username: username
            };
            this.http.post('/register', new_user).subscribe(function (data) {
                _this.router.navigate(['activation']);
            });
        }
        return false;
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            http_1.HttpClient,
            user_service_service_1.UserServiceService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "./src/app/rekvizit/rekvizit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/rekvizit/rekvizit.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<h3>Naziv: </h3>\r\n\t{{rekvizit.naziv}}<br>\r\n\t<h3>Opis: </h3>\r\n\t{{rekvizit.opis}}<br>\r\n\t<img src=\"{{fileUpload}}\" alt=\"{{fileUpload}}\" style=\"max-width:350px\" />\r\n\t<h3>Cena: </h3>\r\n\t{{rekvizit.cena}}<br>\r\n\t<button (click)=\"rezervisiZvanicni()\">Rezervisi</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/rekvizit/rekvizit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var rekviziti_service_1 = __webpack_require__("./src/app/rekviziti.service.ts");
var RekvizitComponent = /** @class */ (function () {
    function RekvizitComponent(_rekvizitiService) {
        this._rekvizitiService = _rekvizitiService;
    }
    RekvizitComponent.prototype.ngOnInit = function () {
    };
    RekvizitComponent.prototype.rezervisiZvanicni = function () {
        this._rekvizitiService.rezervisiZvanicniRekvizit(this.rekvizit.naziv, this.username);
    };
    __decorate([
        core_1.Input('rekvizit'),
        __metadata("design:type", Object)
    ], RekvizitComponent.prototype, "rekvizit", void 0);
    __decorate([
        core_1.Input('username'),
        __metadata("design:type", Object)
    ], RekvizitComponent.prototype, "username", void 0);
    __decorate([
        core_1.Input('fileUpload'),
        __metadata("design:type", String)
    ], RekvizitComponent.prototype, "fileUpload", void 0);
    RekvizitComponent = __decorate([
        core_1.Component({
            selector: 'app-rekvizit',
            template: __webpack_require__("./src/app/rekvizit/rekvizit.component.html"),
            styles: [__webpack_require__("./src/app/rekvizit/rekvizit.component.css")]
        }),
        __metadata("design:paramtypes", [rekviziti_service_1.RekvizitiService])
    ], RekvizitComponent);
    return RekvizitComponent;
}());
exports.RekvizitComponent = RekvizitComponent;


/***/ }),

/***/ "./src/app/rekviziti.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var RekvizitiService = /** @class */ (function () {
    function RekvizitiService(http) {
        this.http = http;
    }
    RekvizitiService.prototype.getZvanicniRekviziti = function () {
        return this.http.get('/getZvanicniRekviziti');
    };
    RekvizitiService.prototype.getPolovniRekviziti = function () {
        return this.http.get('/getPolovniRekviziti');
    };
    //  getAktivniOglasi(user): Observable<IPolovniRekvizit[]>{
    //      return this.http.post<IPolovniRekvizit[]>('/getAktivniOglasi',user);
    //  }  
    RekvizitiService.prototype.rezervisiZvanicniRekvizit = function (imeRekvizita, imeKorisnika) {
        var rezervacijaRekvizita = {
            imeRekvizita: imeRekvizita,
            imeKorisnika: imeKorisnika
        };
        this.http.post('/rezervisiZvanicniRekvizit', rezervacijaRekvizita).subscribe(function (data) { });
    };
    RekvizitiService.prototype.posaljiOglasNaProveru = function (nazivOglasa, opisOglasa, slikaOglasa, cenaOglasa, username, datumOglasa) {
        var oglasZaProveru = {
            naziv: nazivOglasa,
            opis: opisOglasa,
            slika: slikaOglasa,
            cena: cenaOglasa,
            username: username,
            datumIsteka: datumOglasa
        };
        this.http.post('/posaljiOglasNaProveru', oglasZaProveru).subscribe(function (data) { });
    };
    RekvizitiService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], RekvizitiService);
    return RekvizitiService;
}());
exports.RekvizitiService = RekvizitiService;


/***/ }),

/***/ "./src/app/rezervacija/rezervacija.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/rezervacija/rezervacija.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  rezervacija works!\n</p>\n"

/***/ }),

/***/ "./src/app/rezervacija/rezervacija.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var RezervacijaComponent = /** @class */ (function () {
    function RezervacijaComponent() {
    }
    RezervacijaComponent.prototype.ngOnInit = function () {
    };
    RezervacijaComponent = __decorate([
        core_1.Component({
            selector: 'app-rezervacija',
            template: __webpack_require__("./src/app/rezervacija/rezervacija.component.html"),
            styles: [__webpack_require__("./src/app/rezervacija/rezervacija.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RezervacijaComponent);
    return RezervacijaComponent;
}());
exports.RezervacijaComponent = RezervacijaComponent;


/***/ }),

/***/ "./src/app/theatres/theatres.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theatres/theatres.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  theatres works!\n</p>\n"

/***/ }),

/***/ "./src/app/theatres/theatres.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var TheatresComponent = /** @class */ (function () {
    function TheatresComponent() {
    }
    TheatresComponent.prototype.ngOnInit = function () {
    };
    TheatresComponent = __decorate([
        core_1.Component({
            selector: 'app-theatres',
            template: __webpack_require__("./src/app/theatres/theatres.component.html"),
            styles: [__webpack_require__("./src/app/theatres/theatres.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TheatresComponent);
    return TheatresComponent;
}());
exports.TheatresComponent = TheatresComponent;


/***/ }),

/***/ "./src/app/update-user/update-user.component.html":
/***/ (function(module, exports) {

module.exports = "<form  (submit)=\"update($event)\">\n  <div class=\"container\">\n\n    <div id=\"login-box\">\n     <div class=\"left\">\n       <h2>Enter details you want to change</h2>\n\n       <label for=\"email\"><b>Email:{{email}}</b></label>\n       <input type=\"text\" placeholder=\"Enter new Email\" name=\"email\"><br>\n\n       <label for=\"psw\"><b>New password</b></label>\n       <input type=\"password\" placeholder=\"Enter new Password\" name=\"psw\"><br>\n\n       <label for=\"psw-repeat\"><b>Confirm new Password</b></label>\n       <input type=\"password\" placeholder=\"Enter new Password again\" name=\"psw-repeat\" ><br>\n\n       <label for=\"name\"><b>First Name: {{name}}</b></label>\n       <input type=\"text\" placeholder=\"Enter your first name\" name=\"name\"><br>\n\n       <label for=\"lastname\"><b>Last Name: {{lastname}}</b></label>\n       <input type=\"text\" placeholder=\"Enter your last name\" name=\"lastname\"><br>\n\n       <label for=\"city\"><b>City:{{city}}</b></label>\n       <input type=\"text\" placeholder=\"Enter your new city\" name=\"city\"><br>\n\n       <label for=\"phone\"><b>Phone Number:{{phoneNumber}}</b></label>\n       <input type=\"text\" placeholder=\"Enter new phone number\" name=\"phoneNumber\"><br>\n\n       <input type=\"submit\" name=\"update_submit\" value=\"Update details\" />\n     </div>\n\n   </div>\n\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/update-user/update-user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
var UpdateUserComponent = /** @class */ (function () {
    function UpdateUserComponent(router, http, user) {
        this.router = router;
        this.http = http;
        this.user = user;
        this.loggedInEmail = this.user.email;
    }
    UpdateUserComponent.prototype.ngOnInit = function () {
    };
    // get email():string {
    //   return this.user.email;
    // }
    UpdateUserComponent.prototype.update = function (e) {
        var _this = this;
        e.preventDefault();
        console.log("email je:");
        console.log(this.loggedInEmail);
        if (window.confirm('Are sure you want to save changes ?')) {
            alert('updating info');
            var email = e.target.elements[0].value;
            var password = e.target.elements[1].value;
            var password_repeat = e.target.elements[2].value;
            var name = e.target.elements[3].value;
            var lastname = e.target.elements[4].value;
            var city = e.target.elements[5].value;
            //if(!isNaN(parseFloat(e.target.elements[6].value)) && isFinite(e.target.elements[6].value) ){
            var phoneNumber = e.target.elements[6].value;
            //}
            var updated_user = {
                loggedInEmail: this.loggedInEmail,
                email: email,
                password: password,
                password_repeat: password_repeat,
                name: name,
                lastname: lastname,
                city: city,
                phoneNumber: phoneNumber
            };
            this.http.post('/updateUser', updated_user).subscribe(function (data) {
                _this.user.email = data['email'];
                _this.router.navigate(['userprofile']);
            });
        }
    };
    UpdateUserComponent = __decorate([
        core_1.Component({
            selector: 'app-update-user',
            template: __webpack_require__("./src/app/update-user/update-user.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            http_1.HttpClient,
            user_service_service_1.UserServiceService])
    ], UpdateUserComponent);
    return UpdateUserComponent;
}());
exports.UpdateUserComponent = UpdateUserComponent;


/***/ }),

/***/ "./src/app/upload-file.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var UploadFileService = /** @class */ (function () {
    function UploadFileService(http) {
        this.http = http;
    }
    UploadFileService.prototype.pushFileToStorage = function (file) {
        var formdata = new FormData();
        formdata.append('file', file);
        var req = new http_1.HttpRequest('POST', '/post', formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req);
    };
    UploadFileService.prototype.getFiles = function () {
        return this.http.get('/getallfiles');
    };
    UploadFileService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UploadFileService);
    return UploadFileService;
}());
exports.UploadFileService = UploadFileService;


/***/ }),

/***/ "./src/app/user-service.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var UserServiceService = /** @class */ (function () {
    function UserServiceService(http) {
        this.http = http;
        this.friends = [];
        this._isLoggedIn = new rxjs_1.BehaviorSubject(false);
        this.loggedIn = false;
    }
    UserServiceService.prototype.setLoggedIn = function () {
        this.loggedIn = true;
    };
    UserServiceService.prototype.getLoggedIn = function () {
        return this.loggedIn;
    };
    UserServiceService.prototype.getUsername = function () {
        return this.username;
    };
    UserServiceService.prototype.logout = function () {
        this.loggedIn = false;
    };
    UserServiceService.prototype.getUser = function () {
        return this.user;
    };
    UserServiceService.prototype.setUser = function (data) {
        this.user = data; //this.http.get<IUser>('/getDetailsByUsername/'+this.username);
        this.loggedIn = true;
        console.log('user set', this.user.username);
    };
    UserServiceService.prototype.getEmail = function () {
        return this.email;
    };
    UserServiceService.prototype.getFriends = function () {
        return this.friends;
    };
    UserServiceService.prototype.getName = function () {
        return this.name;
    };
    UserServiceService.prototype.getLastname = function () {
        return this.lastname;
    };
    UserServiceService.prototype.getCity = function () {
        return this.city;
    };
    UserServiceService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserServiceService);
    return UserServiceService;
}());
exports.UserServiceService = UserServiceService;


/***/ }),

/***/ "./src/app/userpage/userpage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/userpage/userpage.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\r\n\t<a routerLink=\"/cinemas\">Cinemas</a>\r\n\t<a routerLink=\"/theatres\">Theatres</a>\r\n    <a routerLink=\"/users/{{getUsername()}}\">My Profile</a>\r\n</nav>\r\n\r\n<hr>\r\n\r\n<div [ngSwitch]=\"what\">\r\n\r\n\r\n\r\n\r\n\r\n<button (click)=\"istorija()\">History</button>\r\n<button (click)=\"friends_button()\">My Friends</button>\r\n<button (click)=\"lista_rezervacija()\">Reservations</button>\r\n\r\n<div *ngSwitchCase=\"'history'\">\r\n\r\n<div>\r\n <h3> Istorija poseta pozorista i bioskopa: </h3>\r\n  <ul>\r\n  <li *ngFor=\"let visit of visits\">\r\n      {{visit}}\r\n  </li>\r\n</ul>\r\n</div>\r\n\r\n</div>\r\n\r\n<div *ngSwitchCase=\"'friends'\">\r\n\r\n<h3>My friends</h3>\r\n<button (click)=\"sortByName($event)\"  >Sort by name</button>\r\n<button (click)=\"sortByLastname($event)\" >Sort by lastname</button>\r\n<a routerLink=\"/users/{{getUsername()}}\">See all options</a>\r\n<ol>\r\n  <li *ngFor=\"let friend of my_friends_list\">\r\n  <a routerLink=\"/users/{{friend.username}}\">{{friend.email}}, {{friend.name}}, {{friend.lastname}}</a>\r\n<button (click)=\"removeFriend($event)\" name={{friend.email}}  >Remove</button>\r\n  </li>\r\n  </ol>\r\n</div>\r\n\r\n\r\n<div *ngSwitchCase=\"'reservations'\">\r\n\r\n<h3>My reservations</h3>\r\n\r\n</div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/userpage/userpage.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var UserpageComponent = /** @class */ (function () {
    function UserpageComponent(user, http, route) {
        // this.friends = user.friends;
        this.user = user;
        this.http = http;
        this.route = route;
    }
    Object.defineProperty(UserpageComponent.prototype, "email", {
        get: function () {
            return this.user.email;
        },
        set: function (value) {
            this.user.email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserpageComponent.prototype, "friends", {
        get: function () {
            return this.user.friends;
        },
        set: function (value) {
            this.user.friends = value;
        },
        enumerable: true,
        configurable: true
    });
    UserpageComponent.prototype.getUsername = function () {
        return this.user.getUsername();
    };
    UserpageComponent.prototype.ngOnInit = function () {
        console.log('user set on userpage', this.user.getUser());
        this.my_friends();
    };
    UserpageComponent.prototype.friends_button = function () {
        this.what = 'friends';
    };
    UserpageComponent.prototype.istorija = function () {
        this.what = 'history';
    };
    UserpageComponent.prototype.lista_rezervacija = function () {
        this.what = 'rezervations';
    };
    UserpageComponent.prototype.my_friends = function () {
        var _this = this;
        this.http.get('/find_my_friends/' + this.user.email).subscribe(function (data) {
            if (data != null) {
                console.log('1 ', data);
                _this.my_friends_list = data;
            }
        });
    };
    UserpageComponent.prototype.removeFriend = function (event) {
        var _this = this;
        console.log(event.target.name);
        this.http.get('/removeFriend/' + this.user.email + "/" + event.target.name).subscribe(function (data) {
            _this.my_friends();
        });
        return false;
    };
    UserpageComponent.prototype.sortByName = function () {
        var _this = this;
        this.http.get('/sortByName/' + this.user.email).subscribe(function (data) {
            if (data != null) {
                console.log('sort by name ', data);
                _this.my_friends_list = data;
            }
        });
    };
    UserpageComponent.prototype.sortByLastname = function () {
        var _this = this;
        this.http.get('/sortByLastname/' + this.user.email).subscribe(function (data) {
            if (data != null) {
                console.log('sort by lastname ', data);
                _this.my_friends_list = data;
            }
        });
    };
    UserpageComponent = __decorate([
        core_1.Component({
            selector: 'app-userpage',
            template: __webpack_require__("./src/app/userpage/userpage.component.html"),
            styles: [__webpack_require__("./src/app/userpage/userpage.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_service_1.UserServiceService,
            http_1.HttpClient,
            router_1.ActivatedRoute])
    ], UserpageComponent);
    return UserpageComponent;
}());
exports.UserpageComponent = UserpageComponent;


/***/ }),

/***/ "./src/app/userprofile/userprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"whose\">\r\n\r\n<div *ngSwitchCase=\"'mine'\">\r\n\r\n\r\n<div [ngSwitch]=\"current\">\r\n\t<button (click)=\"details()\">My Details</button>\r\n\t<button (click)=\"my_friends()\">My Friends</button>\r\n\t<button (click)=\"pending_friend_requests()\">Friend Requests</button>\r\n\t<button (click)=\"find_friends_div()\">Find new friends</button>\r\n\t\r\n\t<div *ngSwitchCase=\"'details'\">\r\n\t\t <h3>{{name}}'s details:</h3>\r\n\t\t<ul>\r\n\t\t    <li>{{email}}</li>\r\n\t\t    <li>{{name}}</li>\r\n\t\t    <li>{{lastname}}</li>\r\n\t\t    <li>{{city}}</li>\r\n\t\t    <li>{{phoneNumber}}</li>\r\n\t\t</ul>\r\n\t\t\r\n\t\t<a routerLink=\"/update-user\">Update my details</a>\r\n\t</div>\r\n\r\n\t\r\n\t\r\n\t\r\n\t<div *ngSwitchCase=\"'my_friends'\">\r\n\r\n\t\t<h3>My friends</h3>\r\n\t\t <ol>\r\n\t\t   <li *ngFor=\"let friend of my_friends_list\">\r\n\t\t   <a routerLink=\"/users/{{friend.username}}\">{{friend.email}}, {{friend.name}}, {{friend.lastname}}</a>\r\n\t\t\t<button (click)=\"removeFriend($event)\" name={{friend.email}}  >Remove</button>\r\n    \t    </li>\r\n    \t    </ol>\r\n\t</div>\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<div *ngSwitchCase=\"'pending_friend_requests'\">\r\n\t \r\n\t\t<h3>Requests</h3>\r\n\t\t <ol>\r\n\t\t   <li *ngFor=\"let friend of pending_friends_requests\">\r\n\t\t   <a routerLink=\"/userprofile\">{{friend}}</a>\r\n\t\t   <button (click)=\"acceptFR($event)\" name={{friend}}  >Accept</button>\r\n\t\t  \t <button (click)=\"declineFR($event)\" name={{friend}}  >Decline</button>\r\n\t                \r\n\t\t\t\t\t\r\n    \t    </li>\r\n    \t    </ol>\r\n    \t    \r\n\t</div>\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<div *ngSwitchCase=\"'find_friends'\">\r\n\t\t<h3>Find new friends</h3>\r\n\t\tSearch friends by their name, last name, or both:<br>\r\n\t    <form (submit)=\"find_friends($event)\">\r\n\t\tName:<input type=\"text\" placeholder=\"Enter Name\" name=\"name\" />\r\n\t    Lastname:<input type=\"text\" placeholder=\"Enter Lastname\" name=\"lastname\" />\r\n\t\t<input type=\"submit\" name=\"find_friends\" value=\"Find\" />\r\n\t    </form>\r\n\t</div>\r\n\r\n\r\n\t<div *ngSwitchCase=\"'friends_results'\">\r\n\r\n        \r\n    \t    <h4>Search results:</h4>\r\n    \t    \r\n    \t    <ol>\r\n\r\n    \t    <li *ngFor=\"let friend of found_friends_list\">\r\n    \t    <a routerLink=\"/users/{{friend[1]}}\">{{friend[0]}}, {{friend[3]}}, {{friend[4]}}</a>\r\n    \t        \r\n    \t        \t\r\n    \t        \t\r\n\t                <div *ngIf=\"friend[2]== 'ne';  then if1condition\"></div>\r\n\t                 <div *ngIf=\"friend[2]== 'poslat';  then if2condition\"></div>   \r\n\t               <div *ngIf=\"friend[2]== 'vec';  then if3condition\"></div>\r\n\t                <div *ngIf=\"friend[2]== 'primljen';  then if4condition\"></div>\r\n\t                <ng-template #if1condition><button (click)=\"add_friend($event)\"   name={{friend[0]}}  >Add</button></ng-template>  \r\n\t\t\t\t\t<ng-template #if2condition><button (click)=\"cancelFR($event)\" name={{friend[0]}} >Cancel Request</button></ng-template> \r\n\t\t\t\t\t<ng-template #if3condition><button (click)=\"removeFriend($event)\"   name={{friend[0]}}  >Remove</button></ng-template>  \t\r\n\t\t\t\t\t<ng-template #if4condition><button (click)=\"declineFR($event)\"   name={{friend[0]}}  >Decline</button></ng-template>  \t\t\t\r\n    \t    \r\n    \t    </li>\r\n\r\n    \t    </ol>\r\n      \r\n\t</div>\r\n\r\n</div>\r\n</div>\r\n\r\n<div *ngSwitchCase=\"'other'\">\r\n\t <h3>{{name}}'s profile</h3>\r\n\t\t\r\n\t\t{{name}}'s details:\r\n\t\t<ul>\r\n\t\t    <li>{{email}}</li>\r\n\t\t    <li>{{name}}</li>\r\n\t\t    <li>{{lastname}}</li>\r\n\t\t    <li>{{city}}</li>\r\n\t\t    <li>{{phoneNumber}}</li>\r\n\t\t</ul>\r\n</div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_service_1 = __webpack_require__("./src/app/user-service.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var UserprofileComponent = /** @class */ (function () {
    function UserprofileComponent(user, http, route) {
        this.user = user;
        this.http = http;
        this.route = route;
        this.whose = "other";
        this.current = "details";
        this.found_friends = [];
        this.pending_friends_requests = [];
        this.friends = [];
        this.user_global = null;
        console.log('usaer je : ', this.user);
        console.log('route je : ', route.snapshot.params["username"]);
        this.ciji = route.snapshot.params["username"];
        if (this.user.username === this.route.snapshot.params.username) {
            this.whose = "mine";
        }
        else {
            this.whose = "other";
        }
        this.getDetailsByUsername();
    }
    UserprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.ciji = params['username'];
            if (_this.user.username === _this.route.snapshot.params.username) {
                _this.whose = "mine";
            }
            else {
                _this.whose = "other";
            }
            _this.getDetailsByUsername();
        });
    };
    UserprofileComponent.prototype.getDetailsByUsername = function () {
        var _this = this;
        this.http.get('/getDetailsByUsername/' + this.ciji).subscribe(function (data) {
            console.log('details: ', data);
            if (data != null) {
                _this.email = data['email'];
                _this.friends = data['friends'];
                _this.name = data['name'];
                _this.lastname = data['lastname'];
                _this.city = data['city'];
                _this.phoneNumber = data['phoneNumber'];
                _this.username = data['username'];
            }
        });
    };
    UserprofileComponent.prototype.details = function () {
        this.current = 'details';
    };
    UserprofileComponent.prototype.my_friends = function () {
        var _this = this;
        this.http.get('/find_my_friends/' + this.user.email).subscribe(function (data) {
            if (data != null) {
                _this.current = 'my_friends';
                console.log(data);
                _this.my_friends_list = data;
            }
        });
    };
    UserprofileComponent.prototype.find_friends_div = function () {
        this.current = 'find_friends';
    };
    UserprofileComponent.prototype.pending_friend_requests = function () {
        var _this = this;
        this.http.get('/pending_friend_requests/' + this.user.email).subscribe(function (data) {
            if (data != null) {
                _this.pending_friends_requests = data;
            }
        });
        this.current = 'pending_friend_requests';
    };
    //  get email():string {
    //    return this.user.email;
    //  }
    //  get city():string {
    //    return this.user.city;
    //  }
    //  get name():string {
    //    return this.user.name;
    //  }
    //  get lastname():string {
    //    return this.user.lastname;
    //  }
    //  get phoneNumber():number {
    //    return this.user.phoneNumber;
    //  }
    UserprofileComponent.prototype.setStateMine = function () {
        this.whose = "mine";
    };
    UserprofileComponent.prototype.setStateOther = function () {
        this.whose = "other";
    };
    UserprofileComponent.prototype.find_friends = function (e) {
        e.preventDefault();
        var name = e.target.elements[0].value;
        var lastname = e.target.elements[1].value;
        this.user_global = {
            name: name,
            lastname: lastname
        };
        this.findByUser(this.user_global);
        return false;
    };
    UserprofileComponent.prototype.findByUser = function (user) {
        var _this = this;
        console.log(this.user.email);
        this.http.post('/find_friends/' + this.user.email, user).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.found_friends_list = data;
                console.log(_this.found_friends_list);
            }
        });
        this.current = 'friends_results';
    };
    UserprofileComponent.prototype.add_friend = function (event) {
        var _this = this;
        console.log(event.target.name);
        this.http.get('/add_friend/' + this.user.email + "/" + event.target.name).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.found_friends_list = data;
                console.log(_this.found_friends_list);
            }
            _this.findByUser(_this.user_global);
        });
        return false;
    };
    UserprofileComponent.prototype.acceptFR = function (event) {
        var _this = this;
        console.log(event.target.name);
        this.http.get('/acceptFR/' + this.user.email + "/" + event.target.name).subscribe(function (data) {
            _this.pending_friend_requests();
        });
        return false;
    };
    UserprofileComponent.prototype.declineFR = function (event) {
        var _this = this;
        console.log(event.target.name);
        this.http.get('/declineFR/' + this.user.email + "/" + event.target.name).subscribe(function (data) {
            //this.my_friends();
            _this.pending_friend_requests();
        });
        return false;
    };
    UserprofileComponent.prototype.removeFriend = function (event) {
        var _this = this;
        console.log(event.target.name);
        this.http.get('/removeFriend/' + this.user.email + "/" + event.target.name).subscribe(function (data) {
            _this.my_friends();
        });
        return false;
    };
    UserprofileComponent.prototype.cancelFR = function (event) {
        var _this = this;
        console.log(event.target.name);
        this.http.get('/cancelFR/' + this.user.email + "/" + event.target.name).subscribe(function (data) {
            _this.findByUser(_this.user_global);
        });
        return false;
    };
    UserprofileComponent = __decorate([
        core_1.Component({
            selector: 'app-userprofile',
            template: __webpack_require__("./src/app/userprofile/userprofile.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_service_1.UserServiceService,
            http_1.HttpClient,
            router_1.ActivatedRoute])
    ], UserprofileComponent);
    return UserprofileComponent;
}());
exports.UserprofileComponent = UserprofileComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map