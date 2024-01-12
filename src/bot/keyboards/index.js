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
    [{ text: "Sartarosh qidirish" }, { text: "Sozlamalar" }],
    [{ text: "Saqlangan sartaroshlar" }],
  ],
};
 