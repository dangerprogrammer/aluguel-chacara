'use client';

import { ContextApp } from "@/components/context/ContextApp";
import { usePathname } from "next/navigation";
import { useContext } from "react";

function DefaultLayout({children}) {
    const {routes} = useContext(ContextApp), pathname = usePathname(), findedPathname = routes.find(({path}) => path === pathname), headTitle = `${findedPathname.text} | Chácara`;

    document.title = headTitle;

    return <>
        {children}
    </>
};

export default DefaultLayout;