"use client";

import { UserList } from "./UserList";
import { UserModal } from "./UserModal";
import { Button } from "@/components/ui/button";
import { useUserContainer } from "./User.container";

export default function UserPage() {
  const container = useUserContainer();
  const {
    users,
    selectedUser,
    modalOpen,
    addUser,
    updateUser,
    openModal,
    closeModal,
  } = container;

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold">Usuários</h1>
        <Button onClick={() => openModal()}>Adicionar</Button>
      </div>
      <UserList users={users} onEdit={openModal} />
      <UserModal
        open={modalOpen}
        onClose={closeModal}
        onSave={selectedUser ? updateUser : addUser}
        user={selectedUser}
      />
    </div>
  );
}
