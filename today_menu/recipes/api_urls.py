
from django.conf.urls import include, url

from .api import *

urlpatterns = [
    url(r'^all/', All.as_view(), name='all'),
    url(r'^save/', Save.as_view(), name='save'),
]