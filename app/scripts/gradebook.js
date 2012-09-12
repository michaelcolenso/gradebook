var request = new ajaxRequest()
request.open("GET", "class.xml", true)
out = "";

request.onreadystatechange = function()
{
	if (this.readyState == 4)
	{
		if (this.status == 200)
		{
			if (this.responseXML != null)
			{
				titles = this.responseXML.getElementsByTagName('title')
				
				for (j = 0 ; j < titles.length ; ++j)
				{
					out += titles[j].childNodes[0].nodeValue + '<br />'
				}
				document.getElementById('info').innerHTML = out	
			}
			else alert("Ajax error: No data received")
		}
		else alert( "Ajax error: " + this.statusText)
	}
}

request.send(null)

function ajaxRequest()
{
	try
	{
		var request = new XMLHttpRequest()
	}
	catch(e1)
	{
		try
		{
			request = new ActiveXObject("Msxml2.XMLHTTP")
		}
		catch(e2)
		{
			try
			{
				request = new ActiveXObject("Microsoft.XMLHTTP")
			}
			catch(e3)
			{
				request = false
			}
		}
	}
	return request
}
