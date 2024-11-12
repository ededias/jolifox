import { Router } from "express";

import { create, get, all, retriveProperties, update, deleteData } from "./controllers/controller";

const router = Router();


router.get('/', all);
router.get('/retriveProperties', retriveProperties);
router.get('/list/:id', get)
router.post('/create', create);
router.put('/update/:id', update)
router.delete('/delete/:id', deleteData)

export default router;