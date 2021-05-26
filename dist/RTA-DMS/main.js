(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gayan/Project/Angular/RTA-DMS/src/main.ts */"zUnb");


/***/ }),

/***/ "0Pcf":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/config/commons.settings */ "b0uj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_services_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/file.service */ "CrrK");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _shared_services_document_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/document.service */ "gmvE");
/* harmony import */ var _shared_services_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/client.service */ "oR8h");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "mAmA");
/* harmony import */ var _authentication_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../authentication/service/auth/auth.service */ "IHv7");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/user.service */ "kmKP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "FKr1");




















function HomeComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", company_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r4);
} }
function HomeComponent_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", year_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](year_r5);
} }
function HomeComponent_mat_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", report_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r6);
} }
function HomeComponent_table_61_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_table_61_tr_14_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const document_r8 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.downloadFileTest(document_r8.documentName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "save_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Download ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const document_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](document_r8.financialYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](document_r8.reportType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](document_r8.documentName);
} }
function HomeComponent_table_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Financial Year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Report Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_table_61_tr_14_Template, 14, 4, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.documents);
} }
class HomeComponent {
    constructor(fb, fileService, ngxUiLoaderService, documentService, clientService, toasterService, authService, userService, router) {
        this.fb = fb;
        this.fileService = fileService;
        this.ngxUiLoaderService = ngxUiLoaderService;
        this.documentService = documentService;
        this.clientService = clientService;
        this.toasterService = toasterService;
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.files = [];
        // @ts-ignore
        this.findDocForm = this.fb.group({
            tin: [''],
            companyName: [''],
            financialYear: [''],
            reportType: ['']
        });
        // @ts-ignore
        this.changePasswordForm = this.fb.group({
            oldPassword: [''],
            newPassword: [''],
            password: ['']
        });
    }
    ngOnInit() {
        this.fileService.onDownloadLinkChange.
            subscribe(resp => {
            const blob = new Blob([resp.data]);
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            document.body.appendChild(a);
            a.setAttribute('style', 'display: none');
            a.href = url;
            a.download = resp.fileName;
            a.click();
            this.ngxUiLoaderService.stop();
            window.URL.revokeObjectURL(url);
            a.remove();
        });
        this.companyList();
        this.yearList();
        this.reportList();
    }
    // tslint:disable-next-line:typedef
    yearList() {
        this.documentService.getFinancialYearList().subscribe((listYears) => this.years = listYears, error => console.log('Cannot get year list'));
    }
    // tslint:disable-next-line:typedef
    companyList() {
        this.clientService.getCompanies().subscribe(
        // tslint:disable-next-line:ban-types
        (listCompanies) => this.companies = listCompanies, error => console.log('Cannot get company list'));
    }
    // tslint:disable-next-line:typedef
    reportList() {
        this.documentService.getReportList().subscribe((listReports) => this.reports = listReports, error => console.log('Cannot get report types'));
    }
    // tslint:disable-next-line:typedef
    getFile() {
        // @ts-ignore
        this.ngxUiLoaderService.start();
        this.documentService.getDocument(this.findDocForm.getRawValue().financialYear, this.findDocForm.getRawValue().reportType, this.findDocForm.getRawValue().companyName)
            .subscribe((listDocuments) => {
            this.documents = listDocuments;
            this.ngxUiLoaderService.stop();
        }, (error) => {
            console.log(error);
            this.ngxUiLoaderService.stop();
        });
        // this.findDocForm.reset();
    }
    downloadFileTest(fileName) {
        this.ngxUiLoaderService.start();
        this.fileService.downloadFile(fileName);
    }
    // tslint:disable-next-line:typedef
    clearTable() {
        this.documents = [];
    }
    // tslint:disable-next-line:typedef
    changePassword() {
        this.ngxUiLoaderService.start();
        const username = this.authService.getUserObject().username;
        if (this.changePasswordForm.getRawValue().newPassword === this.changePasswordForm.getRawValue().password) {
            // this.userService.changePassword(username, this.changePasswordForm.getRawValue().
            //   oldPassword, this.changePasswordForm.value).subscribe(
            //     re => this.correctPassword(),
            //   error => this.ngxUiLoaderService.stop()
            // );
            this.userService.changePassword(username, this.changePasswordForm.getRawValue().
                oldPassword, this.changePasswordForm.value).subscribe(response => {
                this.toasterService.showToaster('Password update successfully!', _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_1__["SETTINGS"].TOASTER_MESSAGES.success);
                localStorage.clear();
                this.router.navigate(['/login']);
                this.ngxUiLoaderService.stop();
            }, (error) => {
                console.log(error);
                this.ngxUiLoaderService.stop();
                this.toasterService.showToaster('Cannot update password!', _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_1__["SETTINGS"].TOASTER_MESSAGES.error);
                this.changePasswordForm.reset();
            });
        }
        else {
            this.ngxUiLoaderService.stop();
            this.toasterService.showToaster('New password and confirm new password does not match!', _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_1__["SETTINGS"].TOASTER_MESSAGES.error);
            this.changePasswordForm.reset();
        }
    }
    // tslint:disable-next-line:typedef
    correctPassword() {
        this.toasterService.showToaster('Password update successfully!', _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_1__["SETTINGS"].TOASTER_MESSAGES.success);
        localStorage.clear();
        this.router.navigate(['/login']);
        this.ngxUiLoaderService.stop();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_document_service__WEBPACK_IMPORTED_MODULE_5__["DocumentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_client_service__WEBPACK_IMPORTED_MODULE_6__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 107, vars: 8, consts: [[1, "card"], [3, "formGroup"], [1, "label"], ["for", "cname"], ["appearance", "fill"], ["formControlName", "companyName", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "fyear"], ["formControlName", "financialYear", "required", ""], ["for", "rtype"], ["formControlName", "reportType", "required", ""], ["mat-raised-button", "", "color", "accent", "type", "reset", "value", "Reset", 3, "click"], [1, "label2"], ["mat-raised-button", "", "color", "primary", "type", "submit", "value", "Submit", 3, "disabled", "click"], ["class", "table", 4, "ngIf"], ["for", "password"], [1, "example-full-width"], ["type", "password", "formControlName", "oldPassword", "matInput", "", "required", ""], ["for", ""], ["type", "password", "formControlName", "newPassword", "matInput", "", "required", ""], ["for", "reNewPassword"], ["type", "password", "formControlName", "password", "matInput", "", "required", ""], ["mat-raised-button", "", "color", "accent", "type", "reset", "value", "Reset"], [3, "value"], [1, "table"], [1, "thead-dark"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", "type", "submit", "value", "Submit", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Find Documents ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Company Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Select...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeComponent_mat_option_20_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Financial Year :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Select...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HomeComponent_mat_option_30_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Report Type :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Select...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, HomeComponent_mat_option_40_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_43_listener() { return ctx.clearTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_48_listener() { return ctx.getFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Find ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Document List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "list_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, HomeComponent_table_61_Template, 15, 1, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Current Password :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " New Password :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Confirm Password :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_101_listener() { return ctx.changePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "people_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Update ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.findDocForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.years);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reports);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.findDocForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.documents && ctx.documents.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.changePasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.changePasswordForm.valid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"]], styles: [".card[_ngcontent-%COMP%] {\n  width: 80%;\n  align-self: center;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\nform[_ngcontent-%COMP%] {\n  margin-left: 20%;\n}\n\n.label[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 18px;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 150%;\n}\n\n.label2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n}\n\n.table2[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n  color: black;\n  align-content: center;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbmZvcm17XHJcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcclxufVxyXG5cclxuLmxhYmVse1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDE1MCU7XHJcbiAgLy9mb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5sYWJlbDJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnRhYmxlMiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRoe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _shared_services_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"] }, { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"] }, { type: _shared_services_document_service__WEBPACK_IMPORTED_MODULE_5__["DocumentService"] }, { type: _shared_services_client_service__WEBPACK_IMPORTED_MODULE_6__["ClientService"] }, { type: _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] }, { type: _authentication_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }, { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }]; }, null); })();


/***/ }),

/***/ "AVoT":
/*!****************************************************!*\
  !*** ./src/app/modules/client/client.component.ts ***!
  \****************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/config/commons.settings */ "b0uj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/client.service */ "oR8h");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "mAmA");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

















function ClientComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", company_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r4);
} }
function ClientComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.loadApiData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Find");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientComponent_button_69_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientComponent_button_69_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onUpdate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "save_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.findClientForm.valid);
} }
function ClientComponent_button_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r3.newClientForm.valid);
} }
class ClientComponent {
    constructor(fb, clientService, ngxUiLoaderService, toasterService) {
        this.fb = fb;
        this.clientService = clientService;
        this.ngxUiLoaderService = ngxUiLoaderService;
        this.toasterService = toasterService;
        this.getClient = false;
        this.updateClient = false;
        this.addClient = false;
        // @ts-ignore
        this.newClientForm = this.fb.group({
            tin: [''],
            companyName: [''],
            email: [''],
            phone: [''],
            address: [''],
            status: ['']
        });
        // @ts-ignore
        /*newClientForm = new FormGroup({
          tin: new FormControl(''),
          companyName: new FormControl(''),
          email: new FormControl(''),
          phone: new FormControl(''),
          address: new FormControl(''),
          status: new FormControl('')
        });*/
        // @ts-ignore
        this.findClientForm = this.fb.group({
            tin: [''],
            companyName: [''],
            email: [''],
            phone: [''],
            address: [''],
            status: ['']
        });
    }
    /*
    findClientForm = new FormGroup({
      tin: new FormControl(''),
      companyName: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl(''),
      status: new FormControl('')
    });*/
    ngOnInit() {
        this.privileges = localStorage.getItem(_shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_1__["SETTINGS"].PRIVILEGES);
        this.getClient = this.privileges.includes('CLIENT.GET');
        this.updateClient = this.privileges.includes('CLIENT.PUT');
        this.addClient = this.privileges.includes('CLIENT.POST');
        this.clientService.getAllcompanies().subscribe(
        // tslint:disable-next-line:ban-types
        (listCompanies) => this.companies = listCompanies, error => console.log('Cannot get company list'));
    }
    // tslint:disable-next-line:typedef
    loadApiData() {
        // @ts-ignore
        this.ngxUiLoaderService.start();
        this.clientService.getClient(this.findClientForm.getRawValue().companyName).subscribe((client) => {
            this.editClient(client);
            this.ngxUiLoaderService.stop();
        }, error => {
            console.log('ERROR', error);
            this.ngxUiLoaderService.stop();
        });
    }
    editClient(client) {
        this.findClientForm.patchValue({
            tin: client.tin,
            companyName: client.companyName,
            email: client.email,
            phone: client.phone,
            address: client.address,
            status: client.status
        });
    }
    // tslint:disable-next-line:typedef
    onSubmit() {
        this.ngxUiLoaderService.start();
        this.clientService.newClient(this.newClientForm.value)
            .subscribe(response => {
            console.log('SUCCESS', response);
            this.ngxUiLoaderService.stop();
            this.toasterService.showToaster('Client Successfully Added!', _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_1__["SETTINGS"].TOASTER_MESSAGES.success);
            this.newClientForm.reset();
        }, error => {
            console.log('ERROR', error);
            this.ngxUiLoaderService.stop();
            this.toasterService.showToaster('Add new client failed!', _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_1__["SETTINGS"].TOASTER_MESSAGES.error);
        });
    }
    // tslint:disable-next-line:typedef
    onUpdate() {
        this.ngxUiLoaderService.start();
        try {
            this.clientService.updateClient(this.findClientForm.getRawValue().tin, this.findClientForm.value)
                .subscribe(response => {
                console.log('SUCCESS', response);
                this.ngxUiLoaderService.stop();
                this.toasterService.showToaster('Client Successfully Updated!', _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_1__["SETTINGS"].TOASTER_MESSAGES.success);
                this.findClientForm.reset();
            }, error => {
                console.log('ERROR', error);
            });
        }
        catch (e) {
            this.ngxUiLoaderService.stop();
            return this.toasterService.showToaster('Client update failed!', _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_1__["SETTINGS"].TOASTER_MESSAGES.error);
        }
    }
}
ClientComponent.ɵfac = function ClientComponent_Factory(t) { return new (t || ClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"])); };
ClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientComponent, selectors: [["app-client"]], decls: 134, vars: 6, consts: [[1, "card"], [3, "formGroup"], [1, "label"], ["for", "cname"], ["appearance", "fill"], ["formControlName", "companyName", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["colspan", "2"], ["mat-raised-button", "", "color", "primary", "type", "submit", "value", "Submit", 3, "click", 4, "ngIf"], [1, "mat-divider"], ["for", "tin"], [1, "example-full-width"], ["type", "text", "formControlName", "tin", "required", "", "matInput", ""], ["for", "email"], ["type", "email", "formControlName", "email", "matInput", ""], ["for", "phone"], ["type", "text", "formControlName", "phone", "matInput", ""], ["for", "addr"], ["formControlName", "address", "matInput", ""], ["colspan", "2", 1, "label2"], [1, "example-section"], ["color", "primary", "formControlName", "status", 1, "example-margin"], ["mat-raised-button", "", "color", "accent", "type", "reset", "value", "Reset"], ["mat-raised-button", "", "color", "primary", "type", "submit", "value", "Submit", 3, "disabled", "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "tin", "required", "", "matInput", "", "placeholder", "Ex: 123456789"], ["type", "text", "formControlName", "companyName", "matInput", "", "required", "", "placeholder", "Ex: RTA Sri Lanka"], ["type", "email", "formControlName", "email", "matInput", "", "placeholder", "Ex: rtasrilanka@gmail.com"], ["type", "text", "formControlName", "phone", "matInput", "", "placeholder", "Ex: 123456789"], ["formControlName", "address", "matInput", "", "placeholder", "Ex: Rodney Street, Colombo 08"], ["mat-raised-button", "", "color", "primary", "type", "submit", "value", "Submit", 3, "disabled", 4, "ngIf"], [3, "value"], ["mat-raised-button", "", "color", "primary", "type", "submit", "value", "Submit", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", "value", "Submit", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", "value", "Submit", 3, "disabled"]], template: function ClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " View / Update Client ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Company Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Select...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ClientComponent_mat_option_20_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ClientComponent_button_23_Template, 4, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-divider", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "TIN :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Email :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Phone :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Address :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "                  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-checkbox", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ClientComponent_button_69_Template, 4, 1, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Add New Client ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "form", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ClientComponent_Template_form_ngSubmit_79_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "TIN :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Company Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Email :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Phone :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "mat-label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Address :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "textarea", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "                  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "mat-checkbox", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, ClientComponent_button_131_Template, 4, 1, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.findClientForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getClient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateClient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newClientForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addClient);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"]], styles: [".card[_ngcontent-%COMP%] {\n  width: 80%;\n  align-self: center;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\nform[_ngcontent-%COMP%] {\n  margin-left: 20%;\n}\n\n.label[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 18px;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 150%;\n}\n\n.label2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n}\n\n.mat-divider[_ngcontent-%COMP%] {\n  border-top-color: #369436;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jbGllbnQvY2xpZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jbGllbnQvY2xpZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuZm9ybXtcclxuICBtYXJnaW4tbGVmdDogMjAlO1xyXG59XHJcblxyXG4ubGFiZWx7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTUwJTtcclxufVxyXG5cclxuLmxhYmVsMntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ubWF0LWRpdmlkZXIge1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYig1NCwgMTQ4LCA1NCk7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client',
                templateUrl: './client.component.html',
                styleUrls: ['./client.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _shared_services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"] }, { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"] }, { type: _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true,
    apiUrl: 'http://3.92.21.51:8080/rtadms-org'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CrrK":
/*!*************************************************!*\
  !*** ./src/app/shared/services/file.service.ts ***!
  \*************************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class FileService {
    constructor(http) {
        this.http = http;
        this.onUploadedFileResponseChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onDownloadLinkChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    downloadFile(fileName) {
        this.http.get(`/api/download-file?fileName=${fileName}`, { responseType: 'blob' }).subscribe((response) => {
            this.onDownloadLinkChange.next({ fileName, data: response });
        });
    }
    uploadFile(file) {
        this.http.post(`/api/new-file`, file, { responseType: 'json' }).subscribe((response) => {
            this.uploadedFileResponse = response;
            this.onUploadedFileResponseChange.next(this.uploadedFileResponse);
        });
    }
    // tslint:disable-next-line:typedef
    deleteFile(fileName) {
        // @ts-ignore
        return this.http.delete(`/api/delete-file?fileName=` + fileName);
    }
}
FileService.ɵfac = function FileService_Factory(t) { return new (t || FileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
FileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FileService, factory: FileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "EaeI":
/*!************************************************!*\
  !*** ./src/app/modules/user/user.component.ts ***!
  \************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/config/commons.settings */ "b0uj");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/user.service */ "kmKP");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "mAmA");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");


















function UserComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.loadApiData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "person_search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Find");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.userFindForm.get("username").valid);
} }
function UserComponent_button_66_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_button_66_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onUpdate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "people_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.userFindForm.valid);
} }
function UserComponent_button_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "person_add_alt_1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.userRegistrationForm.valid);
} }
class UserComponent {
    constructor(fb, userService, ngxUiLoaderService, toasterService) {
        this.fb = fb;
        this.userService = userService;
        this.ngxUiLoaderService = ngxUiLoaderService;
        this.toasterService = toasterService;
        this.getUser = false;
        this.updateUser = false;
        this.addUser = false;
    }
    ngOnInit() {
        this.privileges = localStorage.getItem(_shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].PRIVILEGES);
        this.getUser = this.privileges.includes('USER.GET');
        this.updateUser = this.privileges.includes('USER.PUT');
        this.addUser = this.privileges.includes('USER.POST');
        this.userRegistrationForm = this.fb.group({
            // nic: ['', Validators.compose([Validators.required]), Validators.minLength(10)],
            nic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            email: [''],
            roles: [''],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            status: ['']
        });
        this.userFindForm = this.fb.group({
            nic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            email: [''],
            roles: [Object],
            status: ['']
        });
    }
    // tslint:disable-next-line:typedef
    loadApiData() {
        this.ngxUiLoaderService.start();
        this.userService.getUser(this.userFindForm.getRawValue().username)
            .subscribe((user) => {
            this.ngxUiLoaderService.stop();
            this.editUser(user);
            this.toasterService.showToaster(`Success!`, _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].TOASTER_MESSAGES.success);
            // console.log(user.roles[0].roleName);
        }, error => {
            console.log('ERROR', error);
            this.ngxUiLoaderService.stop();
            this.toasterService.showToaster(`Failed!`, _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].TOASTER_MESSAGES.error);
        });
    }
    editUser(user) {
        // @ts-ignore
        // @ts-ignore
        this.userFindForm.patchValue({
            nic: user.nic,
            username: user.username,
            email: user.email,
            roles: user.roles[0].roleName,
            status: user.status
        });
    }
    // tslint:disable-next-line:typedef
    onSubmit() {
        // this.newDocumentForm.patchValue({documentName: this.uploadedFileName});
        this.ngxUiLoaderService.start();
        this.userRegistrationForm
            .patchValue({ roles: [{ roleName: this.userRegistrationForm.getRawValue().roles }] });
        this.userService.newUser(this.userRegistrationForm.value)
            .subscribe(response => {
            console.log('SUCCESS', response);
            this.ngxUiLoaderService.stop();
            this.toasterService.showToaster(`User successfully added!`, _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].TOASTER_MESSAGES.success);
            this.userRegistrationForm.reset();
        }, error => {
            console.log('ERROR', error);
            this.ngxUiLoaderService.stop();
            this.toasterService.showToaster(`User added failed!`, _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].TOASTER_MESSAGES.error);
        });
    }
    // tslint:disable-next-line:typedef
    onUpdate() {
        this.ngxUiLoaderService.start();
        this.userFindForm
            .patchValue({ roles: [{ roleName: this.userFindForm.getRawValue().roles }] });
        this.userService.updateUser(this.userFindForm.getRawValue().username, this.userFindForm.value)
            .subscribe(response => {
            console.log('SUCCESS', response);
            this.ngxUiLoaderService.stop();
            this.toasterService.showToaster('User Successfully Updated!', _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].TOASTER_MESSAGES.success);
            this.userFindForm.reset();
        }, error => {
            console.log('ERROR', error);
            this.ngxUiLoaderService.stop();
            this.toasterService.showToaster(`User update failed!`, _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].TOASTER_MESSAGES.error);
        });
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 138, vars: 5, consts: [[1, "card"], [3, "formGroup"], [1, "label"], ["for", "uName"], [1, "example-full-width"], ["type", "text", "formControlName", "username", "matInput", "", "required", ""], ["colspan", "2"], ["mat-raised-button", "", "color", "primary", "type", "submit", "value", "Submit", 3, "disabled", "click", 4, "ngIf"], [1, "mat-divider"], ["for", "nic"], ["type", "text", "formControlName", "nic", "matInput", ""], ["for", "email"], ["type", "email", "formControlName", "email", "matInput", ""], ["for", "role"], ["appearance", "fill"], ["formControlName", "roles", "matInput", ""], ["value", "ROLE_SUPER_ADMIN"], ["value", "ROLE_ADMIN"], ["value", "ROLE_USER"], ["colspan", "2", 1, "label2"], [1, "example-section"], ["color", "primary", "formControlName", "status", 1, "example-margin"], ["mat-raised-button", "", "color", "accent", "type", "reset", "value", "Reset"], [3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "nic", "matInput", "", "placeholder", "Ex: 983612358v or 199836102358"], ["type", "text", "formControlName", "username", "matInput", "", "placeholder", "Ex: gayan"], ["type", "email", "formControlName", "email", "matInput", "", "placeholder", "Ex: gayan@gmail.com"], ["type", "password", "formControlName", "password", "matInput", ""], ["mat-raised-button", "", "color", "primary", "type", "submit", "value", "Submit", 3, "disabled", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", "value", "Submit", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", "value", "Submit", 3, "disabled"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " View / Update User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " User Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UserComponent_button_20_Template, 4, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-divider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "NIC :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Email :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Role :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Select one");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Moderator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-checkbox", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, UserComponent_button_66_Template, 4, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Add New User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "form", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserComponent_Template_form_ngSubmit_76_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "NIC :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " User Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Email :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Role :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Select one");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Moderator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "mat-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Password :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "mat-checkbox", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](135, UserComponent_button_135_Template, 4, 1, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userFindForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userRegistrationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addUser);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"]], styles: [".card[_ngcontent-%COMP%] {\n  width: 80%;\n  align-self: center;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\nform[_ngcontent-%COMP%] {\n  margin-left: 20%;\n}\n\n.label[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 18px;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 150%;\n}\n\n.label2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n}\n\n.mat-divider[_ngcontent-%COMP%] {\n  border-top-color: #369436;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbmZvcm17XHJcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcclxufVxyXG5cclxuLmxhYmVse1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDE1MCU7XHJcbn1cclxuXHJcbi5sYWJlbDJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLm1hdC1kaXZpZGVyIHtcclxuICBib3JkZXItdG9wLWNvbG9yOiByZ2IoNTQsIDE0OCwgNTQpO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"] }, { type: _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "IHv7":
/*!*************************************************************!*\
  !*** ./src/app/authentication/service/auth/auth.service.ts ***!
  \*************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/config/commons.settings */ "b0uj");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ui-loader */ "gren");







