const select = document.getElementById("select")

select.addEventListener("dblclick", () => {
  if (select.selectedIndex == 4)
    alert("Правильно!")
  else
    alert("Неправильна відповідь!")
})
