import Icon from "@/components/Icon"
import classNames from "classnames"
import "./Button.scss"
const Button = (props) => {
  const {
    className,
    type = "button",
    href,
    target,
    label,
    isLabelHidden = false,
    iconName,
    iconPosition = "before,", //before или after
  } = props
  const isLink = href !== undefined
  const Component = isLink ? "a" : "button"
  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon className="button__icon" name={iconName} />
  )
  return (
    <Component
      className={classNames(className, "button")}
      title={title}
      aria-label={title}
      {...specificProps}
    >
      {!isLabelHidden && <span className="button__label">{label}</span>}
    </Component>
  )
}

export default Button
