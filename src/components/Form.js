import { useState } from "react";

function Form() {
  const initValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };
  const [formData, setFormData] = useState(initValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, undefined, 2));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        value={formData.name}
        required={true}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      ></input>
      <br />
      <label>Email</label>
      <input
        type="email"
        value={formData.email}
        required={true}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      ></input>
      <br />
      <label>Phone</label>
      <input
        type="text"
        value={formData.phone}
        required={true}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      ></input>
      <br />
      <label>Password</label>
      <input
        type="password"
        value={formData.password}
        required={true}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      ></input>
      <br />
      <button type="submit">Submit</button>
      <p>{JSON.stringify(formData, undefined, 2)}</p>
    </form>
  );
}
export default Form;
