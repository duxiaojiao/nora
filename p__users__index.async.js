(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"1FtR":function(e,t,a){"use strict";a.r(t);a("En0F");var s=a("bSEc"),r=(a("G3dO"),a("a9eq")),n=(a("BZHA"),a("i4rf")),l=(a("w7Za"),a("nKbL")),i=(a("Vumi"),a("w8AX")),o=a("q1tI"),c=a.n(o),d=a("WXbf"),p=(a("rZAD"),a("r307")),u=a("jehZ"),h=a.n(u),m=(a("e1sI"),a("WACH")),y=s["a"].Item;class E extends o["Component"]{constructor(e){super(e),this.showModalHandler=(e=>{e&&e.stopPropagation(),this.setState({visible:!0})}),this.hideModelHandler=(()=>{this.setState({visible:!1,destroy:!0})}),this.okHandler=(()=>{var e=this.props.onOk;this.props.form.validateFields((t,a)=>{t||(e(a),this.hideModelHandler())})}),this.state={visible:!1,destroy:!1}}render(){var e=this.props,t=e.children,a=e.title,r=this.props.form.getFieldDecorator,n=this.props.record,l=n.account,i=n.name,o=n.phone,d=n.email,u={labelCol:{span:6},wrapperCol:{span:14}};return c.a.createElement("span",null,c.a.createElement("span",{onClick:this.showModalHandler},t),c.a.createElement(p["a"],{title:a,visible:this.state.visible,destroyOnClose:this.state.destroy,onOk:this.okHandler,onCancel:this.hideModelHandler},c.a.createElement(s["a"],{onSubmit:this.okHandler},c.a.createElement(y,h()({},u,{label:"\u767b\u9646\u8d26\u53f7"}),r("account",{rules:[{required:!0}],initialValue:l})(c.a.createElement(m["a"],null))),c.a.createElement(y,h()({},u,{label:"\u7528\u6237\u540d"}),r("name",{rules:[{required:!0}],initialValue:i})(c.a.createElement(m["a"],null))),c.a.createElement(y,h()({},u,{label:"\u624b\u673a\u53f7\u7801"}),r("phone",{initialValue:o})(c.a.createElement(m["a"],null))),c.a.createElement(y,h()({},u,{label:"\u90ae\u7bb1"}),r("email",{initialValue:d})(c.a.createElement(m["a"],null))))))}}var k=s["a"].create()(E),b=a("Vh8S"),v=a.n(b);class w extends o["Component"]{constructor(){super(...arguments),this.columns=[{title:"\u767b\u9646\u8d26\u53f7",dataIndex:"account",key:"account"},{title:"\u7528\u6237\u540d",dataIndex:"name",key:"name"},{title:"\u624b\u673a\u53f7\u7801",dataIndex:"phone",key:"phone"},{title:"\u90ae\u7bb1",key:"email",dataIndex:"email"},{title:"\u64cd\u4f5c",key:"action",render:(e,t)=>c.a.createElement("span",null,c.a.createElement(k,{record:t,onOk:this.editUser.bind(null,t.key),title:"\u7f16\u8f91\u7528\u6237"},c.a.createElement("a",null,"\u7f16\u8f91")),c.a.createElement(i["a"],{type:"vertical"}),c.a.createElement(l["a"],{title:"\u786e\u8ba4\u5220\u9664",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onConfirm:()=>this.deleteUser(t.key)},c.a.createElement("a",null,"\u5220\u9664")))}],this.addUser=(e=>{this.props.dispatch({type:"users/addUser",payload:e})}),this.editUser=((e,t)=>{this.props.dispatch({type:"users/editUser",payload:{key:e,values:t}})}),this.deleteUser=(e=>{this.props.dispatch({type:"users/deleteUser",payload:{key:e}})})}componentDidMount(){this.props.dispatch({type:"users/queryList"})}render(){var e=this.props,t=e.usersList,a=e.usersLoading;return console.log(this.props),c.a.createElement("div",null,c.a.createElement("div",{className:v.a.create},c.a.createElement(k,{record:{},onOk:this.addUser,title:"\u6dfb\u52a0\u7528\u6237"},c.a.createElement(n["a"],{type:"primary"},"\u65b0\u589e"))),c.a.createElement(r["a"],{columns:this.columns,dataSource:t,loading:a}))}}function f(e){return{usersList:e.users.usersList,usersLoading:e.loading.effects["users/queryList"]}}t["default"]=Object(d["connect"])(f)(s["a"].create()(w))},Vh8S:function(e,t,a){e.exports={operation:"operation___3w3uY",create:"create___1C6ZY"}}}]);