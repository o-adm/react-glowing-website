function Input({ type = "text", placeholder, className }) {
  return (
    <input
      className={`input ${className}`}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default Input;
