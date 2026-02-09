interface FormFieldProps {
  targetId: string;
  labelTitle: string;
  errorMessage?: string;
  children: React.ReactNode;
}

export default function FormField({
  targetId,
  labelTitle,
  errorMessage,
  children,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={targetId}>{labelTitle}: </label>
      {children}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}
