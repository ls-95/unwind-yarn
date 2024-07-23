import ProjectYarnForm from "./ProjectYarnForm";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function ProjectForm() {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsDisabled(true);
    fetch("http://localhost:3001/projects", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
        navigate("/projects");
        setIsDisabled(false);
      });
  };

  return (
    <div className="ProjectForm">
      <h1>Create a project</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Left FormContainer">
          <div className="FormTitles">
            <label>
              <span className="Strong">Name</span>:
            </label>
          </div>
          <div className="FormInputText">
            <input
              {...register("name")}
              type="text"
              placeholder="ex. Marseille Sweater"
            />
          </div>

          <div className="FormTitles">
            <label>
              <span className="Strong">Designer</span>:
            </label>
          </div>
          <div className="FormInputText">
            <input
              type="text"
              placeholder="ex. PetiteKnit"
              {...register("designer")}
            />
          </div>

          <div className="FormTitles">
            <label>
              <span className="Strong">Status</span>:{" "}
            </label>
          </div>
          <div className="FormInputText">
            <input
              type="text"
              placeholder="ex. Finished, WIP, Future"
              {...register("status")}
            />
          </div>

          <div className="FormTitles">
            <label>
              <span className="Strong">Description</span>:{" "}
            </label>
          </div>
          <div className="FormInputText">
            <input
              type="text"
              placeholder="Project description"
              {...register("description")}
            />
          </div>

          <div className="FormTitles">
            <label>
              <span className="Strong">Size</span>:{" "}
            </label>
          </div>
          <div className="FormInputText">
            <input type="text" placeholder="ex. M" {...register("size")} />
          </div>

          <div className="FormTitles">
            <label>
              <span className="Strong">Needles</span>:
            </label>
          </div>
          <div className="FormInputText">
            <input
              type="text"
              placeholder="ex. 5mm, 3mm"
              {...register("needles")}
            />
          </div>
        </div>
        <ProjectYarnForm registerField={register} />
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
