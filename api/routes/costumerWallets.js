module.exports = (app) => {
    const controller = app.controllers.costumerWallets;

    app.route("/api/v1/customer-wallets").get(controller.listCustomerWallets);
};
