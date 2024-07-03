import { Router } from "express";

const router = Router();

router.get("/api/googleOAuth", async (req, res) => {
  console.log(req.body);
});
