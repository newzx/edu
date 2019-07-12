import Cookies from 'js-cookie'

const channelArr = [
  'jz','sn','yl','zj',
  'sg','nt','gp','dq',
  'lq','xm','jl','td',
  'sl','xr','jg','zm',
  'yt','jc','aq','bim',
]
var specialty
export function getSpecialty() {
  // const special = window.location.pathname.replace('/', '')
  let  channel = 'jz'
  channelArr.forEach((item, index) => {
    if (item === channel) {
      specialty = index + 1
      console.log(specialty)
      return
    }
  })
  return specialty
}
export function getChannel() {
  
}