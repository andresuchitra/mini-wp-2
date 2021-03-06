'use strict';
$(document).ready(function () {
  // $('[data-toggle="tooltip"]').tooltip();
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    $('#content').toggleClass('active');
    $('#sidebarCollapse').toggleClass('active')
  });

  $('.collapse.in').toggleClass('in');
  $('a[aria-expanded=true]').attr('aria-expanded', 'false');

  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });

  }, false);
});

// start VUE codes
var serverURL = 'http://35.247.179.99';

var app = new Vue({
  el: '#miniWP',
  data: {
    loading: false,
    config: null,
    isLogin: false,
    page: '',
    user: {
      _id: '',
      email: '',
      name: '',
    },
    currentPost: null,
    baseURL: 'http://miniwp.andresuchitra.com',
    searchTag: '',
  },
  methods: {
    formattedDate: function(date, formatStr) {
      if(!formatStr) {
        formatStr = 'MMMM Do YYYY, h:mm:ss a'
      }
      return moment(new Date(date)).format(formatStr)
    },
    loginSuccess() {
      this.isLogin = true;
      this.page = 'index'
    },
    logout() {
        let self = this
        var auth2 = gapi.auth2.getAuthInstance();

        auth2.signOut().then(function () {
          localStorage.removeItem('miniwp_token')
          localStorage.removeItem('miniwp_name')
          localStorage.removeItem('miniwp_email')

          self.page = "login"
          self.config = null
          self.isLogin = false;
        });
    },
    showIndex() {
      if(localStorage.getItem('miniwp_token')) {
        this.page = 'index'

      }
      else {
        this.page = 'login'
      }
    },
    showCreatePost() {
      if(localStorage.getItem('miniwp_token')) {
        this.page = 'createPost'
      }
      else {
        this.page = 'login'
      }
    },
    showLogin() {
      this.page = 'login'
    },
    showRegister() {
      this.page = 'register'
    },
    showUpdatePost(id) {
      if(localStorage.getItem('miniwp_token')) {
        axios.get(serverURL + '/articles/' + id, this.config)
        .then(({data}) => {
          this.currentPost = data
          this.page = 'updatePost'
        })
        .catch(({response}) => {
          console.log(response);
          Swal.fire(
            'Error!',
            response.data,
            'error'
          )
        })
      }
      else {
        this.page = 'login'
      }
    },
    showDetailPost(id) {
      axios.get(serverURL + '/articles/' + id, this.config)
        .then(({data}) => {
          this.currentPost = data
          this.page = 'detailPost'
        })
        .catch(({response}) => {
          console.log(response);
          Swal.fire(
            'Error!',
            response.data,
            'error'
          )
        })
    },
    showDetailPostSlug(slug) {
      axios.get(serverURL + '/explore/' + slug)
        .then(({data}) => {
          this.currentPost = data
          this.page = 'detailPost'
        })
        .catch(({response}) => {
          console.log(response);
          Swal.fire(
            'Error!',
            response.data,
            'error'
          )
        })
    }
  },
  mounted() {
    if(localStorage.getItem('miniwp_token')) {
      this.isLogin = true
      this.page = 'index'
      this.config = {
        headers: {
            // 'Content-Type': 'multipart/form-data',
            'Authorization': localStorage.miniwp_token
        }
      }
    }
    else {
      this.isLogin = false;
      this.page = 'explore'
    }
  }
})
