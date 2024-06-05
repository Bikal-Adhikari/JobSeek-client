const CustomInput = ({ name, label, inputRef, ...rest }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {label || name}
      </label>
      <input name={name} {...rest} ref={inputRef} className="form-input" />
    </div>
  );
};

export default CustomInput;
