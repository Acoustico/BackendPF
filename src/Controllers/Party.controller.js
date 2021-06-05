const partyCtrl = {}
const party = require('../models/partys.js')


partyCtrl.getParty = (req, res) => { res.json(party); }

partyCtrl.getParty = async (req, res) => {
    const partys = await party.find()
    res.json(partys)
}

partyCtrl.createParty = async (req, res) => {
    const newParty = new party(req.body);
    await newParty.save();
    res.send({ message: 'party created' })
}

partyCtrl.deleteParty = async (req, res) => {
    const partyF = await party.findByIdAndDelete(req.params.id);
    res.send({ message: 'party eliminated', partyF })
}

partyCtrl.updateParty = async (req, res) => {
    const partyF = await party.findByIdAndUpdate(req.params.id, req.body);
    res.send({ message: 'party updated', partyF })
}



module.exports = partyCtrl;