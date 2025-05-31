import React from "react";
import { SearchInfo } from "../../model/SearchInfo";
import { InputBox } from "../../../../elements/Input";

export default function Search({ onSearch }: SearchInfo) {
    console.log('search')
    return (
        <>
            <InputBox label="Search" type="text" name="search" id="search" onInput={(e: any) =>{
                return onSearch(e.target.value)
            } 
            } />
        </>
    )
}