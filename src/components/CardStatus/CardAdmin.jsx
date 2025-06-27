import React from "react";

const CardAdmin = ({ admin }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex flex-col items-center">
        <div className="rounded-full w-20 h-20 bg-gray-600 flex items-center justify-center text-white text-3xl font-medium">
            {admin.firstName[0]}
            {admin.lastName[0]}
        </div>
        <h2 className="text-xl font-semibold">{`${admin.firstName} ${admin.lastName}`}</h2>
        <p className="text-sm text-gray-600">{admin.position}</p>
      </div>

      <div className="mt-4 text-sm text-gray-700 space-y-1">
        <p>
          <span className="font-semibold">Subject:</span> {admin.subject}
        </p>
        <p>
          <span className="font-semibold">Employee No.:</span> {admin.employeeNumber}
        </p>
        <p>
          <span className="font-semibold">Gender:</span> {admin.gender}
        </p>
        <p>
          <span className="font-semibold">Email:</span>{" "}
          <span className="font-medium text-black">{admin.email}</span>
        </p>
      </div>
    </div>
  );
};

export default CardAdmin;
