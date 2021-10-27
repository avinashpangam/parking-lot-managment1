const router= require('express').Router();



router.route('/').get((req,res)=>{
    
    req.getConnection((err,connection)=>{
        const q1="select * from users"
        connection.query(q1,async(err,rows,fields)=>{
            if(err)
            res.status(400).json(err);
            res.json(await rows);
        } 
        )
    })
        //connection.end()
    })


        router.route("/").post(function (req,res){
           // connection.connect();
            req.getConnection(async(err,connection)=>{
                let q2,a;
            try{
                a= {userId:`${await req.body.userId}`,password:`${await req.body.password}`};
            q2=`insert into users set ?`;
            }
            catch(e){
                return e;
            }
            console.log(await req.body);
            connection.query(q2,a,(err,result)=>{
               console.log(a);
                if(err)
                res.status(400).json("Error: "+err);
                res.json("Inserted")
            })
            })
            //connection.end();
        
         }
        )


    
module.exports=router;