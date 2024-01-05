const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(express.json())
const Product = require('./models/productModel')
const Production = require('./models/Customer')

mongoose.set("strictQuery", false)
mongoose.
connect('mongodb+srv://ghoshrohit2098:12345@cluster0.mk9oc15.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to the database')
    app.listen(3000, () => {
        console.log('started on port 3000')
    })
    
}).catch((error) => {
    console.log(error)
})

//for Customer table
app.post('/productions', async(req, res) => {
  try {
    const products = await Production.create(req.body)
    res.status(200).json(products); 
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message:error.message})
      
  }
})


app.get('/Allproductions', async(req, res) => {
  try {
    const product = await Production.find({});
    res.status(200).json(product); 
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message:error.message})
      
  }
})

app.get('/productions/:id', async(req, res) => {
  try {
    const {id} = req.params;  
    const product = await Production.findById(id);
    res.status(200).json(product); 
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message:error.message})
      
  }
})

app.put('/Updateproductions/:id', async(req, res) => {
  try {
    const {id} = req.params;  
    const product = await Production.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({message: `cannot find any product with id ${id}`})
    }
    const updateproduct = await Production.findById(id); 
    res.status(200).json(updateproduct); 
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message:error.message})
      
  }
})

app.delete('/Deleteproductions/:id', async(req, res) => {
  try {
    const {id} = req.params;  
    const product = await Production.findByIdAndDelete(id, req.body);
    if (!product) {
      return res.status(404).json({message: `cannot find any product with id ${id}`})
    }
     
    res.status(200).json({message: `deleted`}); 
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message:error.message})
      
  }
})

app.post('/product', async(req, res) => {
    try {
      const product = await Product.create(req.body)
      res.status(200).json(product); 
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
        
    }
})

app.get('/products', async(req, res) => {
    try {
      const product = await Product.find({});
      res.status(200).json(product); 
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
        
    }
})

app.get('/getproductionsByfilterQuery', async (req, res) => {
  try {
      const query = { $and: [{ "Salary": { $gt: 9000000 } }, { "Salary": { $lte: 50000000000000 } }] };
      const products = await Production.find(query);
      res.status(200).json(products);
  } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
  }
});

app.get('/getproductionsByINQuery', async (req, res) => {
  try {
      const query = { Address: { $in: ['Africa', 'usa'] }};
      const customer = await Production.find(query);
      res.status(200).json(customer);
  } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
  }
});



app.get('/products/:id', async(req, res) => {
    try {
      const {id} = req.params;  
      const product = await Product.findById(id);
      res.status(200).json(product); 
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
        
    }
})

app.put('/products/:id', async(req, res) => {
    try {
      const {id} = req.params;  
      const product = await Product.findByIdAndUpdate(id, req.body);
      if (!product) {
        return res.status(404).json({message: `cannot find any product with id ${id}`})
      }
      const updateproduct = await Product.findById(id); 
      res.status(200).json(updateproduct); 
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
        
    }
})


