const router= require('express').Router();

const connection=require('../db/index');

router.route('/').get(async(req,res)=>{
const q1="select * from history order by outTime DESC "
    connection.query(q1,async(err,rows,fields)=>{
        console.log('Done')
        
        res.json(await rows);
    })})
router.route('/:id').post(async(req,res)=>{
    let a;
   try{
    a=await req.params.id;
   }catch(e){
       return e;
   }
    let  q=`update history set outTime=current_timestamp where orderId="${a}"`;
    //userName:`${req.body.userName}`,
    console.log(a)
    connection.query(q,async(err,rows,fields)=>{
        if(err)
        res.status(400).json("Error: "+err);
        res.json(await rows);
    })

})
    
    

    
module.exports=router;