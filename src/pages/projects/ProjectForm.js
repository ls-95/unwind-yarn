import ProjectYarnForm from "./ProjectYarnForm";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import WidePinkButton from "../../components/atoms/buttons/WidePinkButton";
import FormInput from "../../components/atoms/inputs/FormInput";

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
            <FormInput
              placeholder="ex. Marseille Sweater"
              register={{ ...register("name") }}
            />
          </div>

          <div className="FormTitles">
            <label>
              <span className="Strong">Designer</span>:
            </label>
          </div>
          <div className="FormInputText">
            <FormInput
              placeholder="ex. PetiteKnit"
              register={{ ...register("designer") }}
            />
          </div>

          <div className="FormTitles">
            <label>
              <span className="Strong">Status</span>:{" "}
            </label>
          </div>
          <div className="FormInputText">
            <FormInput
              placeholder="ex. Finished, WIP, Future"
              register={{ ...register("status") }}
            />
          </div>

          <div className="FormTitles">
            <label>
              <span className="Strong">Description</span>:{" "}
            </label>
          </div>
          <div className="FormInputText">
            <FormInput
              placeholder="Project description"
              register={{ ...register("description") }}
            />
          </div>

          <div className="FormTitles">
            <label>
              <span className="Strong">Size</span>:{" "}
            </label>
          </div>
          <div className="FormInputText">
            <FormInput placeholder="ex. M" register={{ ...register("size") }} />
          </div>

          <div className="FormTitles">
            <label>
              <span className="Strong">Needles</span>:
            </label>
          </div>
          <div className="FormInputText">
            <FormInput
              placeholder="ex. 5mm, 3mm"
              register={{ ...register("needles") }}
            />
          </div>
        </div>
        <ProjectYarnForm registerField={register} />
        <WidePinkButton type="submit" value="Submit" disabled={isDisabled} />
      </form>
    </div>
  );
}
