(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{111:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),o=(a(0),a(119)),i={title:"Array Utils"},c={unversionedId:"additional/array",id:"additional/array",isDocsHomePage:!1,title:"Array Utils",description:"Entity Store Usage",source:"@site/docs/additional/array.mdx",slug:"/additional/array",permalink:"/akita/docs/additional/array",editUrl:"https://github.com/datorama/akita/edit/master/docs/docs/additional/array.mdx",version:"current",sidebar:"docs",previous:{title:"Custom Operators",permalink:"/akita/docs/additional/operators"},next:{title:"Success/Error Handling",permalink:"/akita/docs/additional/notifications"}},s=[{value:"API",id:"api",children:[{value:"<code>arrayAdd</code>",id:"arrayadd",children:[]},{value:"<code>arrayRemove</code>",id:"arrayremove",children:[]},{value:"<code>arrayUpdate</code>",id:"arrayupdate",children:[]},{value:"<code>arrayUpsert</code>",id:"arrayupsert",children:[]},{value:"<code>arrayToggle</code>",id:"arraytoggle",children:[]}]},{value:"Store Usage",id:"store-usage",children:[]},{value:"Query Helper",id:"query-helper",children:[]}],d={toc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"entity-store-usage"},"Entity Store Usage"),Object(o.b)("p",null,"Let\u2019s say we have the following ",Object(o.b)("inlineCode",{parentName:"p"},"EntityStore"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="articles.store.ts"',title:'"articles.store.ts"'}),"interface Comment {\n  id: ID;\n  text: string;\n}\n\ninterface Article {\n  id: ID;\n  comments: Comment[];\n  title: string;\n}\n\ninterface ArticlesState extends EntityState<Article, number> {}\n\n@StoreConfig({ name: 'articles' })\nclass ArticlesStore extends EntityStore<ArticlesState> {}\n")),Object(o.b)("p",null,"We have an ",Object(o.b)("inlineCode",{parentName:"p"},"EntityStore")," which holds a collection of articles. Each ",Object(o.b)("inlineCode",{parentName:"p"},"article")," holds an array of ",Object(o.b)("inlineCode",{parentName:"p"},"comments"),". Akita provides helper methods that take care of the grunt work."),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("h3",{id:"arrayadd"},Object(o.b)("inlineCode",{parentName:"h3"},"arrayAdd")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { arrayAdd } from '@datorama/akita';\n\narticlesStore.update(1, ({ comments }) => ({\n  comments: arrayAdd(comments, newComments)\n}));\n")),Object(o.b)("h3",{id:"arrayremove"},Object(o.b)("inlineCode",{parentName:"h3"},"arrayRemove")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { arrayRemove } from '@datorama/akita';\n\narticlesStore.update(1, ({ comments }) => ({\n  comments: arrayRemove(comments, ids)\n}));\n\n// Remove by predicate\narticlesStore.update(1, ({ comments }) => ({\n  comments: arrayRemove(comments, predicateFn)\n}));\n")),Object(o.b)("h3",{id:"arrayupdate"},Object(o.b)("inlineCode",{parentName:"h3"},"arrayUpdate")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { arrayUpdate } from '@datorama/akita';\n\narticlesStore.update(1, ({ comments }) => ({\n  comments: arrayUpdate(comments, id/s, { text: 'New text' })\n}));\n\n// Update by predicate\narticlesStore.update(1, ({ comments }) => ({\n  comments: arrayUpdate(comments, predicateFn, { text: 'New text' })\n}));\n")),Object(o.b)("h3",{id:"arrayupsert"},Object(o.b)("inlineCode",{parentName:"h3"},"arrayUpsert")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { arrayUpsert } from '@datorama/akita';\n\narticlesStore.update(1, ({ comments }) => ({\n  comments: arrayUpsert(comments, id, { text: 'New text' })\n}));\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The first parameter is ",Object(o.b)("strong",{parentName:"p"},"typed"),", so you\u2019ll get intelligent code completion suggesting only keys that are typed as ",Object(o.b)("inlineCode",{parentName:"p"},"Array"),"."))),Object(o.b)("p",null,"Each function takes an optional ",Object(o.b)("inlineCode",{parentName:"p"},"idKey")," which defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"id"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"articlesStore.update(1, ({ comments }) => ({\n  comments: arrayUpdate(comments, 3, { text: 'New text' }, 'comment_id')\n}));\n")),Object(o.b)("h3",{id:"arraytoggle"},Object(o.b)("inlineCode",{parentName:"h3"},"arrayToggle")),Object(o.b)("p",null,"Adds a value to an array if it doesn't exist yet or removes it if already present. Objects are compared by identity by default.\nYou can override it by providing a custom compare function."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Akita provides two common comparators for ",Object(o.b)("inlineCode",{parentName:"p"},"arrayToggle"),": The ",Object(o.b)("inlineCode",{parentName:"p"},"byId()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"byKey(key: string)")," compare function."))),Object(o.b)("p",null,"Toggling an array of objects:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { arrayToggle } from '@datorama/akita';\n\narticlesStore.update(1, ({ comments }) => ({\n  comments: arrayToggle(comments, { id: 1, text: 'New text' }, byId())\n}));\n")),Object(o.b)("p",null,"Toggling an array of primitive values:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { arrayToggle } from '@datorama/akita';\n\narrayToggle(['a', 'b'], 'c'); // returns ['a', 'b', 'c']\narrayToggle(['a', 'b', 'c'], 'b'); // returns ['a', 'c']\n")),Object(o.b)("h2",{id:"store-usage"},"Store Usage"),Object(o.b)("p",null,"We can use the same helpers for properties belongs to a ",Object(o.b)("inlineCode",{parentName:"p"},"Store"),". For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="auth.store.ts"',title:'"auth.store.ts"'}),"import { arrayAdd } from '@datorama/akita';\n\nexport interface AuthState {\n  permissions: string[];\n}\n\n@StoreConfig({ name: 'auth' })\nexport class AuthStore extends Store<AuthState> {\n   constructor() {\n     super({ permissions: [] });\n   }\n\n   addPermission(permission: string) {\n     this.update(({ permissions }) => ({\n       permissions: arrayAdd(permissions, 'ADMIN')\n     }));\n   }\n}\n")),Object(o.b)("h2",{id:"query-helper"},"Query Helper"),Object(o.b)("p",null,"That takes care of the CRUD operations, but we also have some good stuff added to the ",Object(o.b)("inlineCode",{parentName:"p"},"Query"),"; Akita now provides a special operator to query specific items from a collection - ",Object(o.b)("inlineCode",{parentName:"p"},"arrayFind"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { arrayFind } from '@datorama/akita';\n\nconst selectComment$ = this.articlesQuery\n .selectEntity(1, 'comments')\n .pipe(arrayFind(commentId))\n\nconst selectComments$ = this.articlesQuery\n .selectEntity(1, 'comments')\n .pipe(arrayFind([id, id, id]))\n\nconst selectCommentsByPredicate$ = this.articlesQuery\n  .selectEntity(1, 'comments')\n  .pipe(arrayFind(comment => comment.text.includes(..)))\n\nconst admins$ = authQuery\n   .select('permissions')\n   .pipe(arrayFind(permission => permission === 'ADMIN'));\n")),Object(o.b)("p",null,"The added advantage is that these observables ",Object(o.b)("strong",{parentName:"p"},"will only fire if one of the items in the resulting collection has been modified"),", via an update, add or delete operation."))}l.isMDXComponent=!0},119:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(a),b=n,u=m["".concat(i,".").concat(b)]||m[b]||p[b]||o;return a?r.a.createElement(u,c(c({ref:t},d),{},{components:a})):r.a.createElement(u,c({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);