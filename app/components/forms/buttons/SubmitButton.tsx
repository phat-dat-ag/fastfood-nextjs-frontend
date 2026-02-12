interface SubmitButtonProps {
  buttonLabel: string;
  isDisabled: boolean;
}
export default function SubmitButton({
  buttonLabel,
  isDisabled,
}: SubmitButtonProps) {
  return (
    <button
      className="rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 px-4 py-2 font-semibold text-white shadow-md transition hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
      type="submit"
      disabled={isDisabled}
    >
      {buttonLabel}
    </button>
  );
}
