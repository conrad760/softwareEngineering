const mongoose = require('mongoose');

const FinanceRoleSchema = new mongoose.Schema({
    links: {
        type: [String],
        default: []
    }
});

module.exports = FinanceRole = mongoose.model('fin_role', FinanceRoleSchema);