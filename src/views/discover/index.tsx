import { Suspense, memo } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Discover = memo((props) => {
  return (
    <div>
      <Link to="/discover/recommend">推荐</Link>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  )
})

Discover.prototype = {}

export default Discover
