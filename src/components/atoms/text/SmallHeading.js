export default function SmallHeading(props) {
  return (
    <h4 style={{ paddingBottom: "20px", fontSize: "20px" }}>
      {props.children}
    </h4>
  );
}
