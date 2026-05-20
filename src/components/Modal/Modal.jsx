import "./Modal.css";
import { useForm } from "../../hooks/useForm";
import useModalClose from "../../hooks/useModalClose";
import { useGlobal } from "../GlobalState/GlobalState";
import { useState, useRef } from "react";

const Modal = () => {
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});
  const { values, handleChange, setValues } = useForm({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { isOpen, setIsOpen } = useGlobal();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors({});

    const form = formRef.current;
    const newErrors = {};

    // ✅ native validation
    Array.from(form.elements).forEach((input) => {
      if (input.name && !input.validity.valid) {
        newErrors[input.name] = input.validationMessage;
      }
    });

    const finalErrors = { ...newErrors };

    // ✅ apply classes
    Array.from(form.elements).forEach((input) => {
      if (!input.name) return;

      if (newErrors[input.name]) {
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    });

    // ✅ stop if errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Valid:", values);

    setValues({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  }

  useModalClose(isOpen, () => {
    setIsOpen(false);
  });

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__container">
        <h2 className="modal__title">Contact me!</h2>
        <div
          className="modal__close-btn"
          onClick={() => {
            setIsOpen(false);
          }}
        />
        <form className="modal__form" ref={formRef}>
          <label className="modal__form-label">
            Name *
            <input
              required
              id="name"
              name="name"
              type="text"
              className="modal__form-input"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name ? (
              <span className="error-message">{errors.name}</span>
            ) : (
              <span className="error-message" />
            )}
          </label>
          <label className="modal__form-label">
            Email *
            <input
              required
              id="email"
              name="email"
              type="email"
              className="modal__form-input"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email ? (
              <span className="error-message">{errors.email}</span>
            ) : (
              <span className="error-message" />
            )}
          </label>
          <label className="modal__form-label">
            Phone
            <input
              id="phone"
              name="phone"
              type="tel"
              className="modal__form-input"
              placeholder="Phone"
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone ? (
              <span className="error-message">{errors.phone}</span>
            ) : (
              <span className="error-message" />
            )}
          </label>
          <label className="modal__form-label">
            Message *
            <textarea
              required
              id="message"
              name="message"
              type="text"
              className="modal__form-input"
              placeholder="Message"
              value={values.message}
              onChange={handleChange}
            />
            {errors.message ? (
              <span className="error-message">{errors.message}</span>
            ) : (
              <span className="error-message" />
            )}
          </label>
          <button className="modal__submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Modal;
