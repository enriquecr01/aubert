const axios = require('axios').default;

export async function getPasswords() {
    try {
        const response = await axios.get('https://aubert-go.onrender.com/password/search/1');
        return response.data.secrets;
      } catch (error) {
        console.error(error);
      }
}


