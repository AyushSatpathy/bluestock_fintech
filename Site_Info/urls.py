# urls.py

from django.urls import path
from .views import IPOListView

urlpatterns = [
    path('api/ipos/', IPOListView.as_view(), name='ipo-list'),
]
