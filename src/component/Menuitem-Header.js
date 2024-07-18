import React from 'react';
import Menubody from './MenuBody';
import { LOADING_URL } from '../utlis/constant';

const MenuitemHeader = ({ props, status, showindex, dummy }) => {

   

    const handleClick = () => {
        showindex();
    };

    

    return (
        <div className="">
            <div className="">
                <div className="my-10 text-lg shadow-lg">
                    <div  className="flex justify-between border border-black" onClick={handleClick}>
                        <h2 className="">{props.title} ({props.itemCards?.length || 0}) </h2>
                        <>🔽</>
                    </div>
                    <div className="mr-[100px]">
                        <span className="mt-[90px]">
                            {status && <Menubody items={props.itemCards} dummy={dummy} />}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuitemHeader;
