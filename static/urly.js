//-----------------------------------------------------------------------------
function copy(text2copy) {
  if (window.clipboardData) {
    window.clipboardData.setData("Text",text2copy);
  } else {
  }
}

//-----------------------------------------------------------------------------
function focus(id)
{
  var el = document.getElementById(id);
  if (el != null) {
    el.focus();
    el.select();
  }
}

//-----------------------------------------------------------------------------

