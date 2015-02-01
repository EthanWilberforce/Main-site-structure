//Provides the ability to replace all of x in a string with y
function replaceAll(find, replace, str){
  return str.replace(new RegExp(find, 'g'), replace);
}

//controlled by the dropdown menu, chooses which graph type is needed
function makeTex(){
  var entPerPool = document.getElementById("selNumPool").value;
  var TeX = "";
  if(entPerPool == 5){
    TeX = createTex5();
  }
  if (entPerPool == 6){
    TeX = createTex6();
  }
  if (entPerPool == 7){
    TeX = createTex7();
  }
  if (entPerPool == 8){
    TeX = createTex8();
  }
  if (entPerPool == 9){
    TeX = createTex9();
  }
  location.href= "http://qas.im/projects/ethan/tex2pdf.php?tex=" + encodeURIComponent(TeX);
}

//createTex5-9 all build arrays of entrants into different table sizes
function createTex5() {
  var midx = "\\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} [newline]\
    \\hline [newline]\
     & xx[1] & xx[2] & xx[3] & xx[4] & xx[5] \\\\\\hline [newline]\
    xx[1] & \\multicolumn{1}{c|}{N/A} &&&& \\\\\\hline [newline]\
    xx[2] && \\multicolumn{1}{c|}{N/A} &&& \\\\\\hline [newline]\
    xx[3] &&& \\multicolumn{1}{c|}{N/A} && \\\\\\hline [newline]\
    xx[4] &&&& \\multicolumn{1}{c|}{N/A} & \\\\\\hline [newline]\
    xx[5] &&&&& \\multicolumn{1}{c|}{N/A} \\\\\\hline [newline]\
  \\end{tabular}\\\\ [newline]\ "
  var top = "\\documentclass[40pt]{article} [newline]\
  \\usepackage[landscape, margin=1cm]{geometry} [newline]\
  \\begin{document} [newline]\
    \\bgroup [newline]\
    \\LARGE [newline]\
    \\def\\arraystretch{3} [newline]\ ";
  var bot = "    \\egroup [newline]\
      \\end{document} ";
  var entPerPool = document.getElementById("selNumPool").value;
  var RAWentrants = document.getElementById("textraw").value;
  var entrants = RAWentrants.split(",").map(Function.prototype.call, String.prototype.trim);
  var numPools = Math.ceil(entrants.length / entPerPool);
  var entcount = 0;
  var putname = 0;
  var tablenum = 0;
  var populatePoolNum = 0;
  var tableCount = 0;
  var tablexycount = 0;
  var entsRemain = 0;

  //allows arrays of entrants that aren't multiple of the amount of pools in length
  if (entrants.length % entPerPool !== 0){
    var entsRemain = (entPerPool - (entrants.length % entPerPool))
    var entcount = entrants.length + 1
    while (entsRemain > 0){
      entrants.push("");
      entsRemain--;
    }
  }

  var mid ="";
  //builds the TeX code for x amount of tables
  for (var i = 0;i<numPools;i++){
    mid += replaceAll("xx",i,midx);

    tableCount += 1;
  }

  //adds the beginning and end to the mid TeX code
  var full = top+mid+bot;

  //replaces components on the graph with names of entrants
  for (var t = 0;t <= entrants.length*2;t++){
    full = full.replace(tablenum + "[" + (tablexycount+1) + "]", entrants[putname]);
    full = full.replace(tablenum + "[" + (tablexycount+1) + "]", entrants[putname]);
    tablenum++;
    putname++;
    if (tablenum === tableCount){
      tablenum = 0;
      tablexycount++;
    }
    if (putname === entrants.length*2){
      console.log(full);
      return full;
    }
  }
}

