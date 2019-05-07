Vue.component('update-post', {
    data() {
        return {
            formData: null,
            status: {
                type: '',
                message: '',
            }
        }
    },
    methods: {
        getAlertClass() {
            if(status.type === 'error') {
                return 'alert alert-dismissible fade alert-danger'
            }
            else {
                return 'alert alert-dismissible fade alert-success'
            }
        },
        updatePost(data) {
            axios.put({
                url: serverURL + '/posts',
                data: formData,
                headers: {
                    token: localStorage.getItem('miniwp_token')
                }
            })
            .then(({data}) => {
                
            })
            .catch(err => {

            })

        }
    },
    template:
    `<div class="d-flex flex-column pb-5">
        <h3 class="mb-4">Update Post</h3>
        <div v-if="status.message" v-bind:class="getAlertClass()" role="alert">
            {{ status.message }}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <postform type="create" v-on:create="createPost"></postform>
    </div>`
})