import { useEffect, useState } from "react";
import { AddUser, type Account } from "./components/AddUser";
import { UserList, type User } from "./components/UserList";
import axios from "axios";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);

  // Fixed: Renamed function to handleAddUser so it doesn't break the <AddUser /> component
  // Fixed: Changed parameter type to single Account object instead of Account[]
  const handleAddUser = (user: Account) => {
    axios
      .post<User>("http://localhost:4000/users", user)
      .then((response) => {
        // Automatically updates UI list without reloads
        setUsers((prevUsers) => [...prevUsers, response.data]);
      })
      .catch((error) => console.error("Error adding user:", error));
  };

  useEffect(() => {
    axios
      .get<User[]>("http://localhost:4000/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <AddUser onAdd={handleAddUser} />
      <UserList users={users} />
    </div>
  );
}