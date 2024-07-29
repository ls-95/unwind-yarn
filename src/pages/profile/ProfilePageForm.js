import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function ProfilePageForm() {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsDisabled(true);
    fetch("http://localhost:3001/profile", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
        navigate("/myprofile");
        setIsDisabled(false);
      });
  };
  return (
    <div className="ProjectForm">
      <h1>Edit your profile</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Left FormContainer">
          <div className="FormTitles">
            <label>
              <span className="Strong">First name</span>:
            </label>
          </div>
          <div className="FormInputText">
            <input type="text" {...register("firstName")} />
          </div>

          <div className="FormTitles">
            <label>
              <span className="Strong">Last name</span>:
            </label>
          </div>
          <div className="FormInputText">
            <input type="text" {...register("lastName")} />
          </div>

          <div className="FormTitles">
            <label>
              <span className="Strong">Email</span>:{" "}
            </label>
          </div>
          <div className="FormInputText">
            <input type="text" {...register("email")} />
          </div>

          <div className="FormTitles">
            <label>
              <span className="Strong">Telephone</span>:{" "}
            </label>
          </div>
          <div className="FormInputText">
            <input type="text" {...register("telephone")} />
          </div>

          <div className="FormTitles">
            <label>
              <span className="Strong">Birthday</span>:{" "}
            </label>
          </div>
          <div className="FormInputText">
            <input type="text" {...register("birthday")} />
          </div>

          <div className="FormTitles">
            <label>
              <span className="Strong">Bio</span>:
            </label>
          </div>
          <div className="FormInputText">
            <input type="text" {...register("bio")} />
          </div>
        </div>
        <input
          type="submit"
          value="Submit"
          className="SubmitButton"
          disabled={isDisabled}
        />
      </form>
    </div>
  );
}
