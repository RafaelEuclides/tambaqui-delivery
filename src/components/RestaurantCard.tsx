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
        className="w-full bg-white rounded-2xl shadow-md overflow-hidden transition hover:scale-[1.02] duration-200 cursor-pointer"
      >
        <img src={props.image} alt={props.name} className="w-full h-36 object-cover" />
        <div className="p-4">
          <h2 className="font-semibold text-lg text-indigo-950">{props.name}</h2>
          <p className="text-sm text-gray-500">
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
