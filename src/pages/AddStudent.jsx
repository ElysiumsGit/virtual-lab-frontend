import React, { useState } from "react";
import DashboardHeader from "../components/Header/DashboardHeader";
import InputField from "../components/TextField/InputField";
import SelectField from "../components/TextField/SelectField";

const AddStudent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
    education: "",
    gradeLevel: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="flex flex-col gap-6">
      <section>
        <DashboardHeader title="Add Students" />
      </section>

      <section className="bg-white rounded shadow">
        <div className="p-4">
          <h1 className="text-lg font-semibold">Basic Info</h1>
        </div>
        <hr className="bg-gray-300 h-px border-0" />

        <form onSubmit={handleSubmit} className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            <InputField
              label="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
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
    </section>
  );
};

export default AddStudent;
