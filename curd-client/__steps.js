/* 
Mongodb cannection 
1crate account 
2 create an user with pasord
3 white list ip address
database > connect > deiver > node > show all code 
5 update password uri
-------------------------





server post
1 create ---- posrt 
2 app.post('user' async(req,res)=>{})
3 make the function async to use await inside it
4 make sure you use the express .jason midleware
5 access data frm the body : const user = req.body
6 const result = awite calection ,insertone(user)
7 res.send9result

client side 

create featch 
add second paramiter
provide methoid post 
add heade  {content-type: apllication-json}
add body  Json.stigify(user)


----------------
read 

1 create cursor =usercalection.find()
2 const result = awiat coursor.toArray()
3 res.send(result)

------------------------------
delete

1. app.delete('user/:id' ,async(req,res)=<>{})
2. specify uniqe object id to delete the right use 
3. const qury ={-id:new objectId9id};
4 result = awiat usercalection delete one (query);
res.send(result);


client 

1 create dynamic url
2 mantion delete methode 



*/