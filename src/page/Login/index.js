import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div>
      登录
      {/* 声明式导航 */}
      <Link to="/article">跳转文章页</Link>
      {/* 编程式导航 */}
      <button onClick={() => navigate('/article')}>跳转文章页</button>
      <button onClick={() => navigate('/article?id=1001&name=jack')}>searchParams传参</button>
      <button onClick={() => navigate('/article/1001/jack')}>params传参</button>
    </div>
  )
}
export default Login
