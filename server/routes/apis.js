import express from "express";
import {getMessage,createMessage,updateMessage,deleteMessage,likeMessage} from '../controllers/apis.js'

const router = express.Router();

router.get('/',getMessage);
router.post('/',createMessage);
router.patch('/:id',updateMessage);
router.delete('/:id', deleteMessage);
router.patch('/:id/likeMessage', likeMessage);
export default router;