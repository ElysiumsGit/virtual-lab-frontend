import React, { useState } from "react";
import DashboardHeader from "../components/Header/DashboardHeader";
import InputField from "../components/TextField/InputField";
import SelectField from "../components/TextField/SelectField";
import crudStudentStore from "../store/crudStudent";
import ErrorModal from "../components/Modal/ErrorModal";

const AddStudent = () => {
  const { createStudent } = crudStudentStore();
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    lrn: "",
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    password: "",
    gradeLevel: "",
    status: "Approved",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await createStudent(formData);

    if (!response.success) {
      setError(response.message);
      return;
    }

    setFormData({
      lrn: "",
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      password: "",
      gradeLevel: "",
      status: "Approved",
    });
  };

  return (
    <section className="flex flex-col gap-6">
      <section>
        <DashboardHeader title="Add Students" />
      </section>

      <section className="bg-white rounded shadow">
        <div className="py-4 px-6">
          <h1 className="text-lg font-semibold">Basic Info</h1>
        </div>
        <hr className="bg-gray-300 h-px border-0" />

        <form onSubmit={handleSubmit} className="py-4 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="LRN"
              name="lrn"
              value={formData.lrn}
              onChange={handleChange}
              placeholder="Enter LRN"
            />

            <InputField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter First Name"
            />

            <InputField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter First Name"
            />

            <InputField
              label="Email"
              name="email"
              value={formData.email}
              type="email"
              onChange={handleChange}
              placeholder="Enter First Name"
            />

            <SelectField
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              options={["Male", "Female"]}
            />

            <InputField
              label="Password"
              name="password"
              value={formData.password}
              type="password"
              onChange={handleChange}
              placeholder="Enter First Name"
            />
          </div>

          <div className="mt-4">
            <SelectField
              label="Grade level"
              name="gradeLevel"
              value={formData.gradeLevel}
              onChange={handleChange}
              options={["Senior High School", "Junior High School"]}
            />
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <button
              type="submit"
              className="background-primary-color text-white px-4 py-2 rounded-sm cursor-pointer hover:opacity-90"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
      {error && <ErrorModal message={error} onClose={() => setError("")} />}
    </section>
  );
};

export default AddStudent;
