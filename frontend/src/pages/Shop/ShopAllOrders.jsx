import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'
import AllOrders from "../../components/Shop/AllOrders";

const ShopAllOrders = () => {
  return (
        <div>
            <DashboardHeader />
            <div className="flex justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                  <DashboardSideBar active={2} />
                </div>
                <div className="w-full justify-center flex">
                   <AllOrders />
                </div>
              </div>
        </div>
  )
}

export default ShopAllOrders