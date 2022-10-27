# tp_conception_dune_api
## zhen YANG

### Installation
1. git clone https://github.com/Heroszhen/tp_conception_dune_api.git
2. cd tp_conception_dune_api
3. npm install
4. npm start : http://localhost:3000/api-docs/

### les fonctions utilisées avec DOCJS
1. service/service.js : getAverageSalaray
2. service/service.js : getSumGoodsPrice

### les fonctions utilisées avec APIDOC
1. config/routes_tenants.js
- Récupérer tous les locataires, get : /api/tenants/tenants
- Récupérer un locataire, get : /api/tenants/tenant/{id}
- Ajouter un locataire, post : /api/tenants/tenant
- Modifier un locataire, put : /api/tenants/tenant/{id}
- Supprimer un loacataire, delete : /api/tenants/tenant/{id}