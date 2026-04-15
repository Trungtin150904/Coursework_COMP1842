const mongoose = require('mongoose');
const Helpdesk = mongoose.model('Helpdesk');

exports.list_all = async (req, res) => {
    try {
        const helpdesk = await Helpdesk.find({});
        res.json(helpdesk);
    } catch (err) {
        res.send(err);
    }
};

exports.create_a_helpdesk = async (req, res) => {
    try {
        const new_helpdesk = new Helpdesk(req.body);
        const helpdesk = await new_helpdesk.save();
        res.json(helpdesk);
    } catch (err) {
        res.send(err);
    }
};

exports.read_a_helpdesk = async (req, res) => {
    try {
        const helpdesk = await Helpdesk.findById(req.params.helpdeskId);
        res.json(helpdesk);
    } catch (err) {
        res.send(err);
    }
};

exports.update_a_helpdesk = async (req, res) => {
    try {
        const helpdesk = await Helpdesk.findOneAndUpdate(
            { _id: req.params.helpdeskId },
            req.body,
            { new: true }
        );
        res.json(helpdesk);
    } catch (err) {
        res.send(err);
    }
};

exports.delete_a_helpdesk = async (req, res) => {
    try {
        await Helpdesk.findByIdAndDelete(req.params.helpdeskId);
        res.json({
            message: 'Helpdesk successfully deleted',
            _id: req.params.helpdeskId
        });
    } catch (err) {
        res.send(err);
    }
};