import { Schema, model, Document, Types } from 'mongoose';
import responseSchema from './Reaction.js';

// Define IThought as an interface that extends Document
interface IThought extends Document {
  thoughtText: string;
  username: string;
  createdAt: String;
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
      trim: true,
    },
      createdAt: {
        type: Date, // Ensure this is `Date` type
        default: Date.now, // Use the current timestamp as the default
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