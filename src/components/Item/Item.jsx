import { Button } from "../../components";

const Item = (props) => {
    const{task} = props;

    return(
        <li>
            {task}
            <Button title="Delete"/>
        </li>
    );
}

export {Item}