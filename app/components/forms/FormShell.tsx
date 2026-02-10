interface FormShellProps {
  formTitle: string;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const SIZE_MAP = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
};

export default function FormShell({
  formTitle,
  size = "md",
  children,
}: FormShellProps) {
  return (
    <div
      className={`mx-auto mt-10 w-full ${SIZE_MAP[size]} rounded-xl border bg-white p-8 shadow-lg`}
    >
      <h1 className="mb-6 text-center text-3xl font-semibold text-orange-400">
        {formTitle}
      </h1>
      {children}
    </div>
  );
}
