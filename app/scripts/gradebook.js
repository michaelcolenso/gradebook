var request = new ajaxRequest()
request.open('GET', 'class.xml', true)

var out = ''
var id_out = ''
var grade_out = ''
var assn_out = ''

request.onreadystatechange = function()
{
	if (this.readyState == 4)
	{
		if (this.status == 200)
		{
			if (this.responseXML != null)

			{

                a=this.responseXML.getElementsByTagName('title');
                x=this.responseXML.getElementsByTagName('last');
                y=this.responseXML.getElementsByTagName('first');
                z=this.responseXML.getElementsByTagName('stuid');
                g=this.responseXML.getElementsByTagName('grade');



            //get the assignment titles
                for (i=0;i<a.length;i++)

                    {
                    assn_out +=  a[i].firstChild.nodeValue + '\<br>'
                    }

                document.getElementById('info-a').innerHTML = assn_out	


            //get first and last name of student 
                for (i=0;i<x.length;i++)

                    {
                    out +=  y[i].firstChild.nodeValue + ' ' + x[i].firstChild.nodeValue + '\<br>'
                    }

                document.getElementById('info').innerHTML = out	

            //get student id 
                for (i=0;i<x.length;i++)

                    {
                    id_out +=  z[i].firstChild.nodeValue + '\<br>'
                    }

                document.getElementById('info2').innerHTML = id_out	


            //get student 
                for (i=0;i<g.length;i++)

                    {
                    grade_out +=  g[i].firstChild.nodeValue + '\<br>'
                    }

                document.getElementById('info-g').innerHTML = grade_out	


            }

            else alert('Ajax error: No data received')
        }

        else alert( 'Ajax error: ' + this.statusText)
    }


};


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
			request = new ActiveXObject('Msxml2.XMLHTTP')
		}
		catch(e2)
		{
			try
			{
				request = new ActiveXObject('Microsoft.XMLHTTP')
			}
			catch(e3)
			{
				request = false
			}
		}
	}
	return request
};

