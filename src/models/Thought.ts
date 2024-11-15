import { Schema, model, Document, Types } from 'mongoose';
import responseSchema from './Response.js';

// Define IThought as an interface that extends Document
interface IThought extends Document {
  thoughtText: string;
  username: string;
  createdAt: Date;
  reactions: Types.DocumentArray<any>;
}

// Define thoughtSchema as a new Schema with IThought as the type
const thoughtSchema = new Schema<IThought>(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reactions: [responseSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const Thought = model<IThought>('Thought', thoughtSchema);

// Export thoughtSchema
export default Thought;