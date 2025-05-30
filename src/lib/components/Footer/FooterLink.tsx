import type { FC } from "react"
import { Link } from "react-router-dom"
import type { ILibFooterLink } from "./subtypes"

export const FooterLink: FC<ILibFooterLink> = ({
    "data-testid": testid,
    ref,
    className,
    item,
}) => {
    const commonProps = {
        "data-testid": testid,
        className,
        ref,
        children: item.text,
        ...item,
    }

    const blankProps = {
        target: item.blank ? "_blank" : undefined,
        rel: item.blank ? "noreferrer noopener" : undefined,
    }

    if (item.href)
        return <a href={item.href} {...blankProps} {...(commonProps as any)} />

    if (item.to)
        return <Link to={item.to} {...blankProps} {...(commonProps as any)} />

    return <button onClick={item.onClick} type="button" {...commonProps} />
}
