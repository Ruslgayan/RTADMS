(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "OpKh":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication-routing.module */ "ionX");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/login/login.component */ "bVY5");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/material/material.module */ "jAig");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/auth/auth.service */ "IHv7");
/* harmony import */ var _shared_services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/services/token-interceptor.service */ "TZWI");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");












class AuthenticationModule {
}
AuthenticationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthenticationModule });
AuthenticationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(); }, providers: [
        _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
            useClass: _shared_services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["TokenInterceptorService"],
            multi: true
        },
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__["CdkColumnDef"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _authentication_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthenticationRoutingModule"],
            _shared_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticationModule, { declarations: [_component_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _authentication_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthenticationRoutingModule"],
        _shared_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_component_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _authentication_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthenticationRoutingModule"],
                    _shared_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
                ],
                providers: [
                    _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                        useClass: _shared_services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["TokenInterceptorService"],
                        multi: true
                    },
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__["CdkColumnDef"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "bVY5":
/*!*******************************************************************!*\
  !*** ./src/app/authentication/component/login/login.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/config/commons.settings */ "b0uj");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/toaster.service */ "mAmA");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth/auth.service */ "IHv7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");













class LoginComponent {
    constructor(toasterService, authService, formBuilder, router, ngxUiLoaderService) {
        this.toasterService = toasterService;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.ngxUiLoaderService = ngxUiLoaderService;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
        });
        this.authService.getLoggedInStatus().subscribe((status) => {
            if (status.isAuthenticated) {
                // this.toasterService.showToaster('Correct credentials!', SETTINGS.TOASTER_MESSAGES.success);
                return this.router.navigate(['/home']);
            }
            this.toasterService.showToaster('Incorrect credentials!', _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].TOASTER_MESSAGES.error);
        });
    }
    onLogin() {
        // if (this.loginForm.invalid){
        //   this.toasterService.showToaster('Please Enter Your Username & Password!', SETTINGS.TOASTER_MESSAGES.error);
        // }
        const payload = this.loginForm.getRawValue();
        this.ngxUiLoaderService.start();
        this.authService.login(payload.username, payload.password);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 20, vars: 1, consts: [[1, "back"], [3, "formGroup"], [1, "login100-form-logo"], [1, "full-width-input"], ["matInput", "", "placeholder", "Username", "formControlName", "username"], ["matInput", "", "type", "password", "placeholder", "Password", "formControlName", "password"], ["mat-raised-button", "", "color", "primary", 2, "font-size", "24px", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Please provide a valid Username ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Please provide a valid password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]], styles: ["mat-card[_ngcontent-%COMP%] {\n  background-color: white;\n  opacity: 0.98;\n  width: 500px;\n  height: 500px;\n  text-align: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 22px;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n.back[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  background-image: url('back.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n  height: 100%;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n}\n\n.login100-form-logo[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #333333;\n  display: flex;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  background-color: #BBDEFB;\n  margin: 0 auto;\n  background-image: url('logo.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 80%;\n  position: relative;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vY29tcG9uZW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFLQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24vY29tcG9uZW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG9wYWNpdHk6IDAuOTg7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXJ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmJhY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uL3NyYy9pbWFnZXMvYmFjay5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ubG9naW4xMDAtZm9ybS1sb2dvIHtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJERUZCO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vLi4vc3JjL2ltYWdlcy9sb2dvLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogODAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }, { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"] }]; }, null); })();


/***/ }),

/***/ "ionX":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/login/login.component */ "bVY5");





const routes = [
    {
        path: '',
        component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
];
class AuthenticationRoutingModule {
}
AuthenticationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthenticationRoutingModule });
AuthenticationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthenticationRoutingModule_Factory(t) { return new (t || AuthenticationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module.js.map