(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),i=n.n(c),o=n(2),a=n(3),s=n(5),r=n(4),l=n(1),u=n.n(l),h=(n(12),n(0)),b=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).timerId=setInterval((function(){}),0),t.state={currentTime:(new Date).toLocaleTimeString()},t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){t.setState({currentTime:(new Date).toLocaleTimeString()}),console.log(t.state.currentTime)}),1e3)}},{key:"componentDidUpdate",value:function(t){var e=this.props;t!==e&&console.log(e)}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state.currentTime;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"clock",children:Object(h.jsx)("p",{className:"clock__time",children:t})})})}}]),n}(u.a.Component),m=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={isClockVisible:!0,clockName:Math.floor(100*Math.random())},t.hideClock=function(){t.setState({isClockVisible:!1})},t.showClock=function(){t.setState({isClockVisible:!0})},t.setRandomName=function(){t.setState({clockName:Math.floor(100*Math.random())})},t}return Object(a.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"React clock"}),this.state.isClockVisible&&Object(h.jsx)(b,{name:this.state.clockName}),Object(h.jsx)("button",{type:"button",disabled:!this.state.isClockVisible,onClick:this.hideClock,children:"Hide Clock"}),Object(h.jsx)("button",{type:"button",disabled:this.state.isClockVisible,onClick:this.showClock,children:"Show Clock"}),Object(h.jsx)("button",{type:"button",onClick:this.setRandomName,children:"Set name"})]})}}]),n}(u.a.Component),d=m;i.a.render(Object(h.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.80a6e351.chunk.js.map