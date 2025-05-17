"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

type NormalBill = {
    ic : React.ReactNode;
    href: string,
    name: string
}


const NormalBill = (props: NormalBill) => {
    const pathname = usePathname();
    const activePage = pathname.split('/').pop() || '/';

    return (
        <div
            className="w-full h-fit flex flex-row justify-around">
            <Link href={`${process.env.NEXT_PUBLIC_AdminPath}${props.href}`} className={`flex flex-row gap-2 items-center font-medium w-full h-full text-2xl ${(props.href.includes(activePage) && !activePage.includes("/")) ? "bg-secondary/90" : ""} transition-all hover:bg-secondary/90 text-start duration-300 px-4 py-2`}>
            {props.ic}
            {props.name}
            </Link>
        </div>
    )
}
export default NormalBill