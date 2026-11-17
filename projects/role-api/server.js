import { createServer } from 'node:http';
import { randomUUID } from 'node:crypto';
const PORT = process.env.PORT || 3000;
let roles = [];
const send = (res, status, data) => { res.writeHead(status, {'Content-Type':'application/json; charset=utf-8','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'GET,POST,PATCH,DELETE,OPTIONS','Access-Control-Allow-Headers':'Content-Type'}); res.end(JSON.stringify(data)); };
async function body(req){let raw='';for await(const chunk of req)raw+=chunk;if(!raw)return {};try{return JSON.parse(raw)}catch{return null}}
const server=createServer(async(req,res)=>{
 if(req.method==='OPTIONS'){res.writeHead(204,{'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'GET,POST,PATCH,DELETE,OPTIONS','Access-Control-Allow-Headers':'Content-Type'});return res.end()}
 const url=new URL(req.url,'http://localhost');
 if(url.pathname==='/health'&&req.method==='GET')return send(res,200,{ok:true,service:'role-api'});
 if(url.pathname==='/api/roles'&&req.method==='GET')return send(res,200,{data:roles});
 if(url.pathname==='/api/roles'&&req.method==='POST'){
  const data=await body(req);if(!data||typeof data.company!=='string'||!data.company.trim()||typeof data.role!=='string'||!data.role.trim())return send(res,400,{error:'company and role are required strings'});
  const item={id:randomUUID(),company:data.company.trim(),role:data.role.trim(),status:'Saved',createdAt:new Date().toISOString()};roles.unshift(item);return send(res,201,{data:item});
 }
 const match=url.pathname.match(/^\/api\/roles\/([\w-]+)$/);
 if(match){const index=roles.findIndex(r=>r.id===match[1]);if(index<0)return send(res,404,{error:'Role not found'});
  if(req.method==='GET')return send(res,200,{data:roles[index]});
  if(req.method==='PATCH'){const data=await body(req);const allowed=['Saved','Applied','Interview','Rejected','Offer'];if(!data||!allowed.includes(data.status))return send(res,400,{error:'status must be Saved, Applied, Interview, Rejected or Offer'});roles[index]={...roles[index],status:data.status};return send(res,200,{data:roles[index]})}
  if(req.method==='DELETE'){const [deleted]=roles.splice(index,1);return send(res,200,{data:deleted})}
 }
 return send(res,404,{error:'Route not found'});
});
server.listen(PORT,()=>console.log('Role API listening on port '+PORT));
export { server };