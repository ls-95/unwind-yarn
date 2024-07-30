import YarnCompositionForm from "./YarnCompositionForm";
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
      <h1>Add yarn to your stash</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Left FormContainer">
          <div className="FormTitles">
            <label>
              <span className="Strong">Status</span>:
            </label>
          </div>
          <div className="FormInputText">
            <FormInput
              placeholder="ex. In stash, Used, Wish list"
              register={{ ...register("status") }}
            />
          </div>
          <div className="FormTitles">
            <label>
              <span className="Strong">Name</span>:
            </label>
          </div>
          <div className="FormInputText">
            <FormInput
              placeholder="ex. Ballerina Chunky Mohair"
              register={{ ...register("name") }}
            />
          </div>

          <div className="FormTitles">
            <label>
              <span className="Strong">Brand</span>:
            </label>
          </div>
          <div className="FormInputText">
            <FormInput
              placeholder="ex.Sandnes Garn"
              register={{ ...register("brand") }}
            />
          </div>

          <div className="FormTitles">
            <label>
              <span className="Strong">Colour</span>:{" "}
            </label>
          </div>
          <div className="FormInputText">
            <FormInput
              placeholder="ex. 9004"
              register={{ ...register("colour") }}
            />
          </div>

          <div className="FormTitles">
            <label>
              <span className="Strong">Length</span>:{" "}
            </label>
          </div>
          <div className="FormInputText">
            <FormInput
              placeholder="ex. 135m"
              register={{ ...register("length") }}
            />
          </div>

          <div className="FormTitles">
            <label>
              <span className="Strong">Weight</span>:{" "}
            </label>
          </div>
          <div className="FormInputText">
            <FormInput
              placeholder="ex. 50g"
              register={{ ...register("weight") }}
            />
          </div>

          <div className="FormTitles">
            <label>
              <span className="Strong">Needle sizes</span>:
            </label>
          </div>
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
