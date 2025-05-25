import { ContentLayoutProps } from "./ContentLayout.types";

function ContentLayout({
  contentLeft,
  contentCenter,
  contentRight,
  containerStyles,
}: ContentLayoutProps) {
  // w-full h-full mt-8
  return (
    <div className={`grid grid-cols-20 gap-10 ${containerStyles}`}>
      {/* Spacer */}
      <div className="col-span-1" />

      <div className="col-span-4 justify-self-end">{contentLeft}</div>

      <div className="col-span-9">{contentCenter}</div>

      <div className="col-span-5">{contentRight}</div>

      {/* Spacer */}
      <div className="col-span-1" />
    </div>
  );
}

export default ContentLayout;