function createTex6(){
  var midx = "\\begin{tabular}{|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|p{3cm}|} [newline]\
      \\hline [newline]\
       & xx[1] & xx[2] & xx[3] & xx[4] & xx[5] & xx[6] \\\\\\hline [newline]\
      xx[1] & \\multicolumn{1}{c|}{N/A} &&&&& \\\\\\hline [newline]\
      xx[2] && \\multicolumn{1}{c|}{N/A} &&&& \\\\\\hline [newline]\
      xx[3] &&& \\multicolumn{1}{c|}{N/A}&&& \\\\\\hline [newline]\
      xx[4] &&&& \\multicolumn{1}{c|}{N/A}&& \\\\\\hline [newline]\
      xx[5] &&&&& \\multicolumn{1}{c|}{N/A}& \\\\\\hline [newline]\
      xx[6] &&&&&& \\multicolumn{1}{c|}{N/A} \\\\\\hline [newline]\
    \\end{tabular}\\\\ [newline]\ "
  var top = "\\documentclass[40pt]{article} [newline]\
  \\usepackage[landscape, margin=1cm]{geometry} [newline]\
  \\begin{document} [newline]\
    \\bgroup [newline]\
    \\LARGE [newline]\
    \\def\\arraystretch{3} [newline]\ ";
  var bot = "    \\egroup [newline]\
      \\end{document} ";
   //Input taken from select on site
  var entPerPool = document.getElementById("selNumPool").value;
  var RAWentrants = document.getElementById("textraw").value;

  var entrants = RAWentrants.split(",").map(Function.prototype.call, String.prototype.trim);
  var numPools = Math.ceil(entrants.length / entPerPool);
  var entcount = 0;
  var putname = 0;
  var tablenum = 0;
  var populatePoolNum = 0;
  var tableCount = 0;
  var tablexycount = 0;
  var entsRemain = 0;
  if (entrants.length % entPerPool !== 0){
    var entsRemain = (entPerPool - (entrants.length % entPerPool))
    var entcount = entrants.length + 1
    while (entsRemain > 0){
      entrants.push("");
      entsRemain--;
    }
  }

  var mid ="";

  for (var i = 0;i<numPools;i++){
    mid += replaceAll("xx",i,midx);

    tableCount += 1;
  }
  var full = top+mid+bot;

  for (var t = 0;t <= entrants.length*2;t++){
    full = full.replace(tablenum + "[" + (tablexycount+1) + "]", entrants[putname]);
    full = full.replace(tablenum + "[" + (tablexycount+1) + "]", entrants[putname]);
    tablenum++;
    putname++;
    if (tablenum === tableCount){
      tablenum = 0;
      tablexycount++;
    }
    if (putname === entrants.length*2){
      console.log(full);
      return full;
    }
  }
}

