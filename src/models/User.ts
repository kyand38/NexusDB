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

User
    .create({// Create a new User document
        username: 'testName', 
        email: 'test@testmail.com',
        friends: ['testId2', 'testId3'],
        thoughts: ['thoughtId1', 'thoughtId2'],
        friendCount: 2,
    }).then(result => console.log('Created new User document', result))
    .catch(err => console.error(err));


// Export User as a model of IUser
export default User;
