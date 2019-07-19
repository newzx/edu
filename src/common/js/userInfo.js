

const channelArr = {
  'jz': 1,
  'sn': 2,
  'yl': 3,
  'zj': 4,
  'sg': 5,
  'nt': 6,
  'gp': 7,
  'dq': 8,
  'lq': 9,
  'xm': 10,
  'jl': 11,
  'td': 12,
  'sl': 13,
  'xr': 14,
  'jg': 15,
  'zm': 16,
  'yt': 17,
  'jc': 18,
  'aq': 20,
  'bim': 21
}

export function getSpecialty() {
  // const special = window.location.pathname.replace('/', '')
  var channel = 'jz'
  var specialty = ''
  specialty = channelArr[channel]
  return specialty
}