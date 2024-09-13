import mongoose from 'mongoose';

let categorySchemas = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Category name is required"],
    unique: true,
  },
  product:{
    type: mongoose.Schema.Types.ObjectId,
    requied:true
  }
});

export default categorySchemas;
