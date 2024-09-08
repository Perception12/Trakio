import IconMenuOption from "./IconMenuOption";
import Logo from "./Logo";
import DashboardIcon from "@/assets/icons/ic-dashboard.png";
import ProjectIcon from "@/assets/icons/ic-project.png";
import DiscussIcon from "@/assets/icons/ic-discuss.png";
import SettingsIcon from "@/assets/icons/ic-settings.png";
import LogoutIcon from "@/assets/icons/ic-logout.png";
import TrakioLogo from "@/assets/trakio-logo.png"
import Image from "next/image";

const sidebarData = [
  { title: "Dashboard", icon: DashboardIcon },
  { title: "Projects", icon: ProjectIcon },
  { title: "Discuss", icon: DiscussIcon },
  { title: "Settings", icon: SettingsIcon },
];

const Sidebar = () => {
  return (
    <aside className="flex-1 bg-white rounded-2xl bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-md">
      <div className="fixed z-990 w-full p-4 h-full flex flex-col justify-between">
        <div className="flex flex-col">
          <Image src={TrakioLogo} alt="trakio-logo" width={120} />
          {/* Navigation */}
          <div className="mt-12" />
          {/* Link */}
          {sidebarData.map((data) => (
            <IconMenuOption
              key={data.title}
              title={data.title}
              icon={data.icon}
            />
          ))}
        </div>

        <IconMenuOption title="Logout" icon={LogoutIcon} />
      </div>
    </aside>
  );
};

export default Sidebar;
