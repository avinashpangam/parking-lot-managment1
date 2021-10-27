const router= require('express').Router();

const connection=require('./../db/index');

router.route('/').get(async(req,res)=>{
    await req.getConnection(async(err,connection)=>{
        const q1="select * from block1"
    connection.query(q1,async(err,rows,fields)=>{
        //console.log(await rows)
        res.json(await rows);
    })
    })
})

router.route('/check/:id').get(async(req,res)=>{
    await req.getConnection(async(err,connection)=>{
        const q1=`select 1 from block1 where floorType=${req.params.id} and numberOfOccupied<=5`
    connection.query(q1,async(err,rows,fields)=>{
       // console.log(await rows.length)
        if(await rows.length<=0)
        res.status(300).json(await rows);
        else if(await rows.length==1)
        res.status(200).json(2);
        else{
            res.status(200).json(1);
        }
    })
    })
})
    
    
    
    
module.exports=router;