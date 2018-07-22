import { Router } from 'express';

import {
  searchPlaces,
  getPlace,
} from '../services/yelp';
import {
  toSearchPlacesParams,
  fromSearchPlacesParams,
  fromGetPlacesParams,
} from '../lib/placeHelper';

const router = Router();

router.get('/', async (req, res) => {
  const list = await searchPlaces(toSearchPlacesParams(req.query));
  res.send(list.map(i => fromSearchPlacesParams(i)));
});

router.get('/:id', async (req, res) => {
  const place = await getPlace(req.params.id);
  res.send(fromGetPlacesParams(place));
});

export default router;
