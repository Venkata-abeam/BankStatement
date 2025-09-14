namespace srv;

using {YY1_HOUSEBANKLISTAPI_CDS_0001 as Bank} from './external/YY1_HOUSEBANKLISTAPI_CDS_0001';

service bankstatementapi @(path: '/bankstatementapi') {

    entity HouseBankVH   as
        projection on Bank.YY1_HOUSEBANKLISTAPI {
            key HouseBank,
                BankName,
                CompanyCode,
                CompanyCodeName
        }

    entity MyVirtualEntity {
        key CompanyCode     : String;
            CompanyCodeName : String;
    }

    entity MyEmail {
        key Emailid      : String;
            EmailAddress : String;
    }

    entity CompanyCodeVH as
        projection on MyVirtualEntity {
            key CompanyCode,
                CompanyCodeName,

        }

    entity BankAccountVH as
        projection on Bank.YY1_HOUSEBANKLISTAPI {
            key HouseBank,
                HouseBankAccount,
                BankAccountDescription,
                CompanyCode,
                CompanyCodeName
        }

    entity BankStatement as
        projection on Bank.YY1_HOUSEBANKLISTAPI {
            key HouseBank,
                @CDS.Mandatory : true
            key CompanyCode,
                CompanyCodeName,
            key HouseBankAccount,
                GLAccount,
                BankName,
                BankAccount,
                BankAccountDescription,
                // Virtual fields from React logic
                '' as Currency       : String,
                '' as DateRange      : Date,
                '' as OpeningBalance : String,
                '' as OpenDate       : String,
                '' as ClosingBalance : String,
                '' as CloseDate      : String,
                '' as CashInflow     : String,
                '' as CashOutflow    : String
        };

}

annotate bankstatementapi with @cds.server.body_parser.limit: '20000mb';


annotate bankstatementapi.BankStatement with @(

    UI.SelectionFields: [
        CompanyCode,
        HouseBank,
        HouseBankAccount,
        DateRange
    ],
    UI.LineItem       : [
        {
            $Type             : 'UI.DataField',
            Value             : CompanyCode,
            Label             : 'Company Code',
            @HTML5.CssDefaults: {width: '8em'},
            @UI.Importance    : #High,
        },
        {
            $Type             : 'UI.DataField',
            Value             : CompanyCodeName,
            Label             : 'Companycode Name',
            @HTML5.CssDefaults: {width: '8em'},
            @UI.Importance    : #Low,
        },
        {
            $Type             : 'UI.DataField',
            Value             : HouseBank,
            Label             : 'Housebank',
            @HTML5.CssDefaults: {width: '8em'},
            @UI.Importance    : #High,
        },
        {
            $Type             : 'UI.DataField',
            Value             : HouseBankAccount,
            Label             : 'Housebank Account',
            @HTML5.CssDefaults: {width: '8em'},
            @UI.Importance    : #High,
        },
        {
            $Type             : 'UI.DataField',
            Value             : BankName,
            Label             : 'Bank Name',
            @HTML5.CssDefaults: {width: '8em'},
            @UI.Importance    : #High,
        },
        {
            $Type             : 'UI.DataField',
            Value             : GLAccount,
            Label             : 'GL Account',
            @HTML5.CssDefaults: {width: '8em'},
            @UI.Importance    : #High,
        },
        {
            $Type             : 'UI.DataField',
            Value             : BankAccount,
            Label             : 'Bank Account',
            @HTML5.CssDefaults: {width: '8em'},
            @UI.Importance    : #High,
        },
        {
            $Type             : 'UI.DataField',
            Value             : BankAccountDescription,
            Label             : 'Bankaccount Description',
            @HTML5.CssDefaults: {width: '8em'},
            @UI.Importance    : #Low,
        },
        {
            $Type             : 'UI.DataField',
            Value             : OpenDate,
            Label             : 'Open date',
            @HTML5.CssDefaults: {width: '8em'},
            @UI.Importance    : #High,
        },
        {
            $Type             : 'UI.DataField',
            Value             : OpeningBalance,
            Label             : 'Opening Balance',
            @HTML5.CssDefaults: {width: '8em'},
            @UI.Importance    : #High,
        },
        {
            $Type             : 'UI.DataField',
            Value             : CloseDate,
            Label             : 'Close date',
            @HTML5.CssDefaults: {width: '8em'},
            @UI.Importance    : #High,
        },
        {
            $Type             : 'UI.DataField',
            Value             : ClosingBalance,
            Label             : 'Closing balance',
            @HTML5.CssDefaults: {width: '8em'},
            @UI.Importance    : #High,
        },
        {
            $Type             : 'UI.DataField',
            Value             : CashInflow,
            Label             : 'Cash Inflow',
            @HTML5.CssDefaults: {width: '8em'},
            @UI.Importance    : #Medium,
        },
        {
            $Type             : 'UI.DataField',
            Value             : CashOutflow,
            Label             : 'Cash outflow',
            @HTML5.CssDefaults: {width: '8em'},
            @UI.Importance    : #High,
        },
        {
            $Type             : 'UI.DataField',
            Value             : Currency,
            Label             : 'Currency',
            @HTML5.CssDefaults: {width: '8em'},
            @UI.Importance    : #High,
        }
    ]
);

