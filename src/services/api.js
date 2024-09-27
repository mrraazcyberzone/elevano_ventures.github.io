// src/services/api.js
export const sendContactForm = async (formData) => {
    try {
      const response = await fetch('https://your-api-url.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send form data');
      }
  
      return response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  };
  