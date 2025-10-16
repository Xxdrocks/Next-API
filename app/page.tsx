
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import API from "@/lib/db";


export default function Home() {

  interface User {
    id: number;
    name: string;
    email: string;
  }
  const [user, setUser] = useState<User[]>([]);

  useEffect(() => {

    const fetchUser = async () => {
      try {
        const res = await API.get("/crud");
        setUser(res.data.crud);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  return (
  <section>
    <h1>Users</h1>
    <ul>
      {user.map((user) => (
        <li key={user?.id}>
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
        </li>
      ))}
    </ul>
  </section>
  );
}
