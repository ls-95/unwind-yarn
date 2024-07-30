import FormInput from "../../components/atoms/inputs/FormInput";

export default function ProjectYarnForm({ registerField }) {
  return (
    <div className="FormSection Left">
      <p className="FormSectionYarnName">
        <span className="Strong">Yarn</span>
      </p>
      <div className="FormContainer">
        <div className="FormSectionTitles">
          <label>Name:</label>
        </div>
        <div className="FormInputText">
          <FormInput
            placeholder="ex. Double Sunday"
            register={{ ...registerField("yarn.name") }}
          />
        </div>
        <div className="FormSectionTitles">
          <label>Brand:</label>
        </div>
        <div className="FormInputText">
          <FormInput
            placeholder="ex. Sandnes Garn"
            register={{ ...registerField("yarn.brand") }}
          />
        </div>
        <div className="FormSectionTitles">
          <label>Colour Code:</label>
        </div>
        <div className="FormInputText">
          <FormInput
            placeholder="ex. 1001"
            register={{ ...registerField("yarn.colour") }}
          />
        </div>
        <div className="FormSectionTitles">
          <label>Quantity:</label>
        </div>
        <div className="FormInputText">
          <FormInput
            placeholder="ex. 500g"
            register={{ ...registerField("yarn.quantity") }}
          />
        </div>
      </div>
    </div>
  );
}
