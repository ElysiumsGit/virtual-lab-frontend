import { create } from "zustand";
import axios from "axios";

const crudStudentStore = create((set) => ({
  student: [],
  profile: null,
  loading: false,
  error: null,

  fetchStudentApproved: async () => {
    set({ loading: true });
    try {
      const res = await axios.get(
        "http://localhost:5000/student/read/approved"
      );
      set({ student: res.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  fetchProfile: async (_id) => {
    console.log(`This is profile ${_id}`);
    set({ loading: true });
    try {
      const res = await axios.get(`http://localhost:5000/student/read/${_id}`);
      set({ profile: res.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default crudStudentStore;
