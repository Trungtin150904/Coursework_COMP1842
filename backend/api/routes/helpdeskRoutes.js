const helpdesk = require('../controllers/helpdeskController');
module.exports = app => {
    app
        .route('/helpdesk')
        .get(helpdesk.list_all)
        .post(helpdesk.create_a_helpdesk);

    app
        .route('/helpdesk/:helpdeskId')
        .get(helpdesk.read_a_helpdesk)
        .put(helpdesk.update_a_helpdesk)
        .delete(helpdesk.delete_a_helpdesk);
};