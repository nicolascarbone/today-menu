
from django.conf.urls import include, url
from .views import AdminsHome

urlpatterns = [
    url(r'^home/$', AdminsHome.as_view(), name='home')
]
