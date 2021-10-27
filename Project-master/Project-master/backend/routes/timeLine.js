const router= require('express').Router();



const uuid=require('shortid');


router.route('/').get(async(req,res)=>{
   
    req.getConnection((err,connection)=>{
        
const q1="select * from timeLine order by inTime DESC"
connection.query(q1,async(err,rows,fields)=>{
    console.log('Done')
    
    res.json(await rows);
})
    })

})


 
router.route('/:id').get(async(req,res)=>{
   await req.getConnection(async(err,connection)=>{
    let a= await req.params.id;
    const q=`select * from timeLine where orderId="${a}"`;
   // console.log(a)
    try{
        connection.query(q,a,async(err,rows)=>{
            console.log('Done')
            if(err)
            res.status(400).json(err);
            res.json(rows[0])
//let q=rows
           // q=await rows.userId;
           //console.log(rows);
         /*  let user={};
           user.orderId=rows[0].orderId;
           user.userId=rows[0].userId;
           user.userName=rows[0].userName;
           user.vehicleId=rows[0].vehicleId;
           user.vehicleType=rows[0].vehicleType;
           user.inTime=rows[0].inTime;
           user.floorNo=rows[0].floorNo;
            //console.log(user);
            res.send(user);*/
        })
        
    }
    catch(e){
        return e;
    }
   })
})    


router.route('/:id').post(async function(req,res){

    req.getConnection(async(err,connection)=>{
        let  q=`insert into timeLine set ?`;
    let a;
    try{
        a={
            orderId:`${uuid()}`,
            userId:`${await req.body.userId}`,vehicleId:`${await req.body.vehicleId}`,
        userName:`${ await req.body.userName}`,vehicleType:await req.body.vehicleType,
        floorNo:await req.params.id
       
    };
    }
    catch(e){
        return e;
    }
    console.log(await req.params.id)
    connection.query(q,a,(err,rows,fields)=>{
        if(err)
        res.status(400).json("Error: "+err);
        
            res.json(rows);
    })
    })
    
})
    
    


 
router.route('/:id').get(async(req,res)=>{
    await req.getConnection(async(err,connection)=>{
     let a=req.params.id;
     const q=`select * from timeLine where vehicleId="${a}"`;
    // console.log(a)
     try{
         connection.query(q,a,async(err,rows)=>{
             console.log('Done')
             if(err)
             res.status(400).json(err);
 //let q=rows
            // q=await rows.userId;
            //console.log(rows);
            let user={};
             //console.log(user);
             user.orderId=rows[0].orderId;
           user.userId=rows[0].userId;
           user.userName=rows[0].userName;
           user.vehicleId=rows[0].vehicleId;
           user.vehicleType=rows[0].vehicleType;
           user.inTime=rows[0].inTime;
           user.floorNo=rows[0].floorNo;
             res.send(user);
         })
         
     }
     catch(e){
         return e;
     }
    })
 })    
 
 
 router.route('/delete/:id').post(async(req,res)=>{
 
     req.getConnection(async(err,connection)=>{
         let  q;
     try{
         q=`delete from timeLine where orderId="${req.params.id}"`
     }
     catch(e){
         return e;
     }
     console.log(q);
     connection.query(q,(err,rows,fields)=>{
         if(err)
         res.status(400).json("Error: "+err.response);        
             res.json(rows);
     })
     })
     
 })
     
     





module.exports=router;

/*

let  a={
        userId:req.body.userId,
        vehicleId:req.body.vehicleId,
        vehicleType:req.body.vehicleType,
        inTime:Date.now(),
        userName:req.body.userName
    }
    console.log(a);
    connection.query(q,a,(err,resul)=>{
        if(err)
        res.status(400).json(err);
        res.json(Inserted);
    })


    */