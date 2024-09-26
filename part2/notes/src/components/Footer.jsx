function Footer() {
  const footerStyle = {
    bottom: 0,
    position: "fixed",
    width: "100vw",
    padding: "10px",
    fontSize: 12,
    color: "slateblue",
  };

  return (
    <div style={footerStyle}>
      <br />
      <code>
        Notes app, Department of Computer Science, University of Helsinki 2024
      </code>
    </div>
  );
}

export default Footer;
