const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const pickupstatusdata = require('./schema/pickupdataSchema.js');
const deliveredstatusdata = require('./schema/deliverydatadataSchema.js');
const deliveryExpectedstatusdata = require('./schema/deliveryexpecteddataSchema.js');
const Returnedstatusdata = require('./schema/ReturneddataSchema.js');
const app = express();

app.use(bodyParser.json());

mongoose
    .connect('mongodb+srv://Rohini:19.18%40Rohini@cluster0.9c0rk0t.mongodb.net/Data',{useNewUrlParser : true,useUnifiedTopology:true})
    .then(() => {
        console.log("connected to dataBase")
    })
    .catch((error) => {
        console.log(error);
        res.json(error)
    })

app.get('/get_card_statusBycardID/:id', async (req, res) => {
     
  const id = req.params.id;
  let data;
  let Message;
    const data2 = await pickupstatusdata.find( {cardID:  id});
    const data1 = await deliveredstatusdata.find({cardID:  id});
    const data3 = await deliveryExpectedstatusdata.find({cardID:  id});
    const data4 = await Returnedstatusdata.find({cardID:  id});
    if(Array.isArray(data1) && data1.length)
    {  
      data = data1[0];
      Message = data1[0].comment;
    }
    if(Array.isArray(data2) && data2.length)
    { 
       data = data2[0];
       Message = "Card will be delivered at " +  data.Timestamp;
    }
    if(Array.isArray(data3) && data3.length)
    { 
      data = data3
      Message = data3[0].comment;
    }
    if(Array.isArray(data4) && data4.length)
    {
      data = data4;
      Message = "Card is Returned to the company"
    }   
    console.log(data);
    if(Message === null || Message === undefined)
    {
      return res.send({message : "user not found"});
    }
    return res.status(200).send({message : Message})
})
app.get('/get_card_statusByuserMobile/:id', async (req, res) => {
  const id = req.params.id;
  let data;
    let Message;
   const data1 = await deliveredstatusdata.find({userMobile:  id});
    const data2 = await pickupstatusdata.find( {userMobile:  id});
    const data3 = await deliveryExpectedstatusdata.find({userMobile:  id});
    const data4 = await Returnedstatusdata.find({userMobile:  id});
    if(Array.isArray(data1) && data1.length)
    {
      data = data1[0];
      Message = data1[0].comment;
    }
    if(Array.isArray(data2) && data2.length)
    {
       data = data2;
       Message = "Card will be delivered at " +  data2[0].Timestamp;
    }
    if(Array.isArray(data3) && data3.length)
    {
      data = data3;
      Message = data3[0].comment;
    }
    if(Array.isArray(data4) && data4.length)
    {
      data = data4;
      Message = "Card is Returned to us";
    }
    if(Message === null || Message === undefined)
    {
      return res.send({message : "user not found"});
    }
    return res.status(200).send(Message);
})
app.listen(5004, () => console.log("its working"));