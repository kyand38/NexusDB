import { Schema, Document, ObjectId, Types } from 'mongoose';

// Define IResponse as an interface that extends Document
interface IResponse extends Document {
  reactionId: ObjectId;
  responseBody: string;
  username: string;
  createdAt: Date;
}

// Define responseSchema as a new Schema with IResponse as the type
const responseSchema = new Schema<IResponse>(
  {
    reactionId: {
      type: Schema.Types.ObjectId,// Define reactionId as a new ObjectId
      default: () => new Types.ObjectId(),// Set default value to a new ObjectId
    },
    responseBody: {
      type: String,
      required: true,
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
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

export default responseSchema;