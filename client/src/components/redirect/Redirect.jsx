import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Redirect({to}) {
    const {push} = useRouter();

    useEffect(() => {
        push(to);
    }, [to]);

    return !!0;
};

export default Redirect;