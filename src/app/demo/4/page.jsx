"use client";

import { useReducer } from "react";

const initialState = {
  fields: {
    name: "",
    email: "",
    cgu: "",
  },
  submitting: false,
  success: false,
  error: "",
};

const reducer = (state, { action, value, key }) => {
  switch (action) {
    case "setSubmitting":
      return { ...state, submitting: value };
    case "setSuccess":
      return { ...state, success: value };
    case "setError":
      return { ...state, error: value };
    case "handleChange":
      return { ...state, fields: { ...state.fields, [key]: value } };
    default:
      break;
  }
};

export default function App() {
  const [form, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ action: "setSubmitting", value: true });

    window.setInterval(() => {
      dispatch({ action: "setSubmitting", value: false });
      dispatch({ action: "setSuccess", value: false });
      dispatch({ action: "setError", value: "error" });
    }, 1000);
  };

  return (
    <div>
      <h1>Formulaire d'inscription</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={(e) => {
              dispatch({
                action: "handleChange",
                key: "name",
                value: e.target.value,
              });
            }}
            value={form.fields.name}
            required
            placeholder="Your name"
          />
          <label htmlFor="email-address">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            onChange={(e) => {
              dispatch({
                action: "handleChange",
                key: "email",
                value: e.target.value,
              });
            }}
            value={form.fields.email}
            autoComplete="email"
            required
            placeholder="Email Address"
          />
          <button type="submit">Submit</button>
        </div>
        <div>
          <label htmlFor="cgu">CGU</label>
          <input
            id="cgu"
            name="cgu"
            type="checkbox"
            onChange={(e) => {
              dispatch({
                action: "handleChange",
                key: "cgu",
                value: e.target.checked,
              });
            }}
            checked={form.fields.cgu}
          />
          <p>I agree to everything.</p>
        </div>
      </form>
      {form.submitting && <p>Submitting...</p>}
      {form.error && <p>{form.error}</p>}
      {form.success && <p>Success!</p>}
    </div>
  );
}
