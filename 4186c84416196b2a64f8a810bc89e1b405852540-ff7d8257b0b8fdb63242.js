(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"65eO":function(e,t,a){"use strict";var r=a("k1TG"),n=a("8o2o"),i=a("TSYQ"),l=a.n(i),s=a("q1tI"),c=a.n(s),o=a("vUet"),u=c.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.variant,s=e.pill,u=e.className,d=e.as,f=void 0===d?"span":d,m=Object(n.a)(e,["bsPrefix","variant","pill","className","as"]),p=Object(o.a)(a,"badge");return c.a.createElement(f,Object(r.a)({ref:t},m,{className:l()(u,p,s&&p+"-pill",i&&p+"-"+i)}))}));u.displayName="Badge",u.defaultProps={pill:!1},t.a=u},"9eSz":function(e,t,a){"use strict";var r=a("5NKs");t.__esModule=!0,t.default=void 0;var n,i=r(a("v06X")),l=r(a("XEEL")),s=r(a("uDP2")),c=r(a("j8BX")),o=r(a("q1tI")),u=r(a("17x9")),d=function(e){var t=(0,c.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=O([].concat(t.fluid))),t.fixed&&(t.fixed=O([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},b=Object.create({}),h=function(e){var t=d(e),a=m(t);return b[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,E=v&&window.IntersectionObserver,y=new WeakMap;function x(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),a&&o.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function O(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function N(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function j(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function S(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var w=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)})).join("")+"<img "+o+l+s+a+r+t+i+n+c+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=o.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,l=e.ariaHidden,s=o.default.createElement(R,(0,c.default)({ref:t,src:a},i,{ariaHidden:l}));return r.length>1?o.default.createElement("picture",null,n(r),s):s})),R=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,l=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,c.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},p,{onLoad:l,onError:u,ref:t,loading:d,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));R.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=w(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),(a=m(t))&&(b[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,s=void 0===l?{}:l,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,b=e.fluid,h=e.fixed,g=e.backgroundColor,v=e.durationFadeIn,E=e.Tag,y=e.itemProp,O=e.loading,S=e.draggable,w=b||h;if(!w)return null;var L=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,c.default)({opacity:L?1:0,transition:C?"opacity "+v+"ms":"none"},s),P="boolean"==typeof g?"lightgray":g,z={transitionDelay:v+"ms"},H=(0,c.default)({opacity:this.state.imgLoaded?0:1},C&&z,s,f),M={title:t,alt:this.state.isVisible?"":a,style:H,className:m,itemProp:y},V=this.state.isHydrated?p(w):w[0];if(b)return o.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden",maxWidth:V.maxWidth?V.maxWidth+"px":null,maxHeight:V.maxHeight?V.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},o.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),P&&o.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:P,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&z)}),V.base64&&o.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:M,imageVariants:w,generateSources:j}),V.tracedSVG&&o.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:M,imageVariants:w,generateSources:N}),this.state.isVisible&&o.default.createElement("picture",null,x(w),o.default.createElement(R,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:O,draggable:S})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,c.default)({alt:a,title:t,loading:O},V,{imageVariants:w}))}}));if(h){var q=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:V.width,height:V.height},i);return"inherit"===i.display&&delete q.display,o.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(V.srcSet)},P&&o.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:P,width:V.width,opacity:this.state.imgLoaded?0:1,height:V.height},C&&z)}),V.base64&&o.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:M,imageVariants:w,generateSources:j}),V.tracedSVG&&o.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:M,imageVariants:w,generateSources:N}),this.state.isVisible&&o.default.createElement("picture",null,x(w),o.default.createElement(R,{alt:a,title:t,width:V.width,height:V.height,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:O,draggable:S})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,c.default)({alt:a,title:t,loading:O},V,{imageVariants:w}))}}))}return null},t}(o.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),T=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function P(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}L.propTypes={resolutions:C,sizes:T,fixed:P(u.default.oneOfType([C,u.default.arrayOf(C)])),fluid:P(u.default.oneOfType([T,u.default.arrayOf(T)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var z=L;t.default=z},JI6e:function(e,t,a){"use strict";var r=a("k1TG"),n=a("8o2o"),i=a("TSYQ"),l=a.n(i),s=a("q1tI"),c=a.n(s),o=a("vUet"),u=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,s=e.as,d=void 0===s?"div":s,f=Object(n.a)(e,["bsPrefix","className","as"]),m=Object(o.a)(a,"col"),p=[],b=[];return u.forEach((function(e){var t,a,r,n=f[e];if(delete f[e],"object"==typeof n&&null!=n){var i=n.span;t=void 0===i||i,a=n.offset,r=n.order}else t=n;var l="xs"!==e?"-"+e:"";t&&p.push(!0===t?""+m+l:""+m+l+"-"+t),null!=r&&b.push("order"+l+"-"+r),null!=a&&b.push("offset"+l+"-"+a)})),p.length||p.push(m),c.a.createElement(d,Object(r.a)({},f,{ref:t,className:l.a.apply(void 0,[i].concat(p,b))}))}));d.displayName="Col",t.a=d},Kvkj:function(e,t,a){"use strict";a.d(t,"a",(function(){return L})),a.d(t,"b",(function(){return C})),a.d(t,"c",(function(){return T.a})),a.d(t,"d",(function(){return H})),a.d(t,"e",(function(){return se})),a.d(t,"f",(function(){return fe}));var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),l=a("9eSz"),s=a.n(l),c=a("k1TG"),o=a("8o2o"),u=a("TSYQ"),d=a.n(u),f=a("vUet"),m=a("YdCC"),p=function(e){return n.a.forwardRef((function(t,a){return n.a.createElement("div",Object(c.a)({},t,{ref:a,className:d()(t.className,e)}))}))},b=a("Wzyw"),h=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.variant,l=e.as,s=void 0===l?"img":l,u=Object(o.a)(e,["bsPrefix","className","variant","as"]),m=Object(f.a)(a,"card-img");return n.a.createElement(s,Object(c.a)({ref:t,className:d()(i?m+"-"+i:m,r)},u))}));h.displayName="CardImg",h.defaultProps={variant:null};var g=h,v=p("h5"),E=p("h6"),y=Object(m.a)("card-body"),x=Object(m.a)("card-title",{Component:v}),O=Object(m.a)("card-subtitle",{Component:E}),N=Object(m.a)("card-link",{Component:"a"}),j=Object(m.a)("card-text",{Component:"p"}),S=Object(m.a)("card-header"),w=Object(m.a)("card-footer"),I=Object(m.a)("card-img-overlay"),k=n.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,l=e.bg,s=e.text,u=e.border,m=e.body,p=e.children,h=e.as,g=void 0===h?"div":h,v=Object(o.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),E=Object(f.a)(a,"card"),x=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:E+"-header"}}),[E]);return n.a.createElement(b.a.Provider,{value:x},n.a.createElement(g,Object(c.a)({ref:t},v,{className:d()(i,E,l&&"bg-"+l,s&&"text-"+s,u&&"border-"+u)}),m?n.a.createElement(y,null,p):p))}));k.displayName="Card",k.defaultProps={body:!1},k.Img=g,k.Title=x,k.Subtitle=O,k.Body=y,k.Link=N,k.Text=j,k.Header=S,k.Footer=w,k.ImgOverlay=I;var R=k,L=function(e){return n.a.createElement("div",{className:" col-md-6 col-xl-4 ol-12 my-4"},n.a.createElement(R,{className:"card-container m-auto",as:i.Link,to:e.to},n.a.createElement(R.Img,{as:s.a,fluid:e.featuredImage,className:"height-60"}),n.a.createElement(R.Body,{className:"pt-4"},n.a.createElement(R.Title,null,n.a.createElement("h4",null,e.title)),n.a.createElement(R.Subtitle,{className:"mb-2 text-secondary"},e.subtitle),n.a.createElement(R.Text,null,e.excerpt))))},C=function(e){var t=e.frontmatter,a=e.image,r=t.company,i=t.slug,l=t.position,c=t.link,o=t.startDate,u=t.endDate,d=t.location;return n.a.createElement("div",{className:"m-auto"},n.a.createElement("a",{className:"text-decoration-none",target:"_blank",rel:"noopener noreferrer",href:c},a&&n.a.createElement(s.a,{fluid:a,style:{maxHeight:"17vmax",maxWidth:"17vmax",borderRadius:"Royal Victoria Hospital"!==r&&"50%"},className:"m-auto"})),n.a.createElement("div",null,i?n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",{className:"m-auto pt-2 nav-links"},n.a.createElement("a",{className:"text-decoration-none",target:"_blank",rel:"noopener noreferrer",href:c},n.a.createElement("span",{class:i},r))),n.a.createElement("h4",{className:"mt-2"},n.a.createElement("small",null,n.a.createElement("span",null,l))),n.a.createElement("p",{className:"text-muted"},o,"-",u)):n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{className:"m-auto pt-2 nav-links"},n.a.createElement("a",{className:"text-decoration-none",target:"_blank",rel:"noopener noreferrer",href:c},n.a.createElement("span",{class:i},r))),n.a.createElement("h5",{className:"text-muted"},d),n.a.createElement("h4",{className:"mt-2"},l),n.a.createElement("h5",{className:"text-muted mt-2"},o,"-",u))))},T=(a("JwsL"),a("rY4l"),a("U5tq"),a("jkrH")),P=n.a.forwardRef((function(e,t){var a,r=e.as,i=void 0===r?"div":r,l=e.className,s=e.fluid,u=e.bsPrefix,m=Object(o.a)(e,["as","className","fluid","bsPrefix"]),p=((a={})[u=Object(f.a)(u,"jumbotron")]=!0,a[u+"-fluid"]=s,a);return n.a.createElement(i,Object(c.a)({ref:t},m,{className:d()(l,p)}))}));P.defaultProps={fluid:!1},P.displayName="Jumbotron";var z=P,H=function(e){var t=e.title,a=e.children;return n.a.createElement(z,{className:"bg-none mx-5 pb-0"},n.a.createElement("h1",null,n.a.createElement("span",null,t,a&&n.a.createElement(n.a.Fragment,null,a))))},M=a("65eO"),V=a("dbZe"),q=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.variant,i=e.size,l=e.active,s=e.className,u=e.block,m=e.type,p=e.as,b=Object(o.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(f.a)(a,"btn"),g=d()(s,h,l&&"active",h+"-"+r,u&&h+"-block",i&&h+"-"+i);if(b.href)return n.a.createElement(V.a,Object(c.a)({},b,{as:p,ref:t,className:d()(g,b.disabled&&"disabled")}));t&&(b.ref=t),m?b.type=m:p||(b.type="button");var v=p||"button";return n.a.createElement(v,Object(c.a)({},b,{className:g}))}));q.displayName="Button",q.defaultProps={variant:"primary",active:!1,disabled:!1};var W=q,G=a("IP2g"),_=a("ZCiN");var D=function(e,t){var a=Object(r.useRef)(!0);Object(r.useEffect)((function(){if(!a.current)return e();a.current=!1}),t)},F=a("XcHJ"),J=a("i52p"),B=Math.pow(2,31)-1;function A(){var e=Object(F.a)(),t=Object(r.useRef)();return Object(J.a)((function(){return clearTimeout(t.current)})),Object(r.useMemo)((function(){var a=function(){return clearTimeout(t.current)};return{set:function(r,n){void 0===n&&(n=0),e()&&(a(),n<=B?t.current=setTimeout(r,n):function e(t,a,r){var n=r-Date.now();t.current=n<=B?setTimeout(a,n):setTimeout((function(){return e(t,a,r)}),B)}(t,r,Date.now()+n))},clear:a}}),[])}var U=a("YECM"),X=a("dRu9"),Y=a("17x9"),K=a.n(Y),Q=a("JCAc"),Z=Object(m.a)("carousel-caption"),$=Object(m.a)("carousel-item");function ee(e,t){var a=0;return n.a.Children.map(e,(function(e){return n.a.isValidElement(e)?t(e,a++):e}))}var te=a("z+q/"),ae={bsPrefix:K.a.string,as:K.a.elementType,slide:K.a.bool,fade:K.a.bool,controls:K.a.bool,indicators:K.a.bool,activeIndex:K.a.number,onSelect:K.a.func,onSlide:K.a.func,onSlid:K.a.func,interval:K.a.number,keyboard:K.a.bool,pause:K.a.oneOf(["hover",!1]),wrap:K.a.bool,touch:K.a.bool,prevIcon:K.a.node,prevLabel:K.a.string,nextIcon:K.a.node,nextLabel:K.a.string},re={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:n.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:n.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var ne=n.a.forwardRef((function(e,t){var a=Object(Q.a)(e,{activeIndex:"onSelect"}),i=a.as,l=void 0===i?"div":i,s=a.bsPrefix,u=a.slide,m=a.fade,p=a.controls,b=a.indicators,h=a.activeIndex,g=a.onSelect,v=a.onSlide,E=a.onSlid,y=a.interval,x=a.keyboard,O=a.onKeyDown,N=a.pause,j=a.onMouseOver,S=a.onMouseOut,w=a.wrap,I=a.touch,k=a.onTouchStart,R=a.onTouchMove,L=a.onTouchEnd,C=a.prevIcon,T=a.prevLabel,P=a.nextIcon,z=a.nextLabel,H=a.className,M=a.children,q=Object(o.a)(a,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),W=Object(f.a)(s,"carousel"),G=Object(r.useRef)(null),F=Object(r.useState)("next"),J=F[0],B=F[1],Y=Object(r.useState)(!1),K=Y[0],Z=Y[1],$=Object(r.useState)(h||0),ae=$[0],re=$[1];K||h===ae||(G.current?(B(G.current),G.current=null):B((h||0)>ae?"next":"prev"),u&&Z(!0),re(h||0));var ne=n.a.Children.toArray(M).filter(n.a.isValidElement).length,ie=Object(r.useCallback)((function(e){if(!K){var t=ae-1;if(t<0){if(!w)return;t=ne-1}G.current="prev",g&&g(t,e)}}),[K,ae,g,w,ne]),le=Object(_.a)((function(e){if(!K){var t=ae+1;if(t>=ne){if(!w)return;t=0}G.current="next",g&&g(t,e)}})),se=Object(r.useRef)();Object(r.useImperativeHandle)(t,(function(){return{element:se.current,prev:ie,next:le}}));var ce=Object(_.a)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(se.current)&&le()})),oe="next"===J?"left":"right";D((function(){u||(v&&v(ae,oe),E&&E(ae,oe))}),[ae]);var ue=W+"-item-"+J,de=W+"-item-"+oe,fe=Object(r.useCallback)((function(e){Object(te.a)(e),v&&v(ae,oe)}),[v,ae,oe]),me=Object(r.useCallback)((function(){Z(!1),E&&E(ae,oe)}),[E,ae,oe]),pe=Object(r.useCallback)((function(e){if(x&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void ie(e);case"ArrowRight":return e.preventDefault(),void le(e)}O&&O(e)}),[x,O,ie,le]),be=Object(r.useState)(!1),he=be[0],ge=be[1],ve=Object(r.useCallback)((function(e){"hover"===N&&ge(!0),j&&j(e)}),[N,j]),Ee=Object(r.useCallback)((function(e){ge(!1),S&&S(e)}),[S]),ye=Object(r.useRef)(0),xe=Object(r.useRef)(0),Oe=Object(r.useState)(!1),Ne=Oe[0],je=Oe[1],Se=A(),we=Object(r.useCallback)((function(e){ye.current=e.touches[0].clientX,xe.current=0,I&&je(!0),k&&k(e)}),[I,k]),Ie=Object(r.useCallback)((function(e){e.touches&&e.touches.length>1?xe.current=0:xe.current=e.touches[0].clientX-ye.current,R&&R(e)}),[R]),ke=Object(r.useCallback)((function(e){if(I){var t=xe.current;if(Math.abs(t)<=40)return;t>0?ie(e):le(e)}Se.set((function(){je(!1)}),y||void 0),L&&L(e)}),[I,ie,le,Se,y,L]),Re=null!=y&&!he&&!Ne&&!K,Le=Object(r.useRef)();Object(r.useEffect)((function(){if(Re)return Le.current=window.setInterval(document.visibilityState?ce:le,y||void 0),function(){null!==Le.current&&clearInterval(Le.current)}}),[Re,le,y,ce]);var Ce=Object(r.useMemo)((function(){return b&&Array.from({length:ne},(function(e,t){return function(e){g&&g(t,e)}}))}),[b,ne,g]);return n.a.createElement(l,Object(c.a)({ref:se},q,{onKeyDown:pe,onMouseOver:ve,onMouseOut:Ee,onTouchStart:we,onTouchMove:Ie,onTouchEnd:ke,className:d()(H,W,u&&"slide",m&&W+"-fade")}),b&&n.a.createElement("ol",{className:W+"-indicators"},ee(M,(function(e,t){return n.a.createElement("li",{key:t,className:t===ae?"active":void 0,onClick:Ce?Ce[t]:void 0})}))),n.a.createElement("div",{className:W+"-inner"},ee(M,(function(e,t){var a=t===ae;return u?n.a.createElement(X.e,{in:a,onEnter:a?fe:void 0,onEntered:a?me:void 0,addEndListener:U.a},(function(t){return n.a.cloneElement(e,{className:d()(e.props.className,a&&"entered"!==t&&ue,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&de)})})):n.a.cloneElement(e,{className:d()(e.props.className,a&&"active")})}))),p&&n.a.createElement(n.a.Fragment,null,(w||0!==h)&&n.a.createElement(V.a,{className:W+"-control-prev",onClick:ie},C,T&&n.a.createElement("span",{className:"sr-only"},T)),(w||h!==ne-1)&&n.a.createElement(V.a,{className:W+"-control-next",onClick:le},P,z&&n.a.createElement("span",{className:"sr-only"},z))))}));ne.displayName="Carousel",ne.propTypes=ae,ne.defaultProps=re,ne.Caption=Z,ne.Item=$;var ie=ne,le=function(e){var t=e.images;return n.a.createElement(ie,{interval:2e3,className:"m-1"},t.map((function(e){return n.a.createElement(ie.Item,{key:Math.random()},n.a.createElement(s.a,{fluid:e,imgStyle:{objectFit:"contain"},style:{height:"15rem"}}))})))},se=function(e){var t=e.featuredImages,a=e.tags,r=e.github,l=e.live,s=e.title,c=e.to;return n.a.createElement("div",{className:"col-12 col-md-6 col-xl-4 text-center my-4"},n.a.createElement("div",{className:"p-1 project-container m-auto"},n.a.createElement(le,{images:t,style:{height:"60%"}}),n.a.createElement(i.Link,{className:"text-decoration-none",to:c},n.a.createElement("h4",{className:"mt-3"},n.a.createElement("p",null,s))),n.a.createElement("div",{className:"d-block resume-tags-container"},a.map((function(e){return n.a.createElement(M.a,{key:e.concat(Math.random()),pill:!0,className:"m-1 py-1 px-2 resume-tags"},n.a.createElement("h5",{style:{fontSize:"0.9rem"},className:"m-auto"},e))}))),n.a.createElement("br",null),n.a.createElement("div",{className:"d-inline-flex"},l&&n.a.createElement(W,{className:"see-live-button rounded-pill mx-md-2 px-md-3 pb-md-1"},n.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"text-white text-decoration-none"},n.a.createElement(G.a,{icon:["fa","window-maximize"]})," See me live  ",n.a.createElement(G.a,{icon:["fa","link"]}))),r&&n.a.createElement(W,{variant:"dark",className:"mx-2 px-3 pb-1"},n.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"text-white text-decoration-none"},n.a.createElement(G.a,{icon:["fab","github"]})," Github  ",n.a.createElement(G.a,{icon:["fa","link"]}))))))},ce=["xl","lg","md","sm","xs"],oe=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.noGutters,l=e.as,s=void 0===l?"div":l,u=Object(o.a)(e,["bsPrefix","className","noGutters","as"]),m=Object(f.a)(a,"row"),p=m+"-cols",b=[];return ce.forEach((function(e){var t,a=u[e];delete u[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&b.push(""+p+r+"-"+t)})),n.a.createElement(s,Object(c.a)({ref:t},u,{className:d.a.apply(void 0,[r,m,i&&"no-gutters"].concat(b))}))}));oe.displayName="Row",oe.defaultProps={noGutters:!1};var ue=oe,de=a("JI6e"),fe=function(e){var t=e.html,a=e.frontmatter,r=e.image;return n.a.createElement("div",{className:"mb-5"},n.a.createElement(ue,{className:"p-1 text-center"},n.a.createElement(de.a,{className:"col-12 mt-4"},n.a.createElement(C,{frontmatter:a,image:r})),n.a.createElement(de.a,{className:"col-12"},n.a.createElement("div",{className:"d-inline-flex mb-4"},a.tags.map((function(e){return n.a.createElement(M.a,{key:e,pill:!0,className:"mr-1 mr-md-2 py-1 px-2 px-md-3 resume-tags"},n.a.createElement("h5",{className:"m-auto"},e))}))))),n.a.createElement(ue,null,n.a.createElement(de.a,{className:"col-12 col-lg-8 m-auto"},n.a.createElement("p",{className:"text-left p-large",dangerouslySetInnerHTML:{__html:t}}))))}},XcHJ:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a("q1tI");function n(){var e=Object(r.useRef)(!0),t=Object(r.useRef)((function(){return e.current}));return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},i52p:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a("q1tI");function n(e){var t,a,n=(t=e,(a=Object(r.useRef)(t)).current=t,a);Object(r.useEffect)((function(){return function(){return n.current()}}),[])}}}]);
//# sourceMappingURL=4186c84416196b2a64f8a810bc89e1b405852540-ff7d8257b0b8fdb63242.js.map