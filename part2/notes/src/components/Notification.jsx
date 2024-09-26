function Notification({ message }) {
  if (message.content === null) {
    return null;
  }
  return <div className={message.nature}>{message.content}</div>;
}

export default Notification;
