exports.main_keyboards = {
  keyboard: null,
  inline_keyboard: [
    [{ text: "Mijoz", callback_data: "client" }],
    [{ text: "Sartarosh", callback_data: "barber" }],
  ],
};
exports.client_menu_keyboard = {
  resize_keyboard: true,
  keyboard: [
    [{ text: "Mening sartaroshim" }, { text: "Bot haqida" }],
    [{ text: "Sozlamalar" }],
  ],
};
exports.client_my_barber_keyboard = {
  resize_keyboard: true,
  keyboard: [
    [{ text: "Sartaroshni o'zgartirish" }, { text: "Sozlamalar" }],
    [{ text: "Bot haqida" }],
  ],
};
