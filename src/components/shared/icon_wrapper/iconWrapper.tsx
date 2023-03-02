type IconWrapperProps = {
  title: string;
  icon: any;
  onClickFunction?: any;
};

export function IconWrapper({ title, icon, onClickFunction }: IconWrapperProps) {
  return (
    <p
      className="center_y gap-3 py-2 px-3 rounded-md hover:text-white hover:bg-slate-500 animation text-main-500 cursor-pointer"
      onClick={onClickFunction}
    >
      {icon}
      <span>{title}</span>
    </p>
  );
}
