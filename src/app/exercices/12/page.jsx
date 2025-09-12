"use client";

import { useReducer } from "react";

const initialState = {
  formData: {
    name: "",
    email: "",
    address: "",
    city: "",
    zipcode: "",
  },
  step: 1,
};

const reducer = ({ formData, step }, { type, key, value }) => {
  switch (type) {
    case "next":
      step += 1;
      break;
    case "previous":
      step -= 1;
      break;
    case "change":
      formData = { ...formData, [key]: value };
      break;
    case "submit":
      formData = initialState.formData;
      step = 1;
      break;
    default:
      break;
  }
  return { formData, step };
};

export default function MultistepFormReducer() {
  const [form, dispatch] = useReducer(reducer, initialState);

  const handleNextStep = () => {
    dispatch({ type: "next" });
  };

  const handlePrevStep = () => {
    dispatch({ type: "previous" });
  };

  const handleChange = (e) => {
    dispatch({ type: "change", value: e.target.value, key: e.target.name });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your submission");
    dispatch({ type: "submit" });
  };

  if (form.step === 1) {
    return (
      <form onSubmit={handleSubmit}>
        <div id="notice">Refacto ce formulaire en utilisant useReducer</div>
        <h2>Personal Information</h2>
        <div>
          <label>Step {form.step} of 3</label>
          <progress value={form.step} max={3} />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            required
            name="name"
            id="name"
            placeholder="Enter your name"
            value={form.formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            required
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={form.formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="button" className="secondary" onClick={handleNextStep}>
          Next
        </button>
      </form>
    );
  } else if (form.step === 2) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Address</h2>
        <div>
          <label>Step {form.step} of 3</label>
          <progress value={form.step} max={3} />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            required
            name="address"
            id="address"
            type="address"
            placeholder="What is your address?"
            value={form.formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            required
            name="city"
            id="city"
            placeholder="What city do you live in?"
            value={form.formData.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="zipcode">Zipcode</label>
          <input
            required
            name="zipcode"
            id="zipcode"
            type="number"
            placeholder="What is your zipcode?"
            value={form.formData.zipcode}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="secondary" type="button" onClick={handleNextStep}>
            Next
          </button>
          <button type="button" className="link" onClick={handlePrevStep}>
            Previous
          </button>
        </div>
      </form>
    );
  } else if (form.step === 3) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Confirm your information:</h2>
        <div>
          <label>Step {form.step} of 3</label>
          <progress value={form.step} max={3} />
        </div>
        <table>
          <tbody>
            {Object.keys(form.formData).map((key) => {
              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{form.formData[key]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <button className="primary" type="submit">
            Submit
          </button>
          <button type="button" className="link" onClick={handlePrevStep}>
            Previous
          </button>
        </div>
      </form>
    );
  } else {
    return null;
  }
}
