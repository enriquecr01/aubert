const axios = require('axios').default;

export async function login(email, password) {
  try {
      var loginForm = new FormData();
      loginForm.append('email', email);
      loginForm.append('pass', password);

      const response = await axios.post('https://aubert-go.onrender.com/login', loginForm, {
        "Content-Type": "multipart/form-data",
      });

      if (response.request.status === 401) {
          console.log('KAKAKAKAKAKKA', response.request.status)
      }
      
      return response.data;
    } catch (error) {
      console.error(error);
    }
}
