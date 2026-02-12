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
    <p className="mt-4 text-center text-sm text-gray-600">
      {message}{" "}
      <button
        type="button"
        className="ml-1 font-medium text-orange-500 transition hover:text-orange-600 hover:underline"
        onClick={onClickFunction}
      >
        {linkText}
      </button>
    </p>
  );
}
