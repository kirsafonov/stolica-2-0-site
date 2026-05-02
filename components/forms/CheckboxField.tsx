type CheckboxFieldProps = {
  id: string;
  name: string;
  label: React.ReactNode;
  required?: boolean;
  className?: string;
};

export function CheckboxField({
  id,
  name,
  label,
  required = false,
  className = "",
}: CheckboxFieldProps) {
  const classes = ["form-checkbox", className].filter(Boolean).join(" ");

  return (
    <label htmlFor={id} className={classes}>
      <input
        id={id}
        name={name}
        type="checkbox"
        required={required}
        className="form-checkbox__input"
      />
      <span className="form-checkbox__label">{label}</span>
    </label>
  );
}