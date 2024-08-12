// lib/api.ts
import { ContactFormData } from '@/components';
import axios from 'axios';

const API_URL = 'https://portfoliore-5c36d.firebaseio.com/'; // Remplacez par votre URL d'API

export const submitForm = async (formData: ContactFormData) => {
  try {
    const response = await axios.post(API_URL, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error sending data', error);
    throw new Error('Erreur lors de l\'envoi des données');
  }
};
