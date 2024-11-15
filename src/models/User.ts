// Import schema and model from mongoose
import { Schema, model, Document, ObjectId } from 'mongoose';

// Define IUser as an interface that extends Document
interface IUser extends Document {
    username: string;
    email: string;
    friends?: ObjectId[];
    thoughts?: ObjectId[];
    friendCount?: number;
    createdAt: Date;
}
// Define UserSchema as a new Schema with IUser as the type
const UserSchema = new Schema<IUser>({
    username: {type: String, required: true},
    email: {type: String, required: true},
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        },
    ],
    friendCount: Number,
    createdAt: {type: Date, default: Date.now},
})
// Define User as a model of IUser
let User = model<IUser>('User', UserSchema);



// Export User as a model of IUser
export default User;
