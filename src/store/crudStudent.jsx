import { create } from "zustand";
import axios from "axios";

const crudStudentStore = create((set) => ({
  student: [],
  studentApproved: [],
  studentPending: [],
  profile: null,
  loading: false,
  error: null,

  fetchAllStudents: async () => {
    set({ loading: true });
    try {
      const res = await axios.get("http://localhost:5000/student/read");
      set({ student: res.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  fetchStudentApproved: async () => {
    set({ loading: true });
    try {
      const res = await axios.get(
        "http://localhost:5000/student/read/approved"
      );
      set({ studentApproved: res.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  fetchStudentPending: async () => {
    set({ loading: true });
    try {
      const res = await axios.get("http://localhost:5000/student/read/pending");
      set({ studentPending: res.data, loading: false });
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
        "http://localhost:5000/student/create",
        newStudent
      );
      set((state) => ({
        student: [...state.student, res.data.student],
        error: null,
      }));
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong";
      set({ error: message });
      return { success: false, message };
    }
  },

  updateStudent: async (updatedStudent) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/student/update/${updatedStudent._id}`,
        updatedStudent
      );
      set((state) => ({
        student: state.student.map((student) =>
          student._id === updatedStudent._id ? res.data.student : student
        ),
        error: null,
      }));
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong";
      set({ error: message });
      return { success: false, message };
    }
  },

  deleteStudent: async (_id) => {
    try {
      await axios.delete(`http://localhost:5000/student/delete/${_id}`);
      set((state) => ({
        student: state.student.filter((student) => student._id !== _id),
        error: null,
      }));
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong";
      set({ error: message });
      return { success: false, message };
    }
  },
}));

export default crudStudentStore;
