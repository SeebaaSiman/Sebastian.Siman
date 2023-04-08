import { useRef } from "react";
import { useState } from "react";

export const useModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [clousing, setClousing] = useState(false);
    const onOpenModal = () => {
        setShowModal(true);
    };

    const onCloseModal = () =>  {
        if (!clousing) {
          setClousing(true);
          setTimeout(() => {
            setShowModal(false);
            setClousing(false);
          }, 500);
        }
      };

    const showOut = () => {
        setClousing(true);
        setTimeout(() => {
            onCloseModal();
            setClousing(false);
        }, 500);
    };
    return { onOpenModal, clousing, showOut, showModal ,onCloseModal}
}
