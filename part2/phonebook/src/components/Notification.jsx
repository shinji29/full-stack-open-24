function Notification({ message }) {
  return message.content === null ? null : (
    <div className={message.nature}>{message.content}</div>
  );
}

export default Notification;
