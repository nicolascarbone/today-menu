
from django.shortcuts import redirect
from django.views.generic.edit import FormView
from django.views.generic.base import TemplateView, RedirectView
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm


class AdminsHome(TemplateView):
  template_name = 'administrators/home.html'