function createTex7(){
  var midx ="\\begin{tabular}{|p{2.6cm}|p{2.6cm}|p{2.6cm}|p{2.6cm}|p{2.6cm}|p{2.6cm}|p{2.6cm}|p{2.6cm}|} [newline]\
    \\hline [newline]\
     & xx[1] & xx[2] & xx[3] & xx[4] & xx[5] & xx[6] & xx[7] \\\\\\hline [newline]\
    xx[1] & \\multicolumn{1}{c|}{N/A} &&&&&& \\\\\\hline [newline]\
    xx[2] && \\multicolumn{1}{c|}{N/A} &&&&& \\\\\\hline [newline]\
    xx[3] &&& \\multicolumn{1}{c|}{N/A}&&&& \\\\\\hline [newline]\
    xx[4] &&&& \\multicolumn{1}{c|}{N/A}&&& \\\\\\hline [newline]\
    xx[5] &&&&& \\multicolumn{1}{c|}{N/A}&& \\\\\\hline [newline]\
    xx[6] &&&&&& \\multicolumn{1}{c|}{N/A}& \\\\\\hline [newline]\
    xx[7] &&&&&&& \\multicolumn{1}{c|}{N/A} \\\\\\hline [newline]\
  \\end{tabular}\\\\ [newline]\ "
  var top = "\\documentclass[40pt]{article} [newline]\
  \\usepackage[landscape, margin=1cm]{geometry} [newline]\
  \\begin{document} [newline]\
    \\bgroup [newline]\
    \\LARGE [newline]\
    \\def\\arraystretch{3} [newline]\ ";
  var bot = "    \\egroup [newline]\
      \\end{document} ";
   //Input taken from select on site
  var entPerPool = document.getElementById("selNumPool").value;
  var RAWentrants = document.getElementById("textraw").value;

  var entrants = RAWentrants.split(",").map(Function.prototype.call, String.prototype.trim);
  var numPools = Math.ceil(entrants.length / entPerPool);
  var entcount = 0;
  var putname = 0;
  var tablenum = 0;
  var populatePoolNum = 0;
  var tableCount = 0;
  var tablexycount = 0;
  var entsRemain = 0;
  if (entrants.length % entPerPool !== 0){
    var entsRemain = (entPerPool - (entrants.length % entPerPool))
    var entcount = entrants.length + 1
    while (entsRemain > 0){
      entrants.push("");
      entsRemain--;
      return full;
    }
  }

  var mid ="";

  for (var i = 0;i<numPools;i++){
    mid += replaceAll("xx",i,midx);

    tableCount += 1;
  }
  var full = top+mid+bot;

  for (var t = 0;t <= entrants.length*2;t++){
    full = full.replace(tablenum + "[" + (tablexycount+1) + "]", entrants[putname]);
    full = full.replace(tablenum + "[" + (tablexycount+1) + "]", entrants[putname]);
    tablenum++;
    putname++;
    if (tablenum === tableCount){
      tablenum = 0;
      tablexycount++;
    }
    if (putname === entrants.length*2){
      console.log(full);
      return full;
    }
  }
}

function createTex8(){
  var midx = "\\begin{tabular}{|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|p{2.3cm}|} [newline]\
      \\hline [newline]\
       & xx[1] & xx[2] & xx[3] & xx[4] & xx[5] & xx[6] & xx[7] & xx[8] \\\\\\hline [newline]\
      xx[1] & \\multicolumn{1}{c|}{N/A} &&&&&&& \\\\\\hline [newline]\
      xx[2] && \\multicolumn{1}{c|}{N/A} &&&&&& \\\\\\hline [newline]\
      xx[3] &&& \\multicolumn{1}{c|}{N/A}&&&&& \\\\\\hline [newline]\
      xx[4] &&&& \\multicolumn{1}{c|}{N/A}&&&& \\\\\\hline [newline]\
      xx[5] &&&&& \\multicolumn{1}{c|}{N/A}&&& \\\\\\hline [newline]\
      xx[6] &&&&&& \\multicolumn{1}{c|}{N/A}&& \\\\\\hline [newline]\
      xx[7] &&&&&&& \\multicolumn{1}{c|}{N/A}& \\\\\\hline [newline]\
      xx[8] &&&&&&&& \\multicolumn{1}{c|}{N/A} \\\\\\hline [newline]\
    \\end{tabular}\\\\ [newline]\ "
  var top = "\\documentclass[40pt]{article} [newline]\
  \\usepackage[landscape, margin=1cm]{geometry} [newline]\
    \\bgroup [newline]\
    \\LARGE [newline]\
    \\def\\arraystretch{2.6} [newline]\ ";
  var bot = "    \\egroup [newline]\
      \\end{document} ";
   //Input taken from select on site
  var entPerPool = document.getElementById("selNumPool").value;
  var RAWentrants = document.getElementById("textraw").value;

  var entrants = RAWentrants.split(",").map(Function.prototype.call, String.prototype.trim);
  var numPools = Math.ceil(entrants.length / entPerPool);
  var entcount = 0;
  var putname = 0;
  var tablenum = 0;
  var populatePoolNum = 0;
  var tableCount = 0;
  var tablexycount = 0;
  var entsRemain = 0;
  if (entrants.length % entPerPool !== 0){
    var entsRemain = (entPerPool - (entrants.length % entPerPool))
    var entcount = entrants.length + 1
    while (entsRemain > 0){
      entrants.push("");
      entsRemain--;
    }
  }

  var mid ="";

  for (var i = 0;i<numPools;i++){
    mid += replaceAll("xx",i,midx);

    tableCount += 1;
  }
  var full = top+mid+bot;

  for (var t = 0;t <= entrants.length*2;t++){
    full = full.replace(tablenum + "[" + (tablexycount+1) + "]", entrants[putname]);
    full = full.replace(tablenum + "[" + (tablexycount+1) + "]", entrants[putname]);
    tablenum++;
    putname++;
    if (tablenum === tableCount){
      tablenum = 0;
      tablexycount++;
    }
    if (putname === entrants.length*2){
      console.log(full);
      return full;
    }
  }
}

