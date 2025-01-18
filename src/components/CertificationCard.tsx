import { useState } from "react";
import Image from "next/image";

interface CertificationCardProps {
  title: string;
  previewImageUrl: string; // Preview image for the card
  certificateImageUrl: string; // The actual certificate image for the modal
}

export default function CertificationCard({
  title,
  previewImageUrl,
  certificateImageUrl,
}: CertificationCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative w-64 h-64">
      <div className="relative w-full h-full flex justify-center items-center bg-gray-800 rounded-lg overflow-hidden shadow-md">
        <Image
          src={previewImageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute bottom-1 text-white text-lg font-semibold bg-black/60 rounded-lg p-2">
          {title}
        </div>
      </div>

      {/* View Certificate Button */}
      <div className="mt-4 text-center">
        <button
          onClick={openModal}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Certificate
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative w-3/4 h-3/4 bg-white rounded-lg p-4">
            <Image
              src={certificateImageUrl}
              alt={title}
              layout="fill"
              objectFit="contain"
            />
            <button
              className="absolute top-2 right-2 text-white bg-black p-2 rounded-full"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
