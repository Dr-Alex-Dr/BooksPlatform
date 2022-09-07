import { useEffect } from "react";
import { useRouter } from "next/router";

import { userService } from 'services';

function Layout({props}) {
    const router = useRouter();

    useEffect(() => {
        if (userService.userValue) {
            router.push('/');
        }
    }, []);

    return (
        <div>
            {props}
        </div>
    )
}

export default Layout;