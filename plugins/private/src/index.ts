import { Context } from 'koishi'

export const name = 'private'

// export function apply(ctx: Context) {
//   // write your plugin here
// }
export function apply(ctx: Context) {
  ctx.middleware((session, next) => {
    if (session.content === '天王盖地虎') {
      debugger
      console.log(session.content);
      return '宝塔镇河妖'
    }
    return next()
  })
}