const express = require("express");

const feedbackAndSupportController = require("../controllers/feedbackAndSupportController");

const router = express.Router();
const backLinkUrl = "/";

router.get("/", (req, res) => res.render("feedbackAndSupport"));
router.post("/", feedbackAndSupportController.selectServicePost);

router.get("/videolink", (req, res) =>
  res.render("services/videolink", { backLinkUrl })
);

router.get("/videolink", (req, res) =>
  res.render("services/prison-offender-manager", { backLinkUrl })
);

router.get("/book-secure-move", (req, res) =>
  res.render("services/bookSecureMove", { backLinkUrl })
);

router.get("/prison-offender-manager", (req, res) =>
  res.render("services/prisonOffenderManager", { backLinkUrl })
);

router.get("/check-my-diary", (req, res) =>
  res.render("services/checkMyDiary", { backLinkUrl })
);

router.get("/categorisation-tool", (req, res) =>
  res.render("services/categorisationTool", { backLinkUrl })
);

router.get("/digital-prison-services", (req, res) =>
  res.render("services/digitalPrisonServices", { backLinkUrl })
);

router.get("/nomis", (req, res) =>
  res.render("services/nomis", { backLinkUrl })
);

router.get("/hdc-licences", (req, res) =>
  res.render("services/hdc", { backLinkUrl })
);

router.get("/pathfinder", (req, res) =>
  res.render("services/pathfinder", { backLinkUrl })
);

router.get("/safety-diagnostic-tool", (req, res) =>
  res.render("services/safetyDiagnosticTool", { backLinkUrl })
);

module.exports = router;
