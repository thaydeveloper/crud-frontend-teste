"use client";

import { User } from "./user.interface";
import { useState, useOptimistic } from "react";

export function useUserContainer() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [optimisticUsers, addOptimisticUser] = useOptimistic(
    users,
    (state, user: User) => [...state, user]
  );

  function addUser(user: User) {
    addOptimisticUser(user);
    setUsers((prev) => [...prev, user]);
  }

  function updateUser(user: User) {
    setUsers((prev) => prev.map((u) => (u.id === user.id ? user : u)));
  }

  function openModal(user?: User) {
    setSelectedUser(user || null);
    setModalOpen(true);
  }

  function closeModal() {
    setSelectedUser(null);
    setModalOpen(false);
  }

  return {
    users: optimisticUsers,
    selectedUser,
    modalOpen,
    addUser,
    updateUser,
    openModal,
    closeModal,
  };
}
