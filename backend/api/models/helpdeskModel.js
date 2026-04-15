const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HelpdeskSchema = new Schema(
    {
        issue: {
            type: String,
            required: 'Issue cannot be blank'
        },
        response: {
            type: String,
            required: 'Response cannot be blank'
        },
        category: {
            type: String,
            required: 'Category cannot be blank'
        }
    },
    { collection: 'helpdesk' }
);

module.exports = mongoose.model('Helpdesk', HelpdeskSchema);
