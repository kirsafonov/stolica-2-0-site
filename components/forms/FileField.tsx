type FileFieldProps = {
  id: string;
  name: string;
  label: string;
  accept?: string;
  multiple?: boolean;
  className?: string;
};

export function FileField({
  id,
  name,
  label,
  accept,
  multiple = false,
  className = "",
}: FileFieldProps) {
  const classes = ["form-field", className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <label htmlFor={id} className="form-field__label">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type="file"
        accept={accept}
        multiple={multiple}
        className="form-field__file"
      />
    </div>
  );
}