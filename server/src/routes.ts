import {Router} from 'express'
import multer from 'multer';

import uploadConfig from './config/upload'
import OrphanagesController from './controllers/OrphnagesController'


const routes = Router()
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.delete('/orphanages/:id', OrphanagesController.delete);
routes.post('/orphanages',upload.array('images'), OrphanagesController.create);
routes.put('/orphanages/:id', upload.array('images'), OrphanagesController.update);



export default routes;