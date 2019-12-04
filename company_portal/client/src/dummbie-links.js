const GLOBAL_ADMIN = [
    {
        link: 'manage',
        linkName: 'Manage User Account',
        icon: ' fas fa-person-carry fa-2x '
    },
    {
        link: 'assignRoles',
        linkName: 'Assign Roles',
        icon: ' far fa-file fa-2x '
    },
    {
        link: 'help',
        linkName: 'Help Desk',
        icon: 'fas fa-hands-helping fa-2x '
    }
];
const FINANCE_ADMIN = [
    {
        link: 'finance_report',
        linkName: 'Finance Reports',
        icon: ' far fa-file fa-2x '
    },
    {
        link: 'payable',
        linkName: 'Accounts Payable',
        icon: ' fa fa-money-check-alt fa-2x '
    },
    {
        link: 'receivable',
        linkName: 'Accounts Receivables',
        icon: ' fas fa-person-carry fa-2x '
    },
    {
        link: 'tax',
        linkName: 'Tax',
        icon: ' fas fa-file-chart-pie fa-2x '
        
    }
];
const SALES_ADMIN = [
    {
        link: 'sales_report',
        linkName: 'Sales Reports',
        icon: ' far fa-file fa-2x '
    },
    {
        link: 'lead',
        linkName: 'Sales Leads',
        icon: ' fas fa-file-chart-pie fa-2x '
    },
    {
        link: 'demo',
        linkName: 'Sales Demo',
        icon: ' fas fa-layer-group fa-2x '
    }
];
const HR_ADMIN = [
    {
        link: 'NewHire',
        linkName: 'New Hire',
        icon: ' far fa-file fa-2x '
    },
    {
        link: 'onBoarding',
        linkName: 'On-Boarding',
        icon: ' fas fa-layer-group fa-2x '
    },
    {
        link: 'benefit',
        linkName: 'Benefits',
        icon: 'fas fa-hands-helping fa-2x '
    },
    {
        link: 'payRoll',
        linkName: 'Payroll',
        icon: ' fas fa-money-check-alt fa-2x '
    },
    {
        link: 'term',
        linkName: 'Terminations',
        icon: ' fas fa-clock fa-2x '
    },
    {
        link: 'hrReport',
        linkName: 'HR Reports',
        icon: ' fas fa-file-chart-pie fa-2x '
    }
];
const ENGG_ADMIN = [
    {
        link: 'appMonitor',
        linkName: 'Application Monitoring',
        icon: ' fas fa-tv fa-2x '
    },
    {
        link: 'techSupport',
        linkName: 'Tech Support',
        icon: 'fas fa-hands-helping fa-2x '
    },
    {
        link: 'appDevelopment',
        linkName: 'App Development',
        icon: ' fas fa-layer-group fa-2x '
        
    },
    {
        link: 'appAdmin',
        linkName: 'App Admin',
        icon: ' far fa-file fa-2x '
    },
    {
        link: 'releaseManagement',
        linkName: 'Release Management',
        icon: ' fas fa-file-chart-pie fa-2x '
    }
];

export default {
    GLOBAL_ADMIN,
    FINANCE_ADMIN,
    SALES_ADMIN,
    HR_ADMIN,
    ENGG_ADMIN
};