class AuthService {
    constructor(http, router, ngxUiLoaderService) {
        this.http = http;
        this.router = router;
        this.ngxUiLoaderService = ngxUiLoaderService;
        this.loginStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    login(username, password) {
        this.http.post(`/api/login`, { username, password })
            .subscribe((response) => {
            this.setSession(response);
            this.ngxUiLoaderService.stop();
            this.loginStatus.next({ isAuthenticated: true });
        }, error => {
            if (error === 401 || error.status === 401) {
                return this.loginStatus.next({ isAuthenticated: false });
            }
        });
    }
    setSession(payload) {
        this.ngxUiLoaderService.start();
        const { jwtToken, userDTO } = payload;
        const { permissions } = userDTO;
        localStorage.setItem(_shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].ACCESS_TOKEN, jwtToken);
        localStorage.setItem(_shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].USER, JSON.stringify(userDTO));
        localStorage.setItem(_shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].PRIVILEGES, JSON.stringify(permissions.map(permission => permission.permissionName)));
    }
    getLoggedInStatus() {
        return this.loginStatus.asObservable();
    }
    isLoggedIn() {
        return localStorage.getItem(_shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].ACCESS_TOKEN) !== null;
    }
    getUserObject() {
        const userStr = localStorage.getItem(_shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].USER);
        return JSON.parse(userStr);
    }
    logOut() {
        localStorage.clear();
        this.router.navigate(['/login']);
        this.ngxUiLoaderService.stop();
    }
    getToken() {
        return localStorage.getItem(_shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].ACCESS_TOKEN) || '';
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"] }]; }, null); })();


