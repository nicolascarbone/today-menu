
from django.conf.urls import include, url

from .api import *

urlpatterns = [
    url(r'^all/', GetAll.as_view(), name='all'),
]
