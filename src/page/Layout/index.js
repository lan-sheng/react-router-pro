import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      Layout
      <Link to="/board">看板</Link>
      <Link to="/about">关于</Link>
      <Outlet />
    </div>
  )
}
export default Layout
