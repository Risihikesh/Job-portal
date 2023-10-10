import React from "react";
import ApplicationForm from "./Form";

const ApplicationModal = ({ isOpen, onClose }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 flex justify-center items-center ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white p-6 rounded-md shadow-lg">
        
        <h2 className="text-xl font-semibold mb-4">Apply for the Job</h2>
        <ApplicationForm  onClose={closeModal}/>
        <button
          className="flex items-center gap-2 bg-red-600 w-28 justify-center rounded-md py-2 text-white mt-8"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ApplicationModal;
