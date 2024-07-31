export default function MainHeader(props) {
  return (
    <h1 style={{ fontWeight: 900, padding: "20px 0", textAlign: "center" }}>
      {props.children}
    </h1>
  );
}
