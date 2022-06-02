const { ONE_SIGNAL_CONFIG } = require("../config/app.config");
const pushNotificationService = require("../services/push-notification.services");
exports.SendNotification = (req, res, next) => {
  var message = {
    app_id: ONE_SIGNAL_CONFIG.API_ID,
    contents: { en: "Test" },
    included_segments: ["ALL"],
    content_available: true,
    small_icon: "ic_notification_icon",
    data: {
      PushTitle: "CUSTOM NOTIFICATION",
    },
  };
  pushNotificationService.SendNotification(message, (error, result) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: result,
    });
  });
};
