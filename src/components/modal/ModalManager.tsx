"use client";

import { useModal } from "@/context/ModalContext";
import NavigationModal from "./NavigationModal";
import LoginModal from "./LoginModal";

const ModalManager = () => {
  const { activeModal, closeModal } = useModal();

  return (
    <>
      <NavigationModal
        isOpen={activeModal === "navigation"}
        onClose={closeModal}
      />
      <LoginModal isOpen={activeModal === "login"} onClose={closeModal} />
      {/* Add other modals here */}
    </>
  );
};

export default ModalManager;
