
from django.conf.urls import include, url
from .views import IngredientsListView

urlpatterns = [
    url(r'^list/$', IngredientsListView.as_view(), name='list'),
]
