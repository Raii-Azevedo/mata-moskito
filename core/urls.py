from django.urls import path, re_path
from .views import IndexView, App, GameOver, Win


urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    re_path('app', App.as_view(), name='app'),
    re_path('win', Win.as_view(), name='win'),
    re_path('game-over', GameOver.as_view(), name='game-over'),
]
