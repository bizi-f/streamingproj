import classNames from "classnames"
import "./Logo.scss"

const Logo = (props) => {
  const title = "Home"
  const { className, loading = "lazy" } = props
  return (
    <a className="logo" href="/" title={title} aria-label={title}>
      <img
        className={classNames(className, "logo")}
        src="Logo.svg"
        alt=""
        width={199}
        height={60}
        loading={loading}
      />
    </a>
  )
}

export default Logo
