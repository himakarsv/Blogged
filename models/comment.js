const {Schema,model}=require("mongoose");
const commentSchema=new Schema({
    content:{
        type:String,
        required:true
    },
    blogId:{
        type:String,
        ref:"blog"
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"user",
    }
},{timestamps:true})

const Comments=model("comment",commentSchema);
module.exports=Comments;