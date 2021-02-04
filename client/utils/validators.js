export function isEmail(value) {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return emailRegex.test(value)
}
export function isPhone(value) {
  const phoneRegex = /((\+38)?\(?\d{3}\)?[\s.-]?(\d{7}|\d{3}[\s.-]\d{2}[\s.-]\d{2}|\d{3}-\d{4}))/
  return phoneRegex.test(value)
}
// export function emailOrPhoneCheck(value) {
//   return isPhone(value) || isEmail(value)
// }
