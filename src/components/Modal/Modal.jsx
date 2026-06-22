import "./Modal.css";
import { useForm } from "../../hooks/useForm";
import useModalClose from "../../hooks/useModalClose";
import { useGlobal } from "../GlobalState/GlobalState";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Form from "../Form/Form";

const Modal = () => {
  const { isOpen, setIsOpen } = useGlobal();

  useModalClose(isOpen, () => setIsOpen(false));

  if (!isOpen) return;
  return (
    <div className="modal">
      <div className="modal__container">
        <h2 className="modal__title">Contact me</h2>
        <div
          className="modal__close-btn"
          onClick={() => {
            setIsOpen(false);
          }}
        />
        <div className="modal__form-container">
          <Form
            inputs={[
              {
                name: "name",
                type: "text",
                placeholder: "Name *",
                labelText: "Name *",
                required: true,
              },
              {
                name: "church",
                type: "text",
                placeholder: "Church",
                labelText: "Church",
              },
              {
                name: "email",
                type: "email",
                placeholder: "Email *",
                labelText: "Email *",
                required: true,
              },
              {
                name: "phone",
                type: "number",
                placeholder: "Phone",
                labelText: "Phone",
              },
              {
                name: "project",
                type: "textarea",
                placeholder: "Tell me about your project",
                labelText: "Project * ",
                required: true,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
export default Modal;
