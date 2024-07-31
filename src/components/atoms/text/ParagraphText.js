export default function ParagraphText(props) {
  return (
    <span
      style={{
        marginBottom: "20px",
        padding: "0 10px",
        lineHeight: 1.7,
        fontFamily: "Raleway, sans-serif",
        fontSize: "16px",
        letterSpacing: "1.5px",
      }}
    >
      {props.children}
    </span>
  );
}
