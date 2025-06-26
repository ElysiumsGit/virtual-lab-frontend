import { useState } from "react";
import SearchField from "../TextField/SearchField";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

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
    email: "neil.sims@flowbite.com",
    gradeLevel: "Senior Highschool",
    gender: "Male",
    status: "pending",
  },
  {
    id: 3,
    firstName: "Cris Carlo",
    lastName: "Abanes",
    email: "neil.sims@flowbite.com",
    gradeLevel: "Senior Highschool",
    gender: "Male",
    status: "pending",
  },
];

export default function UserTable() {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName} ${user.email} ${user.gradeLevel}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      {
        isMobile && (
          <>
            <div className="flex flex-col gap-6">
              <section>
                <SearchField onchange={(e) => setSearch(e.target.value)} />
              </section>
              <section>
                <Link to="/dashboard/addStudent">
                  <button className="py-2 p-4 w-full background-primary-color rounded-sm text-white hover:opacity-80 cursor-pointer">
                    Add Student
                  </button>
                </Link>
              </section>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="p-4 bg-white shadow-md rounded-md border border-gray-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-full w-12 h-12 bg-gray-600 flex items-center justify-center text-white text-lg font-bold">
                      {user.firstName.charAt(0).toUpperCase()}
                      {user.lastName.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="text-base font-semibold">
                        {user.firstName} {user.lastName}
                      </div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </div>
                  <div className="mt-2 text-sm">
                    <div>Grade Level: {user.gradeLevel}</div>
                    <div>Gender: {user.gender}</div>
                    <div className="flex items-center">
                      <span
                        className={`h-2.5 w-2.5 rounded-full mr-2 mt-[2px] ${
                          user.status === "online" ? "bg-green-500" : "bg-red-500"
                        }`}
                      ></span>
                      Status:{" "}
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </div>
                  </div>
                  <div className="mt-3 flex gap-4 text-sm">
                    <a href="#" className="text-blue-600 hover:underline">
                      Edit User
                    </a>
                    <Link
                      to={`/dashboard/viewProfile/${user.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )
      }


      {
        !isMobile && (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
            <div className="flex items-center justify-between flex-col md:flex-row flex-wrap gap-4 pb-4 pr-4 pt-4 bg-white">
              <section>
                  <SearchField onchange={(e) => setSearch(e.target.value)}/>
              </section>
              <section>
                <Link to="/dashboard/addStudent">
                  <button className="py-2 p-4 background-primary-color rounded-sm text-white hover:opacity-80 cursor-pointer">
                    Add Student
                  </button>
                </Link>
              </section>
            </div>

            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Grade Level</th>
                  <th className="px-6 py-3">Gender</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Action</th>
                  <th className="px-6 py-3">View Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                    >
                      <div className="rounded-full w-10 h-10 bg-gray-600 flex items-center justify-center text-white text-sm font-medium">
                        {user.firstName.charAt(0).toUpperCase()}
                        {user.lastName.charAt(0).toUpperCase()}
                      </div>
                      <div className="ps-3">
                        <div className="text-base font-semibold">
                          {user.firstName} {user.lastName}
                        </div>
                        <div className="font-normal text-gray-500">{user.email}</div>
                      </div>
                    </th>
                    <td className="px-6 py-4">{user.gradeLevel}</td>
                    <td className="px-6 py-4">{user.gender}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div
                          className={`h-2.5 w-2.5 rounded-full ${
                            user.status === "online" ? "bg-green-500" : "bg-red-500"
                          } me-2`}
                        ></div>
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium primary-color hover:underline"
                      >
                        Edit user
                      </a>
                    </td>

                    <td className="px-6 py-4">
                      <Link to={`/dashboard/viewProfile/${user.id}`} className="font-medium primary-color hover:underline">
                        View Profile
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
    </>
  );
}
