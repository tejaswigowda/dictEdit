var dictedit = {
  init: function(id, opts){
    opts = opts || {};
    var ta = document.getElementById(id);
    var newNode = document.createElement("div");
    newNode.className = "dictedit-wrapper";
    ta.parentNode.insertBefore(newNode,ta);
    ta.style.display = "none";
    var keys = Object.keys(opts);
    for(var i = 0; i < keys.length; i++){
      ta.dataset["dictedit_" + keys[i]] = opts[keys[i]];
    }
  }
}
