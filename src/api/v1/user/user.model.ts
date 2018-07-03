import { Schema, Model, model, Document } from 'mongoose';

export const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    passport: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  },
);

export interface UserInterface extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updateAt: Date;
}

// In case we need to load method ?
//UserSchema.loadClass();

export const User: Model<UserInterface> = model<UserInterface>('User', UserSchema);
