const mongoose = require('mongoose');

const EngRoleSchema = new mongoose.Schema({
    links: {
        type: [String],
        default: []
    }
});

module.exports = EngRole = mongoose.model('eng_role', EngRoleSchema);