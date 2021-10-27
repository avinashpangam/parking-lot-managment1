const router= require('express').Router();



router.route('/:id').get((req,res)=>{
    
    req.getConnection((err,connection)=>{
        const q1=`select fare from slip where orderId="${req.params.id}"`
        connection.query(q1,async(err,rows,fields)=>{
            if(err)
            res.status(400).json(err);
            res.json(await rows[0].fare);
        } 
        )
    })
        //connection.end()
    })

module.exports=router