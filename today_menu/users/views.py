
from django.shortcuts import redirect
from django.views.generic.edit import FormView
from django.views.generic.base import RedirectView
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm


class LoginView(FormView):
    template_name = 'users/login.html'
    form_class = AuthenticationForm

    def form_valid(self, form):
      username = form.cleaned_data['username']
      password = form.cleaned_data['password']
      user = authenticate(username=username, password=password)
      if user is not None:
        if user.is_active:
          login(self.request, user)
          print(user.is_superuser)
          if not user.is_superuser:
            return redirect('home:home')
          else:
            return redirect('administrators:home')

      return super(LoginView, self).form_valid(form)


class LogoutView(RedirectView):
    url = 'home:home'

    def get(self, request, *args, **kwargs):
        logout(request)
        return super(LogoutView, self).get(request, *args, **kwargs)


class SignUpView(FormView):
    template_name = 'users/signup_form.html'
    form_class = UserCreationForm
    #success_url = 'home:home'

    def form_valid(self, form):
      form.save()
      return super(SignUpView, self).form_valid(form)
