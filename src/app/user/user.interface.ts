export interface User {
  id: string;
  name: string;
  age: number;
  gender: "Homem" | "Mulher";
  createdAt: string;
  sessionTime: string;
  type: string;
  status: "Ativo" | "Inativo";
}
