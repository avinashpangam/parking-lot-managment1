const router= require('express').Router();



router.route('/orderId').get(async(req,res)=>{
    console.log(req.body.orderId)
    await req.getConnection(async(err,connection)=>{
        const q1=`select * from timeLine where orderId like "${await req.body.orderId}%"`
        connection.query(q1,async(err,rows,fields)=>{
            if(err)
            res.status(400).json(err);
            res.json(await rows);
        } 
        )
    })
        //connection.end()
    })


    
router.route('/userName/:id').get(async(req,res)=>{
    console.log(await req.params.id)
    await req.getConnection(async(err,connection)=>{
        const q1=`select * from timeLine where userName like "${await req.params.id}%"`
        connection.query(q1,async(err,rows,fields)=>{
            if(err)
            res.status(400).json(err);
            res.json(await rows);
        } 
        )
    })
        //connection.end()
    })
        
router.route('/floorNo/:id').get(async(req,res)=>{
    console.log(await req.params.id)
    await req.getConnection(async(err,connection)=>{
        const q1=`select * from timeLine where floorNo=${await req.params.id}`
        connection.query(q1,async(err,rows,fields)=>{
            if(err)
            res.status(400).json(err);
            res.json(await rows);
        } 
        )
    })
        //connection.end()
    })
        
    router.route('/userId/:id').get(async(req,res)=>{
        console.log(await req.params.id)
        await req.getConnection(async(err,connection)=>{
            const q1=`select * from timeLine where userId like "${await req.params.id}%"`
            connection.query(q1,async(err,rows,fields)=>{
                if(err)
                res.status(400).json(err);
                res.json(await rows);
            } 
            )
        })
            //connection.end()
        })
            
    

    
module.exports=router;