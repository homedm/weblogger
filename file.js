const checkSupport = () => {
	// Check for the various File API support.
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		// Success!
	} else {
		alert('The File APIs are not fully supported in this browser.');
	}
}

const inputFile = document.getElementById('read_button');
let reader = new FileReader();

const showlogfile = () => {
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
	var target = ev.target;
	var file = target.files[0];
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
const writefile = () => {
}
