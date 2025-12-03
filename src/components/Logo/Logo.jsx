import "./Logo.scss"

const Logo = () => {
  const title = "Home"
  return (
    <a className="logo" href="/" title={title} aria-label={title}>
      <img className="logo__image" src="Logo.svg" alt="" />
    </a>
  )
}

export default Logo
