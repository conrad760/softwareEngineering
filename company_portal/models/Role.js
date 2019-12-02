const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
    isAdmin: {
        type: Boolean,
        default: false
    },
    adminType: {
        type: String,
        required: true
    },
    links: {
        type: [String],
        default: []
    }
});

module.exports = Role = mongoose.model('role', RoleSchema);