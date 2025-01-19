import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="w-full md:w-64 md:flex-shrink-0">
        <SideNav />
      </div>
      <div className="flex-1 p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}