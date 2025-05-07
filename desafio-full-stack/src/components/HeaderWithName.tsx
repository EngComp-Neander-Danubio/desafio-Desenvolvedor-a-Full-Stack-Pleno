import { useState } from "react";
import { InputSearch } from "./InputSearch";
import { ButtonMain } from "./ButtonNovo";

export const HeaderWithName = () => {
        return (
        <nav className="bg-navbar w-[1188px] h-[59px] flex justify-between px-[26px] py-[16px] border-1px-solid-red">
            <InputSearch /> <ButtonMain />
        </nav>
    );
};
