Vue.component('navigation', {
    data: '',
    props: ['isLogin'],
    template: 
    `<nav class="navbar navbar-expand-lg navbar-dark main-bg-color">
        <a class="navbar-brand brand" href="/">
            <i class="fab fa-wordpress" style="width: 35px; font-size: 1.2em;"></i>
            MiniWP</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="#" onclick="showIndex()">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Explore</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="sidebarCollapse" href="#">Sidebar</a>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0 mr-2">
                <li class="nav-item">
                    <a class="btn btn-light" style="min-width" href="#" onclick="showCreatePost()">
                        <i class="fas fa-edit mr-2"></i>Write
                    </a>
                </li>
            </ul>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <div class='has-search'>
                    <span class="fa fa-search form-control-feedback"></span>
                    <input class="form-control mr-sm-2" type="search" placeholder="Search">
                </div>
            </form>
            <button class="btn btn-warning my-2 my-sm-0" type="submit">Logout</button>
        </div>
    </nav>
    ` 
})