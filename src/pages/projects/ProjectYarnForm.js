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
          <input
            {...registerField("yarn.name")}
            type="text"
            placeholder="ex. Double Sunday"
          />
        </div>
        <div className="FormSectionTitles">
          <label>Brand:</label>
        </div>
        <div className="FormInputText">
          <input
            type="text"
            placeholder="ex. Sandnes Garn"
            {...registerField("yarn.brand")}
          />
        </div>
        <div className="FormSectionTitles">
          <label>Colour Code:</label>
        </div>
        <div className="FormInputText">
          <input
            type="text"
            placeholder="ex. 1001"
            {...registerField("yarn.colour")}
          />
        </div>
        <div className="FormSectionTitles">
          <label>Quantity:</label>
        </div>
        <div className="FormInputText">
          <input
            type="text"
            placeholder="ex. 500g"
            {...registerField("yarn.quantity")}
          />
        </div>
      </div>
    </div>
  );
}
