import { Button } from "../../components";
import style from "./Item.module.css"

const Item = (props) => {
    const{task} = props;

    return(
        <li className={style.Item}>
            {task}
            <Button title="Delete"/>
        </li>
    );
}

export {Item}