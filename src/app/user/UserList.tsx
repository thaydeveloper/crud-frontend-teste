import { User } from "./user.interface";
import { Button } from "@/components/ui/button";

type UserListProps = {
  users: User[];
  onEdit: (user: User) => void;
};

export function UserList({ users, onEdit }: UserListProps) {
  return (
    <div className="flex flex-col gap-2">
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-between rounded-lg border bg-white p-4 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-lg font-semibold">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-base">{user.name}</span>
              <span className="text-xs text-muted-foreground">
                {user.age} anos, {user.gender}
              </span>
              <span className="text-xs text-muted-foreground">
                {user.createdAt} • {user.sessionTime} • {user.type}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`text-xs px-3 py-1 rounded-full ${
                user.status === "Ativo"
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {user.status}
            </span>
            <Button variant="ghost" size="icon" onClick={() => onEdit(user)}>
              <span className="material-symbols-outlined">more_vert</span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
