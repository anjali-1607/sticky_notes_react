import React, { useState } from "react";
import Lists from "./Lists";
import Scheduled from "./Scheduled";
import Today from "./Today";

export default function StickyNotes() {
    const [active, setActive] = useState("lists");

    return (
        <>
            <div className="flex m-6">
                {/* <div className="w-1/4  bg-slate-100"></div> */}
                <div className="flex-1 flex items-center justify-evenly">
                    <button
                        type="button"
                        className="text-darkGray bg-green  border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green dark:text-white dark:border-green dark:hover:bg-green dark:hover:border-green dark:focus:ring-green"
                        onClick={() => setActive("lists")}>
                        Lists
                    </button>
                    <button
                        type="button"
                        className="text-darkGray bg-green  border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green dark:text-white dark:border-green dark:hover:bg-green dark:hover:border-green dark:focus:ring-green"
                        onClick={() => setActive("scheduled")}>
                        Scheduled
                    </button>
                    <button
                        type="button"
                        className="text-darkGray bg-green  border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green dark:text-white dark:border-green dark:hover:bg-green dark:hover:border-green dark:focus:ring-customGreen"
                        onClick={() => setActive("today")}>
                        Today
                    </button>
                </div>
            </div>
            <div className="flex-1">
                {active === "lists" && <Lists />}
                {active === "scheduled" && <Scheduled />}
                {active === "today" && <Today />}
            </div>
        </>
    );
}
