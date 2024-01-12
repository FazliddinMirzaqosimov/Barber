 
class TemplateController {
  getBookPage(req, res) {
    const { userId } = req.params;
    return res.render("booking", { userId });
  }
}

exports.templateControllers = new TemplateController();
