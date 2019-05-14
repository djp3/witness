"""witnessWebsite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

# imports for pre-built bootstrap html pages
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

#my imports 
from pages.views import * #all view pages

urlpatterns = [
	path('', home_view, name='home'),
	path('url/', url_view, name='url'),
	path('credits/', credits_view, name='credits'),
    path('admin/', admin.site.urls),
]

# some balck magic for getting satic files to work!
urlpatterns += staticfiles_urlpatterns()