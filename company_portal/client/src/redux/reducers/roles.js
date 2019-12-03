import {
    GLOBAL_ADMIN,
    FINANCE_ADMIN,
    SALES_ADMIN,
    HR_ADMIN,
    ENGG_ADMIN
} from '../../dummbie-links';
const roles = (state = [], actions) => {
    switch (actions.type) {
        case 'GLOBAL_ADMIN':
            return GLOBAL_ADMIN;
        case 'FINANCE_ADMIN':
            return FINANCE_ADMIN;
        case 'SALES_ADMIN':
            return SALES_ADMIN;
        case 'HR_ADMIN':
            return HR_ADMIN;
        case 'ENGG_ADMIN':
            return ENGG_ADMIN;
        default:
            return state;
    }
};
