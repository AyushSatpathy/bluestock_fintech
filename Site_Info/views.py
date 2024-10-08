# views.py

from rest_framework import generics
from .models import IPO
from .serializers import IPOSerializer

class IPOListView(generics.ListAPIView):
    queryset = IPO.objects.all()
    serializer_class = IPOSerializer
