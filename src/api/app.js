export const getAppName = () => {
  return new Promise((resolve, reject) => {
    const err = null // false
    setInterval(() => {
      if (!err) {
        resolve({ code: 200, appName: 'redrun' })
      } else {
        reject(err)
      }
    }, 1000)
  })
}
