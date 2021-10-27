const router= require('express').Router();


//Note change timeline table to history

router.route('/Yesterday/').get(async(req,res)=>{

  await req.getConnection(async(err,connection)=>{
    const q1=`select count(distinct orderId) as count from history where DATEDIFF(date(history.inTime),date(current_date))>=-1`;
try{
    connection.query(q1,async(err,rows,fields)=>{
       // console.log(await rows[0].count)
       res.json(await rows);


    })
}   
catch(e){
    return e;
}
})

})


router.route('/ThisWeek').get(async(req,res)=>{

    await req.getConnection((err,connection)=>{
        const q1=`select count(distinct orderId) as count from history where DATEDIFF(date(history.inTime),date(current_date))>=-7`;
try{
    connection.query(q1,async(err,rows,fields)=>{
        console.log('Done')
        res.json(await rows);
    })
}   
catch(e){
    return e;
}
    })

})




router.route('/ThisMonth').get(async(req,res)=>{

    await req.getConnection((err,connection)=>{
        const q1=`select count(distinct orderId) as count from history where DATEDIFF(date(history.inTime),date(current_date))>=-30`;
try{
    connection.query(q1,async(err,rows,fields)=>{
        console.log('Done')
        res.json(await rows);
    })
}   
catch(e){
    return e;
}
    })

})

    
    
module.exports=router;