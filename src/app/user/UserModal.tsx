"use client";
import { User } from "./user.interface";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

type UserModalProps = {
  open: boolean;
  onClose: () => void;
  onSave: (user: User) => void;
  user?: User | null;
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="mt-4 w-full" disabled={pending}>
      {pending ? "Salvando..." : "Salvar"}
    </Button>
  );
}

const initialState = { name: "", age: "", gender: "" };

export function UserModal({ open, onClose, onSave, user }: UserModalProps) {
  const [state, formAction] = useActionState(
    (prev: typeof initialState, formData: FormData) => {
      const name = formData.get("name") as string;
      const age = formData.get("age") as string;
      const gender = formData.get("gender") as string;
      if (name && age && gender) {
        onSave({
          id: user?.id || Math.random().toString(36).slice(2),
          name,
          age: Number(age),
          gender: gender as User["gender"],
          createdAt: user?.createdAt || new Date().toISOString(),
          sessionTime: user?.sessionTime || "00m00s",
          type: user?.type || "Usuário padrão",
          status: user?.status || "Ativo",
        });
        onClose();
      }
      return { name, age, gender };
    },
    user
      ? { name: user.name, age: String(user.age), gender: user.gender }
      : initialState
  );

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-full">
        <DialogHeader>
          <DialogTitle>
            {user ? "Editar Usuário" : "Adicionar Usuário"}
          </DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-4" action={formAction}>
          <Label htmlFor="name">Nome</Label>
          <Input id="name" name="name" defaultValue={state.name} required />
          <Label htmlFor="age">Idade</Label>
          <Input
            id="age"
            name="age"
            type="number"
            defaultValue={state.age}
            required
          />
          <Label htmlFor="gender">Gênero</Label>
          <Input
            id="gender"
            name="gender"
            defaultValue={state.gender}
            required
          />
          <SubmitButton />
        </form>
      </DialogContent>
    </Dialog>
  );
}
