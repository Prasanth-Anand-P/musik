//NEW USER DETAILS
function signin()
{
	event.preventDefault();
	var nname=document.getElementById("nname").value;
	var nmail=document.getElementById("nmail").value;
	var nuname=document.getElementById("nuname").value;
	var npwd=document.getElementById("npwd").value;

	var checkinfo=localStorage.getItem(nuname);
	checkinfo=JSON.parse(checkinfo);
	if(checkinfo==null || checkinfo==" ")
	{
		var det={
			name:nname,
			email:nmail,
			username:nuname,
			pass:npwd,
		};

		var storedet=JSON.stringify(det);
		localStorage.setItem(nuname,storedet);

		console.log(storedet);
		document.location.href='index.html';
		alert("ACCOUNT CREATED");
	}
	else
	{	
		alert("USERNAME ALREADY EXIST");
		document.location.href='new.html';
	}

	
}	

//LOGIN DETAILS
function login()
{
	event.preventDefault();
	var uname=document.getElementById("uname").value;
	var pwd=document.getElementById("pwd").value;
	var checkuserinfo=localStorage.getItem(uname);
	checkuserinfo=JSON.parse(checkuserinfo);
	console.log(checkuserinfo);
	if(checkuserinfo==null || checkuserinfo=="")
	{
		alert("NO USER FOUND");
		document.location.href='index.html';
	}
	else
	{
		unn=(checkuserinfo["name"]);
		un=(checkuserinfo["username"]);
		ps=(checkuserinfo["pass"]);
		if(uname==un && pwd==ps)
		{
			document.location.href='collection.html';
			alert(" WELCOME "+unn);
		} 
		else
		{
			alert("CHECK USERNAME and PASSWORD");
			document.location.href='index.html';
		}
	}	

}