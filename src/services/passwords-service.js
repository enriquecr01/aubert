const axios = require('axios').default;

export async function getPasswords() {
    try {
        const response = await axios.get('https://aubert-go.onrender.com/password/search/1');
        return response.data.secrets;
      } catch (error) {
        console.error(error);
      }
}


export async function addPassword(name, url, username, secret, notes, color) {
  try {
      var passwordForm = new FormData();
      passwordForm.append('name', name);
      passwordForm.append('url', url);
      passwordForm.append('username', username);
      passwordForm.append('secret', secret);
      passwordForm.append('notes', notes);
      passwordForm.append('color', color);
      passwordForm.append('userId', 1);

      const response = await axios.post('https://aubert-go.onrender.com/password/add', passwordForm, {
        "Content-Type": "multipart/form-data",
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

export async function updatePassword(id, name, url, username, secret, notes, color) {
  try {
      var passwordForm = new FormData();
      passwordForm.append('name', name);
      passwordForm.append('url', url);
      passwordForm.append('username', username);
      passwordForm.append('secret', secret);
      passwordForm.append('notes', notes);
      passwordForm.append('color', color);
      passwordForm.append('passId', id);

      const response = await axios.put('https://aubert-go.onrender.com/password/modify', passwordForm, {
        "Content-Type": "multipart/form-data",
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
}



