import Link, { LinkProps } from 'next/link'
import { ReactElement } from 'react'
import React, { Children } from 'react'
import { useRouter } from 'next/router'


interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...props }: ActiveLinkProps) {
    const { asPath } = useRouter()
    const child = Children.only(children)
    const childClassName = child.props.className || ''

    const className =
        asPath === props.href || asPath === props.as
            ? `${childClassName} ${activeClassName}`.trim()
            : childClassName

    return (
        <Link {...props}>
            {React.cloneElement(child, {
                className: className || null,
            })}
        </Link>
    )
}