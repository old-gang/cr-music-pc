import React, { Suspense, memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

const App = memo(() => {
  return (
    <div>
      {/* 优化路由，防止懒加载时报错 */}
      <Suspense fallback={<div>loading...</div>}>
        <div className="content">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
})

export default App
