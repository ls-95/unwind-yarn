import YarnCompositionForm from "./YarnCompositionForm";
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
            <input
              {...register("status")}
              type="text"
              placeholder="ex. In stash, Used, Wish list"
            />
          </div>
          <div className="FormTitles">
            <label>
              <span className="Strong">Name</span>:
            </label>
          </div>
          <div className="FormInputText">
            <input
              {...register("name")}
              type="text"
              placeholder="ex. Ballerina Chunky Mohair"
            />
          </div>

          <div className="FormTitles">
            <label>
              <span className="Strong">Brand</span>:
            </label>
          </div>
          <div className="FormInputText">
            <input
              type="text"
              placeholder="ex. Sandnes Garn"
              {...register("brand")}
            />
          </div>

          <div className="FormTitles">
            <label>
              <span className="Strong">Colour</span>:{" "}
            </label>
          </div>
          <div className="FormInputText">
            <input type="text" placeholder="ex. 9004" {...register("colour")} />
          </div>

          <div className="FormTitles">
            <label>
              <span className="Strong">Length</span>:{" "}
            </label>
          </div>
          <div className="FormInputText">
            <input type="text" placeholder="ex. 135m" {...register("length")} />
          </div>

          <div className="FormTitles">
            <label>
              <span className="Strong">Weight</span>:{" "}
            </label>
          </div>
          <div className="FormInputText">
            <input type="text" placeholder="ex. 50g" {...register("weight")} />
          </div>

          <div className="FormTitles">
            <label>
              <span className="Strong">Needle sizes</span>:
            </label>
          </div>
          <div className="FormInputText">
            <input
              type="text"
              placeholder="ex. 5-7mm"
              {...register("needleSizes")}
            />
          </div>
        </div>
        <YarnCompositionForm registerField={register} />
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
