import React from "react";
import { SearchInfo } from "../../model/SearchInfo";

export default function Search({ onSearch }: SearchInfo) {
    console.log('search')
    return (
        <>
            <input type="text" name="search" id="search" onInput={(e: any) =>{
                return onSearch(e.target.value)
            } 
            } />
        </>
    )
}