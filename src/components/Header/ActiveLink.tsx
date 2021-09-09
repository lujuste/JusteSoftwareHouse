import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement, ReactElement } from 'react'

interface ActiveLinkProps extends LinkProps {
    children: ReactElement
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
    const { asPath } = useRouter()
    let isActive = false

    if (asPath === rest.href || asPath === rest.as) {
        isActive = true
    }

    return (
        <Link {...rest}>
            {cloneElement(children, {
                opacity: isActive ? '1' : '0.5',
                borderBottomColor: isActive ? 'purple.300' : '',
                borderBottomWidth: isActive ? "3px" : '0',
                hover: "none"
            })}
        </Link>
    )
}