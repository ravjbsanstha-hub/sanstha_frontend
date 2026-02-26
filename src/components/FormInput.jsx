import './FormInput.css'

const FormInput = ({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  onBlur, 
  error, 
  required = false, 
  placeholder = '',
  options = [],
  ...props 
}) => {
  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className={`form-input ${error ? 'error' : ''}`}
            required={required}
            rows="4"
            {...props}
          />
        )
      
      case 'select':
        return (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={`form-input ${error ? 'error' : ''}`}
            required={required}
            {...props}
          >
            <option value="">{placeholder}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )
      
      case 'radio':
        return (
          <div className="radio-group">
            {options.map((option) => (
              <label key={option.value} className="radio-label">
                <input
                  type="radio"
                  name={name}
                  value={option.value}
                  checked={value === option.value}
                  onChange={onChange}
                  onBlur={onBlur}
                  className="form-radio"
                  required={required}
                />
                <span className="radio-text">{option.label}</span>
              </label>
            ))}
          </div>
        )
      
      default:
        return (
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className={`form-input ${error ? 'error' : ''}`}
            required={required}
            {...props}
          />
        )
    }
  }

  return (
    <div className="form-group">
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      {renderInput()}
      {error && <span className="error-message">{error}</span>}
    </div>
  )
}

export default FormInput
