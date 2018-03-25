const addlog = () => {
	"use strict";
	// show form
	const d_logtable = document.getElementById('logtable');

	// input form
	let o_new_call = document.getElementById('new_call');
	let o_new_my_rst = document.getElementById('new_my_rst');
	let o_new_ur_rst = document.getElementById('new_ur_rst');
	let o_new_qra = document.getElementById('new_qra');
	let o_new_qth = document.getElementById('new_qth');
	let o_new_ant = document.getElementById('new_ant');
	let o_new_lig = document.getElementById('new_lig');
	let o_new_other_rem = document.getElementById('new_other_rem');

	const s_new_call = o_new_call.value.toUpperCase(); // change Upper case
	const s_new_my_rst = o_new_my_rst.value;
	const s_new_ur_rst = o_new_ur_rst.value;
	const s_new_qra = o_new_qra.value;
	const s_new_qth = o_new_qth.value;
	const s_new_ant = o_new_ant.value;
	const s_new_lig = o_new_lig.value;
	const s_new_other_rem = o_new_other_rem.value;
	let s_new_rem = '';

	const s_band = document.getElementById('band').value;
	const s_mode = document.getElementById('mode').value.toUpperCase();

	if( s_new_qra != '' ){
		s_new_rem += 'QRA:' + s_new_qra + ', ';
	}
	if( s_new_qth != '' ){
		s_new_rem += 'QTH:' + s_new_qth + ', ';
	}
	if( s_new_ant != '' ){
		s_new_rem += 'ANT:' + s_new_qra + ', ';
	}
	if( s_new_lig != '' ){
		s_new_rem += 'LIG:' + s_new_qra + ', ';
	}
	if( s_new_other_rem != '' ){
		s_new_rem += 'OTHER:' + s_new_other_rem;
	}

	let o_date = new Date();
	const i_year = o_date.getFullYear();
	const i_month = o_date.getMonth();
	const i_day = o_date.getDate();
	const i_hour = o_date.getHours();
	const i_minute = o_date.getMinutes();
	const s_line = '<tr>' +
		'<td>' + i_year + '-' + i_month + '-' + i_day + '</td>' +
		'<td>' + i_hour + ':' + i_minute + '</td>' +
		'<td>' + s_new_call + '</td>' +
		'<td>' + s_band + '</td>' +
		'<td>' + s_mode + '</td>' +
		'<td>' + s_new_my_rst + '</td>' +
		'<td>' + s_new_ur_rst + '</td>' +
		'<td>' + s_new_rem + '</td>' +
		'</tr>';
	d_logtable.insertAdjacentHTML('beforeend', s_line);

	// delete input box value.
	o_new_call.value = "";
	o_new_my_rst.value = "";
	o_new_ur_rst.value = "";
	o_new_qra.value = "";
	o_new_qth.value = "";
	o_new_ant.value = '';
	o_new_lig.value = '';
	o_new_other_rem.value = "";
}
const deletelog = () => {
	"use strict";
	alert("is not implemented function yet.");
}
// controll dom focus
const addlogbyenter = (e) => {
	if( checkkeydown(e.keyCode) === 1 ) {
		// if enter
		const addbutton = document.getElementById('add_button');
		addbutton.click();
		const callsign = document.getElementById('new_call');
		callsign.focus();
	}
}
const movefocusTomyrst = (e) => {
	if( checkkeydown(e.keyCode) === 1 ) {
		// if enter
		const myrst = document.getElementById('new_my_rst');
		myrst.focus();
	}
}
const movefocusTourrst = (e) => {
	if( checkkeydown(e.keyCode) === 1 ) {
		// if enter
		const urrst = document.getElementById('new_ur_rst');
		urrst.focus();
	}
}

const checkkeydown = (key) => {
	if( key === 13 ) {
		return 1;
	}
	return 0;
}
