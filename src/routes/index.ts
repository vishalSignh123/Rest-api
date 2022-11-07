import { Router } from 'express';

import router from './userRoutes';

const baseurl = "/api/";

const route = Router();

const urls = {

    BASE_URL: baseurl + "user"
};

route.use(urls.BASE_URL, router);

export default route;