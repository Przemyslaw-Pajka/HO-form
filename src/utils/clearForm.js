export const clearForm = (resetForm) => {
  resetForm();
  document.getElementById("dishName").value = "";
  document.getElementById("preparationTime").value = "";
  document.getElementById("dishType").value = "";
};
