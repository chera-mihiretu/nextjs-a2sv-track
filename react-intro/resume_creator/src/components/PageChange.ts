import { UserData } from "./UserData";

interface ChangeOrder {

    nextPage ?: () => void;
    prevPage ?: () => void;
    userData: UserData
    setUserData ?: (data: any) => void;

}

export default ChangeOrder;
    