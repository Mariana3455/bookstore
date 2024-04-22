import React from "react";
import {Sidebar} from "flowbite-react";
import {HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards} from "react-icons/hi";
import {BiBuoy} from "react-icons/bi";
import {BsLayoutSidebarInset} from "react-icons/bs";
import {IoMdCloudUpload} from "react-icons/io";
import { IoMdHome } from "react-icons/io";
const MySideBar = ()=>{
    return(
        <Sidebar aria-label="Sidebar with content separator example">
            <BsLayoutSidebarInset className='w-10 mr-4' style={{ fontSize: '45px', marginBottom: '4px' }} />
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="/" icon={IoMdHome}>
                        <p>
                            Home
                        </p>

                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/upload" icon={IoMdCloudUpload}>
                        <p>
                            Upload Book
                        </p>

                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
                        <p>
                            Manage Books
                        </p>
                    </Sidebar.Item>

                    <Sidebar.Item href="/logIn" icon={HiArrowSmRight}>
                        <p>
                            Other profile
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item href="/logout" icon={HiTable}>
                        <p>
                            Log out
                        </p>
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiViewBoards}>
                        Documentation
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={BiBuoy}>
                        Help
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}
export default MySideBar