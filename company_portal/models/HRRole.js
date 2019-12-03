const mongoose = require('mongoose');

const HRRoleSchema = new mongoose.Schema({
    links: {
        type: [String],
        default: []
    }
});

module.exports = HRRole = mongoose.model('hr_role', HRRoleSchema);