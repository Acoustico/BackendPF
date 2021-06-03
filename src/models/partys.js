const{Schema, model}=require('mongoose')
const PartySchema = new Schema({
    title:{type:String, required:true},
    language:{type:String, required:true},
    game:{type:String, required:true},
    info:{type:String, required:true}
},{
    timestamps:true,
    vesrionKey:false
}
)

module.exports=model('Party',PartySchema)


