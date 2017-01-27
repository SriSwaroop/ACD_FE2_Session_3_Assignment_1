	let apiDetail={
	baseUrl: 'https://www.codecademy.com/',
	Method : 'GET',
	parameter : 'lorem=ipsum&name=student1',
	Header  : 'application/x-www-form-urlencoded'
	};

	let calltheAPI = (apiDetail)=>{

	var xhr = new XMLHttpRequest();
    xhr.open(apiDetail.Method, apiDetail.baseUrl, false);
	xhr.setRequestHeader("Content-type", apiDetail.Header);
	xhr.onreadystatechange = () =>{
	    if(xhr.readyState == 4 && xhr.status == 200) {
	        alert(xhr.responseText);
	    }
	}
	
	xhr.send(apiDetail.parameter);
	console.log(xhr.status);
	console.log(xhr.statusText);

	}

	calltheAPI (apiDetail);