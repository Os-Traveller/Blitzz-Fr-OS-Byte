import { ActiveLink } from "../shared/active_link/activeLink";
import { RxDashboard } from "react-icons/rx";
import { BsPeople } from "react-icons/bs";
import { BiChat, BiUser } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineNightlight, MdLogout } from "react-icons/md";
import { IconWrapper } from "../shared/icon_wrapper/iconWrapper";

export function LeftSidebar() {
  return (
    <section className="p-5 bg-white flex flex-col gap-3 h-full">
      <ActiveLink href="/" icon={<RxDashboard size={18} />} title={"Feed"} />
      <ActiveLink href="/community" icon={<BsPeople size={18} />} title={"My Community"} />
      <ActiveLink href="/message" icon={<BiChat size={18} />} title={"Messages"} />
      <ActiveLink href="/profile" icon={<BiUser size={18} />} title={"Profile"} />
      <ActiveLink href="/settings" icon={<IoSettingsOutline size={18} />} title={"Settings"} />
      <IconWrapper title="Dark Mode" icon={<MdOutlineNightlight size={18} />} />
      <IconWrapper title="Logout" icon={<MdLogout size={18} />} />
    </section>
  );
}
