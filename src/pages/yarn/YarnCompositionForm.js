import FormInput from "../../components/atoms/inputs/FormInput";

export default function YarnCompositionForm({ registerField }) {
  return (
    <div className="FormSection Left">
      <p className="FormSectionYarnName">
        <span className="Strong">Composition</span>
      </p>
      <div className="FormContainer">
        <div className="FormSectionTitles">
          <label>Material:</label>
        </div>
        <div className="FormInputText">
          <FormInput
            placeholder="ex. Mohair"
            register={{ ...registerField("composition.material") }}
          />
        </div>
        <div className="FormSectionTitles">
          <label>Pourcentage:</label>
        </div>
        <div className="FormInputText">
          <FormInput
            placeholder="ex. 77%"
            register={{ ...registerField("composition.pourcentage") }}
          />
        </div>
      </div>
    </div>
  );
}
