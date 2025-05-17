"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { House } from 'lucide-react';

const HomeBtn = () => {
    const pathname = usePathname();
    const activePage = pathname.split('/').pop() || '/';

    return (
        <div
            className="w-full h-fit flex flex-row justify-around">
            <Link href={"/"} className={`flex flex-row items-center gap-2 w-full h-full text-2xl font-medium ${("/".includes(activePage)) ? "bg-secondary/90" : ""} transition-all hover:bg-secondary/90 text-start duration-300 px-4 py-2`}>
                <House />
                หน้าแรก
            </Link>
        </div>
    )
}
export default HomeBtn