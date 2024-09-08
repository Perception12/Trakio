import RightMenu from "@/components/RightMenu";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";

export default function AcountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full min-h-screen relative mx-auto gap-4 p-4">
      <Sidebar />
      <div className="flex flex-col flex-[4] gap-4">
        <TopNav />
        {children}
      </div>
      <RightMenu />
    </div>
  );
}
