const router = require('express').Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Tenant:
 *       type: object
 *       required:
 *         - name
 *         - profession
 *         - salary
 *       properties:
 *         id:
 *           type: number
 *           description: 
 *         name:
 *           type: string
 *           description: 
 *         profession:
 *           type: string
 *           description: 
 *         salary:
 *           type: string
 *       example:
 *         id: 1
 *         name: Roger Federer
 *         profession: joueur de tennis
 *         salary: 1632.3 
 */

/**
 * @swagger
 * tags:
 *   name: Tenants
 *   description: The tenants API
 */

/**
 * @swagger
 * /api/tenants/tenants:
 *  get:
 *    description: Use to request all tenants
 *    tags: [Tenants]
 *    responses:
 *      '200':
 *        description: list of tenants
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Tenant'
 */
router.get("/tenants", (req, res) => {
    res.status(200).send(req.app.locals.alltenants);
});

/**
 * @swagger
 * /api/tenants/tenant:
 *   post:
 *     description: Create one tenant
 *     tags: [Tenants]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tenant'
 *     responses:
 *       200:
 *         description: The tenant was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tenant'
 *       500:
 *         description: Some server error
 */
router.post("/tenant", (req, res) => {
    let id = Math.floor(Math.random() * 5000); console.log(req.body)
    let tenant = {
        ...req.body,
    };
    tenant["id"] = id;
    req.app.locals.alltenants.push(tenant);
    res.send(tenant);
});

/**
 * @swagger
 * /api/tenants/tenant/{id}:
 *  put:
 *    summary: Update the tenant by the id
 *    tags: [Tenants]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The tenant id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Tenant'
 *    responses:
 *      200:
 *        description: The tenant was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Tenant'
 *      404:
 *        description: The tenant was not found
 *      500:
 *        description: Some error happened
 */
router.put("/tenant/:id", (req, res) => {
    let tenant = null;
    let id = parseInt(req.params.id);
    for (let i in req.app.locals.alltenants) {
        if (req.app.locals.alltenants[Number(i)]["id"] == id) {
            req.app.locals.alltenants[Number(i)] = req.body;
            req.app.locals.alltenants[Number(i)]["id"] = id;
            tenant = req.app.locals.alltenants[Number(i)];
            break;
        }
    }
    if (tenant != null) res.send(tenant);
    else res.status(500).send("error");

});

/**
 * @swagger
 * /api/tenants/tenant/{id}:
 *   delete:
 *     summary: Remove the tenant by id
 *     tags: [Tenants]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The tenant id
 *     responses:
 *       200:
 *         description: The tenant was deleted
 *       404:
 *         description: The tenant was not found
 */
router.delete("/tenant/:id", (req, res) => {
    let id = parseInt(req.params.id);
    for (let i in req.app.locals.alltenants) {
        if (req.app.locals.alltenants[Number(i)]["id"] == id) {
            req.app.locals.alltenants.splice(Number(i), 1);
            res.sendStatus(200);
            return;
        }
    }
    res.sendStatus(400);
});



module.exports = router;