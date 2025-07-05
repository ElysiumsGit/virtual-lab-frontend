import axios from "axios";
import { create } from "zustand";
import { BASEURL } from "../helper/helper";

const crudAdminStore = create((set) =>({
    admin: [],
    loading: false,
    error: null,

    fetchAllAdmin: async () => {
        set({loading: true});
        try {
            const res = await axios.get(`${BASEURL}/admin/read`);
            set({admin: res.data, loading: false});
        } catch (error) {
            set({error:error.message, loading: false})
        }
    }
}));

export default crudAdminStore;