/***/ }),

/***/ "Nj0y":
/*!*************************************************************!*\
  !*** ./src/app/shared/component/footer/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 0, consts: [[1, "docs-footer"], [1, "footer-copyright", "text-center", "py-3"], ["href", "https://rtasrilanka.lk/", "target", "blank", 2, "color", "#fff"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 2020 Copyright: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " rtasrilanka.lk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".docs-footer[_ngcontent-%COMP%] {\n  background: #3f51b5;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9jcy1mb290ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XHJcbiAgY29sb3I6I2ZmZjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'RTA-DMS';
        console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production); // Logs false for default environment
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".snack-bar-success {\n  background-color: #008700 !important;\n  color: white !important;\n  font-weight: 500 !important;\n}\n  .snack-bar-success button {\n  color: white !important;\n  font-weight: 500 !important;\n}\n  .snack-bar-error {\n  background-color: darkred !important;\n  color: white !important;\n  font-weight: 500 !important;\n}\n  .snack-bar-error button {\n  color: white !important;\n  font-weight: 500 !important;\n}\n  .snack-bar-warning {\n  background-color: #c1c81d !important;\n  color: black !important;\n  font-weight: 500 !important;\n}\n  .snack-bar-warning button {\n  color: white !important;\n  font-weight: 500 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usb0NBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FBQUY7QUFFRTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7QUFBSjtBQUlBO0VBQ0Usb0NBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FBREY7QUFHRTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7QUFESjtBQUtBO0VBQ0Usb0NBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FBRkY7QUFJRTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vdG9hc3RlclxyXG46Om5nLWRlZXAgLnNuYWNrLWJhci1zdWNjZXNze1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDg3MDAgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcblxyXG4gIGJ1dHRvbntcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5zbmFjay1iYXItZXJyb3J7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuXHJcbiAgYnV0dG9ue1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLnNuYWNrLWJhci13YXJuaW5ne1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWM4MWQgIWltcG9ydGFudDtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcblxyXG4gIGJ1dHRvbntcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "TZWI":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/token-interceptor.service.ts ***!
  \**************************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _config_commons_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/commons.settings */ "b0uj");
