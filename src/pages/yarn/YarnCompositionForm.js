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
            {...registerField("composition.materialone")}
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
            {...registerField("composition.pourcentageone")}
          />
        </div>
        <div className="FormSectionTitles">
          <label>Material:</label>
        </div>
        <div className="FormInputText">
          <input
            {...registerField("composition.materialtwo")}
            type="text"
            placeholder="ex. wool"
          />
        </div>
        <div className="FormSectionTitles">
          <label>Pourcentage:</label>
        </div>
        <div className="FormInputText">
          <input
            type="text"
            placeholder="ex. 18%"
            {...registerField("composition.pourcentagetwo")}
          />
        </div>
        <div className="FormSectionTitles">
          <label>Material:</label>
        </div>
        <div className="FormInputText">
          <input
            {...registerField("composition.materialthree")}
            type="text"
            placeholder="ex. polyamid"
          />
        </div>
        <div className="FormSectionTitles">
          <label>Pourcentage:</label>
        </div>
        <div className="FormInputText">
          <input
            type="text"
            placeholder="ex. 5%"
            {...registerField("composition.pourcentagethree")}
          />
        </div>
      </div>
    </div>
  );
}
