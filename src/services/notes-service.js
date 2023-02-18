import axios from './custom-axios';

export async function getNotes() {
  try {
    let id = localStorage.getItem('id');
    const response = await axios.get(
      `https://aubert-go.onrender.com/note/search/${ id }`
    );
    return response.data.notes;
  } catch (error) {
    console.error(error);
  }
}

export async function searchNotes(value) {
    try {
      let id = localStorage.getItem('id');
      const response = await axios.get(
        `https://aubert-go.onrender.com/note/search/${id}/${value}`
      );
      return response.data.notes;
    } catch (error) {
      console.error(error);
    }
  }

export async function addNote() {
    try {
      let id = localStorage.getItem('id');
  
      var noteForm = new FormData();
      noteForm.append("title", "");
      noteForm.append("note", "");
      noteForm.append("color", "bg-zinc-800");
      noteForm.append("userId", id);
  
      const response = await axios.post(
        "https://aubert-go.onrender.com/note/add",
        noteForm,
        {
          "Content-Type": "multipart/form-data",
        }
      );
      return response.data.note;
    } catch (error) {
      console.error(error);
    }
}

export async function updateNote(id, title, note, color) {
    try {
      
        var noteForm = new FormData();
        noteForm.append("title", title);
        noteForm.append("note", note);
        noteForm.append("color", color);  
        noteForm.append("noteId", id);
  
        const response = await axios.put(
            "https://aubert-go.onrender.com/note/modify",
            noteForm,
            {
            "Content-Type": "multipart/form-data",
            }
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteNote(id) {
    try {
      const response = await axios.delete(
        `https://aubert-go.onrender.com/note/delete/${id}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
