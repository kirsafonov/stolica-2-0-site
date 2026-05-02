type FormFieldProps = {
  id: string;
  name: string;
  label: string;
  type?: "text" | "tel" | "email";
  placeholder?: string;
  required?: boolean;
  className?: string;
};

export function FormField({
  id,
  name,
  label,
  type = "text",
  placeholder,
  required = false,
  className = "",
}: FormFieldProps) {
  const classes = ["form-field", className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <label htmlFor={id} className="form-field__label">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="form-field__input"
      />
    </div>
  );
}