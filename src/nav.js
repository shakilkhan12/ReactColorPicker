import React from "react"
import {Context} from "./Context"
const Nav = () => {
    const {colorOption, setColorOption, updateOption} = React.useContext(Context);
    console.log(colorOption);
    return(
        <nav>
            <ul>
                <li className="logo">Color Platte</li>
                <li><select value={colorOption} onChange={updateOption}>
                    <option value="hex">HEX</option>
                    <option value="rgb">RGB</option>
                    {/* <option>RGBA</option> */}
                    </select></li>
            </ul>
        </nav>
    )
}

export default Nav