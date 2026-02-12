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
      className={`mx-auto mt-10 w-full ${SIZE_MAP[size]} rounded-2xl border border-gray-100 bg-white/95 p-8 shadow-2xl backdrop-blur-sm transition"`}
    >
      <h1 className="mb-8 text-center text-3xl font-extrabold tracking-wide bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
        {formTitle}
      </h1>
      {children}
    </div>
  );
}
