import React from "react";

export default function Lists() {
    return (
        <>
            {/* <div className="w-1/4 bg-slate-100"></div> */}
            <div className="flex flex-wrap justify-evenly">
                <div className="max-w-xs w-full sm:w-1/2 lg:w-1/3 rounded overflow-hidden shadow-lg bg-green mb-4 flex flex-col justify-between">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Card Title</div>
                        <p className="text-gray-700 text-base">
                            Here is some text content for the card. This can be
                            a description or any other content you want to
                            display inside the card.
                        </p>
                    </div>
                </div>
                <div className="max-w-xs w-full sm:w-1/2 lg:w-1/3 rounded overflow-hidden shadow-lg bg-green mb-4 flex flex-col justify-between">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Card Title</div>
                        <p className="text-gray-700 text-base">
                            Here is some text content for the card. This can be
                            a description or any other content you want to
                            display inside the card.
                        </p>
                    </div>
                </div>
                <div className="max-w-xs w-full sm:w-1/2 lg:w-1/3 rounded overflow-hidden shadow-lg bg-green mb-4 flex flex-col justify-between">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Card Title</div>
                        <p className="text-gray-700 text-base">
                            Here is some text content for the card. This can be
                            a description or any other content you want to
                            display inside the card.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
