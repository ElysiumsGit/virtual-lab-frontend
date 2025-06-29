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
    set({ loading: true });
    try {
      const res = await axios.get(`http://localhost:5000/student/read/${_id}`);
      set({ profile: res.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  createStudent: async (newStudent) => {
    try {
      const res = await axios.post(
        `http://localhost:5000/student/create`,
        newStudent
      );

      set((state) => ({
        students: [...state.students, res.data.student],
        error: null,
      }));

      return { success: true, message: res.data.message }; // ✅ MUST return this
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong";

      set({ error: errorMessage });

      return { success: false, message: errorMessage }; // ✅ MUST return this too
    }
  },
}));

export default crudStudentStore;
