var dictedit = {
  value: function(id){
    var ta = document.getElementById(id);
    return ta;
  },
  init: function(id, opts, rows){
    opts = opts || {};
    rows = rows || [];
    var ta = document.getElementById(id);
    var newNode = document.createElement("div");
    newNode.id = id + "_dictedit" //+ new Date().getTime();
    newNode.className = "dictedit-wrapper " + id + "_dictedit";
    newNode.innerHTML = 
      "<button class='selectButton' onclick='dictedit.__addNewRow(event)'> + Row </button><br>";
    ta.parentNode.insertBefore(newNode,ta);
    ta.style.display = "none";
    var delim = opts.delim || ";";
    var sep = opts.sep || " : ";
    ta.dataset["dictedit_sep"] = sep;
    ta.dataset["dictedit_delim"] = delim;
    for(var i = 0; i < rows.length; i++){
      dictedit.addRow();
    }
  },
  addRow: function(taID, a, b){
    var id = taID + "_dictedit";
    this.__handleRowAdd(id, a, b);
     
  },
  __handleKeyPress: function(e){
    var id = e.target.parentNode.id;
    var y = function(){
      dictedit.updateRows(id.split("_dictedit")[0]);
    }
    setTimeout(y, 100);
  },
  __addNewRow: function(e){
    var id = e.target.parentNode.id;
    this.__handleRowAdd(id, '', '');
  },
  __handleRowAdd: function(id, a, b) {
    var taID = id.split("_dictedit")[0];
    var dataset = document.getElementById(taID).dataset;
    var sep = dataset.dictedit_sep || ": ";
    var delim = dataset.dictedit_delim || "; ";
    var temp = new Date().getTime().toString();
    var outS = "<input onkeydown='dictedit.__handleKeyPress(event)' class='" + temp + " left' value='" + a + "'>"
        + "<span class='" + temp + " sep'> " + sep + " </span>" 
        + "<input  onkeydown='dictedit.__handleKeyPress(event)' class='" + temp + " right' value='" + b + "'>" 
        + "<span class='" + temp + " delim'>" + delim + " </span>" 
        + "<button class='" + temp + "' onclick='dictedit.deleteRow(" + '"' + id + '","' + temp + '")' + "'> X </button>"
        + "<br class='" + temp + "'>";
    $("#" + id).append(outS);
  },
  deleteRow: function(id, c)
  {
      $("#" + id + " ." + c).addClass("dictedit-currDelete");
      var flag = dictedit.confirm("Are you sure you want to delete row?");
      if(flag){
        $("#" + id + " ." + c).remove();
        dictedit.updateRows(id.split("_dictedit")[0]);
      }
      $("#" + id + " ." + c).removeClass("dictedit-currDelete");

  },
  __checkDuplicates(){
  
  },
  updateRows(taID)
  {
    var id = taID + "_dictedit";
    var ret = "";
    var dataset = document.getElementById(taID).dataset;
    var sep = dataset.dictedit_sep || ": ";
    var delim = dataset.dictedit_delim || "; ";
    var list = document.getElementById(id).getElementsByTagName("input");
    for(var i = 0; i < list.length/2; i++){
      ret += list[i*2].value + sep +  list[i*2+1].value + delim;
    }
    document.getElementById(taID).value = ret;
    return ret;
  },
  confirm: function(c){
    return confirm(c);
  },
  alert: function(c){
    return alert(c);
  },
  prompt: function(c){
    return prompt(c);
  }
}
