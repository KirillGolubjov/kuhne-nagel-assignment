const FormRow = ({ type, name, value, handleInputChange }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleInputChange}
        className='form-input'
      />
    </div>
  );
};
export default FormRow;
