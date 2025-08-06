sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/library",
    "sap/ui/export/library",
    "sap/m/library",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Text",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter",
    "sap/m/SearchField",
    "sap/ui/table/Column",
    "sap/m/Column",
    "sap/m/Label",
    "sap/ui/model/type/String",
    "sap/ui/comp/library",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/Fragment",
    "sap/ui/core/message/Message",
    "sap/ushell/Container",
    "sap/ui/export/Spreadsheet",
    "sap/m/MessageBox"
], (Controller, coreLibrary, exportLibrary, mobileLibrary, Dialog, Button, Text, Sorter, Filter, SearchField, UIColumn, MColumn, Label,
    TypeString, compLibrary, FilterOperator, Fragment, Message, Container, Spreadsheet, MessageBox ) => {
    "use strict";
    var DateoModel, DateValue1, DateValue2;
    var ValueState = coreLibrary.ValueState, EdmType = exportLibrary.EdmType, DialogType = mobileLibrary.DialogType;
    var oHouseBankModel, oHouseBankAccModel, oCompanyCodeModel, userEMail;
    var oStatementDataModel = new sap.ui.model.json.JSONModel();
    var oBusyDialog = new sap.m.BusyDialog({
        title: "Loading Data",
        text: "Please wait..."
    })
    return Controller.extend("bankstatement.controller.bankstatement_view", {
        onInit() {
            DateoModel = new sap.ui.model.json.JSONModel({
                start: '',
                end: ''
            });
            if (sap.ushell && sap.ushell.Container) {
                var oUserInfo = sap.ushell.Container.getService("UserInfo");
                if (oUserInfo) {
                    userEMail = oUserInfo.getEmail();
                    if (!userEMail) {
                        userEMail = 'jzhou@gradiant.com';
                    }
                } else {
                    userEMail = 'jzhou@gradiant.com';
                }
            } else {
                userEMail = 'jzhou@gradiant.com';
            }
        },
        handleDateChange: function (oEvent) {
            var that = this;
            var oRangeDate = [],
                sFrom = oEvent.getParameter("from"),
                sTo = oEvent.getParameter("to"),
                svalue = oEvent.getParameter("value"),
                bValid = oEvent.getParameter("valid"),
                oEventSource = oEvent.getSource();

            if (bValid) {
                oEventSource.setValueState(ValueState.None);
                oEventSource.setValueStateText("");
                DateValue1 = sFrom;
                DateValue2 = sTo;
                DateoModel = new sap.ui.model.json.JSONModel({
                    start: sFrom,
                    end: sTo
                });
                DateoModel.refresh();
                that.getView().setModel(DateoModel, "DateModel");
            } else {
                oEventSource.setValueState(ValueState.Error);
                oEventSource.setValueStateText("Invalid Date Range");
            }
        },
        housebankVH: async function (oEvent) {
            var oView = this.getView();
            var that = this;
            var oFilter = [], oCompanyCodefilter;
            var cCode = this.getView().byId("id_companyCode").getTokens();
            if (cCode.length > 0) {
                var oHouseBankModel = this.getOwnerComponent().getModel("HouseBankVH");
                oBusyDialog.open();
                var oCompanyCodeMulti = [];
                cCode.map(function (oToken){
                    oCompanyCodeMulti.push(new sap.ui.model.Filter("CompanyCode", "EQ", oToken.getText()));
                });
                oCompanyCodefilter = new sap.ui.model.Filter({
                    filters: oCompanyCodeMulti,
                    and: false
                });
                oFilter.push(oCompanyCodefilter);
                let houseBankVHresults = await this._getHouseBank(oHouseBankModel, oFilter);
                if (houseBankVHresults.length > 0) {
                    oHouseBankModel = new sap.ui.model.json.JSONModel();
                    var oHouseBanks = [];
                    for (var i = 0; i < houseBankVHresults.length; i++) {
                        var HouseBank = {};
                        HouseBank.HouseBank = houseBankVHresults[i].HouseBank;
                        HouseBank.BankName = houseBankVHresults[i].BankName;
                        oHouseBanks.push(HouseBank);
                    }
                    oHouseBankModel.setData(oHouseBanks);
                    that.getView().setModel(oHouseBankModel, "HouseBanks");
                    oHouseBankModel.refresh();
                }
                if (!this._pValueHelpDialogHouseBank) {
                    this._pValueHelpDialogHouseBank = Fragment.load({
                        id: oView.getId(),
                        name: "bankstatement.view.BankVH",
                        controller: this
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        return oDialog;
                    })
                }
                oBusyDialog.close();
                this._pValueHelpDialogHouseBank.then(function (oDialog) {
                    oDialog.open();
                })
            } else {
                this.oCcodeHouseBankMessageDialog = new Dialog({
                    type: DialogType.Message,
                    title: 'Error',
                    state: ValueState.Error,
                    content: new Text({ text: "Please Select Company Code" }),
                    beginButton: new Button({
                        type: DialogType.Emphasized,
                        text: "Ok",
                        press: function () {
                            this.oCcodeHouseBankMessageDialog.close();
                        }.bind(this)
                    })
                });
                this.oCcodeHouseBankMessageDialog.open();
            }
        },
        onValueHelpHouseBankClose: function (oEvent) {
            var oSelectedItem = oEvent.getParameter("selectedItem");
            var shouseBank = this.getView().byId('id_housebank');
            if (oSelectedItem) {
                var oValue = oSelectedItem.getTitle();
                shouseBank.setValue(oValue);
            }
        },
        _getHouseBank: async function (oHouseBankModel, oFilter) {
            return new Promise((resolve, reject) => {
                oHouseBankModel.read("/HouseBankVH", {
                    filters: oFilter,
                    urlParameters: { "$top": 999999 },
                    success: function (response) {
                        resolve(response.results);
                    }.bind(this),
                    error: function (error) {
                        reject(error);
                    }.bind(this)
                });
            });
        },
        housebankAccVH: async function () {
            var oView = this.getView();
            var that = this;
            var aFilter = [], oCompanyCodeFilter, oHouseBankFilter;
            var oCompanyCodeMulti = [],oHouseBankMulti = [];
            var oHouseBankAcc  = oView.byId("id_housebank").getTokens();
            var oCompanyCoode  = oView.byId("id_companyCode").getTokens();
            if (oHouseBankAcc.length > 0) {
                oCompanyCoode.map(function (oToken){
                    oCompanyCodeMulti.push(new sap.ui.model.Filter("CompanyCode", "EQ", oToken.getText()));
                });
                oCompanyCodeFilter = new sap.ui.model.Filter({
                    filters: oCompanyCodeMulti,
                    and: false
                });
                aFilter.push(oCompanyCodeFilter);
                oHouseBankAcc.map(function (oToken){
                    oHouseBankMulti.push(new sap.ui.model.Filter("HouseBank", "EQ", oToken.getText()));
                });
                oHouseBankFilter = new sap.ui.model.Filter({
                    filters: oHouseBankMulti,
                    and: false
                });
                aFilter.push(oHouseBankFilter);
                var oHouseBankAccModel = this.getOwnerComponent().getModel("HouseBankAccVH");
                oBusyDialog.open();
                let houseBankAccVHresults = await this._getHouseAccBank(oHouseBankAccModel, aFilter);
                console.log(houseBankAccVHresults);
                if (houseBankAccVHresults.length > 0) {
                    oHouseBankAccModel = new sap.ui.model.json.JSONModel();
                    var oHouseBankAccounts = [];
                    for (var i = 0; i < houseBankAccVHresults.length; i++) {
                        var HouseBankAcc = {};
                        HouseBankAcc.HouseBankAccount = houseBankAccVHresults[i].HouseBankAccount;
                        HouseBankAcc.BankAccountDescription = houseBankAccVHresults[i].BankAccountDescription;
                        oHouseBankAccounts.push(HouseBankAcc);
                    }
                    oHouseBankAccModel.setData(oHouseBankAccounts);
                    that.getView().setModel(oHouseBankAccModel, "HouseBankAccounts");
                    oHouseBankAccModel.refresh();
                }
                if (!this._pValueHelpDialogHouseBankAcc) {
                    this._pValueHelpDialogHouseBankAcc = Fragment.load({
                        id: oView.getId(),
                        name: "bankstatement.view.HouseBankAccountVH",
                        controller: this
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        return oDialog;
                    })
                }
                oBusyDialog.close();
                this._pValueHelpDialogHouseBankAcc.then(function (oDialog) {
                    oDialog.open();
                });
            } else {
                this.oCcodeMessageDialog = new Dialog({
                    type: DialogType.Message,
                    title: 'Error',
                    state: ValueState.Error,
                    content: new Text({ text: "Please Select House Bank" }),
                    beginButton: new Button({
                        type: DialogType.Emphasized,
                        text: "Ok",
                        press: function () {
                            this.oCcodeMessageDialog.close();
                        }.bind(this)
                    })
                });
                this.oCcodeMessageDialog.open();
            }

        },
        onValueHelpHouseBankAccClose: function (oEvent) {
            var oSelectedItem = oEvent.getParameter("selectedItem");
            var shouseBankAcc = this.getView().byId('id_housebankacc');
            if (oSelectedItem) {
                var oValue = oSelectedItem.getTitle();
                var oValueDesc = oSelectedItem.getDescription();
                shouseBankAcc.setValue(oValue);
            }
        },
        ccodeVH: async function (oEvent) {
            var oView = this.getView();
            var that = this;
            var aFilter = [];
            var ouserFilter = new sap.ui.model.Filter("EmailAddress", "EQ", userEMail);
            aFilter.push(ouserFilter);
            var ocCodeModel = this.getOwnerComponent().getModel("CompanyCodeVH");
            oBusyDialog.open();
            let companyCodeVHresults = await this._getCompanyCode(ocCodeModel, aFilter);
            if (companyCodeVHresults.length > 0) {
                oCompanyCodeModel = new sap.ui.model.json.JSONModel();
                var oCompanyCodes = [];
                for (var i = 0; i < companyCodeVHresults.length; i++) {
                    var Companycode = {};
                    Companycode.CompanyCode = companyCodeVHresults[i].CompanyCode;
                    Companycode.CompanyCodeName = companyCodeVHresults[i].CompanyCodeName;
                    oCompanyCodes.push(Companycode);
                }
                oCompanyCodeModel.setData(oCompanyCodes);
                that.getView().setModel(oCompanyCodeModel, "CompanyCodes");
                oCompanyCodeModel.refresh();
            }
            if (!this._pValueHelpDialogCompanyCode) {
                this._pValueHelpDialogCompanyCode = Fragment.load({
                    id: oView.getId(),
                    name: "bankstatement.view.CCodeVH",
                    controller: this
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    return oDialog;
                })
            }
            oBusyDialog.close();
            this._pValueHelpDialogCompanyCode.then(function (oDialog) {
                oDialog.open();
            });
        },
        onValueHelpCCodeClose: function (oEvent) {  
            var oSelectedItem = oEvent.getParameter("selectedItem");
            var sCode = this.getView().byId('id_companyCode');
            if (oSelectedItem) {
                var oValue = oSelectedItem.getTitle();
                sCode.setValue(oValue);
            }
        },
        _getHouseAccBank: async function (oHouseBankAccModel, oFilter) {
            return new Promise((resolve, reject) => {
                oHouseBankAccModel.read("/BankAccountVH", {
                    filters: oFilter,
                    urlParameters: { "$top": 999999 },
                    success: function (response) {
                        resolve(response.results);
                    }.bind(this),
                    error: function (error) {
                        reject(error);
                    }.bind(this)
                });
            });
        },
        _getCompanyCode: async function (oCCodeModel, oFilter) {
            return new Promise((resolve, reject) => {
                oCCodeModel.read("/CompanyCodeVH", {
                    filters: [oFilter],
                    urlParameters: { "$top": 999999 },
                    success: function (response) {
                        resolve(response.results);
                    }.bind(this),
                    error: function (error) {
                        reject(error);
                    }.bind(this)
                });
            });
        },
        _getBankStatement: async function (oBankModel, oFilter) {
            return new Promise((resolve, reject) => {
                oBankModel.read("/BankStatement", {
                    filters: oFilter,
                    urlParameters: { "$top": 999999 },
                    success: function (response) {
                        resolve(response.results);
                    }.bind(this),
                    error: function (error) {
                        reject(error);
                    }.bind(this)
                });
            });
        },
        onSearch: async function (oEvent) {
            var oCompanyCode = this.getView().byId("id_companyCode").getTokens();
            var oHouseBank = this.getView().byId("id_housebank").getTokens();
            var oHouseBankAccount = this.getView().byId("id_housebankacc").getTokens();
            var oTitle = this.getView().byId("id_title");
            var Date1 = DateValue1;
            var Date2 = DateValue2;
            if (oCompanyCode.length < 0 || Date1 === undefined || Date2 === undefined || Date1 === '' || Date2 === '') {
                this.oFillMessageDialog = new Dialog({
                    type: DialogType.Message,
                    title: 'Error',
                    state: ValueState.Error,
                    content: new Text({ text: "CompanyCode & Date are Mandatory" }),
                    beginButton: new Button({
                        type: DialogType.Emphasized,
                        text: "Ok",
                        press: function () {
                            this.oFillMessageDialog.close();
                        }.bind(this)
                    })
                });
                this.oFillMessageDialog.open();
            } else {
                oBusyDialog.open();
                var aFilters = [];
                var companycodeFilter, dateRangeFilter, houseBankFilter, houseBankAccFilter;
                var oCompanyCodeMulti = [],oHouseBankMulti = [], oHouseBankAccMulti = [];
                var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "yyyy-MM-dd" });
                var formattedDate1 = oDateFormat.format(new Date(Date1));
                var formattedDate2 = oDateFormat.format(new Date(Date2));
                if (oCompanyCode.length > 0) {
                    oCompanyCode.map(function (oToken){
                        oCompanyCodeMulti.push(new sap.ui.model.Filter("CompanyCode", "EQ", oToken.getText()));
                    });
                    companycodeFilter = new sap.ui.model.Filter({
                        filters: oCompanyCodeMulti,
                        and: false
                    });
                    aFilters.push(companycodeFilter);
                }
                if (formattedDate1 && formattedDate2) {
                    dateRangeFilter = new sap.ui.model.Filter(
                        "DateRange", "BT", formattedDate1, formattedDate2
                    );
                    aFilters.push(dateRangeFilter);
                } else {
                    dateRangeFilter = new sap.ui.model.Filter(
                        "DateRange", "BT", formattedDate1, formattedDate2
                    );
                    aFilters.push(dateRangeFilter);
                }
                if (oHouseBank.length > 0) {
                    oHouseBank.map(function (oToken){
                        oHouseBankMulti.push(new sap.ui.model.Filter("HouseBank", "EQ", oToken.getText()));
                    });
                    houseBankFilter = new sap.ui.model.Filter({
                        filters: oHouseBankMulti,
                        and: false
                    });
                    aFilters.push(houseBankFilter);
                }
                if (oHouseBankAccount.length > 0) {
                    oHouseBankAccount.map(function (oToken){
                        oHouseBankAccMulti.push(new sap.ui.model.Filter("HouseBankAccount", "EQ", oToken.getText()));
                    });
                    houseBankAccFilter = new sap.ui.model.Filter({
                        filters: oHouseBankAccMulti,
                        and: false
                    });
                    aFilters.push(houseBankAccFilter);
                }
                var oBankStatementModel = this.getOwnerComponent().getModel();
                let results = await this._getBankStatement(oBankStatementModel, aFilters);
                if (results.length > 0) {
                    oStatementDataModel.setData(results);
                    this.getView().setModel(oStatementDataModel, "BankStatements");
                    oStatementDataModel.refresh();
                    var sTitle = 'Bank Statement Report' + '(' + results.length + ')';
                    oTitle.setText(sTitle)
                } else {
                    results = [];
                    oStatementDataModel.setData(results);
                    this.getView().setModel(oStatementDataModel, "BankStatements");
                    oStatementDataModel.refresh();
                    var sTitle = 'Bank Statement Report';
                    oTitle.setText(sTitle)
                }
                oBusyDialog.close();
            }
        },
        onValueHelpHouseBankSearch: async function (oEvent) {
            var sValue = oEvent.getParameter("value");
            var oFilter = [], oCompanyCodefilter, ohouseBankfilter;
            var that = this;
            var cCode = this.getView().byId("id_companyCode").getTokens();
            if (cCode.length > 0) {
                var oCompanyCodeMulti = [];
                cCode.map(function (oToken){
                    oCompanyCodeMulti.push(new sap.ui.model.Filter("CompanyCode", "EQ", oToken.getText()));
                });
                oCompanyCodefilter = new sap.ui.model.Filter({
                    filters: oCompanyCodeMulti,
                    and: false
                });
                oFilter.push(oCompanyCodefilter);
            }
            if (sValue) {
                ohouseBankfilter = new sap.ui.model.Filter("HouseBank", "EQ", sValue);
                oFilter.push(ohouseBankfilter);
            }
            if (!cCode && !sValue) {
                oFilter = []
            }
            var oHouseBankModel = this.getOwnerComponent().getModel("HouseBankVH");
            let houseBankVHresults = await this._getHouseBank(oHouseBankModel, oFilter);
            if (houseBankVHresults.length > 0) {
                oHouseBankModel = new sap.ui.model.json.JSONModel();
                var oHouseBanks = [];
                for (var i = 0; i < houseBankVHresults.length; i++) {
                    var HouseBank = {};
                    HouseBank.HouseBank = houseBankVHresults[i].HouseBank;
                    HouseBank.BankName = houseBankVHresults[i].BankName;
                    oHouseBanks.push(HouseBank);
                }
                oHouseBankModel.setData(oHouseBanks);
                that.getView().setModel(oHouseBankModel, "HouseBanks");
                oHouseBankModel.refresh();
            }

        },
        onValueHelpCCodeSearch: async function (oEvent) {
            var sValue = oEvent.getParameter("value");
            var oFilter = [], oCompanyCodefilter;
            var that = this;
            if (sValue) {
                oCompanyCodefilter = new sap.ui.model.Filter("CompanyCode", "EQ", sValue);
                oFilter.push(oCompanyCodefilter);
            } else {
                oFilter = [];
            }
            var ocCodeModel = this.getOwnerComponent().getModel("CompanyCodeVH");
            oBusyDialog.open();
            let companyCodeVHresults = await this._getCompanyCode(ocCodeModel, oFilter);
            if (companyCodeVHresults.length > 0) {
                oCompanyCodeModel = new sap.ui.model.json.JSONModel();
                var oCompanyCodes = [];
                for (var i = 0; i < companyCodeVHresults.length; i++) {
                    var Companycode = {};
                    Companycode.CompanyCode = companyCodeVHresults[i].CompanyCode;
                    Companycode.CompanyCodeName = companyCodeVHresults[i].CompanyCodeName;
                    oCompanyCodes.push(Companycode);
                }
                oCompanyCodeModel.setData(oCompanyCodes);
                that.getView().setModel(oCompanyCodeModel, "CompanyCodes");
                oCompanyCodeModel.refresh();
            }
            oBusyDialog.close();
        },
        OnVHccodeSelected: function (oEvent) {
            var oMultiInputSelected = this.getView().byId('id_ccode_value_help'),
                oTable = this.getView().byId('idccodevaluehelp');
            var oSelected = oEvent.getParameter('selected');
            var oRemoved = oEvent.getParameter('removed');
            var oSelectedAll = oEvent.getParameter('selectAll');
            var aSelectedItems = oTable.getSelectedItems();
            var oValue = oEvent.getParameter('listItem').getCells()[0].getText();
            var removedTokens = oMultiInputSelected.getTokens();
            if (oSelectedAll === true){
                var oTableData = oTable.getModel("CompanyCodes");
                var aAllData = oTableData.getProperty("/");
                var index = -1;
                for (var i = 0; i < aAllData.length; i++) {
                    oMultiInputSelected.addToken(new sap.m.Token({
                        key: aAllData[i].CompanyCode, text: aAllData[i].CompanyCode
                    }));
                }
                oMultiInputSelected.removeToken(index);
            }
            else if (oSelected === true) {
                oMultiInputSelected.addToken(new sap.m.Token({
                    key: oValue, text: oValue
                }));
            } else {
                for (var i = 0; i < removedTokens.length; i++) {
                    if (removedTokens[i].getKey() === oValue || removedTokens[i].getText() === oValue) {
                        index = i;
                        break;
                    }
                }
                oMultiInputSelected.removeToken(index);

            }
        },
        onccodeSearch: async function (oEvent) {
            var ocCodeModel = this.getOwnerComponent().getModel("CompanyCodeVH"),
                oTable = this.getView().byId('idccodevaluehelp'),
                sQuery = oEvent.getSource().getValue(),
                that = this,
                oFilter = [],
                oCompanyCodefilter,
                oEmailfilter;
            if (userEMail) {
                oEmailfilter = new sap.ui.model.Filter("EmailAddress", "EQ", userEMail);
                oFilter.push(oEmailfilter);
            }
            if (sQuery) {
                oCompanyCodefilter = new sap.ui.model.Filter("CompanyCode", "EQ", sQuery);
                oFilter.push(oCompanyCodefilter);
            }

            oTable.removeSelections(true);
            let companyCodeVHresults = await this._getCompanyCode(ocCodeModel, oFilter);
            if (companyCodeVHresults.length > 0) {
                oCompanyCodeModel = new sap.ui.model.json.JSONModel();
                var oCompanyCodes = [];
                for (var i = 0; i < companyCodeVHresults.length; i++) {
                    var Companycode = {};
                    Companycode.CompanyCode = companyCodeVHresults[i].CompanyCode;
                    Companycode.CompanyCodeName = companyCodeVHresults[i].CompanyCodeName;
                    oCompanyCodes.push(Companycode);
                }
                oCompanyCodeModel.setData(oCompanyCodes);
                that.getView().setModel(oCompanyCodeModel, "CompanyCodes");
                oCompanyCodeModel.refresh();
            }
        },
        okccodeVHDialog: function(oEvent){
            var oTable = this.getView().byId('idccodevaluehelp');
            var oSelectedTokens = this.getView().byId('id_ccode_value_help');
            var oMultiInput = this.getView().byId('id_companyCode');
            oMultiInput.removeAllTokens();
            var aTokens = oSelectedTokens.getTokens();
            aTokens.forEach(function (oToken) {
                if (oToken) {
                    oMultiInput.addToken(oToken);
                }
            });
            if(aTokens.length === 0){
                oMultiInput.removeAllTokens();
            }
            this.getView().byId("ccodeVHDialog").close();
            oTable.removeSelections(true);
        },
        closeccodeVHDialog: function(oEvent){
            var oSelectedTokens = this.getView().byId('id_ccode_value_help');
            var oTable = this.getView().byId('idccodevaluehelp');
            oTable.removeSelections(true);
            oSelectedTokens.removeAllTokens();
            this.getView().byId("ccodeVHDialog").close();
        },
        onclearccodeVH: function(oEvent){
            var oTable = this.getView().byId('idccodevaluehelp');
            var oMultiInputSelected = this.getView().byId('id_ccode_value_help');
            oTable.removeSelections(true);
            oMultiInputSelected.removeAllTokens();
        },
        OnVHbankSelected: function(oEvent){
            var oMultiInputSelected = this.getView().byId('id_bank_value_help'),
            oTable = this.getView().byId('idbankvaluehelp');
            var oSelected = oEvent.getParameter('selected');
            var oRemoved = oEvent.getParameter('removed');
            var oSelectedAll = oEvent.getParameter('selectAll');
            var aSelectedItems = oTable.getSelectedItems();
            var oValue = oEvent.getParameter('listItem').getCells()[0].getText();
            var removedTokens = oMultiInputSelected.getTokens();
            if (oSelectedAll === true){
                var oTableData = oTable.getModel("HouseBanks");
                var aAllData = oTableData.getProperty("/");
                var index = -1;
                for (var i = 0; i < aAllData.length; i++) {
                    oMultiInputSelected.addToken(new sap.m.Token({
                        key: aAllData[i].HouseBank, text: aAllData[i].HouseBank
                    }));
                }
                oMultiInputSelected.removeToken(index);
            }
            else if (oSelected === true) {
                oMultiInputSelected.addToken(new sap.m.Token({
                    key: oValue, text: oValue
                }));
            } else {
                for (var i = 0; i < removedTokens.length; i++) {
                    if (removedTokens[i].getKey() === oValue || removedTokens[i].getText() === oValue) {
                        index = i;
                        break;
                    }
                }
                oMultiInputSelected.removeToken(index);

            }
        },
        onValueHelpHouseBankok: function(oEvent){
            var oTable = this.getView().byId('idbankvaluehelp');
            var oSelectedTokens = this.getView().byId('id_bank_value_help');
            var oMultiInput = this.getView().byId('id_housebank');
            oMultiInput.removeAllTokens();
            var aTokens = oSelectedTokens.getTokens();
            aTokens.forEach(function (oToken) {
                if (oToken) {
                    oMultiInput.addToken(oToken);
                }
            });
            if(aTokens.length === 0){
                oMultiInput.removeAllTokens();
            }
            this.getView().byId("selectBankVH").close();
            oTable.removeSelections(true);
        },
        onValueHelpHouseBankClose: function(oEvent){
            var oSelectedTokens = this.getView().byId('id_bank_value_help');
            var oTable = this.getView().byId('idbankvaluehelp');
            oTable.removeSelections(true);
            oSelectedTokens.removeAllTokens();
            this.getView().byId("selectBankVH").close();
        },
        OnVHbankaccSelected: function(oEvent){
            var oMultiInputSelected = this.getView().byId('id_bankacc_value_help'),
            oTable = this.getView().byId('idbankaccvaluehelp');
            var oSelected = oEvent.getParameter('selected');
            var oRemoved = oEvent.getParameter('removed');
            var oSelectedAll = oEvent.getParameter('selectAll');
            var aSelectedItems = oTable.getSelectedItems();
            var oValue = oEvent.getParameter('listItem').getCells()[0].getText();
            var removedTokens = oMultiInputSelected.getTokens();
            if (oSelectedAll === true){
                var oTableData = oTable.getModel("HouseBankAccounts");
                var aAllData = oTableData.getProperty("/");
                var index = -1;
                for (var i = 0; i < aAllData.length; i++) {
                    oMultiInputSelected.addToken(new sap.m.Token({
                        key: aAllData[i].HouseBankAccount, text: aAllData[i].HouseBankAccount
                    }));
                }
                oMultiInputSelected.removeToken(index);
            }
            else if (oSelected === true) {
                oMultiInputSelected.addToken(new sap.m.Token({
                    key: oValue, text: oValue
                }));
            } else {
                for (var i = 0; i < removedTokens.length; i++) {
                    if (removedTokens[i].getKey() === oValue || removedTokens[i].getText() === oValue) {
                        index = i;
                        break;
                    }
                }
                oMultiInputSelected.removeToken(index);

            }
        },
        onValueHelpHouseBankAccok: function(oEvent){
            var oTable = this.getView().byId('idbankaccvaluehelp');
            var oSelectedTokens = this.getView().byId('id_bankacc_value_help');
            var oMultiInput = this.getView().byId('id_housebankacc');
            oMultiInput.removeAllTokens();
            var aTokens = oSelectedTokens.getTokens();
            aTokens.forEach(function (oToken) {
                if (oToken) {
                    oMultiInput.addToken(oToken);
                }
            });
            if(aTokens.length === 0){
                oMultiInput.removeAllTokens();
            }
            this.getView().byId("selectBankAccVH").close();
            oTable.removeSelections(true);
        },
        onValueHelpHouseBankAccClose: function(oEvent){
            var oSelectedTokens = this.getView().byId('id_bankacc_value_help');
            var oTable = this.getView().byId('idbankaccvaluehelp');
            oTable.removeSelections(true);
            oSelectedTokens.removeAllTokens();
            this.getView().byId("selectBankAccVH").close();
        },
        onclearbankaccVH: function(){
            var oTable = this.getView().byId('idbankaccvaluehelp');
            var oMultiInputSelected = this.getView().byId('id_bankacc_value_help');
            oTable.removeSelections(true);
            oMultiInputSelected.removeAllTokens();
        },
        onExport: function(){
            var aCols, oRowBinding, oSettings, oSheet, oTable;
            if (!this._oTable) {
                this._oTable = this.byId('table1');
            }
            oTable = this._oTable;
            oRowBinding = oTable.getBinding('rows');
            aCols = this._createColumnConfig();

            oSettings = {
                workbook: {
                    columns: aCols,
                    hierarchyLevel: 'Level'
                },
                dataSource: oRowBinding,
                fileName: 'Bank Statement.xlsx'
            };

            oSheet = new Spreadsheet(oSettings);
            oSheet.build().finally(function () {
                oSheet.destroy();
            });

        },
        _createColumnConfig: function () {
            var aCols = [];

            aCols.push({
                label: 'Company Code',
                type: EdmType.String,
                property: 'CompanyCode'
            });

            aCols.push({
                label: 'CompanyCode Name',
                property: 'CompanyCodeName',
                type: EdmType.String
            });

            aCols.push({
                label: 'House Bank',
                property: 'HouseBank',
                type: EdmType.String
            });

            aCols.push({
                label: 'HouseBank Account',
                property: 'HouseBankAccount',
                type: EdmType.String
            });

            aCols.push({
                label: 'Bank Name',
                property: 'BankName',
                type: EdmType.String
            });

            aCols.push({
                label: 'BankAccount',
                property: 'BankAccount',
                type: EdmType.String
            });
            aCols.push({
                label: 'BankAccount Description',
                property: 'BankAccountDescription',
                type: EdmType.String
            });

            aCols.push({
                label: 'Opening Balance',
                property: 'OpeningBalance',
                type: EdmType.Decimal
            });

            aCols.push({
                label: 'Opening Date',
                property: 'OpenDate',
                type: EdmType.String
            });

            aCols.push({
                label: 'Closing Balance',
                property: 'ClosingBalance',
                type: EdmType.Decimal
            });

            aCols.push({
                label: 'Close Date',
                property: 'CloseDate',
                type: EdmType.String
            });

            aCols.push({
                label: 'CashIn flow',
                property: 'CashInflow',
                type: EdmType.Decimal
            });

            aCols.push({
                label: 'CashOut flow',
                property: 'CashOutflow',
                type: EdmType.Decimal
            });

            return aCols;
        }
    });
});