export default function DisplayNeedleSizes(props) {
  return props.results.needleSizes.map(function (needles, index) {
    return (
      <div key={index} className="DisplayNeedleSizes">
        <span className="TextFont">
          - {needles.size}
          {needles.measurement}
        </span>
      </div>
    );
  });
}
