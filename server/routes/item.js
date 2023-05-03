import express from 'express';
import { getItems, getItem, updateItem } from '../controllers/item.js';

const router = express.Router();

router.get('/', getItems);
router.route('/:id')
      .get(getItem)
      .patch(updateItem);

export default router;
