const {Router}=require('express');
const router=Router();

const party=require('./data.json');
const partyCtrl=require('../Controllers/Party.controller')

router.get('/', partyCtrl.getParty);

router.delete('/:title', partyCtrl.deleteParty);

router.put('/:title', partyCtrl.updateParty);

router.post('/', partyCtrl.createParty);

/*router.get('/id',(req,res)=>{
    const {id}=req.params;
    juegos.forEach(juego=>{
        if(juego.ID==id){
            res.json(juego);
        }
    })
})*/

module.exports=router;