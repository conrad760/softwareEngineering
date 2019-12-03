const mongoose = require('mongoose');

const HRSchema = new mongoose.Schema({
    links: {
        type: [String],
        default: []
    }
});

module.exports = HRRole = mongoose.model('hr_role', FinanceRoleSchema);