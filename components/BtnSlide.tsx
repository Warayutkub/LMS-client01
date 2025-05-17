"use client"

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { usePathname } from 'next/navigation';

type SubBtnType = {
    title: string,
    href: string
}

const BtnSlideBtn = ({ title, SubBtn, setOpen = false }: { title: string, SubBtn: SubBtnType[], setOpen?: boolean }) => {
    const [isOpen, setIsOpen] = useState(setOpen);
    const pathname = usePathname();
    const activePage = pathname.split('/').pop() || "temp";

    const toggleButtons = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col justify-content-start ">
            <Button
                variant={"ghost"}
                className={`flex justify-around w-full text-2xl transition-all duration-300`}
                onClick={toggleButtons}
            >
                <div className='w-full flex px-1 items-start'>
                    {title}
                </div>
                <ChevronUp className={`w-1/2 ${isOpen ? "rotate-180" : "rotate-90"} transition-all duration-300`} />
            </Button>
            <div
                className={`flex flex-col  overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
                {
                    SubBtn.map((item, index) => (
                        <div key={index}>
                            <Link href={item.href} className={`block w-full px-4 text-center text-lg py-2 hover:bg-secondary/90 font-normal ${(item.href.includes(activePage) && !activePage.includes("admin")) ? "bg-secondary/90" : ""}`}>{item.title}</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BtnSlideBtn;