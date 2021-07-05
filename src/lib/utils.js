export class Util {
  static getPageURL(name) {
    const urls = {
      home: '/',
      cart: '/cart/',
      checkout: '/checkout/',
      orders: '/my-account/orders/',
      downloads: '/my-account/downloads/',
      addresses: '/my-account/edit-address/',
      lostPassword: '/lost-password/'
    }
    let url = 0
    switch (name) {
      case 'Home':
        url = urls.home
        break
      case 'Cart': {
        url = urls.cart
        break
      }
      case 'Checkout': {
        url = urls.checkout
        break
      }
      case 'Orders': {
        url = urls.orders
        break
      }
      case 'Downloads': {
        url = urls.downloads
        break
      }
      case 'Addresses': {
        url = urls.addresses
        break
      }
      case 'LostPassword': {
        url = urls.lostPassword
        break
      }
    }
    return url
  }

  static getFixtures(name) {
    const fixtures = {
      alerts: '',
      C1: 'products/C1_product.json'
    }
    switch (name) {
      case 'C1':
        return fixtures.C1
    }
  }
}
