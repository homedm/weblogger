checkSupport();
reader.addEventListener('load', showlogfile, false);
inputFile.addEventListener('change', fileChange, false);

const addbutton = document.getElementById('add_button');
const deletebutton = document.getElementById('delete_button');
addbutton.addEventListener('click', addlog, false);
deletebutton.addEventListener('click', deletelog, false);
