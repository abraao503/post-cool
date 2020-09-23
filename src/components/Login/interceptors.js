import Vue from 'vue'

let getId = function () {
    let id = localStorage.id
    if (!id) {
      id = '{}'
    }
    return JSON.parse(id)
}

let id = getId()

let login = function (router) {
    router.push('/')
}

let refreshId = function (request, id, router) {
    let data = {
      id: id.refresh_id
    }

    Vue.http.post('oauth/id', data).then(res => {
      localStorage.id = JSON.stringify(res.body)
      request.headers.set('Authorization', 'Id ' + id)
      console.log('ID REFRESHED')
    }).catch(err => {
      if (err.status === 400) {
        login(router)
      }
    })
}

export default {
    check_empty_id: function (router) {
      id = getId()
      if (!id) {
        login(router)
      }
    },
    check_auth: function (router) {
      Vue.http.interceptors.push((request, next) => {
        id = getId()
        request.headers.set('Authorization', 'ID ' + id)
        next(res => {
          if (res.status === 0 || res.status === 401) {
            refreshId(request, id, router)
          }
        })
      })
    }
  }