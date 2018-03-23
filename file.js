const checkSupport = () => {
	"use strict";
	// Check for the various File API support.
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		// Success!
	} else {
		alert('The File APIs are not fully supported in this browser.');
	}
}

const showlogfile = () => {
	"use strict";
	console.log(reader.result);
	const logtable = document.getElementById('logtable');

	// show log file.
	const s_logs = reader.result;
	// parse log file.
	// get one log_string.
	let s_log = s_logs.split( '\n' );
	// read your data
	let flag = false;
	for(let i=0; i < s_log.length - 1 ; i++ ) {
		if( flag === true ) {
			// read log data
			let s_data = s_log[i].split(',');
			let s_line = '<tr><td>' + s_data[0] + '</td><td>' + s_data[1] + '</td><td>' + s_data[2] + '</td><td>' + s_data[3] + '</td><td>' + s_data[4] + '</td><td>' + s_data[5] + '</td><td>' + s_data[6] + '</td><td>' + s_data[7] + '</td></tr>';
			logtable.insertAdjacentHTML('beforeend', s_line);
		}
		if( s_log[i] === '' && flag == false ) {
			// read personal data
			flag = true;
		}
	}

}

const fileChange = (ev) => {
	"use strict";
	let target = ev.target;
	let file = target.files[0];
	// var type = file.type;

	console.log(file);

	// if you restrict file, write requirement here
	// if ( type !== 'text/plain' ) {
	// 	alert('only read log file.');
	// 	inputFile.value = '';
	// 	return;
	// }

	reader.readAsText(file); // when read file, emit load event.
}
const call_writefile = () => {
	const writebutton = document.getElementById('download_link');
	writebutton.click();
}

const writefile = () => {
	"use strict";
	console.log("write file");

	let filename = "test.log";

	// save logtable'value to logtext
	const logtable = document.getElementById('logtable');
	const rows = logtable.rows.length;
	// not exist data
	if( rows === 0 ) {
		alert(' not exist log data');
		return;
	}

	const op_call = document.getElementById('op_call').innerText;
	const op_name = document.getElementById('op_name').innerText;
	const op_qth = document.getElementById('op_qth').innerText;
	const cp_other = document.getElementById('op_other').innerText;

	let logtext = 'callsign:' + op_call + '\n' + 'name:' + op_name + '\n' + 'site:' + op_qth + '\n\n';

	for( let j=0; j < rows; j++ ) {
		const date = logtable.rows[j].cells[0].innerText;
		const time = logtable.rows[j].cells[1].innerText;
		const call = logtable.rows[j].cells[2].innerText;
		const band = logtable.rows[j].cells[3].innerText;
		const mode = logtable.rows[j].cells[4].innerText;
		const myrst = logtable.rows[j].cells[5].innerText;
		const urrst = logtable.rows[j].cells[6].innerText;
		const rem = logtable.rows[j].cells[7].innerText;
		logtext += date + ', ' + time + ', ' + call + ', ' + band + ', ' + mode + ', ' + myrst + ', ' + urrst + ', ' + rem + '\n';
	}

	let blob = new Blob( [logtext], {type: "text/plain"} );
	let url = window.URL.createObjectURL(blob);
	document.getElementById('download_link').href = url;
	document.getElementById('download_link').download = filename;
}
