function Message({ loading, error }) {
  if (loading) return <p className="message">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;
}

export default Message;
