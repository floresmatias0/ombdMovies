(this["webpackJsonp3-redux-omdb"]=this["webpackJsonp3-redux-omdb"]||[]).push([[0],{36:function(e,t,c){},43:function(e,t,c){},48:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(26),s=c.n(a),o=(c(36),c(11)),r=c(12),l=c(15),j=c(14),d=c(13),u=c(8);c(43);var h=c(0),v=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"container-card-fav",children:[Object(h.jsx)("h2",{children:"Pel\xedculas Favoritas"}),Object(h.jsx)("div",{className:"container-cards-movie",children:this.props.movies.map((function(t,c){return Object(h.jsx)("div",{className:"card-movie-fav",children:Object(h.jsxs)("ul",{className:"content-card-fav",children:[Object(h.jsx)(u.b,{to:"/movie/".concat(t.imdbID),children:Object(h.jsx)("p",{children:t.Title})}),Object(h.jsx)(u.b,{to:"/movie/".concat(t.imdbID),children:Object(h.jsx)("img",{src:t.Poster,alt:"poster"})}),Object(h.jsx)("button",{onClick:function(){return e.props.removeMovieFavorite({id:t.id})},children:"Remove"})]})},c)}))})]})}}]),c}(n.Component);var b=Object(d.b)((function(e){return{movies:e.movies}}),(function(e){return{removeMovieFavorite:function(t){return e({type:"REMOVE_MOVIE_FAVORITE",payload:t})}}}))(v),m=(c(48),c(30)),O=c.n(m),A=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).state={hidden:!0,favorite:n.props.MOVIES_FAV},n}return Object(r.a)(c,[{key:"handleAlert",value:function(e){this.props.addMovieFavorite(e),O()({icon:"success"})}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"container-cards",children:this.props&&this.props.MOVIES.length>0?this.props.MOVIES.map((function(t,c){return Object(h.jsx)("div",{className:"card-movie",children:Object(h.jsxs)("ul",{className:"content-movie",children:[Object(h.jsx)("div",{children:Object(h.jsx)(u.b,{to:"/movie/".concat(t.imdbID),children:Object(h.jsx)("img",{src:t.Poster,alt:"poster"})})}),Object(h.jsxs)("div",{children:[Object(h.jsx)(u.b,{to:"/movie/".concat(t.imdbID),children:Object(h.jsx)("p",{className:"movie-title",children:t.Title})}),Object(h.jsx)("p",{children:t.Type}),Object(h.jsx)("p",{children:t.Year}),Object(h.jsxs)("p",{className:"fav-movie-icon",children:["fav",Object(h.jsx)("img",{onClick:function(){return e.handleAlert(t)},src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPLSURBVFiF5ZZdbBRlFIaf8+3slm53l7ZGGku7oigGLxB/egGNNsY/qoGUIsZuY9KkekPihYkmGoIRYwh3ipZo0qBIpG0EjYJpNSaaaAUTIgHjhUCNsd1ioTTYAu3+zMzxYm27223p7pZIou/d+ea85zxzZr6ZD/7vkpkLelt9kZMo24DqOpDlCD5UhwT53jjuQTnbNXC1ghdCzTW27Wx1HK1R1wRVXMcYGbI8fCF+Z/uS4QOX5wSwq5saUHkL4eY56scVbbOK/toqfT3x9Asj5fWh+MTib2IxvVd1drPHg+0vlp1LLndtywJwwk0vq8qO2aaSJeGox7HWy+C+EYDzoU23JyZ8P8WTbnBeLxDwS0/FeNfjUwB2VaQZ4aNczFMMwgnjWA8PX7pSHpvwnkwmtTgff8Av71aMd20RXdZS6jiJ34DyfApMQgz+6d6Rb3MAY9DSkOcWy3USzxbSHECV1cnkHA98HrkuEk+4bxtFNxRU4RookaTOgKy8XgCuQ9AAoesGoGoM6PD1AvAYHAvkGLD0WhcfW1TCtyvu5lRFmOOhSgLxCTb9epT6vuPTAJack0K+AZNSoH/AyVwTob12PW11G7lS9M/uHByGWAKAMhK89/Ue7jvbRzBgdomy2WNXe38WuHOhACrCi41b+Oyu+zMT0wAAxAjtvfuSD535KiQAiaWR1cbQC5TkBaDQH50G2LP2CXaseyY7cQYAgPEYxw0XlRsA32DHCZSngHi2OzeN+4rYXdeYtf7IrbCzoZjK0sxfjOu4Hkak3UwuWNGOblVtAGKFAPQuX8VocfYAX1oDz621WHmTN9sUTz5m0mNvtPNLVBopYBKnKsIZ8YPLoLcFaipT8d7WAEdeKc00JZ2QYYas6P4eVDbmC5H0WBnxjX6orYbSRanYZ5TK0hntVCULYBqCvCZROXohIz58Gqp3wXf9qXjb5zEefXM00+Q18VkBUhAd3ag0AclcAB44cxKTdhSasCE6Bj8MwNCYcux3m9NDmd8MvN5f5j392FWRRoQuIOstmrkNX3jyeQ6tqs0uMss2RASCgTVzTmBSVrTjU1RzmsSr3Xupvnh+vrSUAv4PeWfxj/MCpCA6P0EkAthXyysbv0TXB9upGh0ZnDNJBAIl79NW1gKQEwCA1b//ICJNmRCZpyERWGFffD0avCGMEgEOAX8gJoHPGidQfIRy/z3sLmud8uQKMCk7HNmM0gFY6e9A6sbkjfQjdy7KeQKTsvo7DiDaTNokCm1eEEAKovNjRJsV7IU0X7ASVZHWc4GnX/vXG/+n9Dfx8G9MYEgu+AAAAABJRU5ErkJggg==",alt:"fav"})]})]})]})},c)})):Object(h.jsx)("p",{children:"sorry"})})}}]),c}(n.Component);var p=Object(d.b)((function(e){return{MOVIES:e.moviesLoaded,MOVIES_FAV:e.movies}}),(function(e){return{addMovieFavorite:function(t){return e({type:"ADD_MOVIE_FAVORITE",payload:t})},getMoviesFavorite:function(){return e({type:"GET_MOVIES_FAVORITE"})}}}))(A),f=(c(51),function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).state={title:""},n}return Object(r.a)(c,[{key:"handleChange",value:function(e){this.setState({title:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.getMovies(this.state.title)}},{key:"render",value:function(){var e=this,t=this.state.title;return Object(h.jsxs)("div",{className:"full-container",children:[Object(h.jsxs)("div",{className:"div-search",children:[Object(h.jsx)("h1",{children:"Buscador"}),Object(h.jsx)("div",{className:"div-container",children:Object(h.jsxs)("form",{className:"form-search",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(h.jsx)("label",{className:"label",htmlFor:"title",children:"Pel\xedcula: "}),Object(h.jsx)("input",{type:"text",className:"input-search",autoComplete:"off",value:t,onChange:function(t){return e.handleChange(t)}}),Object(h.jsx)("button",{className:"button-search",type:"submit",children:"Buscar"})]})})]}),this.props.movies&&this.props.movies.length>0?Object(h.jsx)(p,{}):Object(h.jsx)("p",{children:"realiza una busqueda para que aparezcan los resultados..."})]})}}]),c}(n.Component));var x=Object(d.b)((function(e){return{movies:e.moviesLoaded}}),(function(e){return{getMovies:function(t){return e((c=t,function(e){return fetch("https://www.omdbapi.com/?apikey=20dac387&s="+c).then((function(e){return e.json()})).then((function(t){e({type:"GET_MOVIES",payload:t})}))}));var c}}}))(f);c(52);function g(){return Object(h.jsxs)("header",{className:"navbar",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{id:"logoHenry",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAApCAYAAAC2qTBFAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAOESURBVFiF7ZjPayRFFMc/r6ozE5NlmDAirgRXl2DUCUFQ8CIYUfzxV3jz4sVbbjmIgn/A4lnFg+uC7Em9qCAr7sHFvXhZIcoawuJhQJzRyaSqn4fumu6edE2GcWUjzBea6p+vPq/eq6o3I6qqnFGZew0wTQu4eRWFE5HoYYxBROh0OhwcHAAQUtd7D8De3h4iQpIkUTvh2e7uLgDOudngZpGInLg3z/yqswP/17CeBS3g5tUCbl4t4ObVmYZL7jUAQJqmACjV7euuwZ3YgiQdn9q8F2uzc5uAdzAa5hBJ9sJSsnx34YwJEK56rUXGeFdqj4pvrc3aXq8H3GGU3mbJ9FBuo/w+HU4MGFN47B14D6qgWfFBo7GSv53kcNlVCBVAowlPbMFmFzY2s+PhR+D8uuf+B6AtHzDiY9QMGJX7j5XpyZKMPT4BLYKqsra2xq39T+m0k9zbQ+AOyiEp1xnxGw0EZbZKRbDV6xhcyKFGEy5uwPoF2HwStp6Cp5+F7gYkCLAMDKMAIRPT/ADGaR/CZhEMkE7YiML92hfOn4t7GTrW8XnVayXFoxiK9So2flLzTKbBjRC09GHI43KSGjKvocbr/Lu6MrKuw0nnII3D/ZWbDV7XdVJfv04HUYrwBpmIrehsTYh7PguIcDLPEsDmx6SECwgPIlxEeAzhmVOWkhlBivdt6bmvjMgk0M1b8P23lk8+9Lz4wuu8+/YlvF/G2gJp5kV4EsaTjUoj71bxKP4ELihXv4TvvoGbP8CPN6D/Rw5ss3XzpefXgXOoOihtYVPhtNTGwhOABIvweB6S57j0/nXeevMK1trxz8WyGs0CzrlsH8tWrxlGLuSLA5oUYbGA5AvrT79Yth99A8PLCFsIDwHZjvFn7x3gytjefatZOzqCNM3aABcwJqdmFC7kSzlXrt2Ayx/BV1/A/s/Q6bTZ33+PVqs1fsd7h7UJw+GwYu/vQaynuKaG9bPP4epluPY1HB4U90MBkqYp/UGPVquFqkOkMGfMvy8Vo3DNmqlqkywUIuBcBpD6JAeuD81/AmeMIVkSGs289joCtFT+TCS5qlZqujBy00bQGFM7WU6FU1JGRzlURP1+v1IalRVy7vj4OPp9AJvMz1PhXn3ltahREcE5R7vdZmVlpfIsjFS322VnZ4fV1dWoA8YYBoMB29vbY7uVfhZ/u86pBdy8WsDNq38AlPI9cFbq83oAAAAASUVORK5CYII=",width:"30",height:"30",className:"d-inline-block align-top",alt:""})}),Object(h.jsx)("nav",{children:Object(h.jsx)("ul",{className:"list",children:Object(h.jsxs)("li",{className:"list-item",children:[Object(h.jsx)(u.b,{exact:!0,to:"/",children:"Home"}),Object(h.jsx)(u.b,{to:"/favs",children:"Favoritas"})]})})})]})}var E=c(3),V=(c(53),function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getMoviesDetail(e)}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"movie-detail",children:Object(h.jsx)("div",{className:"movie-card",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"photo-cnt",children:Object(h.jsxs)("div",{className:"details",children:[Object(h.jsxs)("div",{className:"title",children:[this.props.movie.Title," ",Object(h.jsx)("span",{children:this.props.movie.Rated})]}),Object(h.jsx)("div",{children:this.props.movie.Year})]})}),Object(h.jsx)("div",{className:"column",children:Object(h.jsx)("p",{children:this.props.movie.Plot})}),Object(h.jsxs)("div",{className:"container2",children:[Object(h.jsx)("div",{className:"img",children:Object(h.jsx)("img",{alt:"poster",src:this.props.movie.Poster})}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:["Director: ",this.props.movie.Director]}),Object(h.jsxs)("li",{children:["BoxOffice: ",this.props.movie.BoxOffice]}),Object(h.jsxs)("li",{children:["imdbRating: ",this.props.movie.imdbRating]}),Object(h.jsxs)("li",{children:["Genre: ",this.props.movie.Genre]})]})]})]})})})}}]),c}(i.a.Component));var y=Object(d.b)((function(e){return{movie:e.movieDetail}}),(function(e){return{getMoviesDetail:function(t){return e((c=t,function(e){return fetch("https://www.omdbapi.com/?apikey=20dac387&i=".concat(c)).then((function(e){return e.json()})).then((function(t){e({type:"GET_MOVIES_DETAIL",payload:t})}))}));var c}}}))(V),N=(c(54),function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"container-words",children:[Object(h.jsx)("p",{children:"This page is created by matias flores "}),Object(h.jsx)("p",{children:"can search movies or series and video games info"}),Object(h.jsx)("p",{children:"for start a search go to home in the header"}),Object(h.jsx)("p",{children:"thanks for you visit  "})]})})}}]),c}(n.Component));var I=function(){return Object(h.jsxs)(i.a.Fragment,{children:[Object(h.jsx)(g,{}),Object(h.jsx)(E.a,{exact:!0,path:"/home",component:N}),Object(h.jsx)(E.a,{exact:!0,path:"/search",component:x}),Object(h.jsx)(E.a,{path:"/favs",component:b}),Object(h.jsx)(E.a,{path:"/movie/:id",component:y})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=c(17),M=c(10),w={movies:[],moviesLoading:!1,moviesLoaded:[],movieDetail:{}};var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MOVIE_FAVORITE":return Object(M.a)(Object(M.a)({},e),{},{movies:e.movies.concat(t.payload)});case"GET_MOVIES_FAVORITE":return Object(M.a)(Object(M.a)({},e),{},{movies:t.payload});case"REMOVE_MOVIE_FAVORITE":return Object(M.a)(Object(M.a)({},e),{},{movies:e.movies.filter((function(e){return e.id!==t.payload.id}))});case"GET_MOVIES":return Object(M.a)(Object(M.a)({},e),{},{moviesLoaded:t.payload.Search});case"GET_MOVIES_LOADING":return{moviesLoading:!0};case"GET_MOVIES_DETAIL":return Object(M.a)(Object(M.a)({},e),{},{movieDetail:t.payload});default:return e}},D=c(31),S=Object(C.c)(T,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object(C.a)(D.a));s.a.render(Object(h.jsx)(d.a,{store:S,children:Object(h.jsx)(u.a,{children:Object(h.jsx)(I,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.04ed76e7.chunk.js.map