"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[539],{8539:function(n,e,r){r.r(e),r.d(e,{default:function(){return D}});var o,t,i,s,a,d,l,c=r(1413),p=r(168),u=r(4238),f=u.Z.div(o||(o=(0,p.Z)(["\n  margin: 0 auto;\n\n  background-color: green;\n  box-shadow: #ffffff 0px 0px 20px;\n\n  width: 300px;\n  border-radius: 15px;\n  padding: 15px;\n"]))),x=u.Z.form(t||(t=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n"]))),m=u.Z.h2(i||(i=(0,p.Z)(["\n  font-size: 18px;\n  font-weight: 400;\n  text-align: center;\n"]))),h=u.Z.input(s||(s=(0,p.Z)(["\n  padding: 10px;\n  margin: 0;\n  width: 100%;\n  font-size: 24px;\n  color: #ffffff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-color: #00000044;\n  outline: 3px solid transparent;\n\n  transition: outline 250ms linear;\n\n  &:focus {\n    outline: 3px solid #000000;\n  }\n"]))),g=u.Z.label(a||(a=(0,p.Z)(["\n  padding: 0;\n  margin: 0;\n  text-transform: capitalize;\n  width: 100%;\n  font-size: 18px;\n"]))),w=u.Z.span(d||(d=(0,p.Z)(["\n  max-width: 100%;\n  font-size: 14px;\n  color: red;\n"]))),b=u.Z.button(l||(l=(0,p.Z)(["\n  width: 150px;\n  height: 40px;\n  border-radius: 4px;\n  border: 2px solid #ffffff;\n  text-transform: uppercase;\n  text-align: center;\n  background-color: transparent;\n  transition: background-color 250ms linear, color 250ms linear;\n  overflow: hidden;\n\n  &:hover,\n  &:focus,\n  &:disabled {\n    cursor: pointer;\n    background-color: #00000044;\n    color: #fff;\n  }\n"]))),Z=r(8687),j=r(5047),k=r(4695),_=r(6727),v=r(1134),y=r(5984),z=r(473),S=r(2906),F=r(2330),P=r(7993),C=r(184),E=F.Q.PENDING,I=F.Q.FULFILLED,q=function(){var n=(0,y.x0)(),e=(0,y.x0)(),r=(0,Z.useSelector)(z.getAuthStatus),o=(0,Z.useDispatch)(),t=_.Ry().shape({email:_.Z_().matches("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",'Email can contain letters, digits and may contain "@" and "." example@mail.com').required(),password:_.Z_().required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.")}),i=(0,v.cI)({resolver:(0,k.X)(t)}),s=i.register,a=i.handleSubmit,d=i.reset,l=i.formState.errors;return(0,C.jsxs)(f,{children:[(0,C.jsx)(m,{children:"Registered? Please input your data to sign in"}),(0,C.jsxs)(x,{autoComplete:"off",onSubmit:a((function(n){var e=n.email,r=n.password;o((0,j.Ib)({email:e,password:r})).then((function(n){if(n.meta.requestStatus===I)return d({email:"",password:""}),void(0,P.t)("Welcome to your 'Be inConnect'","success");(0,P.t)("Something went wrong. Please, check the inputed info")}))})),children:[(0,C.jsx)(g,{htmlFor:n,children:"Email"}),(0,C.jsx)(h,(0,c.Z)((0,c.Z)({type:"email"},s("email")),{},{id:n})),l.email&&(0,C.jsx)(w,{children:l.email.message}),(0,C.jsx)(g,{htmlFor:e,children:"Password"}),(0,C.jsx)(h,(0,c.Z)((0,c.Z)({type:"password"},s("password")),{},{id:e})),l.password&&(0,C.jsx)(w,{children:l.password.message}),(0,C.jsx)(b,{type:"submit",disabled:r===E,children:r===E?(0,C.jsx)(S.Ho,{size:"32px"}):"sign in"})]})]})},D=function(){return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(q,{})})}}}]);
//# sourceMappingURL=539.ff5b3edd.chunk.js.map