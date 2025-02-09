import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5217";

axios.interceptors.response.use(
  // מה לעשות אם הבקשה מוצלחת
  (response) => response,
  
  // מה לעשות אם יש שגיאה
  (error) => {
    // רישום השגיאה ללוג
    console.error('API Error:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data
    });

    // החזרת השגיאה להמשך טיפול
    return Promise.reject(error);
  }
);

export default {
  getTasks: async () => {
    const result = await axios.get(`/items`)  
    return result.data;
  },

  addTask: async(name)=>{
    await axios.post(`/items`, { name })
    return {};
  },

  setCompleted: async(id, isComplete)=>{
    await axios.put(`/items/${id}`, { isComplete })
    return {};
  },

  deleteTask:async(id)=>{
    await axios.delete(`/items/${id}`)
    return {};
  }
};
