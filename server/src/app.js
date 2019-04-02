const Koa = require('koa')
const Router = require('koa-router')
const cors = require('koa2-cors')
const app = new Koa()
const router = new Router()

app.use(cors())
router.get('/login', async (ctx, next) => {
  ctx.body = {
    code: 0,
    data: {
      token: Math.random().toString(36).substr(2)
    },
    msg: '登录成功'
  }
})

app.use(router.routes())
   .use(router.allowedMethods())
   .listen(3000, () => {
     console.log('server is running on 3000')
   })