/* harmony import */ var _authentication_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../authentication/service/auth/auth.service */ "IHv7");
/* harmony import */ var _toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toaster.service */ "mAmA");







class TokenInterceptorService {
    constructor(authService, toasterService) {
        this.authService = authService;
        this.toasterService = toasterService;
    }
    intercept(req, next) {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.authService.getToken()}`
            }
        });
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            // handle error here
            if (error.status === 401) {
                this.toasterService.showToaster('Session Expired! Please login again.', _config_commons_settings__WEBPACK_IMPORTED_MODULE_3__["SETTINGS"].TOASTER_MESSAGES.error);
                this.authService.logOut();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error.status);
        }));
    }
}
TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) { return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"])); };
TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptorService, factory: TokenInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _authentication_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/material/material.module */ "jAig");
/* harmony import */ var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/default/default.component */ "xS3V");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/home/home.component */ "0Pcf");
/* harmony import */ var _modules_user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/user/user.component */ "EaeI");
/* harmony import */ var _modules_document_document_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/document/document.component */ "oIBA");
/* harmony import */ var _modules_client_client_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/client/client.component */ "AVoT");
/* harmony import */ var _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/default/default.module */ "mBqM");
/* harmony import */ var _shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/component/header/header.component */ "xdqI");
/* harmony import */ var _shared_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/component/footer/footer.component */ "Nj0y");
/* harmony import */ var _shared_component_dialog_logout_dialog_logout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/component/dialog-logout/dialog-logout.component */ "jkEU");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _authentication_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./authentication/service/auth/auth.service */ "IHv7");
/* harmony import */ var _shared_services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/services/token-interceptor.service */ "TZWI");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-dropzone */ "kvL/");
/* harmony import */ var _shared_services_document_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/services/document.service */ "gmvE");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/services/user.service */ "kmKP");
/* harmony import */ var _shared_services_client_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/services/client.service */ "oR8h");
/* harmony import */ var _shared_services_file_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/services/file.service */ "CrrK");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/services/toaster.service */ "mAmA");
/* harmony import */ var _modules_document_dialog_deletefile_dialog_deletefile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./modules/document/dialog-deletefile/dialog-deletefile.component */ "xU7L");































const ngxUiLoaderConfig = {
    bgsColor: 'red',
    bgsOpacity: 0.5,
    bgsPosition: 'bottom-right',
    bgsSize: 60,
    bgsType: 'ball-spin-clockwise',
    blur: 5,
    delay: 0,
    fastFadeOut: true,
    fgsColor: 'red',
    fgsPosition: 'center-center',
    fgsSize: 60,
    fgsType: 'ball-spin-clockwise',
    gap: 24,
    logoPosition: 'center-center',
    logoSize: 120,
    logoUrl: '',
    masterLoaderId: 'master',
    overlayBorderRadius: '0',
    overlayColor: 'rgba(40, 40, 40, 0.8)',
    pbColor: 'red',
    pbDirection: 'ltr',
    pbThickness: 3,
    hasProgressBar: true,
    text: '',
    textColor: '#FFFFFF',
    textPosition: 'center-center',
    maxTime: -1,
    minTime: 300
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _authentication_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"],
            useClass: _shared_services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_19__["TokenInterceptorService"],
            multi: true
        },
        _shared_services_document_service__WEBPACK_IMPORTED_MODULE_22__["DocumentService"],
        _shared_services_user_service__WEBPACK_IMPORTED_MODULE_24__["UserService"],
        _shared_services_client_service__WEBPACK_IMPORTED_MODULE_25__["ClientService"],
        _shared_services_file_service__WEBPACK_IMPORTED_MODULE_26__["FileService"],
        _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_27__["ToasterService"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkColumnDef"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _shared_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_11__["DefaultModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_20__["NgxUiLoaderModule"].forRoot(ngxUiLoaderConfig),
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_21__["NgxDropzoneModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_6__["DefaultComponent"],
        _modules_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _modules_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
        _modules_document_document_component__WEBPACK_IMPORTED_MODULE_9__["DocumentComponent"],
        _modules_client_client_component__WEBPACK_IMPORTED_MODULE_10__["ClientComponent"],
        _shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
        _shared_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
        _shared_component_dialog_logout_dialog_logout_component__WEBPACK_IMPORTED_MODULE_14__["DialogLogoutComponent"],
        _modules_document_dialog_deletefile_dialog_deletefile_component__WEBPACK_IMPORTED_MODULE_28__["DialogDeletefileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _shared_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_11__["DefaultModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_20__["NgxUiLoaderModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_21__["NgxDropzoneModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_6__["DefaultComponent"],
                    _modules_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _modules_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
                    _modules_document_document_component__WEBPACK_IMPORTED_MODULE_9__["DocumentComponent"],
                    _modules_client_client_component__WEBPACK_IMPORTED_MODULE_10__["ClientComponent"],
                    _shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                    _shared_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                    _shared_component_dialog_logout_dialog_logout_component__WEBPACK_IMPORTED_MODULE_14__["DialogLogoutComponent"],
                    _modules_document_dialog_deletefile_dialog_deletefile_component__WEBPACK_IMPORTED_MODULE_28__["DialogDeletefileComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _shared_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                    _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_11__["DefaultModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                    ngx_ui_loader__WEBPACK_IMPORTED_MODULE_20__["NgxUiLoaderModule"].forRoot(ngxUiLoaderConfig),
                    ngx_dropzone__WEBPACK_IMPORTED_MODULE_21__["NgxDropzoneModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"]
                ],
                providers: [
                    _authentication_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"],
                        useClass: _shared_services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_19__["TokenInterceptorService"],
                        multi: true
                    },
                    _shared_services_document_service__WEBPACK_IMPORTED_MODULE_22__["DocumentService"],
                    _shared_services_user_service__WEBPACK_IMPORTED_MODULE_24__["UserService"],
                    _shared_services_client_service__WEBPACK_IMPORTED_MODULE_25__["ClientService"],
                    _shared_services_file_service__WEBPACK_IMPORTED_MODULE_26__["FileService"],
                    _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_27__["ToasterService"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkColumnDef"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "b0uj":
/*!***************************************************!*\
  !*** ./src/app/shared/config/commons.settings.ts ***!
  \***************************************************/
/*! exports provided: SETTINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS", function() { return SETTINGS; });
class SETTINGS {
}
SETTINGS.ACCESS_TOKEN = '@Key:access-token';
SETTINGS.USER = '@Key:user';
SETTINGS.PRIVILEGES = '@Key:privileges';
SETTINGS.BASE_URL = 'http://3.92.21.51:8080/rtadms-org';
SETTINGS.TOASTER_MESSAGES = {
    success: 'SUCCESS',
    error: 'ERROR',
    warning: 'WARNING'
};


/***/ }),

/***/ "cieo":
/*!***********************************************************!*\
  !*** ./src/app/layouts/default/default-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DefaultRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultRoutingModule", function() { return DefaultRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class DefaultRoutingModule {
}
DefaultRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DefaultRoutingModule });
DefaultRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DefaultRoutingModule_Factory(t) { return new (t || DefaultRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DefaultRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "gmvE":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/document.service.ts ***!
  \*****************************************************/
/*! exports provided: DocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return DocumentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class DocumentService {
    constructor(http) {
        this.http = http;
    }
    // tslint:disable-next-line:typedef
    newDocument(documentData, companyName) {
        return this.http.post('/api/new-document/' + companyName, documentData);
    }
    // tslint:disable-next-line:typedef
    getDocument(finYear, docType, tin) {
        return this.http.get('/api/get-filename/' + finYear + '/' + docType + '/' + tin);
    }
    // tslint:disable-next-line:typedef
    deleteDocument(documentName) {
        // @ts-ignore
        return this.http.delete('/api/delete-document/' + documentName);
    }
    // tslint:disable-next-line:typedef
    getFinancialYearList() {
        return this.http.get('/api/get-years');
    }
    // tslint:disable-next-line:typedef
    getReportList() {
        return this.http.get('/api/get-reports');
    }
}
DocumentService.ɵfac = function DocumentService_Factory(t) { return new (t || DocumentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DocumentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DocumentService, factory: DocumentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "jAig":
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");





































const MaterialComponents = [
    _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__["CdkTableModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"]
];
// noinspection AngularInvalidImportedOrDeclaredSymbol
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[MaterialComponents], _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__["CdkTableModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__["CdkTableModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"]], exports: [_angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__["CdkTableModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [MaterialComponents],
                exports: [MaterialComponents]
            }]
    }], null, null); })();


/***/ }),

/***/ "jkEU":
/*!***************************************************************************!*\
  !*** ./src/app/shared/component/dialog-logout/dialog-logout.component.ts ***!
  \***************************************************************************/
/*! exports provided: DialogLogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogLogoutComponent", function() { return DialogLogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class DialogLogoutComponent {
    constructor(data, ngxUiLoaderService, dialogRef) {
        this.data = data;
        this.ngxUiLoaderService = ngxUiLoaderService;
        this.dialogRef = dialogRef;
        this.userName = 'User';
        if (data) {
            this.userName = data.userName || this.userName;
        }
    }
    ngOnInit() {
    }
    confirm() {
        this.ngxUiLoaderService.start();
        this.dialogRef.close(true);
    }
}
DialogLogoutComponent.ɵfac = function DialogLogoutComponent_Factory(t) { return new (t || DialogLogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
DialogLogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogLogoutComponent, selectors: [["app-dialog-logout"]], decls: 9, vars: 1, consts: [["mat-dialog-title", ""], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function DialogLogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logged Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Keep me logged in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogLogoutComponent_Template_button_click_7_listener() { return ctx.confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Log Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hi ", ctx.userName, ". Are you sure you want to Logout?");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvZGlhbG9nLWxvZ291dC9kaWFsb2ctbG9nb3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogLogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialog-logout',
                templateUrl: './dialog-logout.component.html',
                styleUrls: ['./dialog-logout.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "kmKP":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class UserService {
    constructor(http) {
        this.http = http;
    }
    // tslint:disable-next-line:typedef
    newUser(userData) {
        return this.http.post('/api/new-user', userData);
    }
    // tslint:disable-next-line:typedef
    getUser(username) {
        return this.http.get('/api/get-user-by-username/' + username);
    }
    // tslint:disable-next-line:typedef
    updateUser(nic, userData) {
        // @ts-ignore
        return this.http.put(`/api/update-user/${nic}`, userData);
    }
    // tslint:disable-next-line:typedef
    changePassword(username, oldPassword, userData) {
        // tslint:disable-next-line:ban-types
        return this.http.post('/api/update-password/' + username + '/' + oldPassword, userData);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "mAmA":
/*!****************************************************!*\
  !*** ./src/app/shared/services/toaster.service.ts ***!
  \****************************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");



class ToasterService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    showToaster(message, type, customConfigs) {
        let customClass = '';
        if (type.toUpperCase() === 'SUCCESS') {
            customClass = 'snack-bar-success';
        }
        if (type.toUpperCase() === 'ERROR') {
            customClass = 'snack-bar-error';
        }
        if (type.toUpperCase() === 'WARNING') {
            customClass = 'snack-bar-warning';
        }
        const config = Object.assign({}, {
            duration: 3000,
            panelClass: customClass,
            verticalPosition: 'bottom',
            horizontalPosition: 'center'
        }, customConfigs);
        return this.snackBar.open(message, 'close', config).afterDismissed();
    }
}
ToasterService.ɵfac = function ToasterService_Factory(t) { return new (t || ToasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
ToasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToasterService, factory: ToasterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "mBqM":
/*!***************************************************!*\
  !*** ./src/app/layouts/default/default.module.ts ***!
  \***************************************************/
/*! exports provided: DefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultModule", function() { return DefaultModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _default_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-routing.module */ "cieo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_services_document_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/document.service */ "gmvE");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/user.service */ "kmKP");
/* harmony import */ var _shared_services_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/client.service */ "oR8h");
/* harmony import */ var _shared_services_file_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/file.service */ "CrrK");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "mAmA");












class DefaultModule {
}
DefaultModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DefaultModule });
DefaultModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DefaultModule_Factory(t) { return new (t || DefaultModule)(); }, providers: [
        _shared_services_document_service__WEBPACK_IMPORTED_MODULE_6__["DocumentService"],
        _shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        _shared_services_client_service__WEBPACK_IMPORTED_MODULE_8__["ClientService"],
        _shared_services_file_service__WEBPACK_IMPORTED_MODULE_9__["FileService"],
        _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_10__["ToasterService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _default_routing_module__WEBPACK_IMPORTED_MODULE_2__["DefaultRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DefaultModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _default_routing_module__WEBPACK_IMPORTED_MODULE_2__["DefaultRoutingModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _default_routing_module__WEBPACK_IMPORTED_MODULE_2__["DefaultRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
                ],
                providers: [
                    _shared_services_document_service__WEBPACK_IMPORTED_MODULE_6__["DocumentService"],
                    _shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
                    _shared_services_client_service__WEBPACK_IMPORTED_MODULE_8__["ClientService"],
                    _shared_services_file_service__WEBPACK_IMPORTED_MODULE_9__["FileService"],
                    _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_10__["ToasterService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "oIBA":
/*!********************************************************!*\
  !*** ./src/app/modules/document/document.component.ts ***!
  \********************************************************/
/*! exports provided: DocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentComponent", function() { return DocumentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/config/commons.settings */ "b0uj");
/* harmony import */ var _dialog_deletefile_dialog_deletefile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog-deletefile/dialog-deletefile.component */ "xU7L");
/* harmony import */ var _shared_services_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/file.service */ "CrrK");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_services_document_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/document.service */ "gmvE");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "mAmA");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _authentication_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../authentication/service/auth/auth.service */ "IHv7");
/* harmony import */ var _shared_services_client_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/services/client.service */ "oR8h");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-dropzone */ "kvL/");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ "FKr1");























function DocumentComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", company_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r7);
} }
function DocumentComponent_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", year_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](year_r8);
} }
function DocumentComponent_mat_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", report_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r9);
} }
function DocumentComponent_button_48_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentComponent_button_48_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.getFile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Find");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r3.updateDocumentForm.valid);
} }
function DocumentComponent_table_56_tr_14_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentComponent_table_56_tr_14_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const document_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.deleteDocument(document_r13.documentName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DocumentComponent_table_56_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DocumentComponent_table_56_tr_14_button_10_Template, 3, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const document_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r14 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](document_r13.financialYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](document_r13.reportType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](document_r13.documentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.deleteFile);
} }
function DocumentComponent_table_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Financial Year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Report Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DocumentComponent_table_56_tr_14_Template, 11, 5, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.documents);
} }
function DocumentComponent_mat_option_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", company_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r19);
} }
function DocumentComponent_ngx_dropzone_preview_98_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-preview", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function DocumentComponent_ngx_dropzone_preview_98_Template_ngx_dropzone_preview_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const f_r20 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.onRemove(f_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", f_r20.name, " (", f_r20.type, ")");
} }
class DocumentComponent {
    constructor(fileService, ngxUiLoaderService, fb, documentService, toasterService, dialog, authService, clientService) {
        this.fileService = fileService;
        this.ngxUiLoaderService = ngxUiLoaderService;
        this.fb = fb;
        this.documentService = documentService;
        this.toasterService = toasterService;
        this.dialog = dialog;
        this.authService = authService;
        this.clientService = clientService;
        this.files = [];
        this.uploadedFileName = ' ';
        this.getDocument = false;
        this.updateDocument = false;
        this.addDocument = false;
        this.deleteFile = false;
        // @ts-ignore
        this.newDocumentForm = this.fb.group({
            companyName: [''],
            financialYear: [''],
            reportType: [''],
            documentName: [''],
            status: ['']
        });
        // @ts-ignore
        this.updateDocumentForm = this.fb.group({
            companyName: [''],
            financialYear: [''],
            reportType: [''],
            status: ['']
        });
    }
    ngOnInit() {
        this.privileges = localStorage.getItem(_shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_1__["SETTINGS"].PRIVILEGES);
        this.getDocument = this.privileges.includes('DOCUMENT.GET');
        this.updateDocument = this.privileges.includes('DOCUMENT.PUT');
        this.addDocument = this.privileges.includes('DOCUMENT.POST');
        this.deleteFile = this.privileges.includes('DOCUMENT.DELETE');
        this.fileService.onUploadedFileResponseChange.subscribe((resp) => {
            this.ngxUiLoaderService.stop();
            this.uploadedFileName = resp.fileName;
        });
        this.companyList();
        this.yearList();
        this.reportList();
    }
    // tslint:disable-next-line:typedef
    yearList() {
        this.documentService.getFinancialYearList().subscribe((listYears) => this.years = listYears, error => console.log('Cannot get year list'));
    }
    // tslint:disable-next-line:typedef
    companyList() {
        this.clientService.getCompanies().subscribe(
        // tslint:disable-next-line:ban-types
        (listCompanies) => this.companies = listCompanies, error => console.log('Cannot get company list'));
    }
    // tslint:disable-next-line:typedef
    reportList() {
        this.documentService.getReportList().subscribe((listReports) => this.reports = listReports, error => console.log('Cannot get report types'));
    }
    //
    onSelect(event) {
        const fileObject = event.addedFiles[0];
        const formData = new FormData();
        formData.append('file', fileObject);
        this.ngxUiLoaderService.start();
        this.fileService.uploadFile(formData);
        this.files = [];
        this.files.push(...event.addedFiles);
    }
    onRemove(event) {
        this.files.splice(this.files.indexOf(event), 1);
    }
    // tslint:disable-next-line:typedef
    saveDocument() {
        // Get uploaded file name and assign to form field
        this.ngxUiLoaderService.start();
        this.newDocumentForm.patchValue({ documentName: this.uploadedFileName });
        if (this.uploadedFileName === ' ' || this.uploadedFileName === null) {
            this.toasterService.showToaster(`Please upload document!`, _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_1__["SETTINGS"].TOASTER_MESSAGES.error);
        }
        else {
            this.documentService.newDocument(this.newDocumentForm.value, this.newDocumentForm.getRawValue().companyName)
                .subscribe(response => {
                console.log('SUCCESS', response);
                this.ngxUiLoaderService.stop();
                this.toasterService.showToaster(`Document successfully uploaded!`, _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_1__["SETTINGS"].TOASTER_MESSAGES.success);
                this.newDocumentForm.reset();
                this.onRemove(this.uploadedFileName);
            }, error => {
                console.log('ERROR', error);
                this.ngxUiLoaderService.stop();
                this.toasterService.showToaster(`Document upload failed!`, _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_1__["SETTINGS"].TOASTER_MESSAGES.error);
            });
        }
    }
    // tslint:disable-next-line:typedef
    getFile() {
        // @ts-ignore
        this.ngxUiLoaderService.start();
        this.documentService.getDocument(this.updateDocumentForm.getRawValue().financialYear, this.updateDocumentForm.getRawValue().reportType, this.updateDocumentForm.getRawValue().companyName)
            .subscribe((listDocuments) => {
            this.documents = listDocuments;
            this.ngxUiLoaderService.stop();
        }, (error) => {
            console.log(error);
            this.ngxUiLoaderService.stop();
        });
    }
    // tslint:disable-next-line:typedef
    deleteDocument(documentName) {
        const dialogRef = this.dialog.open(_dialog_deletefile_dialog_deletefile_component__WEBPACK_IMPORTED_MODULE_2__["DialogDeletefileComponent"], {
            data: {
                userName: this.authService.getUserObject().username
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.fileService.deleteFile(documentName)
                    .subscribe(response => {
                    console.log('SUCCESS', response);
                }, error => {
                    console.log('ERROR', error);
                });
                this.documentService.deleteDocument(documentName)
                    .subscribe(response => {
                    console.log('SUCCESS', response);
                    this.ngxUiLoaderService.stop();
                    this.updateDocumentForm.reset();
                    this.documents = [];
                    this.toasterService.showToaster(`Document successfully deleted!`, _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_1__["SETTINGS"].TOASTER_MESSAGES.success);
                }, error => {
                    console.log('ERROR', error);
                    this.ngxUiLoaderService.stop();
                    this.toasterService.showToaster(`Document delete failed!`, _shared_config_commons_settings__WEBPACK_IMPORTED_MODULE_1__["SETTINGS"].TOASTER_MESSAGES.error);
                });
            }
        });
    }
}
DocumentComponent.ɵfac = function DocumentComponent_Factory(t) { return new (t || DocumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_document_service__WEBPACK_IMPORTED_MODULE_6__["DocumentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_client_service__WEBPACK_IMPORTED_MODULE_10__["ClientService"])); };
DocumentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocumentComponent, selectors: [["app-document"]], decls: 124, vars: 11, consts: [[1, "card"], [3, "formGroup"], [1, "label"], ["for", "cname"], ["appearance", "fill"], ["formControlName", "companyName", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "fyear"], ["formControlName", "financialYear", "required", ""], ["for", "rtype"], ["formControlName", "reportType", "required", ""], ["mat-raised-button", "", "color", "accent", "type", "reset", "value", "Reset"], [1, "label2"], ["mat-raised-button", "", "color", "primary", "type", "submit", "value", "Submit", 3, "disabled", "click", 4, "ngIf"], ["class", "table", 4, "ngIf"], [1, "example-full-width"], ["type", "text", "formControlName", "financialYear", "matInput", "", "placeholder", "Ex: 2019-2020", "required", ""], ["type", "text", "formControlName", "reportType", "matInput", "", "placeholder", "Ex: Financial Reports", "required", ""], ["colspan", "2"], [3, "multiple", "change"], [3, "removable", "removed", 4, "ngFor", "ngForOf"], ["colspan", "2", 1, "label2"], ["color", "primary", "formControlName", "status"], ["mat-raised-button", "", "color", "primary", "type", "submit", "value", "Submit", 3, "disabled", "click"], [3, "value"], [1, "table"], [1, "thead-dark"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", "type", "submit", "value", "Submit", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", "value", "Submit", 3, "click"], [3, "removable", "removed"]], template: function DocumentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Update Documents ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Company Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Select...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DocumentComponent_mat_option_20_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Financial Year :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Select...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, DocumentComponent_mat_option_30_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Report Type :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Select...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, DocumentComponent_mat_option_40_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, DocumentComponent_button_48_Template, 4, 1, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, DocumentComponent_table_56_Template, 15, 1, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Upload Documents ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Company Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Select...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, DocumentComponent_mat_option_77_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Financial Year :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Report Type :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "ngx-dropzone", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DocumentComponent_Template_ngx_dropzone_change_95_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "ngx-dropzone-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Drop Files Here!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, DocumentComponent_ngx_dropzone_preview_98_Template, 3, 3, "ngx-dropzone-preview", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-checkbox", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentComponent_Template_button_click_113_listener() { return ctx.saveDocument(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "cloud_upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateDocumentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.years);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reports);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateDocument);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.documents && ctx.documents.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newDocumentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.newDocumentForm.valid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDivider"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_19__["NgxDropzoneComponent"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_19__["ɵb"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckbox"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatOption"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_19__["NgxDropzonePreviewComponent"]], styles: [".card[_ngcontent-%COMP%] {\n  width: 80%;\n  align-self: center;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\nform[_ngcontent-%COMP%] {\n  margin-left: 20%;\n}\n\n.label[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 18px;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 150%;\n}\n\n.label2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n}\n\n.mat-divider[_ngcontent-%COMP%] {\n  border-top-color: #369436;\n}\n\n.table2[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.file1[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N1bWVudC9kb2N1bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kb2N1bWVudC9kb2N1bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbmZvcm17XHJcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcclxufVxyXG5cclxuLmxhYmVse1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDE1MCU7XHJcbn1cclxuXHJcbi5sYWJlbDJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLm1hdC1kaXZpZGVyIHtcclxuICBib3JkZXItdG9wLWNvbG9yOiByZ2IoNTQsIDE0OCwgNTQpO1xyXG59XHJcblxyXG4udGFibGUyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZpbGUxe1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-document',
                templateUrl: './document.component.html',
                styleUrls: ['./document.component.scss']
            }]
    }], function () { return [{ type: _shared_services_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"] }, { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: _shared_services_document_service__WEBPACK_IMPORTED_MODULE_6__["DocumentService"] }, { type: _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }, { type: _authentication_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }, { type: _shared_services_client_service__WEBPACK_IMPORTED_MODULE_10__["ClientService"] }]; }, null); })();


/***/ }),

/***/ "oR8h":
/*!***************************************************!*\
  !*** ./src/app/shared/services/client.service.ts ***!
  \***************************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ClientService {
    constructor(http) {
        this.http = http;
    }
    // tslint:disable-next-line:typedef
    newClient(clientData) {
        // return this.http.post<any>(this.url, clientData);
        return this.http.post('/api/new-client', clientData);
    }
    // tslint:disable-next-line:typedef
    getClient(companyName) {
        return this.http.get('/api/get-client-by-tin/' + companyName);
    }
    // tslint:disable-next-line:typedef
    updateClient(tin, clientData) {
        // @ts-ignore
        return this.http.put(`/api/update-client-by-tin/${tin}`, clientData);
    }
    // tslint:disable-next-line:typedef
    getCompanies() {
        return this.http.get('/api/get-companies');
    }
    // tslint:disable-next-line:typedef
    getAllcompanies() {
        return this.http.get('/api/get-all-client');
    }
}
ClientService.ɵfac = function ClientService_Factory(t) { return new (t || ClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClientService, factory: ClientService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "sTg+":
/*!*************************************************************!*\
  !*** ./src/app/authentication/service/guards/auth.guard.ts ***!
  \*************************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "IHv7");




class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        if (!this.authService.isLoggedIn()) {
            localStorage.clear();
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/default/default.component */ "xS3V");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/home/home.component */ "0Pcf");
/* harmony import */ var _modules_user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/user/user.component */ "EaeI");
/* harmony import */ var _modules_document_document_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/document/document.component */ "oIBA");
/* harmony import */ var _modules_client_client_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/client/client.component */ "AVoT");
/* harmony import */ var _authentication_service_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication/service/guards/auth.guard */ "sTg+");










const routes = [
    {
        path: '',
        component: _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_2__["DefaultComponent"],
        canActivate: [_authentication_service_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                pathMatch: 'full'
            },
            {
                path: 'user',
                component: _modules_user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
                pathMatch: 'full'
            },
            {
                path: 'document',
                component: _modules_document_document_component__WEBPACK_IMPORTED_MODULE_5__["DocumentComponent"],
                pathMatch: 'full'
            },
            {
                path: 'client',
                component: _modules_client_client_component__WEBPACK_IMPORTED_MODULE_6__["ClientComponent"],
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | authentication-authentication-module */ "authentication-authentication-module").then(__webpack_require__.bind(null, /*! ./authentication/authentication.module */ "OpKh")).then(m => m.AuthenticationModule)
    },
    {
        path: '**',
        redirectTo: '/',
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xS3V":
/*!******************************************************!*\
  !*** ./src/app/layouts/default/default.component.ts ***!
  \******************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/component/header/header.component */ "xdqI");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/component/footer/footer.component */ "Nj0y");








class DefaultComponent {
    constructor(mediaObserver) {
        this.mediaObserver = mediaObserver;
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            this.deviceXs = result.mqAlias === 'xs' ? true : false;
        });
    }
    ngOnDestroy() {
        this.mediaSub.unsubscribe();
    }
}
DefaultComponent.ɵfac = function DefaultComponent_Factory(t) { return new (t || DefaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"])); };
DefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultComponent, selectors: [["app-defaultlt"]], decls: 6, vars: 1, consts: [["fxLayout", "column", 3, "deviceXs"], ["fxFlex", "", 1, "working"], ["fxFlex", "", 1, "content"], ["fxLayout", "column"]], template: function DefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ngx-ui-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("deviceXs", ctx.deviceXs);
    } }, directives: [_shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["ɵb"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _shared_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n  background-color: #fff9c4;\n  text-align: center;\n  align-items: center;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n.working[_ngcontent-%COMP%] {\n  background-color: #fff59d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY5YzQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuLndvcmtpbmd7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjU5ZDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-defaultlt',
                templateUrl: './default.component.html',
                styleUrls: ['./default.component.scss']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }]; }, null); })();


/***/ }),

/***/ "xU7L":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/document/dialog-deletefile/dialog-deletefile.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DialogDeletefileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDeletefileComponent", function() { return DialogDeletefileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class DialogDeletefileComponent {
    constructor(data, ngxUiLoaderService, dialogRef) {
        this.data = data;
        this.ngxUiLoaderService = ngxUiLoaderService;
        this.dialogRef = dialogRef;
        if (data) {
            this.userName = data.userName || this.userName;
        }
    }
    ngOnInit() {
    }
    // tslint:disable-next-line:typedef
    confirm() {
        this.ngxUiLoaderService.start();
        this.dialogRef.close(true);
    }
}
DialogDeletefileComponent.ɵfac = function DialogDeletefileComponent_Factory(t) { return new (t || DialogDeletefileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
DialogDeletefileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogDeletefileComponent, selectors: [["app-dialog-deletefile"]], decls: 9, vars: 1, consts: [["mat-dialog-title", ""], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function DialogDeletefileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete File ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogDeletefileComponent_Template_button_click_7_listener() { return ctx.confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hi ", ctx.userName, ". Are you sure you want to Delete File?");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZG9jdW1lbnQvZGlhbG9nLWRlbGV0ZWZpbGUvZGlhbG9nLWRlbGV0ZWZpbGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogDeletefileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialog-deletefile',
                templateUrl: './dialog-deletefile.component.html',
                styleUrls: ['./dialog-deletefile.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "xdqI":
/*!*************************************************************!*\
  !*** ./src/app/shared/component/header/header.component.ts ***!
  \*************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dialog_logout_dialog_logout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialog-logout/dialog-logout.component */ "jkEU");
/* harmony import */ var _config_commons_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/commons.settings */ "b0uj");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _authentication_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../authentication/service/auth/auth.service */ "IHv7");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");













function HeaderComponent_div_11_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_11_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "corporate_fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_11_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "folder_shared");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_div_11_a_5_Template, 4, 0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_div_11_a_6_Template, 4, 0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_div_11_a_7_Template, 4, 0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_11_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "power_settings_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Log Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showClient);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showDocument);
} }
function HeaderComponent_mat_toolbar_row_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar-row", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_mat_toolbar_row_12_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "power_settings_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(dialog, authService) {
        this.dialog = dialog;
        this.authService = authService;
        this.showUser = false;
        this.showDocument = false;
        this.showClient = false;
    }
    ngOnInit() {
        this.privileges = localStorage.getItem(_config_commons_settings__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"].PRIVILEGES);
        // @ts-ignore
        this.showClient = this.privileges.includes('CLIENT.GET' || false || false);
        // @ts-ignore
        this.showDocument = this.privileges.includes('DOCUMENT.GET' || false || false);
        // @ts-ignore
        this.showUser = this.privileges.includes('USER.GET' || false || false);
        this.userName = this.authService.getUserObject().username;
    }
    // tslint:disable-next-line:typedef
    logOut() {
        const dialogRef = this.dialog.open(_dialog_logout_dialog_logout_component__WEBPACK_IMPORTED_MODULE_1__["DialogLogoutComponent"], {
            data: {
                userName: this.authService.getUserObject().username
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.authService.logOut();
            }
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { deviceXs: "deviceXs" }, decls: 13, vars: 3, consts: [["color", "primary"], ["fxLayoutAlign", "space-between center"], [2, "margin-right", "5px"], ["fxLayoutGap", "10px", 4, "ngIf"], ["fxLayoutGap", "10px"], ["mat-raised-button", "", "color", "primary", "routerLink", "/"], ["mat-raised-button", "", "color", "primary", "routerLink", "/user", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "routerLink", "/client", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "routerLink", "/document", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", "routerLink", "/user"], ["mat-raised-button", "", "color", "primary", "routerLink", "/client"], ["mat-raised-button", "", "color", "primary", "routerLink", "/document"], ["mat-raised-button", "", "color", "primary", "routerLink", "/home"], ["mat-raised-button", "", "color", "primary", "routerLink", "/home/document"], ["mat-raised-button", "", "color", "primary", "routerLink", "/home/user"], ["mat-raised-button", "", "color", "primary", "routerLink", "/home/client"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "RTA DMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_div_11_Template, 12, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_mat_toolbar_row_12_Template, 12, 0, "mat-toolbar-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Welcome ", ctx.userName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.deviceXs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _authentication_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, { deviceXs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map