import Footer from '@/components/Footer';
import AppNavbar from '@/components/Navbar/AppNavbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col min-h-screen'>
      <AppNavbar />
      <div className='mx-auto'>{children}</div>
    </div>
  );
}
