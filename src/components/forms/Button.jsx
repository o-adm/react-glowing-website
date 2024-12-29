function Button({ type, id, onClick, children }) {
  return (
    <button
      {...(id && { id })}
      className={`btn ${type ? `btn-${type}` : ""} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
