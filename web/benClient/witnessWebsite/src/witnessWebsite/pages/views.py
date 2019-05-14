from django.shortcuts import render

# view of home page
def home_view(request, *args, **kwargs):
	print (args, kwargs)
	print (request.user)

	my_context = {
		"title": "This is about us",
		"this_is_true": True,
		"my_number": 123,
		"my_list": [123,4242, 312, 1234342, "ABC"],
		"my_html": "<h1>Hello World</h1>"
		}

	return render(request, "home.html", my_context)

from django.shortcuts import render

# view of credits page
def credits_view(request, *args, **kwargs):
	print (args, kwargs)
	print (request.user)
	
	return render(request, "credits.html", {})

def url_view(request, *args, **kwargs):
	print (args, kwargs)
	print (request.user)
	
	return render(request, "url.html", {})