interface FormTitleProps {
  formTitle: string;
}
export default function FormTitle({ formTitle }: FormTitleProps) {
  return <h1 className="text-3xl text-orange-400">{formTitle}</h1>;
}
