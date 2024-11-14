// Import schema and model from mongoose
import { Schema, model, Document } from 'mongoose';

// Define IUser as an interface that extends Document
interface IUser extends Document {
    username: string;
    email: string;
    friends?: string;
    thoughts?: string;
    friendCount?: number;
    createdAt: Date;
}
// Define UserSchema as a new Schema with IUser as the type
const UserSchema = new Schema<IUser>({
    username: {type: String, required: true},
    email: {string: String, required: true},
    friends: String,
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        },
    ],
    friendCount: Number,
    createdAt: {Date, default: Date.now},
})
// Define User as a model of IUser
let User = model<IUser>('User', UserSchema);

User
    .create({// Create a new User document
        username: 'test', 
        email: 'test@testmail.com',
        friends: ['test2', 'test3'],
        thoughts: ['thought1', 'thought2'],
        friendCount: 2,
    }).then(result => console.log('Created new User document', result))
    .catch(err => console.error(err));


// Export User as a model of IUser
export default User = model<IUser>('User', UserSchema);
