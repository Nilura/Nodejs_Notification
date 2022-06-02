const pushNotificationController = require("../controllers/push-notification.controllers");
const express = require("express");
const router = express.Router();
router.get("/SendNotification", pushNotificationController.SendNotification);
router.post(
  "/SendNotificationToDevice",
  pushNotificationController.SendNotification
);
module.exports = router;
