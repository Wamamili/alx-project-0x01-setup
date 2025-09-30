import Header from "@/components/layout/Header";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";
import { useState } from "react";

const Users: React.FC<{ users: UserData[] }> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userList, setUserList] = useState<UserData[]>(users);

  const handleAddUser = (newUser: UserData) => {
    setUserList([...userList, { ...newUser, id: userList.length + 1 }]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">User List</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>

        <ul className="space-y-2">
          {userList.map((user) => (
            <li key={user.id} className="p-4 border rounded-lg shadow-sm">
              <h2 className="font-bold">{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <p>{user.website}</p>
            </li>
          ))}
        </ul>
      </main>

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
