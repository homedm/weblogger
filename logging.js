const addlog = () => {
	// show form
	const d_logtable = document.getElementById('logtable');

	// input form
	const s_new_call = document.getElementById('new_call').value;
	const s_new_my_rst = document.getElementById('new_my_rst').value;
	const s_new_ur_rst = document.getElementById('new_ur_rst').value;
	const s_new_rem = document.getElementById('new_rem').value;
	const s_band = document.getElementById('band').value;
	const s_mode = document.getElementById('mode').value;

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
}
const deletelog = () => {
}
