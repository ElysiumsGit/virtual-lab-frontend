import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DashboardHeader from "../components/Header/DashboardHeader";
import CocOne from "../components/Coc1/CocOne";
import CocTwo from "../components/Coc2/CocTwo";
import CocThree from "../components/Coc3/CocThree";

const ViewProfile = () => {
  const users = [
    {
      id: 1,
      firstName: "Neil",
      lastName: "Sims",
      email: "neil.sims@flowbite.com",
      gradeLevel: "Senior Highschool",
      gender: "Male",
      status: "pending",
    },
    {
      id: 2,
      firstName: "John Carlo",
      lastName: "Abanes",
      email: "john.carlo@flowbite.com",
      gradeLevel: "Senior Highschool",
      gender: "Male",
      status: "pending",
    },
    {
      id: 3,
      firstName: "Cris Carlo",
      lastName: "Abanes",
      email: "cris.carlo@flowbite.com",
      gradeLevel: "Senior Highschool",
      gender: "Male",
      status: "pending",
    },
  ];

  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));
  const [activeTab, setActiveTab] = useState("COC 1");

  if (!user)
    return (
      <div className="text-center text-red-500 mt-10">User not found.</div>
    );

  return (
    <div className="bg-gray-100">
      <DashboardHeader title="Student Profile" />

      <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {/* LEFT PANEL */}
        <div className="space-y-6">
          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <div className="w-28 h-28 mx-auto bg-indigo-500 text-white rounded-full flex items-center justify-center text-4xl font-bold shadow-inner">
              {user.firstName.charAt(0).toUpperCase()}
              {user.lastName.charAt(0).toUpperCase()}
            </div>
            <h2 className="text-xl font-semibold mt-4">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-sm text-gray-500">Senior High School</p>
          </div>

          {/* Info Card */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-indigo-600 mb-4">
              About the Student
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex justify-between">
                <span className="font-medium">Full Name:</span>
                <span>
                  {user.firstName} {user.lastName}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Email:</span>
                <span>{user.email}</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Gender:</span>
                <span>{user.gender}</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Grade Level:</span>
                <span>{user.gradeLevel}</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Status:</span>
                <span
                  className={`capitalize font-semibold ${
                    user.status === "pending"
                      ? "text-yellow-600"
                      : "text-green-600"
                  }`}
                >
                  {user.status}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl shadow">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 px-6">
              {["COC 1", "COC 2", "COC 3"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-6 font-medium text-sm border-b-2 transition-all ${
                    activeTab === tab
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-indigo-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6">
              {activeTab === "COC 1" && (
                <>
                  <CocOne />
                </>
              )}
              {activeTab === "COC 2" && (
                <>
                  <CocTwo />
                </>
              )}
              {activeTab === "COC 3" && <CocThree />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
