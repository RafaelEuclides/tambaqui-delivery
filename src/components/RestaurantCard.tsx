'use client';

import { useState } from 'react';
import { RestaurantModal } from '@/app/restaurant/[id]/RestaurantModal';

type RestaurantCardProps = {
  name: string;
  image: string;
  rating: number;
  category: string;
  deliveryTime: string;
};

export function RestaurantCard(props: RestaurantCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        onClick={handleOpenModal}
        className="w-full bg-white rounded-2xl shadow-md transition-transform hover:scale-105 duration-200 cursor-pointer"
      >
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-40 sm:h-44 md:h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="font-semibold text-indigo-950 text-base sm:text-lg truncate">{props.name}</h2>
          <p className="text-sm text-gray-600 mt-1">
            ⭐ {props.rating} • {props.category} • {props.deliveryTime}
          </p>
        </div>
      </div>

      <RestaurantModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}