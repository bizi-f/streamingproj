import classNames from "classnames"
import { Icon as MinistaIcon } from "minista"
import "./Icon"
const Icon = (props) => {
  const { className, name } = props
  return (
    <span className={classNames(className, "icon")}>
      <MinistaIcon iconId={name} />
    </span>
  )
}

export default Icon
