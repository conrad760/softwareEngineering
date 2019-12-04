import {
    GLOBAL_ADMIN,
    FIN_ADMIN,
    SALES_ADMIN,
    HR_ADMIN,
    ENG_ADMIN
} from '../../dummbie-links';
const roles = (state = [], actions) => {
    switch (actions.type) {
        case 'GLOBAL_ADMIN':
            return GLOBAL_ADMIN;
        case 'FIN_ADMIN':
            return FIN_ADMIN;
        case 'SALES_ADMIN':
            return SALES_ADMIN;
        case 'HR_ADMIN':
            return HR_ADMIN;
        case 'ENG_ADMIN':
            return ENG_ADMIN;
        default:
            return state;
    }
};

export default roles;
