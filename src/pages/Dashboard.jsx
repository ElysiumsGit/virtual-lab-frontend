import React from "react";
import CardStatus from "../components/CardStatus/CardStatus";
import UserTable from "../components/Table/UserTable";
import { users } from "../constant/constant";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const totalStudents = users.length;
const totalSenior = users.filter(user => user.gradeLevel === "Senior Highschool").length;
const totalJunior = users.filter(user => user.gradeLevel === "Junior Highschool").length;
const totalPending = users.filter(user => user.status === "pending").length;

const groupedByGrade = ["Senior Highschool", "Junior Highschool"].map(grade => {
  const group = users.filter(user => user.gradeLevel === grade);
  return {
    grade,
    approved: group.filter(user => user.status === "approved").length,
    pending: group.filter(user => user.status === "pending").length,
  };
});

const Dashboard = () => {
  return (
    <main className="flex-1 bg-gray-100 overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <CardStatus title="Total Students" value={totalStudents} />
        <CardStatus title="Pending Requests" value={totalPending} />
        <CardStatus title="Senior High School" value={totalSenior} />
        <CardStatus title="Junior High School" value={totalJunior} />
      </div>

      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Student Approval Status by Grade Level
        </h2>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={groupedByGrade} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="grade" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Bar dataKey="approved" fill="#22C55E" name="Approved" />
              <Bar dataKey="pending" fill="#F97316" name="Pending" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Students</h2>
        <UserTable />
    </main>
  );
};

export default Dashboard;
