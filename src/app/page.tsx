
import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import {
  Calendar,
  Video,
  Car,
  Package,
  Monitor,
  Gift,
  Bell,
  FileText,
  UserPlus,
  Palette,
  ShoppingCart,
} from "lucide-react";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hilal Foods - Application Portal",
  description: "Access all Hilal Foods applications and forms from one central location.",
}

interface AppCard {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  bgColor: string
  iconColor: string
}

const applications: AppCard[] = [
  {
    title: "Capex App",
    href: "https://hilalfoods.sharepoint.com/sites/capex/",
    icon: Calendar,
    bgColor: "bg-green-500",
    iconColor: "text-white",
  },
  {
    title: "Asset Disposal App",
    href: "https://hilalfoods.sharepoint.com/sites/AssetDisposalApp/",
    icon: Video,
    bgColor: "bg-blue-500",
    iconColor: "text-white",
  },
  {
    title: "Gate Pass App",
    href: "https://hilalfoods.sharepoint.com/sites/GatePassApp",
    icon: Car,
    bgColor: "bg-red-500",
    iconColor: "text-white",
  },
  {
    title: "Launch Authorization Form",
    href: "https://hilalfoods.sharepoint.com/sites/LAF",
    icon: Package,
    bgColor: "bg-purple-500",
    iconColor: "text-white",
  },
  {
    title: "Price Approval Form",
    href: "https://hilalfoods.sharepoint.com/sites/priceapprovalApp/SitePages/Home.aspx",
    icon: Monitor,
    bgColor: "bg-orange-500",
    iconColor: "text-white",
  },
  {
    title: "Vendor Registration Form",
    href: "https://hilalfoods.sharepoint.com/sites/vendorregistrationapp/",
    icon: Gift,
    bgColor: "bg-pink-500",
    iconColor: "text-white",
  },
  {
    title: "Product Complaint Form",
    href: "https://hilalfoods.sharepoint.com/sites/ProductComplaintApp",
    icon: Bell,
    bgColor: "bg-yellow-500",
    iconColor: "text-white",
  },
  {
    title: "Customer Registration App",
    href: "https://apps.powerapps.com/play/e/default-8bb63638-96d4-41b3-8a3d-f2b98c17b48b/a/013a1eea-ff05-49cf-9238-4273aa1772e5?tenantId=8bb63638-96d4-41b3-8a3d-f2b98c17b48b&sourcetime=1752750231410",
    icon: Video,
    bgColor: "bg-indigo-500",
    iconColor: "text-white",
  },
  {
    title: "Delivery Challan App",
    href: "https://apps.powerapps.com/play/e/default-8bb63638-96d4-41b3-8a3d-f2b98c17b48b/a/8af5c38c-3a32-49cb-b4f0-4f263352c0ba?tenantId=8bb63638-96d4-41b3-8a3d-f2b98c17b48b&hint=5427523c-5bab-46c2-a206-3e659271354c&sourcetime=1752750279181",
    icon: FileText,
    bgColor: "bg-teal-500",
    iconColor: "text-white",
  },
  {
    title: "Item Code Opening App",
    href: "https://apps.powerapps.com/play/e/default-8bb63638-96d4-41b3-8a3d-f2b98c17b48b/a/a6229fa9-0227-403d-bf6f-dfb40f8e1160?tenantId=8bb63638-96d4-41b3-8a3d-f2b98c17b48b&sourcetime=1752750328256",
    icon: Package,
    bgColor: "bg-cyan-500",
    iconColor: "text-white",
  },
  {
    title: "Employee On-Boarding Form",
    href: "https://apps.powerapps.com/play/e/default-8bb63638-96d4-41b3-8a3d-f2b98c17b48b/a/5d48579a-e6d3-42bb-88ab-a8f0b88fdd7f?tenantId=8bb63638-96d4-41b3-8a3d-f2b98c17b48b&sourcetime=1752750380139",
    icon: UserPlus,
    bgColor: "bg-emerald-500",
    iconColor: "text-white",
  },
  {
    title: "MOC App",
    href: "https://hilalfoods.sharepoint.com/sites/moc",
    icon: Monitor,
    bgColor: "bg-slate-500",
    iconColor: "text-white",
  },
  {
    title: "Artwork Approval App",
    href: "https://hilalfoods.sharepoint.com/sites/ArtworkApprovalApp/SitePages/CollabHome.aspx",
    icon: Palette,
    bgColor: "bg-violet-500",
    iconColor: "text-white",
  },
  {
    title: "Admin Pool Vehicle Request Form",
    href: "https://apps.powerapps.com/play/e/default-8bb63638-96d4-41b3-8a3d-f2b98c17b48b/a/7cb702b0-b6e7-498c-b6df-8c9bb570679a?tenantId=8bb63638-96d4-41b3-8a3d-f2b98c17b48b&sourcetime=1752750627027",
    icon: Car,
    bgColor: "bg-rose-500",
    iconColor: "text-white",
  },
  {
    title: "Intra Buy",
    href: "https://apps.powerapps.com/play/e/default-8bb63638-96d4-41b3-8a3d-f2b98c17b48b/a/42052745-0e32-4b92-b435-74151609ba37?tenantId=8bb63638-96d4-41b3-8a3d-f2b98c17b48b&sourcetime=1752756118699",
    icon: ShoppingCart,
    bgColor: "bg-amber-500",
    iconColor: "text-white",
  },
]

export default function Home() {
  return (
    <div className={`min-h-screen bg-gray-50 ${inter.className}`}>
     <Image src="/image.jpg" alt="logo" width={2000} height={100}></Image>
      {/* Main Content */}
      <main className="mx-auto max-w-8xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2"> SharePoint Application Portal</h2>
          <p className="text-gray-600 font-bold">Select an application below to get started</p>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {applications.map((app, index) => (
            <AppCard key={index} {...app} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">© 2024 Hilal Foods. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function AppCard({ title, href, icon: Icon, bgColor, iconColor }: AppCard) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200 transition-all duration-200 hover:shadow-lg hover:ring-gray-300">
      <Link href={href} target="_blank" className="block">
        <div
          className={`flex h-48 items-center justify-center ${bgColor} transition-transform duration-200 group-hover:scale-105`}
        >
          <Icon className={`h-16 w-16 ${iconColor}`} />
        </div>
        <div className="p-4">
          <h3 className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-200 text-center">
            {title}
          </h3>
        </div>
      </Link>
    </div>
  )
}
