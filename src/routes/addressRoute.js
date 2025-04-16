import controller from '../controllers/addressController';

export default (app) => {
  app.post('/address/persist', controller.persist);
  app.patch('/address/persist/:id', controller.persist);
  app.delete('/address/:id', controller.destroy);
  app.get('/address', controller.get);
  app.get('/address/:id', controller.get);
};
