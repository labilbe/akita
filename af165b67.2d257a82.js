(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(119)),i={title:"Store Middleware"},d={unversionedId:"additional/middleware",id:"additional/middleware",isDocsHomePage:!1,title:"Store Middleware",description:"It\u2019s possible to define middleware functions both for a Store and EntityStore. For example, in EntityStore we can add the following methods:",source:"@site/docs/additional/middleware.mdx",slug:"/additional/middleware",permalink:"/akita/docs/additional/middleware",editUrl:"https://github.com/datorama/akita/edit/master/docs/docs/additional/middleware.mdx",version:"current",sidebar:"docs",previous:{title:"Caching Support",permalink:"/akita/docs/additional/cache"},next:{title:"Reset Stores",permalink:"/akita/docs/additional/reset"}},s=[{value:"Using this",id:"using-this",children:[]}],c={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It\u2019s possible to define middleware functions both for a ",Object(o.b)("inlineCode",{parentName:"p"},"Store")," and ",Object(o.b)("inlineCode",{parentName:"p"},"EntityStore"),". For example, in ",Object(o.b)("inlineCode",{parentName:"p"},"EntityStore")," we can add the following methods:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="books.store.ts"',title:'"books.store.ts"'}),"@StoreConfig({ name: 'books' })\nexport class BooksStore extends EntityStore<BooksState> {\n  constructor() {\n    super();\n  }\n  \n  akitaPreAddEntity(book: Book) {\n    if(book.price === 100) {\n      return {\n        ...book,\n        price: limitedPrice\n      }                    \n    }\n  \n    return book;\n  }\n  \n  akitaPreUpdateEntity(prevBook: Book, nextBook: Book) {\n    // return the same entity or modify it\n  }\n}\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"preAddEntity()")," middleware is called when we invoke the ",Object(o.b)("inlineCode",{parentName:"p"},"EntityStore.set()")," or ",Object(o.b)("inlineCode",{parentName:"p"},"EntityStore.add()")," methods with the newly added entity, and gives you the possibility to modify it before inserting it into the store."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"preUpdateEntity()")," middleware is called with the previous entity\u2019s data, as well as the updated version of it, whenever we call any ",Object(o.b)("inlineCode",{parentName:"p"},"EntityStore")," method that updates an entity, for instance, ",Object(o.b)("inlineCode",{parentName:"p"},"EntityStore.update(1)")," , ",Object(o.b)("inlineCode",{parentName:"p"},"EntityStore.updateActive()"),"."),Object(o.b)("p",null,"In addition to that, we\u2019ve added the ",Object(o.b)("inlineCode",{parentName:"p"},"preUpdate()")," middleware that\u2019s supported in both stores, and is called with the previous and the current state. "),Object(o.b)("p",null,"This middleware is called whenever we call ",Object(o.b)("inlineCode",{parentName:"p"},"Store.update()"),". For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="auth.store.ts"',title:'"auth.store.ts"'}),"@StoreConfig({ name: 'auth' })\nexport class AuthStore extends Store<AuthState> {\n  constructor() {\n    super();\n  }\n  \n  akitaPreUpdate(prevState: AuthState, nextState: AuthState) {\n    // return the same state or modify it\n  }\n}\n")),Object(o.b)("p",null,"These can also be useful for debugging purposes. For example, logging who's updating the store."),Object(o.b)("h2",{id:"using-this"},"Using this"),Object(o.b)("p",null,"In case you want to use the this context inside the hook, you need to use the ",Object(o.b)("inlineCode",{parentName:"p"},"bind")," function:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="auth.store.ts"',title:'"auth.store.ts"'}),"@StoreConfig({ name: 'auth' })\nexport class AuthStore extends Store<AuthState> {\n  constructor(private someService: SomeService) {\n    super();\n    this.akitaPreUpdate = this.akitaPreUpdate.bind(this);\n  }\n  \n  akitaPreUpdate(prevState: AuthState, nextState: AuthState) {\n    this.someService.getData();\n    // return the same state or modify it\n  }\n}\n")))}l.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return n?a.a.createElement(m,d(d({ref:t},c),{},{components:n})):a.a.createElement(m,d({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);