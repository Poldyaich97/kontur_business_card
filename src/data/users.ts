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
    name: "Anna Petrova",
    position: "Senior Software Engineer",
    phone: "+7 (999) 123-45-67",
    email: "a.petrova@kontur.ru",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 2,
    name: "Ivan Sokolov",
    position: "Product Manager",
    phone: "+7 (999) 234-56-78",
    email: "i.sokolov@kontur.ru",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 3,
    name: "Maria Ivanova",
    position: "UX Designer",
    phone: "+7 (999) 345-67-89",
    email: "m.ivanova@kontur.ru",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 4,
    name: "Dmitry Volkov",
    position: "Technical Lead",
    phone: "+7 (999) 456-78-90",
    email: "d.volkov@kontur.ru",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 5,
    name: "Elena Smirnova",
    position: "Business Analyst",
    phone: "+7 (999) 567-89-01",
    email: "e.smirnova@kontur.ru",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 6,
    name: "Alexey Popov",
    position: "DevOps Engineer",
    phone: "+7 (999) 678-90-12",
    email: "a.popov@kontur.ru",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 7,
    name: "Olga Kozlova",
    position: "Marketing Director",
    phone: "+7 (999) 789-01-23",
    email: "o.kozlova@kontur.ru",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 8,
    name: "Sergey Morozov",
    position: "System Architect",
    phone: "+7 (999) 890-12-34",
    email: "s.morozov@kontur.ru",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 9,
    name: "Natalia Orlova",
    position: "HR Manager",
    phone: "+7 (999) 901-23-45",
    email: "n.orlova@kontur.ru",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 10,
    name: "Pavel Kuznetsov",
    position: "Sales Director",
    phone: "+7 (999) 012-34-56",
    email: "p.kuznetsov@kontur.ru",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400"
  }
];