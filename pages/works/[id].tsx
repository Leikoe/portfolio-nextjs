import {Text} from "@chakra-ui/react";
import { useRouter } from 'next/router'

export default function () {
    const router = useRouter()
    const { id } = router.query

    return (
        <Text>
            {{ id }}
        </Text>
    )
}