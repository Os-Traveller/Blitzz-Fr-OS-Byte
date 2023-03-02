import Link from "next/link";
import { useRouter } from "next/router";

//  props type
type ActiveLinkProps = {
  href: string;
  icon: any;
  title: string;
};

// components
export function ActiveLink({ href, icon, title }: ActiveLinkProps) {
  const location = useRouter();

  return (
    <Link href={href}>
      <p
        className={`center_y gap-3 py-2 px-3 rounded-md hover:text-white hover:bg-slate-500 animation ${
          location.pathname === href ? "bg-main-500 text-white" : "text-main-500"
        }`}
      >
        {icon}
        <span>{title}</span>
      </p>
    </Link>
  );
}