function createTex9(){
  var midx ="\\begin{tabular}{|p{2cm}|p{2cm}|p{2cm}|p{2cm}|p{2cm}|p{2cm}|p{2cm}|p{2cm}|p{2cm}|p{2cm}|} \\hline [newline]\
		 & xx[1] & xx[2] & xx[3] & xx[4] & xx[5] & xx[6] & xx[7] & xx[8] & xx[9] \\\\\\hline [newline]\
		xx[1] & \\multicolumn{1}{c|}{N/A} &&&&&&&& \\\\\\hline [newline]\
		xx[2] && \\multicolumn{1}{c|}{N/A} &&&&&&& \\\\\\hline [newline]\
		xx[3] &&& \\multicolumn{1}{c|}{N/A}&&&&&& \\\\\\hline [newline]\
		xx[4] &&&& \\multicolumn{1}{c|}{N/A}&&&&& \\\\\\hline [newline]\
		xx[5] &&&&& \\multicolumn{1}{c|}{N/A}&&&& \\\\\\hline [newline]\
		xx[6] &&&&&& \\multicolumn{1}{c|}{N/A}&&& \\\\\\hline [newline]\
		xx[7] &&&&&&& \\multicolumn{1}{c|}{N/A}&& \\\\\\hline [newline]\
		xx[8] &&&&&&&& \\multicolumn{1}{c|}{N/A}& \\\\\\hline [newline]\
		xx[9] &&&&&&&&& \\multicolumn{1}{c|}{N/A}  \\\\\\hline [newline]\
	\\end{tabular}\\\\ [newline]\ ";
  var top = "\\documentclass[40pt]{article} [newline]\
  \\usepackage[landscape, margin=1cm]{geometry} [newline]\
  \\begin{document} [newline]\
    \\bgroup [newline]\
    \\LARGE [newline]\
    \\def\\arraystretch{2.3} [newline]\ ";
  var bot = "    \\egroup [newline]\
      \\end{document} ";
   //Input taken from select on site
  var entPerPool = document.getElementById("selNumPool").value;
  var RAWentrants = document.getElementById("textraw").value;

  var entrants = RAWentrants.split(",").map(Function.prototype.call, String.prototype.trim);
  var numPools = Math.ceil(entrants.length / entPerPool);
  var entcount = 0;
  var putname = 0;
  var tablenum = 0;
  var populatePoolNum = 0;
  var tableCount = 0;
  var tablexycount = 0;
  var entsRemain = 0;
  if (entrants.length % entPerPool !== 0){
    var entsRemain = (entPerPool - (entrants.length % entPerPool))
    var entcount = entrants.length + 1
    while (entsRemain > 0){
      entrants.push("");
      entsRemain--;
    }
  }

  var mid ="";

  for (var i = 0;i<numPools;i++){
    mid += replaceAll("xx",i,midx);

    tableCount += 1;
  }
  var full = top+mid+bot;

  for (var t = 0;t <= entrants.length*2;t++){
    full = full.replace(tablenum + "[" + (tablexycount+1) + "]", entrants[putname]);
    full = full.replace(tablenum + "[" + (tablexycount+1) + "]", entrants[putname]);
    tablenum++;
    putname++;
    if (tablenum === tableCount){
      tablenum = 0;
      tablexycount++;
    }
    if (putname === entrants.length*2){
      console.log(full);
      return full;

    }
  }
}
