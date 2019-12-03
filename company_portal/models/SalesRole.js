const mongoose = require('mongoose');

const SalesRoleSchema = new mongoose.Schema({
    links: {
        type: [String],
        default: []
    }
});

module.exports = SalesRole = mongoose.model('sales_role', SalesRoleSchema);