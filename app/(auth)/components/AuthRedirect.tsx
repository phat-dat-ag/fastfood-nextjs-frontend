interface AuthRedirectProps {
  message: string;
  linkText: string;
  onClickFunction: () => void;
}
export default function AuthRedirect({
  message,
  linkText,
  onClickFunction,
}: AuthRedirectProps) {
  return (
    <p>
      {message}{" "}
      <button
        type="button"
        className="text-orange-500 hover:text-orange-300"
        onClick={onClickFunction}
      >
        {linkText}
      </button>
    </p>
  );
}
