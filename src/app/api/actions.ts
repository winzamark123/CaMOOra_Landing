'use server';
import { getDatabase } from './_utils/mongoDB';

export async function getMailCollection() {
  const db = await getDatabase();
  return db.collection('mailing_list25');
}

export async function addEmail(email: string) {
  const mailCollection = await getMailCollection();
  if (!email.trim()) {
    return;
  }
  try {
    const old_email = await mailCollection.findOne({ email });
    if (old_email) {
      console.log('Email Already Exists');
      return;
    }

    await mailCollection.insertOne({ email });
  } catch (error) {
    console.error('Failed to add email to DB', error);
  }
}
