const roles = ( state = [], actions) => {
    switch(actions.type) {
        case 'GLOBAL_ADMIN':
            return state
        case 'FINANCE_ADMIN':
            return state
        case 'SALES_ADMIN':
            return state
        case 'HR_ADMIN':
            return state
        case 'ENGG_ADMIN':
            return state
        default:
    }
}