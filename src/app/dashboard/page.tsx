"use client"
import { useEffect, useState } from "react"
import { Navbar } from "@/components/organisms/Navbar"
import { TableComponent } from "@/components/organisms/Table";
import { dashboardModel } from "./viewModel/dasboardModel";
export interface TableItem {
  col1: string;
  col2: string;
  col3: string;
}

export default function Home() {
  const {
    getWallet,
  } = dashboardModel();

  const [walletData, setWalletData] = useState<TableItem[]>([]);

  useEffect(() => {
    getWallet().then(response => setWalletData(response.data));
  }, [getWallet]);
  
  return (
    <div >
      <Navbar/>
      <TableComponent data={walletData}/>
    </div>
  );
}
