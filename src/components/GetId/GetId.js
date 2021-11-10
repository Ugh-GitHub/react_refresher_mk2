import { useParams } from "react-router-dom";

function GetId() {
    const { id } = useParams();
    return (id);
}

export default GetId;