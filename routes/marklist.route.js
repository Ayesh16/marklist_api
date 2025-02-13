import express from "express";
import { MarksCreate, MarksDelete, MarksDetails, MarksIndex, MarksUpdate } from "../controllers/marklist.controller.js";

const router=express.Router();

router.get('/',MarksIndex);

router.get('/:id',MarksDetails);

router.post('/',MarksCreate);

router.put('/:id',MarksUpdate);

router.delete('/:id',MarksDelete);

export default router;