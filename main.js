checkSupport();

// emit click event from read_button of 'button tag'.
const inputFile = document.getElementById('read_logfile');
const inputFileButton = document.getElementById('read_button');
const addbutton = document.getElementById('add_button');
const deletebutton = document.getElementById('delete_button');
let reader = new FileReader();

reader.addEventListener('load', showlogfile, false);
inputFile.addEventListener('change', fileChange, false);

addbutton.addEventListener('click', addlog, false);
deletebutton.addEventListener('click', deletelog, false);
inputFileButton.addEventListener('click', function() {
	inputFile.click();
}, false);
write_button.addEventListener('click', call_writefile, false);
download_link.addEventListener('click', writefile, false);

// for UX
new_ur_rst.addEventListener('keydown', addlogbyenter, false);
new_call.addEventListener('keydown', movefocusTomyrst, false);
new_my_rst.addEventListener('keydown', movefocusTourrst, false);

document.getElementById('new_call').focus();
