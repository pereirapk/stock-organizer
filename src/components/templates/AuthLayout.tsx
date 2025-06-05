import Image from "next/image"

type AuthLayoutProps = { children: React.ReactNode }

export const AuthLayout = ({ children }: AuthLayoutProps) => (
  <div className="flex items-center justify-center min-h-screen bg-black flex-col">
    <Image src="/logo.png" width={150} height={150} alt="logo"/>
    <span className="text-white m-8 text-2xl font-medium">Sign In Stock Organizer</span>
    <div className="p-6 bg-slate-700 rounded shadow">{children}</div>
  </div>
)