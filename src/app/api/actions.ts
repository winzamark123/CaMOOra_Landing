'use server';
import { getDatabase } from './_utils/mongoDB';
import { z } from 'zod';

//double checking on the backend
const emailSchema = z.string().email({ message: 'Invalid email address' });

export async function getMailCollection() {
  const db = await getDatabase();
  return db.collection('mailing_list24');
}

export interface emailObject {
  email: string;
  isStudent: boolean;
  isPhotographer: boolean;
}

export async function addEmail({
  email,
  isStudent,
  isPhotographer,
}: emailObject) {
  // Validate the email using Zod
  const validation = emailSchema.safeParse(email);
  if (!validation.success) {
    return {
      status: 500,
      message: validation.error.errors[0].message,
    };
  }

  const mailCollection = await getMailCollection();

  try {
    const existingEmail = await mailCollection.findOne({ email });
    if (existingEmail) {
      console.log('Email Already Exists');
      return {
        status: 400,
        message: 'Email already exists',
      };
    }

    await mailCollection.insertOne({ email, isStudent, isPhotographer });
    return {
      status: 200,
      message: 'Email added successfully',
    };
  } catch (error) {
    console.error('Failed to add email to DB', error);
    return {
      status: 500,
      message: 'Failed to add email to the database',
    };
  }
}

export async function countPhotographers() {
  const mailCollection = await getMailCollection();
  try {
    const photographerCount = await mailCollection.countDocuments({
      isPhotographer: true,
    });
    return {
      data: photographerCount,
      status: 200,
      message: 'Success',
    };
  } catch (error) {
    console.error('Error counting photographers:', error);
    return {
      data: null,
      status: 500,
      message: 'Error counting photographers',
    };
  }
}
