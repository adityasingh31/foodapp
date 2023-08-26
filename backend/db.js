const mongoose = require('mongoose');
const mongoURI='mongodb://20je0062:Rathore*2212@ac-v5pklqm-shard-00-00.75szbb2.mongodb.net:27017,ac-v5pklqm-shard-00-01.75szbb2.mongodb.net:27017,ac-v5pklqm-shard-00-02.75szbb2.mongodb.net:27017/crustmern?ssl=true&replicaSet=atlas-ebl4eh-shard-0&authSource=admin&retryWrites=true&w=majority';
const mongoDB=async()=>{
   await mongoose.connect(mongoURI,{ useNewUrlParser: true},async(err,result)=>{
    if(err) console.log("---",err)
    else
    {
        console.log("connected");
        const fetched_data=await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(async function(err,data){
            const foodCategory=await mongoose.connection.db.collection("foodCategory");
            foodCategory.find({}).toArray(function(err,catData){
                if(err) console.log(err);
                else {
                    global.food_items = data;
                    global.foodCategory=catData;
                }
            })
          /*  if(err) console.log(err);
            else {
                global.food_items = data;
        
            }*/
        })
    }
    });
}
module.exports=mongoDB;