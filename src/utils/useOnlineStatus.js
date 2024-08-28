import { useEffect,useState } from "react";

const useOnlineStatus =() => {

    const [onlineStatus, setOnlineStatus]= useState(true);


    useEffect(() => {

        window.addEventListener("offline", () => {setOnlineStatus(false);
            setOnlineStatus(false);


        });
    
        window.addEventListener("online", () => {setOnlineStatus(true);
            setOnlineStatus(true);


        });





    },[]);

return onlineStatus;



};

export default useOnlineStatus;