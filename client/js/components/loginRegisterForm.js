Vue.component('loginregister',{
    props: ['page', 'status'],
    data() {
        return {
            formData: {
                email: '',
                password: '',
                name: '',
            },
        }
    },
    mounted() {
        window.gapi.load('auth2', () => {
            const auth2 = window.gapi.auth2.init({
              client_id: '460094986334-isi4pb2bokq5adebc9obp1nqp3nn4bm1.apps.googleusercontent.com',
            })
            auth2.attachClickHandler(this.$refs.signinBtn, {}, googleUser => {
              console.log('googlelogin sucess...', googleUser)
              googleUser.token = googleUser.getAuthResponse().id_token;
                this.$emit('googlelogin', googleUser)
            }, error => console.log(error))
          })
    },
    methods: {
    },
    template: `
    <div style="height: inherit; width: inherit; display: flex; padding-top: 50px; justify-content: center; align-items: flex-start;">
        <form v-if="(page === 'register')" @submit.prevent="$emit('onsubmitregister', formData)" class="loginRegisterForm" >
            <h2 class='article_title mb-4'>Register</h2>
            <div class="d-flex flex-column" style="min-height: 200px; height: 80%;">
                <div class="form-group">
                    <div class="input-group">
                        <input type="email" class="form-control" id="reg-email" placeholder="Email" v-model="formData.email"
                            aria-describedby="title" autocomplete="off" required>
                        <div class="invalid-feedback">
                            Please set valid email
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <input type="password" class="form-control" id="reg-password" placeholder="Password" v-model="formData.password"
                            aria-describedby="title" autocomplete="off" required>
                        <div class="invalid-feedback">
                            Please set any password
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <input type="text" class="form-control" id="reg-name" placeholder="Full Name" v-model="formData.name"
                            aria-describedby="title" autocomplete="off" required>
                        <div class="invalid-feedback">
                            Please set any name
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <button class="btn btn-success" type="submit">Submit</button>
                <button class="btn btn-secondary" type="button" @click="$emit('backToLogin')">Back</button>
            </div>
        </form>
        <form v-if="(page === 'login')" @submit.prevent="$emit('submitlogin', formData)" class="loginRegisterForm" >
            <h2 class='article_title mb-4'>Login</h2>
            <div class="form-group">
                <div class="input-group">
                    <input type="email" class="form-control" id="login-email" placeholder="Email" v-model="formData.email"
                        aria-describedby="title" autocomplete="off" required>
                    <div class="invalid-feedback">
                        Please set valid email
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <input type="password" class="form-control" id="login-password" placeholder="Password" v-model="formData.password"
                        aria-describedby="title" autocomplete="off" required>
                    <div class="invalid-feedback">
                        Please set any password
                    </div>
                </div>
            </div>
            <div class="form-group mt-5">
                <button style="width: 100%;"  class="btn btn-success" type="submit">Submit</button>
                <button style="width: 100%;" class="btn btn-primary mt-1" type="button" @click="$emit('showregister')">Register</button>
            </div>
            <hr>
            <div class="form-group" id="googleSignInBtn">
                <div ref="signinBtn" class="g-signin2" data-height="50px" data-width="318"></div>
            </div>
        </form>
    </div>
    `
})