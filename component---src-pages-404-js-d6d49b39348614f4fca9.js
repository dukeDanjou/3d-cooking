(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(163),o=n(190),s=n(158);t.default=Object(s.a)(function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))})},149:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m}),n.d(t,"useStaticQuery",function(){return h});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(143),u=n.n(s);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(151),l=n.n(c);n.d(t,"PageRenderer",function(){return l.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},h=function(e){r.a.useContext;var t=r.a.useContext(p);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,n){var a;e.exports=(a=n(162))&&a.default||a},158:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(146),u=n(176),c=n.n(u),l=n(166),d=n.n(l),p=n(160);t.a=function(e){return function(t){function n(e){var n;return(n=t.call(this,e)||this).muiPageContext=Object(p.a)(),n}r()(n,t);var a=n.prototype;return a.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},a.render=function(){return o.a.createElement(d.a,{generateClassName:this.muiPageContext.generateClassName},o.a.createElement(s.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},o.a.createElement(c.a,null),o.a.createElement(e,this.props)))},n}(o.a.Component)}},160:function(e,t,n){"use strict";(function(e,a){n.d(t,"a",function(){return p});n(74),n(55),n(75),n(171);var r=n(159),i=n(146),o=n(174),s=n.n(o),u=n(175),c=n.n(u),l=Object(i.createMuiTheme)({palette:{primary:{light:s.a[300],main:s.a[500],dark:s.a[700]},secondary:{light:c.a[300],main:c.a[500],dark:c.a[700]}},typography:{useNextVariants:!0}});function d(){return{theme:l,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(i.createGenerateClassName)()}}function p(){return e.browser?(a.__INIT_MATERIAL_UI__||(a.__INIT_MATERIAL_UI__=d()),a.__INIT_MATERIAL_UI__):d()}}).call(this,n(170),n(73))},161:function(e){e.exports={data:{site:{siteMetadata:{title:"3d cooking"}}}}},162:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(56),u=n(2),c=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},163:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(161),o=n(0),s=n.n(o),u=n(4),c=n.n(u),l=n(149),d=n(146),p=n(177),m=n.n(p),h=n(179),f=n.n(h),g=n(182),y=n.n(g),w=n(180),v=n.n(w),b=n(181),E=n.n(b),x=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,n=e.title;return s.a.createElement("div",{className:t.root},s.a.createElement(m.a,{position:"static"},s.a.createElement(f.a,null,s.a.createElement(v.a,{className:t.menuButton,color:"inherit","aria-label":"Menu"},s.a.createElement(E.a,null)),s.a.createElement(y.a,{variant:"h6",color:"inherit",className:t.grow},n))))},t}(o.Component),T=Object(d.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(x),k=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,n=e.children;return s.a.createElement(l.StaticQuery,{query:C,render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(T,{title:e.site.siteMetadata.title}),s.a.createElement("main",{className:t.root},n))},data:i})},t}(o.Component);k.propTypes={children:c.a.node.isRequired};t.a=Object(d.withStyles)(function(e){return{root:{textAlign:"center",paddingTop:20*e.spacing.unit}}})(k);var C="1072634222"},190:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(191),o=n(0),s=n.n(o),u=n(4),c=n.n(u),l=n(220),d=n.n(l),p=n(149),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.description,n=e.lang,a=e.meta,r=e.keywords,o=e.title;return s.a.createElement(p.StaticQuery,{query:h,render:function(e){var i=t||e.site.siteMetadata.description;return s.a.createElement(d.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:o},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:i}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(a)},s.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500"}),s.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}))},data:i})},t}(o.Component);m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m;var h="4017075492"},191:function(e){e.exports={data:{site:{siteMetadata:{title:"3d cooking",description:"3d models baked using blender",author:"Duke d'Anjou"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-d6d49b39348614f4fca9.js.map