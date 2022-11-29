// import "../App.css";

function CustomButton(props) {
  const {
    margin,
    color,
    onClick,
    children,
    width,
    border,
    height,
    borderRadius,
  } = props;
  if (color) {
    return (
      <button
        className="up"
        style={{
          backgroundColor: color,
          color: "white",
          width: width,
          border: border,
          height: height,
          margin: margin,
          borderRadius: borderRadius,
        }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return <button onClick={onClick}>{children}</button>;
}

export default CustomButton;
