(this["webpackJsonp3-redux-omdb"]=this["webpackJsonp3-redux-omdb"]||[]).push([[0],{34:function(e,t,a){},48:function(e,t,a){},57:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a.n(i),n=a(35),r=a.n(n),c=(a(48),a(12)),o=a(13),l=a(16),d=a(15),j=a(14),u=a(7),h=a(75),v=a(17),b=a.n(v);var m=a.p+"static/media/default.2979358b.png",p=(a(57),a(0)),O=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"handleErase",value:function(e){b()({text:"Delete!!"}),this.props.removeMovieFavorite(e)}},{key:"render",value:function(){var e=this,t=this.props.t;return Object(p.jsxs)("div",{className:"container-card-fav",children:[Object(p.jsx)("h1",{children:t("title-fav")}),Object(p.jsx)("div",{className:"container-cards-movie",children:this.props.movies.map((function(a,i){return Object(p.jsx)("div",{className:"card-movie-fav",children:Object(p.jsxs)("ul",{className:"content-card-fav",children:[Object(p.jsx)(u.b,{to:"/movie/".concat(a.imdbID),children:Object(p.jsx)("p",{children:a.Title})}),Object(p.jsx)(u.b,{to:"/movie/".concat(a.imdbID),children:Object(p.jsx)("img",{src:"N/A"===a.Poster?m:a.Poster,alt:"poster"})}),Object(p.jsx)("button",{className:"erase",onClick:function(){return e.handleErase({id:a.id})},children:t("erase")})]})},i)}))})]})}}]),a}(i.Component);var A=Object(j.b)((function(e){return{movies:e.movies}}),(function(e){return{removeMovieFavorite:function(t){return e({type:"REMOVE_MOVIE_FAVORITE",payload:t})}}}))(Object(h.a)()(O)),f=(a(68),a(34),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var i;return Object(c.a)(this,a),(i=t.call(this,e)).state={hidden:!0,favorite:i.props.MOVIES_FAV},i}return Object(o.a)(a,[{key:"handleAlert",value:function(e){this.props.addMovieFavorite(e),b()({text:"Success!!"})}},{key:"render",value:function(){var e=this,t=this.props.t;return Object(p.jsx)("div",{className:"container-cards",children:this.props&&this.props.MOVIES&&this.props.MOVIES.length>0?this.props.MOVIES.map((function(a,i){return Object(p.jsx)("div",{className:"card-movie",children:Object(p.jsxs)("ul",{className:"content-movie",children:[Object(p.jsx)("div",{children:Object(p.jsx)(u.b,{to:"/movie/".concat(a.imdbID),children:Object(p.jsx)("img",{className:"poster-movie",src:"N/A"===a.Poster?m:a.Poster,alt:"poster"})})}),Object(p.jsxs)("div",{children:[Object(p.jsx)(u.b,{to:"/movie/".concat(a.imdbID),children:Object(p.jsx)("p",{className:"movie-title",children:a.Title})}),Object(p.jsx)("p",{children:a.Type}),Object(p.jsx)("p",{children:a.Year}),Object(p.jsxs)("p",{className:"fav-movie-icon",children:[t("add"),Object(p.jsx)("img",{onClick:function(){return e.handleAlert(a)},src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPLSURBVFiF5ZZdbBRlFIaf8+3slm53l7ZGGku7oigGLxB/egGNNsY/qoGUIsZuY9KkekPihYkmGoIRYwh3ipZo0qBIpG0EjYJpNSaaaAUTIgHjhUCNsd1ioTTYAu3+zMzxYm27223p7pZIou/d+ea85zxzZr6ZD/7vkpkLelt9kZMo24DqOpDlCD5UhwT53jjuQTnbNXC1ghdCzTW27Wx1HK1R1wRVXMcYGbI8fCF+Z/uS4QOX5wSwq5saUHkL4eY56scVbbOK/toqfT3x9Asj5fWh+MTib2IxvVd1drPHg+0vlp1LLndtywJwwk0vq8qO2aaSJeGox7HWy+C+EYDzoU23JyZ8P8WTbnBeLxDwS0/FeNfjUwB2VaQZ4aNczFMMwgnjWA8PX7pSHpvwnkwmtTgff8Av71aMd20RXdZS6jiJ34DyfApMQgz+6d6Rb3MAY9DSkOcWy3USzxbSHECV1cnkHA98HrkuEk+4bxtFNxRU4RookaTOgKy8XgCuQ9AAoesGoGoM6PD1AvAYHAvkGLD0WhcfW1TCtyvu5lRFmOOhSgLxCTb9epT6vuPTAJack0K+AZNSoH/AyVwTob12PW11G7lS9M/uHByGWAKAMhK89/Ue7jvbRzBgdomy2WNXe38WuHOhACrCi41b+Oyu+zMT0wAAxAjtvfuSD535KiQAiaWR1cbQC5TkBaDQH50G2LP2CXaseyY7cQYAgPEYxw0XlRsA32DHCZSngHi2OzeN+4rYXdeYtf7IrbCzoZjK0sxfjOu4Hkak3UwuWNGOblVtAGKFAPQuX8VocfYAX1oDz621WHmTN9sUTz5m0mNvtPNLVBopYBKnKsIZ8YPLoLcFaipT8d7WAEdeKc00JZ2QYYas6P4eVDbmC5H0WBnxjX6orYbSRanYZ5TK0hntVCULYBqCvCZROXohIz58Gqp3wXf9qXjb5zEefXM00+Q18VkBUhAd3ag0AclcAB44cxKTdhSasCE6Bj8MwNCYcux3m9NDmd8MvN5f5j392FWRRoQuIOstmrkNX3jyeQ6tqs0uMss2RASCgTVzTmBSVrTjU1RzmsSr3Xupvnh+vrSUAv4PeWfxj/MCpCA6P0EkAthXyysbv0TXB9upGh0ZnDNJBAIl79NW1gKQEwCA1b//ICJNmRCZpyERWGFffD0avCGMEgEOAX8gJoHPGidQfIRy/z3sLmud8uQKMCk7HNmM0gFY6e9A6sbkjfQjdy7KeQKTsvo7DiDaTNokCm1eEEAKovNjRJsV7IU0X7ASVZHWc4GnX/vXG/+n9Dfx8G9MYEgu+AAAAABJRU5ErkJggg==",alt:"fav"})]})]})]})},i)})):Object(p.jsxs)("p",{className:"words-example floating",children:[t("parrafo5")," "]})})}}]),a}(i.Component));var x=Object(j.b)((function(e){return{MOVIES:e.moviesLoaded,MOVIES_FAV:e.movies}}),(function(e){return{addMovieFavorite:function(t){return e({type:"ADD_MOVIE_FAVORITE",payload:t})}}}))(Object(h.a)()(f)),g=a.p+"static/media/loading.b536d94a.gif",N=(a(69),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var i;return Object(c.a)(this,a),(i=t.call(this,e)).state={title:""},i}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState({title:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.state.title?this.props.getMovies(this.state.title):b()({text:"This field can not be empty"})}},{key:"render",value:function(){var e=this,t=this.state.title,a=this.props.t;return Object(p.jsxs)("div",{className:"full-container",children:[Object(p.jsxs)("div",{className:"div-search",children:[Object(p.jsx)("h1",{children:a("finder")}),Object(p.jsx)("div",{className:"div-container",children:Object(p.jsxs)("form",{className:"form-search",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(p.jsx)("label",{className:"label",htmlFor:"title",children:a("movie")}),Object(p.jsx)("input",{type:"text",className:"input-search",autoComplete:"off",placeholder:"write a title movie here",value:t,onChange:function(t){return e.handleChange(t)}}),Object(p.jsx)("button",{className:"button-search",type:"submit",children:a("search")})]})})]}),this.props.loading?Object(p.jsx)("div",{children:Object(p.jsx)("img",{className:"loading-movie",src:g,alt:"loading..."})}):Object(p.jsx)(x,{})]})}}]),a}(i.Component));var E=Object(j.b)((function(e){return{movies:e.moviesLoaded,loading:e.moviesLoading}}),(function(e){return{getMovies:function(t){return e((a=t,function(e){return e({type:"GET_MOVIES_LOADING"}),fetch("https://www.omdbapi.com/?apikey=20dac387&s="+a).then((function(e){return e.json()})).then((function(t){t.Search?e({type:"GET_MOVIES",payload:t}):b()({text:"sorry, the movie was not found, please try again"})}))}));var a}}}))(Object(h.a)()(N)),y=a(23),V=a(18);y.a.use(V.e).init({resources:{en:{translation:{parrafo1:"This page was created by matias flores",parrafo2:"can search movies, series or video games info",parrafo3:"for start a search go to search in the header",parrafo4:"thanks for you visit",search:"Search",favorites:"Favorites",finder:"Finder",movie:"Movie: ",button:"search",parrafo5:"start a search for view the results...","title-fav":"Movies Favorites",add:"add fav",erase:"remove"}},es:{translation:{parrafo1:"Esta pagina fue creada por matias flores",parrafo2:"busca informacion de peliculas, series o juegos",parrafo3:"para empezar ve al home desde el boton de arriba",parrafo4:"Gracias por tu visita",search:"Buscar",favorites:"Favoritos",finder:"Buscador",movie:"Pelicula: ",button:"buscar",parrafo5:"realiza una busqueda para que aparezcan los resultados...","title-fav":"Peliculas Favoritas",add:"agregar",erase:"borrar"}}},lng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});var C=y.a,M=(a(70),Object(h.a)()((function(e){var t=e.t,a=function(e){C.changeLanguage(e)};return Object(p.jsxs)("header",{className:"navbar",children:[Object(p.jsxs)("div",{className:"logoButton",children:[Object(p.jsx)(u.b,{exact:!0,to:"/ombdMovies",children:Object(p.jsx)("img",{id:"logoHenry",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAApCAYAAAC2qTBFAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAOESURBVFiF7ZjPayRFFMc/r6ozE5NlmDAirgRXl2DUCUFQ8CIYUfzxV3jz4sVbbjmIgn/A4lnFg+uC7Em9qCAr7sHFvXhZIcoawuJhQJzRyaSqn4fumu6edE2GcWUjzBea6p+vPq/eq6o3I6qqnFGZew0wTQu4eRWFE5HoYYxBROh0OhwcHAAQUtd7D8De3h4iQpIkUTvh2e7uLgDOudngZpGInLg3z/yqswP/17CeBS3g5tUCbl4t4ObVmYZL7jUAQJqmACjV7euuwZ3YgiQdn9q8F2uzc5uAdzAa5hBJ9sJSsnx34YwJEK56rUXGeFdqj4pvrc3aXq8H3GGU3mbJ9FBuo/w+HU4MGFN47B14D6qgWfFBo7GSv53kcNlVCBVAowlPbMFmFzY2s+PhR+D8uuf+B6AtHzDiY9QMGJX7j5XpyZKMPT4BLYKqsra2xq39T+m0k9zbQ+AOyiEp1xnxGw0EZbZKRbDV6xhcyKFGEy5uwPoF2HwStp6Cp5+F7gYkCLAMDKMAIRPT/ADGaR/CZhEMkE7YiML92hfOn4t7GTrW8XnVayXFoxiK9So2flLzTKbBjRC09GHI43KSGjKvocbr/Lu6MrKuw0nnII3D/ZWbDV7XdVJfv04HUYrwBpmIrehsTYh7PguIcDLPEsDmx6SECwgPIlxEeAzhmVOWkhlBivdt6bmvjMgk0M1b8P23lk8+9Lz4wuu8+/YlvF/G2gJp5kV4EsaTjUoj71bxKP4ELihXv4TvvoGbP8CPN6D/Rw5ss3XzpefXgXOoOihtYVPhtNTGwhOABIvweB6S57j0/nXeevMK1trxz8WyGs0CzrlsH8tWrxlGLuSLA5oUYbGA5AvrT79Yth99A8PLCFsIDwHZjvFn7x3gytjefatZOzqCNM3aABcwJqdmFC7kSzlXrt2Ayx/BV1/A/s/Q6bTZ33+PVqs1fsd7h7UJw+GwYu/vQaynuKaG9bPP4epluPY1HB4U90MBkqYp/UGPVquFqkOkMGfMvy8Vo3DNmqlqkywUIuBcBpD6JAeuD81/AmeMIVkSGs289joCtFT+TCS5qlZqujBy00bQGFM7WU6FU1JGRzlURP1+v1IalRVy7vj4OPp9AJvMz1PhXn3ltahREcE5R7vdZmVlpfIsjFS322VnZ4fV1dWoA8YYBoMB29vbY7uVfhZ/u86pBdy8WsDNq38AlPI9cFbq83oAAAAASUVORK5CYII=",className:"d-inline-block align-top",alt:""})}),Object(p.jsx)("button",{className:"btn-en",onClick:function(){return a("en")},children:"En"}),Object(p.jsx)("button",{className:"btn-es",onClick:function(){return a("es")},children:"Es"})]}),Object(p.jsx)("nav",{children:Object(p.jsx)("ul",{className:"list",children:Object(p.jsxs)("li",{className:"list-item",children:[Object(p.jsx)(u.b,{exact:!0,to:"/home",children:t("search")}),Object(p.jsx)(u.b,{exact:!0,to:"/favs",children:t("favorites")})]})})})]})}))),w=a(3),I=(a(71),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getMoviesDetail(e)}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"container-movie-detail",children:Object(p.jsx)("div",{className:"movie-card-detail",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"photo-cnt",children:Object(p.jsxs)("div",{className:"details",children:[Object(p.jsxs)("div",{className:"title",children:[this.props.movie.Title," ",Object(p.jsx)("span",{children:this.props.movie.Rated})]}),Object(p.jsx)("div",{children:this.props.movie.Year})]})}),Object(p.jsx)("div",{className:"column",children:Object(p.jsx)("p",{children:this.props.movie.Plot})}),Object(p.jsxs)("div",{className:"container2",children:[Object(p.jsx)("div",{className:"img",children:Object(p.jsx)("img",{alt:"poster",src:"N/A"===this.props.movie.Poster?m:this.props.movie.Poster})}),Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:["Director: ",this.props.movie.Director]}),Object(p.jsxs)("li",{children:["BoxOffice: ",this.props.movie.BoxOffice]}),Object(p.jsxs)("li",{children:["imdbRating: ",this.props.movie.imdbRating]}),Object(p.jsxs)("li",{children:["Genre: ",this.props.movie.Genre]})]})]})]})})})}}]),a}(s.a.Component));var S=Object(j.b)((function(e){return{movie:e.movieDetail}}),(function(e){return{getMoviesDetail:function(t){return e((a=t,function(e){return fetch("https://www.omdbapi.com/?apikey=20dac387&i=".concat(a)).then((function(e){return e.json()})).then((function(t){e({type:"GET_MOVIES_DETAIL",payload:t})}))}));var a}}}))(I),D=(a(72),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.t;return Object(p.jsx)("div",{className:"container-inicio expandUp",children:Object(p.jsx)("div",{className:"container-words",children:Object(p.jsxs)("p",{children:[e("parrafo1")," "," ",e("parrafo2")," "," ",e("parrafo3")," "," ",e("parrafo4")]})})})}}]),a}(i.Component)),k=Object(h.a)()(D),T=a(74);var G=function(){return Object(p.jsx)(s.a.Fragment,{children:Object(p.jsxs)(T.a,{i18n:y.a,children:[Object(p.jsx)(M,{}),Object(p.jsx)(w.a,{exact:!0,path:"/ombdMovies",component:k}),Object(p.jsx)(w.a,{exact:!0,path:"/home",component:E}),Object(p.jsx)(w.a,{path:"/favs",component:A}),Object(p.jsx)(w.a,{path:"/movie/:id",component:S})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=a(22),F=a(11),R={movies:[],moviesLoading:!1,moviesLoaded:[],movieDetail:{}};var Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MOVIE_FAVORITE":return Object(F.a)(Object(F.a)({},e),{},{movies:e.movies.concat(t.payload)});case"REMOVE_MOVIE_FAVORITE":return Object(F.a)(Object(F.a)({},e),{},{movies:e.movies.filter((function(e){return e.id!==t.payload.id}))});case"GET_MOVIES":return Object(F.a)(Object(F.a)({},e),{},{moviesLoaded:t.payload.Search,moviesLoading:!1});case"GET_MOVIES_LOADING":return Object(F.a)(Object(F.a)({},e),{},{moviesLoading:!0});case"GET_MOVIES_DETAIL":return Object(F.a)(Object(F.a)({},e),{},{movieDetail:t.payload});default:return e}},U=a(43),P=Object(B.c)(Y,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object(B.a)(U.a));r.a.render(Object(p.jsx)(j.a,{store:P,children:Object(p.jsx)(u.a,{children:Object(p.jsx)(G,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[73,1,2]]]);
//# sourceMappingURL=main.e654d405.chunk.js.map