import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

// import "./UserForm.css";

const kDefaultFormState = {
  username: "",
};

const notUser = () => {
  return (
    <p className="error-not-user">
      The username entered does not belong to an existing account.
    </p>
  );
};

const UserForm = (props = null) => {
  const loaderData = useLoaderData();
  const [formData, setFormData] = useState(kDefaultFormState);

  const loginState = loaderData ? loaderData[0].loginState : props.loginState;
  const handleLogIn = loaderData ? loaderData[0].onLogIn : props.onLogIn;

  const handleChange = (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    const newFormData = { ...formData, [fieldName]: fieldValue };

    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogIn(formData);
    setFormData(kDefaultFormState);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">username</label>
          <input
            className="entry"
            type="text"
            id="name"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        {loginState.repeatLogin && notUser()}

        <button id="submit">Log In</button>
      </form>
      <p>
        or
        <Link id="slink" to={`/signup`}>
          Sign up now!
        </Link>
      </p>
    </>
  );
};

export default UserForm;
