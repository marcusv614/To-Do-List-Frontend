import { Button } from "../../components";

const Item = (props) => {
    const{task} = props;

    return(
        <li>
            {task}
            <Button></Button>
        </li>
    );
}

export {Item}