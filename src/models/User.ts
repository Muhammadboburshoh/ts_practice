import * as mongoose from 'mongoose';
import { model } from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  created_ad: {
    type: Date,
    required: true,
    default: new Date()
  },
  updated_ad: {
    type: Date,
    required: true,
    default: new Date()
  }
});

export default model('user', userSchema);
