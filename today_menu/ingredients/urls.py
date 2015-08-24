
from django.conf.urls import include, url

from .views import IngredientsListView
from . import api_urls

urlpatterns = [
    url(r'^list/$', IngredientsListView.as_view(), name='list'),

    url(r'^api/', include(api_urls), name='api'),
]
