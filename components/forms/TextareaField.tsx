type TextareaFieldProps = {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  className?: string;
};

export function TextareaField({
  id,
  name,
  label,
  placeholder,
  rows = 5,
  required = false,
  className = "",
}: TextareaFieldProps) {
  const classes = ["form-field", className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <label htmlFor={id} className="form-field__label">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className="form-field__textarea"
      />
    </div>
  );
}