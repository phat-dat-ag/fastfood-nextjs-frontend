interface CancelButtonProps {
  buttonLabel: string;
  onClickFunction: () => void;
}
export default function CancelButton({
  buttonLabel,
  onClickFunction,
}: CancelButtonProps) {
  return (
    <button
      className="border rounded p-2"
      type="button"
      onClick={onClickFunction}
    >
      {buttonLabel}
    </button>
  );
}
