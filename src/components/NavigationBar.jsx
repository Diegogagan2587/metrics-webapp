import '../styling/NavigationBar.css'
import { AiTwotoneSetting } from "react-icons/ai"


const NavigationBar = ()=>{
    return (
        <nav>
            <ul>
                <li><button>{"<"}</button> <span>2015</span></li>
                <li>most views</li>
                <li><button>< AiTwotoneSetting /></button></li>
            </ul>
        </nav>
    )
}

export default NavigationBar;