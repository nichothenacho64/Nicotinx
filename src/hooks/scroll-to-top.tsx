"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
    const pathname = usePathname();
    const [search, setSearch] = useState("");

    useEffect(() => {
        setSearch(window.location.search);
    }, [pathname]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname, search]);

    return null;
}
