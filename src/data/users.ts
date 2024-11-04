export interface User {
  id: number;
  name: string;
  position: string;
  phone: string;
  email: string;
  photo: string;
}

export const users: User[] = [
  {
    id: 1,
    name: "Польдяев Даниил Cергеевич",
    position: "Руководитель группы",
    phone: "+7 (967) 853-28-13",
    email: "poldyaev@skbkontu.ru",
    photo: "/1.png"
  },
  {
    id: 2,
    name: "Русаков Дмитрий Александрович",
    position: "Русаков Дмитрий Александрович",
    phone: "+7 (909) 003-22-76",
    email: "rusakov_da@skbkontur.ru",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400"
  }
];