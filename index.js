const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/E-comm');

const ProductSech=new mongoose.Schema({
    'name':String,
    'price':Number,
    'brand':String,
    'category':String
})

const main= async()=>{
    const product=mongoose.model('products',ProductSech);
    let data=new product({'name':'A37','price':100,'brand':'Samsung','category':'Phone'});
    const result=await data.save();
    console.log(result);
}


const updateProduct=async()=>{
    const product=mongoose.model('products',ProductSech);
    let data= await product.updateOne({'name':'A37'},{$set:{'name':'infinix 40i'}});
    console.log(data);
    
}

updateProduct();
const deleteProduct=async()=>{
    const product=mongoose.model('products',ProductSech);
    let data=await product.deleteMany({'name':'waqar'});
    console.log(data);
}
deleteProduct();
