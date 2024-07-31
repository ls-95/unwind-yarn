import YarnCompositionForm from "./YarnCompositionForm";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import WidePinkButton from "../../components/atoms/buttons/WidePinkButton";
import FormInput from "../../components/atoms/inputs/FormInput";
import BoldText from "../../components/atoms/text/BoldText";
import MainHeader from "../../components/atoms/text/MainHeader";
import MarginTopDiv from "../../components/atoms/text/MarginTopDiv";

export default function ProjectForm() {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsDisabled(true);
    fetch("http://localhost:3001/yarn", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
        navigate("/yarn");
        setIsDisabled(false);
      });
  };

  return (
    <div className="ProjectForm">
      <MainHeader>Add yarn to your stash</MainHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Left FormContainer">
          <MarginTopDiv>
            <label>
              <BoldText>Status</BoldText>:
            </label>
          </MarginTopDiv>
          <div className="FormInputText">
            <FormInput
              placeholder="ex. In stash, Used, Wish list"
              register={{ ...register("status") }}
            />
          </div>
          <MarginTopDiv>
            <label>
              <BoldText>Name</BoldText>:
            </label>
          </MarginTopDiv>
          <div className="FormInputText">
            <FormInput
              placeholder="ex. Ballerina Chunky Mohair"
              register={{ ...register("name") }}
            />
          </div>

          <MarginTopDiv>
            <label>
              <BoldText>Brand</BoldText>:
            </label>
          </MarginTopDiv>
          <div className="FormInputText">
            <FormInput
              placeholder="ex.Sandnes Garn"
              register={{ ...register("brand") }}
            />
          </div>

          <MarginTopDiv>
            <label>
              <BoldText>Colour</BoldText>:{" "}
            </label>
          </MarginTopDiv>
          <div className="FormInputText">
            <FormInput
              placeholder="ex. 9004"
              register={{ ...register("colour") }}
            />
          </div>

          <MarginTopDiv>
            <label>
              <BoldText>Length</BoldText>:{" "}
            </label>
          </MarginTopDiv>
          <div className="FormInputText">
            <FormInput
              placeholder="ex. 135m"
              register={{ ...register("length") }}
            />
          </div>

          <MarginTopDiv>
            <label>
              <BoldText>Weight</BoldText>:{" "}
            </label>
          </MarginTopDiv>
          <div className="FormInputText">
            <FormInput
              placeholder="ex. 50g"
              register={{ ...register("weight") }}
            />
          </div>

          <MarginTopDiv>
            <label>
              <BoldText>Needle sizes</BoldText>:
            </label>
          </MarginTopDiv>
          <div className="FormInputText">
            <FormInput
              placeholder="ex. 5-7mm"
              register={{ ...register("needleSizes") }}
            />
          </div>
        </div>
        <YarnCompositionForm registerField={register} />
        <WidePinkButton type="submit" value="Submit" disabled={isDisabled} />
      </form>
    </div>
  );
}
