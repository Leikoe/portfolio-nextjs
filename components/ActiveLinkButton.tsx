import { useRouter } from 'next/router'
import {Link} from "@chakra-ui/react";

function ActiveLinkButton({ children, href }) {
    const router = useRouter()
    const style = {
        marginRight: 10,
        textDecorationLine: router.asPath === href ? 'underline' : '',
        textDecorationThickness: '2px'
    }

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
            <Link href={href} onClick={handleClick} style={style}>
                {children}
            </Link>
         )
}

export default ActiveLinkButton
