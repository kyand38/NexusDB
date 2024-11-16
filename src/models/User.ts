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
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function (value: string) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value); // Validate email against regex
            },
            message: 'Please enter a valid email address',
        },
    },

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
    createdAt: {
        type: Date, // Ensure this is `Date` type
        default: Date.now, // Use the current timestamp as the default
    }
},
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }

)
// Define User as a model of IUser
let User = model<IUser>('User', UserSchema);
UserSchema.virtual('friendCount').get(function () {
    return this.friends?.length ?? 0;
});


// Export User as a model of IUser
export default User;
