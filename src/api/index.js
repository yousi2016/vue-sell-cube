import { get } from './helpers'

const getSeller = get('/api/seller')

const getGoods = get('/api/Goods')

export {
  getSeller,
  getGoods
}
