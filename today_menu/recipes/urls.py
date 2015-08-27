
from django.conf.urls import include, url

from .views import RecipesListView
from . import api_urls

urlpatterns = [
    url(r'^list/$', RecipesListView.as_view(), name='list'),
    url(r'^api/', include(api_urls), name='api'),
]
