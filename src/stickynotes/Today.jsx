import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaPlus } from "react-icons/fa";

export default function Today() {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isCompleted, setIsCompleted] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleCheckboxChange = () => {
        setIsCompleted(!isCompleted);
    };

    return (
        <>
            {" "}
            <div className="flex justify-center ">
                <div
                    className={`w-90 sm:w-96 lg:w-1/2 rounded overflow-hidden shadow-lg mb-4 ${
                        isCompleted ? "bg-gray-300" : "bg-green"
                    }`}>
                    <div
                        className="px-6 py-4 cursor-pointer flex justify-between items-center"
                        onClick={toggleCollapse}>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2"
                                onChange={handleCheckboxChange}
                            />
                            <div
                                className={`font-bold text-lg mb-1 ${
                                    isCompleted
                                        ? "line-through text-gray-500"
                                        : ""
                                }`}>
                                Today's Tasks
                            </div>
                        </div>
                        {isCollapsed ? (
                            <FaChevronDown
                                className={`text-gray-700 ${
                                    isCompleted ? "text-gray-500" : ""
                                }`}
                            />
                        ) : (
                            <FaChevronUp
                                className={`text-gray-700 ${
                                    isCompleted ? "text-gray-500" : ""
                                }`}
                            />
                        )}
                    </div>
                    {!isCollapsed && (
                        <div
                            className={`px-6 py-4 ${
                                isCompleted ? "text-gray-500" : "text-black"
                            }`}>
                            <div className="border border-gray-250 mb-5"></div>
                            <div className="flex flex-col md:flex-row md:space-x-4">
                                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                                    <div className="mb-4">
                                        <div className="font-bold">Notes</div>
                                        <textarea className="w-full h-52 border rounded p-2" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className="mb-4">
                                        <div className="font-bold">
                                            Due Date
                                        </div>
                                        <div className="flex flex-col md:flex-row md:space-x-2 mt-2 space-y-2 md:space-y-0">
                                            <button className="border rounded p-2 w-full md:flex-1">
                                                Today
                                            </button>
                                            <button className="border rounded p-2 w-full md:flex-1">
                                                Tomorrow
                                            </button>
                                            <select className="border rounded p-2 w-full md:flex-1">
                                                <option>Date</option>
                                                <option>2024-07-06</option>
                                                <option>2024-07-07</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="font-bold">
                                            Priority
                                        </div>
                                        <select className="border rounded p-2 w-full">
                                            <option>None</option>
                                            <option>Low</option>
                                            <option>Medium</option>
                                            <option>High</option>
                                        </select>
                                    </div>
                                    <div className="mt-4 flex justify-end space-x-2">
                                        <button className="border-gray-600 rounded py-2 px-4 bg-white text-gray-600">
                                            Notify Me
                                        </button>
                                        <button className="border rounded py-2 px-4 bg-red-500 text-white">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <div className="flex items-center border rounded p-2 w-90 sm:w-96 lg:w-1/2">
                    <button className="mr-2">
                        <FaPlus />
                    </button>
                    <input
                        type="text"
                        placeholder="Add a task"
                        className="border-none focus:outline-none"
                    />
                </div>
            </div>
        </>
    );
}
