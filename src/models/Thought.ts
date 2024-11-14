import { Schema, model, Document } from 'mongoose';

// Define IThought as an interface that extends Document
interface IThought extends Document {
  thoughtText: string;
  username: string;
  createdAt: Date;
  reactions: string;
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
    reactions: {
      type: String,
    },
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

Thought
    .create({
        thoughtText: 'testing thoughts',
        username: 'test',
        createdAt: Date.now(),
        reactions: 'test reactions',
    })


// Export thoughtSchema
export default thoughtSchema;