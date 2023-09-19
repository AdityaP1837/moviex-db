import React, { useState } from "react";

const SwitchTabs = ({ data, onTabChange }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [left, setLeft] = useState(0);

    const activeTab = (tab, index) => {
        setLeft(index * 100);
        setTimeout(() => {
            setSelectedTab(index);
        }, 300);
        onTabChange(tab, index);
    };

    return (
        <div className="switchingTabs h-[34px] bg-white rounded-[20px] p-[2px]">
            <div className="tabItems flex items-center h-[30px] relative">
                {data.map((tab, index) => (
                    <span
                        key={index}
                        className={`tabItem h-[100%] flex items-center justify-center w-[100px] text-black-1 text-[14px] relative z-[1] cursor-pointer transition-colors ease 0.3s ${
                            selectedTab === index ? "active text-white" : ""
                        }`}
                        onClick={() => activeTab(tab, index)}
                    >
                        {tab}
                    </span>
                ))}
                <span className="movingBg h-[30px] w-[100px] rounded-[15px] left-0" style={{ left, backgroundImage: '#068FFF' }} />
            </div>
        </div>
    );
};

// .tabItem {
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 100px;
//     color: var(--black);
//     font-size: 14px;
//     position: relative;
//     z-index: 1;
//     cursor: pointer;
//     transition: color ease 0.3s;
//     &.active {
//         color: white;
//     }
// }
// .movingBg {
//     height: 30px;
//     width: 100px;
//     border-radius: 15px;
//     background-image: var(--gradient);
//     position: absolute;
//     left: 0;
//     transition: left cubic-bezier(0.88, -0.35, 0.565, 1.35) 0.4s;
// }

export default SwitchTabs;
