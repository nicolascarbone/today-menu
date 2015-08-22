
from django.shortcuts import redirect
from django.views.generic.edit import FormView
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm


class LoginView(FormView):
    template_name = 'login.html'
    form_class = AuthenticationForm

    def form_valid(self, form):
      print(form.cleaned_data)
      username = form.cleaned_data['username']
      password = form.cleaned_data['password']
      user = authenticate(username=username, password=password)
      if user is not None:
        if user.is_active:
          login(self.request, user)
          return redirect('home:home')


      return super(LoginView, self).form_valid(form)


class SignUpView(FormView):
    template_name = 'signup_form.html'
    form_class = UserCreationForm
    #success_url = 'home:home'

    def form_valid(self, form):
      form.save()
      return super(SignUpView, self).form_valid(form)
