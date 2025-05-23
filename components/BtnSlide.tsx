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

const BtnSlideBtn = ({ title, SubBtn, setOpen = true }: { title: string, SubBtn: SubBtnType[], setOpen?: boolean }) => {
    const [isOpen, setIsOpen] = useState(setOpen);
    const pathname = usePathname();
    const activePage = pathname.split('/').pop() || "temp";

    const toggleButtons = () => {
        setIsOpen(!isOpen);
    };

    

    return (
        <div className="flex flex-col justify-content-start h-fit">
            <Button
                variant={"ghost"}
                className={`flex justify-around py-6 w-full text-2xl transition-all duration-300 cursor-pointer `}
                onClick={toggleButtons}
            >
                <div className='w-full flex px-1items-start'>
                    {title}
                </div>
                <ChevronUp className={`w-1/2 ${isOpen ? "rotate-180" : "rotate-90"} transition-all duration-300`} />
            </Button>
            <div
                className={`flex flex-col  overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
                {
                    SubBtn.map((item, index) => (
                        <div key={index}>
                            <Link href={item.href} className={`group relative block w-full px-4 text-start pl-7 text-lg py-2 font-normal ${(item.href.includes(activePage) && !activePage.includes("admin")) ? "bg-primary text-primary-foreground" : ""} transition-all duration-300`}>
                            <span className='underline-slide'>{item.title}</span>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BtnSlideBtn;