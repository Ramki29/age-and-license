let age=parseInt(prompt("enter age"));	
if (age>=18)
{
	if(confirm("test pass click ok not pass click cancel"))
	{
		window.alert("give license");
	}
	else
	{
		window.alert("apply for test");
	}
}
else
	{
	window.alert("not eligible");
	}