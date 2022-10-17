import React, {useState, useCallback} from "react";
import Menulist from "./Menulist";

function FunctionalSearch({ menu }){
     const [filterstr, setFilterstr] = useState("");
     const getSubstr = (event) => {
        setFilterstr(event.target.value);
     };

     const debounce = (func)=>{
        let timer;
        return function(...args){
            const context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(()=>{
                timer = null
                func.apply(context, args);
            }, 1000);
        }
     };

     const optgetSubstr = useCallback(debounce(getSubstr), []);

     const newItems = menu.filter((item) => {
        if (filterstr === ""){
            return item;
        }
        return item.name.toLowerCase().includes(filterstr.toLowerCase());
     });

    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder="Enter a item" onChange={optgetSubstr} />
            </div>
            <Menulist menu={newItems} />

        </div>
    )
}


export default FunctionalSearch