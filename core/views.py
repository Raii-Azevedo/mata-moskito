from django.views.generic import TemplateView


class IndexView(TemplateView):
    template_name = 'index.html'


class App(TemplateView):
    template_name = 'app.html'


class GameOver(TemplateView):
    template_name = 'game-over.html'


class Win(TemplateView):
    template_name = 'win.html'
