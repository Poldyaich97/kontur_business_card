import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BusinessCard } from '../components/BusinessCard';
import { users } from '../data/users';
import { Shield } from 'lucide-react';

export const CardViewer: React.FC = () => {
  const { id } = useParams();
  const userId = parseInt(id || '1');
  const user = users.find(u => u.id === userId);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
        <p className="text-white">Пользователь не найден</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-6 relative">
      <div className="absolute top-4 right-4">
        <Link
          to="/admin"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <Shield size={20} />
          <span>Админ панель</span>
        </Link>
      </div>
      
      <div className="w-full max-w-3xl">
        <BusinessCard user={user} />
      </div>
    </div>
  );
};