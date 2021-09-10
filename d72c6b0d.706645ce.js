(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(119)),s={title:"Transactions"},i={unversionedId:"transactions",id:"transactions",isDocsHomePage:!1,title:"Transactions",description:"Transactions are an optimization for performing multiple operations on the store. Let's say we have the following store and query:",source:"@site/docs/transactions.mdx",slug:"/transactions",permalink:"/akita/docs/transactions",editUrl:"https://github.com/datorama/akita/edit/master/docs/docs/transactions.mdx",version:"current",sidebar:"docs",previous:{title:"UI State",permalink:"/akita/docs/ui"},next:{title:"Best Practices",permalink:"/akita/docs/best-practices"}},c=[{value:"combineQueries",id:"combinequeries",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Transactions are an optimization for performing multiple operations on the store. Let's say we have the following store and query:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="auth.store.ts"',title:'"auth.store.ts"'}),"function createInitialState(): AuthState {\n  return {\n    firstName: '',\n    token: ''\n  };\n}\n\n@StoreConfig({ name: 'auth' })\nclass AuthStore extends Store<AuthState> {\n\n  constructor() {\n    super(createInitialState());\n  }\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="auth.query.ts"',title:'"auth.query.ts"'}),"export class AuthQuery extends query<AuthState> {\n\n  constructor(protected store: AuthStore) {\n    super(store);\n  }\n}\n")),Object(o.b)("p",null,"And we want to query the entire state:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const authState$ = authQuery.select();\nconst subscription = authState$.subscribe();\n")),Object(o.b)("p",null,"Now let's say we need to update the same store a couple of times on the same ",Object(o.b)("inlineCode",{parentName:"p"},"tick"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"update(token: string) {\n  this.store.update({ token });\n  this.store.setLoading(false);\n}\n")),Object(o.b)("p",null,"This will trigger the ",Object(o.b)("inlineCode",{parentName:"p"},"authState$")," subscriber ",Object(o.b)("inlineCode",{parentName:"p"},"twice"),", something we want to avoid. In cases like these Akita's ",Object(o.b)("inlineCode",{parentName:"p"},"transactions")," come in handy - they ensures that a dispatch occurs only after all the store actions defined in the transaction have been called. "),Object(o.b)("p",null,"We can use them as decorators, functions or operators:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { \n  transaction, \n  applyTransaction, \n  withTransaction } \nfrom '@datorama/akita';\n\n@transaction()\nupdate() {\n   this.store.update();\n   this.store.setLoading(true);\n}\n\nupdate() {\n  applyTransaction(() => {\n    this.store.update();\n    this.store.setActive(1);\n  });\n}\n\nupdate() {\n  return http.get().pipe(\n    withTransaction(response => {\n       this.store.update(response);\n       this.store.setActive(1);\n    })\n  )\n}\n")),Object(o.b)("p",null,"Now the store will dispatch the new values only ",Object(o.b)("strong",{parentName:"p"},"once"),", after the final update has finished."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Transaction also works when updating multiple stores. For example:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"queryOne.select().subscribe(value => {\n  const fromOtherQuery = queryTwo.getValue();\n})\n")),Object(o.b)("p",{parentName:"div"},"When updating both stores inside a ",Object(o.b)("inlineCode",{parentName:"p"},"transaction"),", you'll have a guarantee that the value of both will be up to date inside the query selector."))),Object(o.b)("h2",{id:"combinequeries"},"combineQueries"),Object(o.b)("p",null,"Akita provides the ",Object(o.b)("inlineCode",{parentName:"p"},"combineQueries")," observable, which is useful in cases where we need to return data from our store, combined with data arriving from additional queries, like ",Object(o.b)("inlineCode",{parentName:"p"},"combineLatest"),". One example of this is combining data from other stores:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="movies.query.ts"',title:'"movies.query.ts"'}),"import { combineQueries } from '@datorama/akita';\n\nexport class MoviesQuery extends QueryEntity<MoviesState> {\n\n  constructor(protected store: MoviesStore, \n              private actorsQuery: ActorsQuery, \n              private genresQuery: GenresQuery) {\n    super(store);\n  }\n\n  selectMovies() {\n    return combineQueries([\n      this.selectAll(), \n      this.actorsQuery.selectAll({ asObject: true }), \n      this.genresQuery.selectAll({ asObject: true })\n     ]\n    )\n    .pipe(\n      map(([movies, actors, genres]) => {\n        return movies.map(movie => {\n          return {\n            ...movie,\n            actors: movie.actors.map(actorId => actors[actorId]),\n            genres: movie.genres.map(genreId => genres[genreId])\n          };\n        });\n      })\n    );\n  }\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="movies.service.ts"',title:'"movies.service.ts"'}),"import { withTransaction } from '@datorama/akita';\n\nexport class MoviesService {\n  constructor(private moviesStore: MoviesStore,\n              private actorsStore: ActorsStore, \n              private genresStore: GenresStore) {}\n\n  getMovies() {\n    return http.get().pipe(\n      withTransaction(response => {\n        this.actorsStore.set(response.entities.actors);\n        this.genresStore.set(response.entities.genres);\n        const movies = {\n          entities: response.entities.movies,\n          ids: response.result\n        };\n        this.moviesStore.set(movies);\n      })\n    );\n  }\n}\n")),Object(o.b)("p",null,"In our service, when we fetch the ",Object(o.b)("inlineCode",{parentName:"p"},"movies")," and update the store, we wrap it in a ",Object(o.b)("inlineCode",{parentName:"p"},"transaction"),", and in the query, when selecting the movies, we use the ",Object(o.b)("inlineCode",{parentName:"p"},"combineQueries")," operator in order to combine the movie data with the actors & genres data from the other stores. This will make sure that our subscribers will receive a ",Object(o.b)("inlineCode",{parentName:"p"},"single")," notification, instead of one per update."))}l.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(s,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,i(i({ref:t},p),{},{components:n})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);