import React, { useState } from "react";
import { User } from "../data/users";
import { Phone, Mail, Briefcase, X } from "lucide-react";
import { useCardRequests } from "../context/CardRequestContext";
import styles from "./BusinessCard.module.css";

interface BusinessCardProps {
  user: User;
}

export const BusinessCard: React.FC<BusinessCardProps> = ({ user }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const { addRequest } = useCardRequests();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addRequest({
      ...formData,
      employeeId: user.id,
      timestamp: new Date().toISOString(),
    });
    setShowModal(false);
    setFormData({ name: "", phone: "" });
  };

  return (
    <>
      <div className={styles.card}>
        <h1 className={styles.header}>Контур</h1>

        <div className={styles.content}>
          <div className={styles.photoSection}>
            <img src={user.photo} alt={user.name} className={styles.photo} />
            <h2 className={styles.name}>{user.name}</h2>
          </div>

          <div className={styles.info}>
            <div className={styles.infoItem}>
              <Briefcase size={20} className={styles.icon} />
              <span>{user.position}</span>
            </div>

            <div className={styles.infoItem}>
              <Phone size={20} className={styles.icon} />
              <span>{user.phone}</span>
            </div>

            <div className={styles.infoItem}>
              <Mail size={20} className={styles.icon} />
              <span>{user.email}</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className={styles.requestButton}
        >
          Хочу визитку
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl p-6 w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-semibold text-white mb-4">
              Заявка на визитку
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Ваше ФИО
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg
                    border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Ваш телефон
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg
                    border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg
                  hover:bg-blue-500 transition-colors duration-200"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
