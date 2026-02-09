interface SubmitButtonProps {
  buttonLabel: string;
  isDisabled: boolean;
}
export default function SubmitButton({
  buttonLabel,
  isDisabled,
}: SubmitButtonProps) {
  return (
    <button className="border rounded p-2" type="submit" disabled={isDisabled}>
      {buttonLabel}
    </button>
  );
}