annotate bankstatementapi.BankStatement with {
    CompanyCode      @(Common: {ValueList: {
        $Type         : 'Common.ValueListType',
        CollectionPath: 'CompanyCodeVH',
        Label         : 'Companycode Valuehelp',
        Parameters    : [{
            $Type            : 'Common.ValueListParameterInOut',
            LocalDataProperty: CompanyCode,
            ValueListProperty: 'CompanyCode',
        }]
    }, });

    HouseBank        @(Common: {
        ValueList: {
        $Type         : 'Common.ValueListType',
        CollectionPath: 'HouseBankVH',
        Label         : 'House Bank Valuehelp',
        Parameters    : [{
            $Type            : 'Common.ValueListParameterInOut',
            LocalDataProperty: HouseBank,
            ValueListProperty: 'HouseBank',
        },{
            $Type            : 'Common.ValueListParameterIn',
            LocalDataProperty: CompanyCode,
            ValueListProperty: 'CompanyCode',
        }],
    }});

    HouseBankAccount @(Common: {ValueList: {
        $Type         : 'Common.ValueListType',
        CollectionPath: 'BankAccountVH',
        Label         : 'Housebank Account Valuehelp',
        Parameters    : [{
            $Type            : 'Common.ValueListParameterInOut',
            LocalDataProperty: HouseBankAccount,
            ValueListProperty: 'HouseBankAccount',
        },{
            $Type            : 'Common.ValueListParameterIn',
            LocalDataProperty: HouseBank,
            ValueListProperty: 'HouseBank',
        }]
    }});

    CompanyCode  @mandatory: true;
};

annotate bankstatementapi.CompanyCodeVH with @(
    UI.SelectionFields: [
        CompanyCode
    ],
    UI.LineItem: [
    {
        $Type             : 'UI.DataField',
        Value             : CompanyCode,
        Label             : 'Company Code',
        @HTML5.CssDefaults: {width: '8em'},
        @UI.Importance    : #High,
    },
    {
        $Type             : 'UI.DataField',
        Value             : CompanyCodeName,
        Label             : 'Companycode Name',
        @HTML5.CssDefaults: {width: '8em'},
        @UI.Importance    : #High,
    },
]

);

annotate bankstatementapi.HouseBankVH with @(
    UI.SelectionFields: [
        HouseBank
    ],
    UI.LineItem: [
    {
        $Type             : 'UI.DataField',
        Value             : HouseBank,
        Label             : 'House Bank',
        @HTML5.CssDefaults: {width: '8em'},
        @UI.Importance    : #High,
    },
    {
        $Type             : 'UI.DataField',
        Value             : BankName,
        Label             : 'Bank Name',
        @HTML5.CssDefaults: {width: '8em'},
        @UI.Importance    : #High,
    }
]

);

annotate bankstatementapi.BankAccountVH with @(
    UI.SelectionFields: [
        HouseBankAccount
    ],
    UI.LineItem: [
    {
        $Type             : 'UI.DataField',
        Value             : HouseBankAccount,
        Label             : 'Housebank Account',
        @HTML5.CssDefaults: {width: '8em'},
        @UI.Importance    : #High,
    },
    {
        $Type             : 'UI.DataField',
        Value             : BankAccountDescription,
        Label             : 'Account Description',
        @HTML5.CssDefaults: {width: '8em'},
        @UI.Importance    : #High,
    },
]
);