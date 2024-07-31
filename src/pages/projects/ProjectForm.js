import ProjectYarnForm from "./ProjectYarnForm";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import WidePinkButton from "../../components/atoms/buttons/WidePinkButton";
import FormInput from "../../components/atoms/inputs/FormInput";
import MainHeading from "../../components/atoms/text/MainHeader";
import BoldText from "../../components/atoms/text/BoldText";
import MarginTopDiv from "../../components/atoms/text/MarginTopDiv";

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
      <MainHeading>Create a project</MainHeading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Left FormContainer">
          <MarginTopDiv>
            <label>
              <BoldText>Name</BoldText>:
            </label>
          </MarginTopDiv>
          <div className="FormInputText">
            <FormInput
              placeholder="ex. Marseille Sweater"
              register={{ ...register("name") }}
            />
          </div>

          <MarginTopDiv>
            <label>
              <BoldText>Designer</BoldText>:
            </label>
          </MarginTopDiv>
          <div className="FormInputText">
            <FormInput
              placeholder="ex. PetiteKnit"
              register={{ ...register("designer") }}
            />
          </div>

          <MarginTopDiv>
            <label>
              <BoldText>Status</BoldText>:{" "}
            </label>
          </MarginTopDiv>
          <div className="FormInputText">
            <FormInput
              placeholder="ex. Finished, WIP, Future"
              register={{ ...register("status") }}
            />
          </div>

          <MarginTopDiv>
            <label>
              <BoldText>Description</BoldText>:{" "}
            </label>
          </MarginTopDiv>
          <div className="FormInputText">
            <FormInput
              placeholder="Project description"
              register={{ ...register("description") }}
            />
          </div>

          <MarginTopDiv>
            <label>
              <BoldText>Size</BoldText>:{" "}
            </label>
          </MarginTopDiv>
          <div className="FormInputText">
            <FormInput placeholder="ex. M" register={{ ...register("size") }} />
          </div>

          <MarginTopDiv>
            <label>
              <BoldText>Needles</BoldText>:
            </label>
          </MarginTopDiv>
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
