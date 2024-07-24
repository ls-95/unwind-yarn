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
          <input
            {...registerField("composition.material")}
            type="text"
            placeholder="ex. mohair"
          />
        </div>
        <div className="FormSectionTitles">
          <label>Pourcentage:</label>
        </div>
        <div className="FormInputText">
          <input
            type="text"
            placeholder="ex. 77%"
            {...registerField("composition.pourcentage")}
          />
        </div>
      </div>
    </div>
  );
}
