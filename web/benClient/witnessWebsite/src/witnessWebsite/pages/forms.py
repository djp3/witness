from django import forms
from django.core.validators import URLValidator
from django.core.exceptions import ValidationError

# form feild for submitting image url's

#def validate_url(value):
#	url_validator = URLValidator
#	try:
#		url_validator(value)
#	except:
#		raise ValidationError("Invalid URL")
#	return value

# Form used on the home page and url page. askes user for a url and varifies it with exceptions
class SubmitUrlForm(forms.Form):
	url = forms.CharField(label = 'Submit URL') #validators = [validate_url]


	#cleans up user input
	def clean(self):
		cleaned_data = super(SubmitUrlForm, self).clean()
		url = cleaned_data.get('url')
	

	#checks if input is a real url
	def clean_url(self):
		url = self.cleaned_data['url']
		
		url_validator = URLValidator()
		try:
			url_validator(url)
		except:
			raise forms.ValidationError("Invalid URL")
		return url